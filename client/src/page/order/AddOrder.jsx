import React from 'react'
import Header from '../../components/Header';
import { Box, ListItem, ListItemButton, ListItemText, List } from '@mui/material';
import { ProductItem, ProductBar } from '../../components/ProductItem';
import { FixedSizeList } from 'react-window';


const AddOrder = () => {
  const mockData = [
    {
      productName: "abc",
      unitPrice: 100000,
      totalPrice: 2100000
    },
    {
      productName: "zy",
      unitPrice: 100000,
      totalPrice: 2000000
    },
    {
      productName: "ac",
      unitPrice: 100000,
      totalPrice: 2000000
    },
    {
      productName: "bc",
      unitPrice: 100000,
      totalPrice: 2000000
    },
    {
      productName: "bc",
      unitPrice: 100000,
      totalPrice: 2000000
    },
    {
      productName: "bc",
      unitPrice: 100000,
      totalPrice: 2000000
    }
  ];
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
        gridColumn="span 9"
        gridRow="span 4"
        border="1px solid"> 
          <ProductBar />
          <List
            sx={{
              width: '100%',
              height: '80%',
              overflow: 'auto',
            }}
          >
            {mockData.map(value => (
              <ListItem key = {value}> 
                <ProductItem {...value} />
              </ListItem>
            ))}
          </List>
      </Box>
      <Box
        gridColumn="span 3" border="1px solid"
        gridRow="span 4" >
          Nhân viên phụ trách
      </Box>
      <Box
        gridColumn="span 9" border="1px solid"
        gridRow="span 3">
        Danh sách sản phẩm
      </Box>
      <Box
        gridColumn="span 3" border="1px solid"
        gridRow="span 3" >
          Thành tiền và thanh toán
      </Box>
    </Box>
  </main>
  )
}

export default AddOrder;
