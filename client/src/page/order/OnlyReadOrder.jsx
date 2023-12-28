import React, {useEffect, useState} from 'react'
import Header from '../../components/Header';
import { Box, ListItem, List, TextField } from '@mui/material';
import { OnlyReadProductItem, OnlyReadProductBar } from './components/ProductItem';
import Button from 'react-bootstrap/esm/Button';
import { toast } from "react-toastify";
import { fetchAnOrder, updateOrder } from '../../services/OrderService';
import { useNavigate, useParams } from 'react-router-dom';

const OnlyReadOrder = (props) => {
  const navigate = useNavigate();
  const [orderList, setOrderList] = useState([]);
  const [detail, setDetail] = useState({});
  const [personName, setPersonName] = useState();
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
        const detail = {
            id: tmp.id,
            orderDate: tmp.orderDate,
            payDate: tmp.payDate,
            totalPrice: tmp.totalPrice,
            status: order_status[tmp.status]
        }
        setOrderList(data);
        setDetail(detail);
    }
  }

  const handleBillClick = async (e) => {
    const data = orderList.map(item => ({productId: item.product.productId, amount: item.amount}))
    const id = detail.id;
    const status = parseInt(e.target.value);
    // console.log(data, id, status);
    if (order_status[status] === detail.status) {
        navigate("/don_hang");
        return;
    }
    setLoading(true);
    let res = await updateOrder(id, status, data);
    setLoading(false);
    // console.log(res);
    if (res && res.status === 400) {
      toast.error("Sản phẩm hiện tại không đủ số lượng");
    } else {
      toast.success("Thanh toán đơn hàng thành công");
      setTimeout(() => {
        navigate("/don_hang");
      }, 3000);
    }
  }

  const isPaymentDisabled = detail.status === "Đã thanh toán" || detail.status === "Đã huỷ";
  const isConfirmedDisable = detail.status === "Đang xử lý";
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
        gridColumn="span 9"
        gridRow="span 7"
        border="1px solid"
        borderRadius={3}
        margin=" 0 35px"
        > 
          <OnlyReadProductBar />
          <List
            sx={{
              width: '100%',
              height: '80%',
              overflow: 'auto',
            }}
          >
            {orderList.map((value, index) => (
              <ListItem key={index}> 
                <OnlyReadProductItem 
                  {...value.product} 
                  amount = {value.amount}
                  totalPrice = {value.totalPrice}
                />
              </ListItem>
            ))}
          </List>
      </Box>

      <Box
        display="flex"
        gridColumn="span 3" 
        gridRow="span 4" 
        flexDirection="column"
        margin=" 0 35px 35px 0"
        padding="10px 15px"
        border="1px solid"
        borderRadius={3}> 
        <h5 style={{ borderBottom: '1px solid #ccc', padding: '20px'  }}>Mã đơn hàng: {detail.id}</h5>
        <h5 style={{ borderBottom: '1px solid #ccc', padding: '20px'  }}>Tình trạng: {detail.status}</h5> 
        <h5 style={{ borderBottom: '1px solid #ccc', padding: '20px'  }}>Ngày tạo đơn: {detail.orderDate}</h5>
        <h5 style={{ borderBottom: '1px solid #ccc', padding: '20px'  }}>Ngày thanh toán: {(detail.payDate === null) ? "Chưa thanh toán" : detail.payDate}</h5>
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
            defaultValue="name"
            value={personName}
          />
          <h4>Thành tiền: ₫{detail.totalPrice}</h4>
          <Box
            display="flex" 
            flexDirection="column"
            justifyContent="space-between"
            rowGap={1}>
            {/* <Box
              display="flex"
              justifyContent="space-between">
                <Button 
                    variant='danger' 
                    value="4"
                    disabled={isPaymentDisabled} 
                    onClick={handleBillClick}>Huỷ đơn hàng</Button>
                <Button 
                    variant='success' 
                    value="2" 
                    disabled={isPaymentDisabled || isConfirmedDisable}
                    onClick={handleBillClick}>Xác nhận đơn</Button>
            </Box> */}

            <Button 
              variant='primary' 
              value="3" 
              disabled={isPaymentDisabled || isLoading}
              onClick={handleBillClick}>
                Thanh toán
            </Button>
          </Box>
      </Box>
    </Box>
  </main>
  )
}

export default OnlyReadOrder;