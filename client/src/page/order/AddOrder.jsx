import React, {useEffect, useState} from 'react'
import Header from '../../components/Header';
import { Box, ListItem, List } from '@mui/material';
import { ProductItem, ProductBar } from '../../components/ProductItem';
import ProductList from '../../components/ProductList';
import Button from 'react-bootstrap/esm/Button';
import ChargedStaff from '../../components/ChargedStaff';
import { toast } from "react-toastify";

const AddOrder = () => {
  const [orderList, setOrderList] = useState([]);
  const [totalBill, setTotalBill] = useState(0);
  const [personName, setPersonName] = useState({id: 0, name:""});
  const addItem = (data) => {
    console.log(data);
    let contains = orderList.find(obj => obj.product.productId === data.productId);
    if (contains) {return;}
    const newItem = {
      product: data,
      amount: 1,
      totalPrice: data.cost,
    }
    setOrderList([
      ...orderList,
      newItem,
    ]);
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

  const handleAddBillClick = () => {
    if (orderList.length === 0) {
      toast.error("Vui lòng nhập thông tin đơn hàng");
    }
    if (personName.id === 0) {
      toast.error("Vui lòng chọn nhân viên phụ trách");
    }
    const data = orderList.map(item => ({productId: item.product.productId, amount: item.amount}))
    const id = personName.id;
    console.log(data);
    console.log(personName);
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
                  updateOrderItem= {updateOrderItem}
                  deleteOrderItem= {deleteOrderItem}/>
              </ListItem>
            ))}
          </List>
      </Box>
      {/* <Box
        gridColumn="span 3" border="1px solid"
        gridRow="span 4" >
          
          
      </Box> */}
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
          <ChargedStaff 
            personName = {personName}
            setPersonName = {setPersonName}/>
          <h4>Thành tiền: ₫{totalBill}</h4>
          <Box
            display="flex" 
            flexDirection="column"
            justifyContent="space-between"
            rowGap={1}>
            <Button variant='primary' onClick={handleAddBillClick}>Lưu đơn hàng</Button>
            <Button variant='warning' onClick={handleAddBillClick}>Lưu và thanh toán đơn hàng</Button>
          </Box>
      </Box>
    </Box>
  </main>
  )
}

export default AddOrder;
