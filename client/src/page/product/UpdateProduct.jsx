import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { fetchAnProduct, updateAnProduct } from "../../services/ProductServices";
import { toast } from "react-toastify";
import Header from "../../components/Header"


const UpdateProduct = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        let res = await fetchAnProduct(id);
        console.log(res);
        if (res && res.data) {
            setProduct(res.data);
        }
    }
    
    const [product, setProduct] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setProduct((prev) => {
            return {...prev, [name] : value}
        })
    }

    const handleClick = async () => {
        console.log(product);
        let res = await updateAnProduct(product);
        if (res) {
            toast.success("Đã cập nhật một sản phẩm");
            setTimeout(() => {
                navigate("/san_pham");
            }, 3000);
        }
    }

    return(
        <main className="content">
            <Box m = "0 30px 10px 30px">
                <Header title="Sản phẩm" subtitle="Chi tiết sản phẩm"/>
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
                            value={product.productName}
                            onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col}>
                        <Form.Label>Mã sản phẩm</Form.Label>
                        <Form.Control 
                            placeholder="Mã sản phẩm" 
                            value={product.productId}
                            disabled />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Label>Nhà cung cấp</Form.Label>
                            <Form.Select  
                                name="supplier" 
                                value={product.supplier}
                                onChange={handleChange}>
                                    <option>Chọn nhà cung cấp</option>
                                    <option>Royal Canin</option>
                                    <option>Bioline</option>
                                    <option>Cannin</option>
                            </Form.Select>
                        </Form.Group>
                    
                        <Form.Group as={Col} >
                            <Form.Label>Dành cho thú cưng</Form.Label>
                            <Form.Select  
                                name="petType"
                                value={product.petType} 
                                onChange={handleChange}>
                                    <option>Chọn thú cưng</option>
                                    <option>Chó</option>
                                    <option>Mèo</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Label>Loại</Form.Label>
                            <Form.Select 
                                name="category"
                                value={product.category} 
                                onChange={handleChange}>
                                    <option>Chọn loại</option>
                                    <option>Nhà ở</option>
                                    <option>Đồ chơi</option>
                                    <option>Thực phẩm</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} >
                        <Form.Label>Phân loại</Form.Label>
                        <Form.Control
                            name="subCategory" 
                            value={product.subCategory}
                            onChange={handleChange}>
                        </Form.Control>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} >
                        <Form.Label>Giá sản phẩm</Form.Label>
                        <Form.Control 
                            type="number"
                            placeholder="Nhập giá sản phẩm" 
                            name="cost" 
                            value={product.cost}
                            onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col} >
                        <Form.Label>Số lượng</Form.Label>
                        <Form.Control 
                            type="number"
                            placeholder="Nhập số lượng" 
                            name="quantity" 
                            value={product.quantity}
                            onChange={handleChange}/>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" >
                    <Form.Label>Mô tả</Form.Label>
                    <Form.Control as="textarea" rows={8} name="description" value={product.description} onChange={handleChange}/>
                    </Form.Group>

                    <Button variant="primary float-end" onClick={handleClick}>
                        Cập nhật
                    </Button>
                </Form>
                </Box>
            </Box>
        </main>
    )
}

export default UpdateProduct;