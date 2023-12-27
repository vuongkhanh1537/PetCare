import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { fetchAnProduct, updateAnProduct, fetchAllPetType, fetchAllCategories, fetchAllProviders } from "../../services/ProductServices";
import { toast } from "react-toastify";
import Header from "../../components/Header"


const UpdateProduct = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [changed, setChanged] = useState(false);
    const [providers, setProviders] = useState([]);
    const [petType, setPetType] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getProduct();
        getPetType();
        getCategories();
        getProviders();
    }, []);

    const getProduct = async () => {
        let res = await fetchAnProduct(id);
        // console.log(res);
        if (res && res.data) {
            setProduct(res.data);
        }
    }

    const getProviders = async () => {
        try {
            let res = await fetchAllProviders();
            if (res && res.data) {
                setProviders(res.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const getPetType = async () => {
        try {
            let res = await fetchAllPetType();
            if (res && res.data) {
                setPetType(res.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const getCategories = async () => {
        try {
            let res = await fetchAllCategories();
            if (res && res.data) {
                setCategories(res.data);
            }
        } catch (err) {
            console.log(err);
        }
    }
    
    const [product, setProduct] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setChanged(true);
        setProduct((prev) => {
            return {...prev, [name] : value}
        })
    }

    const validate = () => {
        let check = true;
        if (product.productName === "") {
            toast.error("Vui lòng nhập tên sản phẩm");
            check = false;
        }
        if (product.provider === "") {
            toast.error("Vui lòng chọn nhà cung cấp");
            check = false;
        }
        if (product.type1 === "") {
            toast.error("Vui lòng chọn sản phẩm dành cho thú cưng");
            check = false;
        }
        if (product.cost === "") {
            toast.error("Vui lòng nhập giá sản phẩm");
            check = false;
        } else if (product.cost <= 0) {
            toast.warning("Kiểm tra giá thành sản phẩm")
            check = false;
        }
        if (product.quantity === "") {
            toast.error("Vui lòng nhập số lượng sản phẩm");
        } else if (product.quantity < 0) {
            toast.warning("Kiểm tra số lượng sản phẩm");
            check = false;
        }
        if (product.type2 === "") {
            toast.error("Vui lòng chọn loại sản phẩm");
            check = false;
        }
        return check;
    }

    const handleClick = async () => {
        // console.log(product);
        if (validate()) {
            let res = await updateAnProduct(product);
            if (res) {
                toast.success("Đã cập nhật một sản phẩm");
                setTimeout(() => {
                    navigate("/san_pham");
                }, 3000);
            }
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
                        <Form.Label className="required-field">Tên sản phẩm</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Nhập tên sản phẩm" 
                            name="productName" 
                            value={product.productName}
                            onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col}>
                        <Form.Label >Mã sản phẩm</Form.Label>
                        <Form.Control 
                            placeholder="Mã sản phẩm" 
                            value={product.productId}
                            disabled />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Label className="required-field">Nhà cung cấp</Form.Label>
                            <Form.Select  
                                name="provider" 
                                value={product.provider}
                                onChange={handleChange}>
                                    <option disabled>Chọn nhà cung cấp</option>
                                    {providers.map((item, index)=>{return(<option key={index}>{item}</option>)})}
                            </Form.Select>
                        </Form.Group>
                    
                        <Form.Group as={Col} >
                            <Form.Label className="required-field">Dành cho thú cưng</Form.Label>
                            <Form.Select  
                                name="type1"
                                value={product.type1} 
                                onChange={handleChange}>
                                    <option disabled>Chọn thú cưng</option>
                                    {petType.map((item, index)=>{return(<option key={index}>{item}</option>)})}
                            </Form.Select>
                        </Form.Group>
                    </Row>


                    <Row className="mb-3">
                        <Form.Group as={Col} >
                        <Form.Label className="required-field">Giá sản phẩm</Form.Label>
                        <Form.Control 
                            type="number"
                            placeholder="Nhập giá sản phẩm" 
                            name="cost" 
                            value={product.cost}
                            onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col} >
                        <Form.Label className="required-field">Số lượng</Form.Label>
                        <Form.Control 
                            type="number"
                            placeholder="Nhập số lượng" 
                            name="quantity" 
                            min={0}
                            value={product.quantity}
                            onChange={handleChange}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Label className="required-field">Loại</Form.Label>
                            <Form.Select 
                                name="type2"
                                value={product.type2} 
                                onChange={handleChange}>
                                    <option disabled>Chọn loại</option>
                                    <option>Lồng</option>
                                    <option>Rọ mõm</option>
                                    <option>Đồ chơi</option>
                                    <option>Thức ăn</option>
                                    <option>Khay đựng thức ăn</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" >
                    <Form.Label>Mô tả</Form.Label>
                    <Form.Control as="textarea" rows={8} name="description" value={product.description} onChange={handleChange}/>
                    </Form.Group>

                    <Button 
                      variant="primary float-end" 
                      onClick={handleClick}
                      disabled={changed === false}>
                        Cập nhật
                    </Button>
                </Form>
                </Box>
            </Box>
        </main>
    )
}

export default UpdateProduct;