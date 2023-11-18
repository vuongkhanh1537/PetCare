import { Box } from "@mui/material";
import Header from "../../components/Header";
import Sidebar from "../../components/global/Sidebar";
import Topbar from "../../components/global/Topbar";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ImageUploading from 'react-images-uploading';
import React, { useState } from "react";

const AddProduct = () => {
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
  
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };

    const [newProduct, setNewProduct] = useState({
        "productName" : "",
        "supplier" : ""
    });

    const handleChange = (e) => {
        setNewProduct({...values, productName : })
        console.log(e.target);
    }

    return(
        <div className="app">
            <Sidebar site="Sản phẩm" />
            <main className="content">
                <Topbar />
                <Box m = "0 30px 10px 30px">
                    <Header title="Thêm sản phẩm" />
                    <Box 
                        ml = "20px"
                        sx={{ height: "fit-content", width: '90%'}}>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Tên sản phẩm</Form.Label>
                            <Form.Control type="text" placeholder="Nhập tên sản phẩm" name="productName" value={newProduct.productName} onChange={handleChange}/>
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
                                <Form.Select defaultValue="Chọn loại">
                                    <option>Chọn loại</option>
                                    <option>Nhà ở</option>
                                    <option>Đồ chơi</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Giá sản phẩm</Form.Label>
                            <Form.Control placeholder="Nhập giá sản phẩm"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Phân loại</Form.Label>
                            <Form.Select defaultValue="Chọn phân loại">
                                <option>Chọn phân loại</option>
                                <option>...</option>
                            </Form.Select>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridDescription">
                        <Form.Label>Mô tả</Form.Label>
                        <Form.Control as="textarea" rows={8}/>
                        </Form.Group>


                        <Form.Group className="mb-3" id="formGridCheckbox">
                        <ImageUploading
                            multiple
                            value={images}
                            onChange={onChange}
                            maxNumber={maxNumber}
                            dataURLKey="data_url"
                        >
                            {({
                            imageList,
                            onImageUpload,
                            onImageRemoveAll,
                            onImageUpdate,
                            onImageRemove,
                            isDragging,
                            dragProps,
                            }) => (
                            // write your building UI
                            <div className="upload__image-wrapper">
                                <button
                                style={isDragging ? { color: 'red' } : undefined}
                                onClick={onImageUpload}
                                {...dragProps}
                                >
                                Click or Drop here
                                </button>
                                &nbsp;
                                <button onClick={onImageRemoveAll}>Remove all images</button>
                                {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                    <img src={image['data_url']} alt="" width="100" />
                                    <div className="image-item__btn-wrapper">
                                    <button onClick={() => onImageUpdate(index)}>Update</button>
                                    <button onClick={() => onImageRemove(index)}>Remove</button>
                                    </div>
                                </div>
                                ))}
                            </div>
                            )}
                        </ImageUploading>
                        </Form.Group>

                        <Button variant="primary float-end" type="submit">
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