import React, { useState } from "react";
import { Box } from "@mui/material";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Header from "../../components/Header";
import Sidebar from "../../components/global/Sidebar";
import Topbar from "../../components/global/Topbar";

const AddEmployee = () => {

    const [newEmployee, setNewEmployee] = useState({
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
        setNewEmployee((prev) => {
            return {...prev, [name] : value}
        })
    }


    const handleClick = () => {
        console.log(newEmployee);
    }

    return(
        <div className="app">
            <Sidebar site="Nhân viên" />
            <main className="content">
                <Topbar />
                <Box m = "0 30px 10px 30px">
                    <Header title="Nhân viên" subtitle="Thêm nhân viên"/>
                    <Box 
                        ml = "20px"
                        sx={{ height: "fit-content", width: '90%'}}>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Họ</Form.Label>
                            <Form.Control type="text" placeholder="Nhập tên sản phẩm" name="productName" onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridID">
                            <Form.Label>Tên</Form.Label>
                            <Form.Control type="text" placeholder="Mã sản phẩm" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Nhập tên sản phẩm" name="productName" onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridID">
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control type="phone" placeholder="Mã sản phẩm" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>CCCD</Form.Label>
                            <Form.Control type="text" placeholder="Nhập tên sản phẩm" name="productName" onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridID">
                            <Form.Label>Ngày cấp</Form.Label>
                            <Form.Control
                                type="date"
                                name="datepic"
                                placeholder="DateRange"
                            />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Nơi cấp</Form.Label>
                            <Form.Control type="text" placeholder="Nhập tên sản phẩm" name="productName" onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridID">
                            <Form.Label>Địa chỉ hiện tại</Form.Label>
                            <Form.Control type="address" placeholder="Mã sản phẩm" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Ngày sinh</Form.Label>
                            <Form.Control
                                type="date"
                                name="datepic"
                                placeholder="DateRange"
                            />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridID">
                            <Form.Label>Giới tính</Form.Label>
                            <Form.Check 
                                type="radio"
                                label="Nam"
                            />
                            <Form.Check 
                                type="radio"
                                label="Nữ"
                            />
                            </Form.Group>
                        </Row>

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

export default AddEmployee;