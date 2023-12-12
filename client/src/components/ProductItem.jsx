import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { IconButton } from '@mui/material';
export const ProductBar = () => {
    return (
    <Box 
      width="100%"
      marginTop="10px"
      p="0 36px 15px 36px"
      display="flex"
      height="fit-content"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px solid #cecece"
      fontWeight={700}> 
        <Box>ID</Box>
        <Box width="30%">Tên sản phẩm</Box>
        <Box textAlign="center">Đơn giá</Box>
        <Box width="14%" display="block" height="fit-content" textAlign="center">
            Số lượng
        </Box>
        <Box>Thành tiền</Box>
        <Box>
            Thao tác
        </Box>
    </Box>
    )
}
export const ProductItem = (props) => {
    let {productId, productName, quantity, cost, updateOrderItem, deleteOrderItem}= props;
    const [amount, setAmount] = useState(1); 
    const [totalPrice, setTotalPrice] = useState(cost);

    useEffect(() => {
      setTotalPrice(cost * amount);
      updateOrderItem(productId, amount, totalPrice);
    }, [amount, deleteOrderItem]);

    const handleIncrement = () => {
      if (amount < quantity) {
        setAmount(amount + 1);
      }
    };
  
    const handleDecrement = () => {
      if (amount > 1) {
        setAmount(amount - 1);
      }
    };

    const handleDeleteClick = () => {
      deleteOrderItem(productId);
    }
  return (<>
    <Box 
      width="100%"
      marginTop="10px"
      p="0 20px 15px 20px"
      display="flex"
      height="fit-content"
      justifyContent="space-between"
      borderBottom="1px solid #cecece"> 
        <Box>{productId}</Box>
        <Box 
            width="30%">{productName}</Box>
        <Box>₫{cost}</Box>
        <Box width="14%" display="flex" height="fit-content">
            <button className="input-group-text" type="button" onClick={handleDecrement}>-</button>
            <input className="form-control" value={amount} readOnly />
            <button className="input-group-text" type="button" onClick={handleIncrement}>+</button>
        </Box>
        <Box>₫{totalPrice}</Box>
        <Box>
        <IconButton aria-label="delete" color="error" onClick={handleDeleteClick}>
            <DeleteOutlineOutlinedIcon />
        </IconButton>
        </Box>
    </Box>
  </>)
}
