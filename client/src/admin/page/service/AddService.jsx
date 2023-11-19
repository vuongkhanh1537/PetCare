import React, { useState } from "react";
import { Box } from "@mui/material";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Header from "../../components/Header";
import Sidebar from "../../components/global/Sidebar";
import Topbar from "../../components/global/Topbar";

const AddService = () => {

    const [newService, setNewService] = useState({
        serviceName: "",
        category: "",
        price: "",
        description: "",
        time: ""
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNewService((prev) => {
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
        console.log(newService);
        console.log(image);
    }


    return(
        <div className="app">
            <Sidebar site="Dịch vụ" />
            <main className="content">
                <Topbar />
                <Box m = "0 30px 10px 30px">
                    <Header title="Dịch vụ" subtitle="Thêm dịch vụ"/>
                    <Box 
                        ml = "20px"
                        sx={{ height: "fit-content", width: '90%'}}>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Tên dịch vụ</Form.Label>
                            <Form.Control type="text" placeholder="Nhập tên dịch vụ" name="serviceName" onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridID">
                            <Form.Label>Mã dịch vụ</Form.Label>
                            <Form.Control type="text" placeholder="Mã dịch vụ" disabled={true}/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCategory">
                                <Form.Label>Loại</Form.Label>
                                <Form.Select defaultValue="Chọn loại" name="category" onChange={handleChange}>
                                    <option>Chọn loại</option>
                                    <option>Spa</option>
                                    <option>Tắm rửa</option>
                                </Form.Select>
                            </Form.Group>
                        
                            <Form.Group as={Col} controlId="formGridTime">
                                <Form.Label>Thời gian hoàn thành</Form.Label>
                                <Form.Select defaultValue="Chọn thời gian" name="time" onChange={handleChange}>
                                    <option>Chọn thời gian</option>
                                    <option>1 giờ</option>
                                    <option>2 giờ</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridDescription">
                        <Form.Label>Mô tả</Form.Label>
                        <Form.Control as="textarea" rows={8} name="description" onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridPrice">
                        <Form.Label>Giá dịch vụ</Form.Label>
                        <Form.Control type="text" name="price" onChange={handleChange}/>
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

export default AddService;