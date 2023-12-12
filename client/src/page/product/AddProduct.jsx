import React, { useState } from "react";
import { Box } from "@mui/material";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import Topbar from "../../components/Topbar"
import { addProduct } from "../../services/ProductServices"

const AddProduct = () => {
    const navigate = useNavigate();
    const [newProduct, setNewProduct] = useState({
        productName: "",
        supplier: "",
        category: "",
        subCategory: "",
        description: "",
        petType: "",
        quantity: 0,
        cost: 0
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNewProduct((prev) => {
            return {...prev, [name] : value}
        })
    }

    const handleClick = async () => {
        console.log(newProduct);
        let res = await addProduct(newProduct);
        if (res) {
            toast.success("Đã thêm thành công sản phẩm mới")
        }
        setTimeout(() => {
            navigate("/san_pham");
        }, 3000);
    }


    return(
        <div className="content">
            <Box m = "0 30px 10px 30px">
                <Header title="Sản phẩm" subtitle="Thêm sản phẩm"/>
                <Box 
                    ml = "20px"
                    sx={{ height: "fit-content", width: '90%'}}>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} >
                        <Form.Label>Tên sản phẩm</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Nhập tên sản phẩm" 
                            name="productName" 
                            onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col}>
                        <Form.Label>Mã sản phẩm</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Mã sản phẩm" 
                            disabled />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Label>Nhà cung cấp</Form.Label>
                            <Form.Select 
                                defaultValue="Chọn nhà cung cấp" 
                                name="supplier" 
                                onChange={handleChange}>
                                    <option>Chọn nhà cung cấp</option>
                                    <option>Royal Canin</option>
                                    <option>Bioline</option>
                            </Form.Select>
                        </Form.Group>
                    
                        <Form.Group as={Col} >
                            <Form.Label>Dành cho thú cưng</Form.Label>
                            <Form.Select defaultValue="Loại thú cưng" name="petType" onChange={handleChange}>
                                <option>Chọn thú cưng</option>
                                <option>Chó</option>
                                <option>Mèo</option> 
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Label>Loại</Form.Label>
                            <Form.Select defaultValue="Chọn loại" name="category" onChange={handleChange}>
                                <option>Chọn loại</option>
                                <option>Nhà ở</option>
                                <option>Đồ chơi</option>
                                <option>Thực phẩm</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} >
                        <Form.Label>Phân loại</Form.Label>
                        <Form.Select 
                            placeholder="Nhập phân loại" 
                            name="subCategory" 
                            onChange={handleChange} />                       
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} >
                        <Form.Label>Giá sản phẩm</Form.Label>
                        <Form.Control 
                            type="number"
                            placeholder="Nhập giá sản phẩm" 
                            name="cost" 
                            onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col} >
                        <Form.Label>Số lượng</Form.Label>
                        <Form.Control 
                            type="number"
                            placeholder="Nhập số lượng" 
                            name="quantity" 
                            onChange={handleChange}/>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" >
                    <Form.Label>Mô tả</Form.Label>
                    <Form.Control as="textarea" rows={8} name="description" onChange={handleChange}/>
                    </Form.Group>

                    <Button variant="primary float-end" onClick={handleClick}>
                        Lưu
                    </Button>
                </Form>
                </Box>
            </Box>
        </div>
    )
}

export default AddProduct;