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
        <Box width="5%">ID</Box>
        <Box width="40%">Tên sản phẩm</Box>
        <Box width="20%" textAlign="center">Đơn giá</Box>
        <Box width="15%" textAlign="center">
            Số lượng
        </Box>
        <Box width="15%" textAlign="center">Thành tiền</Box>
        <Box width="5%">
            Thao tác
        </Box>
    </Box>
    )
}
export const ProductItem = (props) => {
    let {productId, productName, quantity, cost, amount, totalPrice, updateOrderItem, deleteOrderItem}= props;

    const handleIncrement = () => {
      if (amount < quantity) {
        ++amount;
        updateOrderItem(productId, amount, cost * amount);
      }
    };
  
    const handleDecrement = () => {
      if (amount > 1) {
        --amount;
        updateOrderItem(productId, amount, cost * amount);
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
        <Box width="5%">{productId}</Box>
        <Box 
            width="40%">{productName}</Box>
        <Box width="20%" textAlign="center">₫{cost}</Box>
        <Box width="15%" display="flex" height="fit-content">
            <button className="input-group-text" type="button" onClick={handleDecrement}>-</button>
            <input className="form-control" value={amount} readOnly />
            <button className="input-group-text" type="button" onClick={handleIncrement}>+</button>
        </Box>
        <Box width="15%" textAlign="center">₫{totalPrice}</Box>
        <Box width="5%" textAlign="center">
        <IconButton aria-label="delete" color="error" onClick={handleDeleteClick}>
            <DeleteOutlineOutlinedIcon />
        </IconButton>
        </Box>
    </Box>
  </>)
}

export const OnlyReadProductBar = () => {
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
        <Box width="5%">ID</Box>
        <Box width="40%">Tên sản phẩm</Box>
        <Box width="20%" textAlign="center">Đơn giá</Box>
        <Box width="15%" display="block" height="fit-content" textAlign="center">
            Số lượng
        </Box>
        <Box width="20%" textAlign="center">Thành tiền</Box>
    </Box>
    )
}

export const OnlyReadProductItem = (props) => {
  let {productId, productName, cost, amount, totalPrice} = props;
  return (<>
    <Box 
      width="100%"
      marginTop="10px"
      p="0 20px 15px 20px"
      display="flex"
      height="fit-content"
      justifyContent="space-between"
      borderBottom="1px solid #cecece"> 
        <Box width="5%" >{productId}</Box>
        <Box 
            width="40%" >{productName}</Box>
        <Box width="20%" textAlign="center">₫{cost}</Box>
        <Box width="15%" textAlign="center">
            {amount}
        </Box>
        <Box width="20%" textAlign="center">₫{totalPrice}</Box>
    </Box>
  </>)
}
