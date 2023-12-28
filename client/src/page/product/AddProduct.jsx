import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { toast } from "react-toastify";
import { useNavigate, useOutletContext } from "react-router-dom";
import Header from "../../components/Header"
import { addProduct, fetchAllCategories, fetchAllPetType, fetchAllProviders } from "../../services/ProductServices"

const AddProduct = () => {
    const navigate = useNavigate();
    const [top, setTop] = useOutletContext();
    const [providers, setProviders] = useState([]);
    const [petType, setPetType] = useState([]);
    const [categories, setCategories] = useState([]);
    const [newProduct, setNewProduct] = useState({
        productName: "",
        provider: "",
        type1: "",
        cost: "",
        quantity: 0,
        type2: "",
    });

    useEffect(() => {
        getProviders();
        getPetType();
        getCategories();
    }, []);

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

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNewProduct((prev) => {
            return {...prev, [name] : value}
        })
    }

    const validate = () => {
        let check = true;
        if (newProduct.productName === "") {
            toast.error("Vui lòng nhập tên sản phẩm");
            check = false;
        }
        if (newProduct.provider === "") {
            toast.error("Vui lòng chọn nhà cung cấp");
            check = false;
        }
        if (newProduct.type1 === "") {
            toast.error("Vui lòng chọn sản phẩm dành cho thú cưng");
            check = false;
        }
        if (newProduct.cost === "") {
            toast.error("Vui lòng nhập giá sản phẩm");
            check = false;
        } else if (newProduct.cost <= 0) {
            toast.warning("Kiểm tra giá thành sản phẩm")
            check = false;
        }
        if (newProduct.quantity === "") {
            toast.error("Vui lòng nhập số lượng sản phẩm");
            check = false;
        } else if (newProduct.quantity < 0) {
            toast.warning("Kiểm tra số lượng sản phẩm");
            check = false;
        }
        if (newProduct.type2 === "") {
            toast.error("Vui lòng chọn loại sản phẩm");
            check = false;
        }
        return check;
    }

    const handleClick = async () => {
        // console.log(newProduct);
        try {
            if (validate()) {
                let res = await addProduct(newProduct);
                if (res) {
                    toast.success("Đã thêm thành công sản phẩm mới")
                    setTimeout(() => {
                        navigate("/san_pham");
                    }, 3000);
                    setTop(true);
                }
            }
        } catch (err) {
            toast.error("Quá trình thêm sản phẩm đã xảy ra lỗi");
        }
        // console.log(res);
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
                        <Form.Label className="required-field">Tên sản phẩm</Form.Label>
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
                            <Form.Label className="required-field">Nhà cung cấp</Form.Label>
                            <Form.Select 
                                defaultValue="Chọn nhà cung cấp" 
                                name="provider" 
                                onChange={handleChange}>
                                    <option disabled>Chọn nhà cung cấp</option>
                                    {providers.map((item, index)=>{return(<option key={index}>{item}</option>)})}
                            </Form.Select>
                        </Form.Group>
                    
                        <Form.Group as={Col} >
                            <Form.Label className="required-field">Dành cho thú cưng</Form.Label>
                            <Form.Select defaultValue="Chọn thú cưng" name="type1" onChange={handleChange}>
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
                            onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col} >
                        <Form.Label className="required-field">Số lượng</Form.Label>
                        <Form.Control 
                            min={0}
                            defaultValue={0}
                            type="number"
                            placeholder="Nhập số lượng" 
                            name="quantity" 
                            onChange={handleChange}/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Label className="required-field">Loại</Form.Label>
                            <Form.Select defaultValue="Chọn loại" name="type2" onChange={handleChange}>
                                <option disabled>Chọn loại</option>
                                {categories.map((item, index)=>{return(<option key={index}>{item}</option>)})} 
                            </Form.Select>
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