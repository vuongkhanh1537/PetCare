import React, { useState } from 'react'
import { Box, Button, Checkbox, Input } from '@mui/material';
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
      borderBottom="1px solid "> 
        <Checkbox/>
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
    const {productName, unitPrice, totalPrice } = props;
    const [quantity, setQuantity] = useState(1); 

    const handleIncrement = () => {
      setQuantity(quantity + 1);
    };
  
    const handleDecrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  return (<>
    <Box 
      width="100%"
      marginTop="10px"
      p="0 20px 15px 20px"
      display="flex"
      height="fit-content"
      justifyContent="space-between"> 
        <Checkbox/>
        <Box 
            width="30%">{props.productName}</Box>
        <Box>₫{unitPrice}</Box>
        <Box width="14%" display="flex" height="fit-content">
            <button className="input-group-text" type="button" onClick={handleDecrement}>-</button>
            <input className="form-control" value={quantity} readOnly />
            <button className="input-group-text" type="button" onClick={handleIncrement}>+</button>
        </Box>
        <Box>₫{totalPrice}</Box>
        <Box>
        <IconButton aria-label="delete" color="error">
            <DeleteOutlineOutlinedIcon />
        </IconButton>
        </Box>
    </Box>
  </>)
}
