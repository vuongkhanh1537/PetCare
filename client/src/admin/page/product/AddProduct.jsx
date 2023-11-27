import React, { useState } from "react";
import { Box } from "@mui/material";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Header from "../../components/Header";
import Sidebar from "../../components/global/Sidebar";
import Topbar from "../../components/global/Topbar";

const AddProduct = () => {

    const [newProduct, setNewProduct] = useState({
        productName: "",
        supplier: "",
        category: "",
        unitPrice: "",
        subCategory: "",
        description: "",
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNewProduct((prev) => {
            return {...prev, [name] : value}
        })
    }

    const [image, setImage] = useState(null);

    const onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
        setImage(URL.createObjectURL(event.target.files[0]));
      }
    };

    const handleClick = () => {
        console.log(newProduct);
        console.log(image);
    }


    return(
        <div className="app">
            <Sidebar site="Sản phẩm" />
            <main className="content">
                <Topbar />
                <Box m = "0 30px 10px 30px">
                    <Header title="Sản phẩm" subtitle="Thêm sản phẩm"/>
                    <Box 
                        ml = "20px"
                        sx={{ height: "fit-content", width: '90%'}}>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Tên sản phẩm</Form.Label>
                            <Form.Control type="text" placeholder="Nhập tên sản phẩm" name="productName" onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridID">
                            <Form.Label>Mã sản phẩm</Form.Label>
                            <Form.Control type="text" placeholder="Mã sản phẩm" disabled={true}/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridSupplier">
                                <Form.Label>Nhà cung cấp</Form.Label>
                                <Form.Select defaultValue="Chọn nhà cung cấp" name="supplier" onChange={handleChange}>
                                    <option>Chọn nhà cung cấp</option>
                                    <option>Royal Canin</option>
                                    <option>Bioline</option>
                                </Form.Select>
                            </Form.Group>
                        
                            <Form.Group as={Col} controlId="formGridCategory">
                                <Form.Label>Loại</Form.Label>
                                <Form.Select defaultValue="Chọn loại" name="category" onChange={handleChange}>
                                    <option>Chọn loại</option>
                                    <option>Nhà ở</option>
                                    <option>Đồ chơi</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridUnitPrice">
                            <Form.Label>Giá sản phẩm</Form.Label>
                            <Form.Control placeholder="Nhập giá sản phẩm" name="unitPrice" onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridsubCategory">
                            <Form.Label>Phân loại</Form.Label>
                            <Form.Select defaultValue="Chọn phân loại" name="subCategory" onChange={handleChange}>
                                <option>Chọn phân loại</option>
                                <option>...</option>
                            </Form.Select>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridDescription">
                        <Form.Label>Mô tả</Form.Label>
                        <Form.Control as="textarea" rows={8} name="description" onChange={handleChange}/>
                        </Form.Group>


                        <Form.Group className="mb-3" id="formGridImage">
                        <Form.Label>Hình ảnh</Form.Label>
                        {/* <div>
                            <input type="file" onChange={onImageChange} className="filetype" />

                        </div> */}
                            <Form.Control type="file" onChange={onImageChange} />
                            {image && <img src={image} style={{height:"100px", width:"100px"}} alt="preview image" />}
                        </Form.Group>

                        <Button variant="primary float-end" onClick={handleClick}>
                            Lưu
                        </Button>
                    </Form>
                    </Box>
                </Box>
            </main>
        </div>
    )
}

export default AddProduct;