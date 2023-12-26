import React, {useEffect, useState} from 'react'
import Header from '../../components/Header';
import { Box, ListItem, List, TextField } from '@mui/material';
import { ProductItem, ProductBar } from './components/ProductItem';
import ProductList from './components/ProductList';
import { Button, Stack } from 'react-bootstrap/';
import { toast } from "react-toastify";
import { fetchAnOrder, updateOrder } from '../../services/OrderService';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateOrder = () => {
  const navigate = useNavigate();
  const [orderList, setOrderList] = useState([]);
  const [totalBill, setTotalBill] = useState(0);
  const [personName, setPersonName] = useState("");
  const [isLoading, setLoading] = useState(false);

  const { id } = useParams();
  const order_status = ["Đã thanh toán","Đã lưu", "Đang xử lý", "Đã thanh toán", "Đã huỷ"];

  useEffect(() => {
    getOrderInfo();
  }, []);

  const getOrderInfo = async () => {
    const res = await fetchAnOrder(id);
    if (res) {
        // console.log(res);
        let tmp = res.order;
        setPersonName(res.empName);
        const data = tmp.prodInOrder.map(item => ({
            product: item.product,
            amount: item.amount,
            totalPrice: item.totalPrice
        }));
        setOrderList(data);
    }
  }
  const addItem = (data) => {
    let index = orderList.findIndex(obj => obj.product.productId === data.productId);
    if (index !== -1) {
      setOrderList(prevOrderList => {
        return prevOrderList.map(item => {
          if (item.product.productId === data.productId) {
            return { ...item, amount: item.amount + 1, totalPrice: item.product.cost * (item.amount + 1) };
          } else {
            return item;
          }
        });
      });
    } else {
      const newItem = {
        product: data,
        amount: 1,
        totalPrice: data.cost,
      }
      setOrderList([
        ...orderList,
        newItem,
      ]);
      // console.log(orderList);
    }
  }

  const updateOrderItem = (id, amount, totalPrice) => {
    setOrderList(prevOrderList => {
      return prevOrderList.map(item => {
        if (item.product.productId === id) {
          return { ...item, amount: amount, totalPrice: totalPrice };
        } else {
          return item;
        }
      });
    });
  }

  const deleteOrderItem = (id) => {
    setOrderList(prevOrderList => {
      return prevOrderList.filter(item => item.product.productId !== id);
    });
  }

  useEffect(() => {
    setTotalBill(prevTotalBill => orderList.reduce((accumulator, currentValue) => accumulator + currentValue.totalPrice, 0));
  }, [orderList, updateOrderItem]);

  const handleBillClick = async (e) => {
    // console.log(orderList);
    if (orderList.length === 0) {
      toast.error("Vui lòng nhập thông tin đơn hàng");
      return;
    }
    const data = orderList.map(item => ({productId: item.product.productId, amount: item.amount}))
    const billId = parseInt(id);
    const status = parseInt(e.target.value);
    // console.log(data, billId, status);
    setLoading(true);
    let res = await updateOrder(billId, status, data);
    setLoading(false);
    // console.log(res);
    if (res.status === 400) {
      toast.error("Đơn hàng không đủ số lượng")
    } else {
      toast.success("Chỉnh sửa đơn hàng thành công");
      setTimeout(() => {
        navigate("/don_hang");
      }, 3000);
    }
  }

  return (
  <main className="content">  
    <Box m = "0 30px 10px 30px">
      <Header title="Thông tin đơn hàng" />
    </Box>  

    <Box 
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="100px"
      gap="20px"
      m="15px"
    >
      <Box  
        gridColumn="span 12"
        gridRow="span 4"
        border="1px solid"
        borderRadius={3}
        margin=" 0 35px"
        > 
          <ProductBar />
          <List
            sx={{
              width: '100%',
              height: '80%',
              overflow: 'auto',
            }}
          >
            {orderList.map((value, index) => (
              <ListItem key={index}> 
                <ProductItem 
                  {...value.product} 
                  amount = {value.amount}
                  totalPrice = {value.totalPrice}
                  updateOrderItem= {updateOrderItem}
                  deleteOrderItem= {deleteOrderItem}/>
              </ListItem>
            ))}
          </List>
      </Box>
   
      <Box
        gridColumn="span 9" 
        gridRow="span 3"
        border="1px solid"
        borderRadius={3}
        margin=" 0 0 0 35px"
        >
        <ProductList 
          addItem = {addItem}
        />
      </Box>
      <Box
        display="flex"
        gridColumn="span 3" 
        gridRow="span 3" 
        flexDirection="column"
        justifyContent="space-between"
        margin=" 0 35px 0 0">
          <TextField
            disabled
            id="outlined-disabled"
            label="Nhân viên"
            defaultValue="Employee name"
            value={personName}
          />
          <h4>Thành tiền: ₫{totalBill}</h4>
          <Box
            display="flex" 
            justifyContent="space-between"
            sx={{
              "& .vstack": {
                margin: "0 10px",
              },
            }}
          >
            <Stack gap={2}>
              <Button 
                variant='secondary' 
                value="1" 
                disabled={isLoading}
                onClick={handleBillClick}>Lưu đơn hàng</Button>
              <Button 
                  variant='success' 
                  value="2" 
                  disabled={isLoading}
                  onClick={handleBillClick}>Xác nhận đơn</Button>
            </Stack>
            <Stack gap={2}>
              <Button 
                variant='danger' 
                value="4"
                disabled={isLoading}
                onClick={handleBillClick}>Huỷ đơn hàng</Button>
              <Button 
                variant='primary' 
                value="3" 
                disabled={isLoading}
                onClick={handleBillClick}>Thanh toán</Button>
            </Stack>
          </Box>
      </Box>
    </Box>
  </main>
  )
}

export default UpdateOrder;
