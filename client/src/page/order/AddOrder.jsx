import React, {useEffect, useState} from 'react'
import Header from '../../components/Header';
import { Box, ListItem, List } from '@mui/material';
import { ProductItem, ProductBar } from './components/ProductItem';
import ProductList from './components/ProductList';
import Button from 'react-bootstrap/esm/Button';
import ChargedStaff from './components/ChargedStaff';
import { toast } from "react-toastify";
import { addOrder } from '../../services/OrderService';
import { useNavigate } from 'react-router-dom';

const AddOrder = () => {
  const navigate = useNavigate();
  const [orderList, setOrderList] = useState([]);
  const [totalBill, setTotalBill] = useState(0);
  const [personName, setPersonName] = useState({id: 0, name:""});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("id");
    const name = localStorage.getItem("username");
    setPersonName({id: id, name: name});
    // console.log(personName);
  }, []);

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

  const handleAddBillClick = async (e) => {
    // console.log(orderList);
    if (orderList.length === 0) {
      toast.error("Vui lòng nhập thông tin đơn hàng");
      return;
    }
    if (personName.id === 0) {
      toast.error("Vui lòng chọn nhân viên phụ trách");
      return;
    }
    const data = orderList.map(item => ({productId: item.product.productId, amount: item.amount}))
    const id = personName.id;
    const status = parseInt(e.target.value);
    // console.log(data, id, status);
    setLoading(true);
    let res = await addOrder(id, status, data);
    setLoading(false);
    // console.log(res);
    if (res) {
      toast.success("Tạo đơn hàng thành công");
      setTimeout(() => {
        navigate("/don_hang");
      }, 3000);
    }
  }

  return (
  <main className="content">  
    <Box m = "0 30px 10px 30px">
      <Header title="Tạo đơn hàng" />
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
        border="1px solid #ccc"
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
        border="1px solid #ccc"
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
          <ChargedStaff 
            personName = {personName}
            setPersonName = {setPersonName}/>
          <h4>Thành tiền: ₫{totalBill}</h4>
          <Box
            display="flex" 
            flexDirection="column"
            justifyContent="space-between"
            rowGap={1}>
            <Box
              display="flex"
              justifyContent="space-between">
              <Button variant='secondary' value="1" disabled={isLoading} onClick={handleAddBillClick}>Lưu đơn hàng</Button>
              <Button variant='success' value="2" disabled={isLoading} onClick={handleAddBillClick}>Xác nhận đơn</Button>
            </Box>
           
            <Button variant='primary' value="3" disabled={isLoading} onClick={handleAddBillClick}>Thanh toán</Button>
        
          </Box>
      </Box>
    </Box>
  </main>
  )
}

export default AddOrder;
