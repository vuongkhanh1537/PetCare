import React, { useState } from "react";
import { Box } from "@mui/material";
import { toast } from "react-toastify";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { addEmployee } from "../../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header"

const AddEmployee = () => {

    const [newEmployee, setNewEmployee] = useState({
        pos: "doctor",
        cccd:"",
        place:"",
        date:"",
        sex :"",
        phoneNum:"",
        firstName:"",
        lastName:"",
        address:"",
        role:"employee"
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNewEmployee((prev) => {
            return {...prev, [name] : value}
        })
    }

    
    const navigate = useNavigate();
    const handleClick = async () => {
        console.log(newEmployee);
        let res = await addEmployee(newEmployee);
        toast.success("Đã thêm thành công một nhân viên");
        setTimeout(() => {
            navigate("/nhan_vien");
        }, 3000);
    }

    return(
            <main className="content">  
                <Box m = "0 30px 10px 30px">
                    <Header title="Nhân viên" subtitle="Thêm nhân viên"/>
                    <Box 
                        ml = "20px"
                        sx={{ height: "fit-content", width: '90%'}}>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                            <Form.Label>Họ</Form.Label>
                            <Form.Control type="text" placeholder="Nhập họ" name="firstName" onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group as={Col} >
                            <Form.Label>Tên</Form.Label>
                            <Form.Control type="text" placeholder="Nhập tên" name="lastName" onChange={handleChange}/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Nhập Email" name="email" onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group as={Col} >
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control type="phone" placeholder="Nhập số điện thoại" name="phoneNum" onChange={handleChange}/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} >
                            <Form.Label>CCCD</Form.Label>
                            <Form.Control type="text" placeholder="Nhập CCCD" name="cccd" onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group as={Col} >
                            <Form.Label>Ngày cấp</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="DateRange"
                                name="date"
                                onChange={handleChange}
                            />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} >
                            <Form.Label>Nơi cấp</Form.Label>
                            <Form.Control type="text" placeholder="Nhập nơi cấp" name="place" onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group as={Col} >
                            <Form.Label>Địa chỉ hiện tại</Form.Label>
                            <Form.Control type="address" placeholder="Nhập địa chỉ" name="address" onChange={handleChange}/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} >
                            <Form.Label>Ngày sinh</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="DateRange"
                                name="bdate"
                                onChange={handleChange}
                            />
                            </Form.Group>

                            <Form.Group as={Col} >
                            <Form.Label>Giới tính</Form.Label>
                            <Form.Check
                                label="Nam"
                                name="sex"
                                type="radio"
                                value="Male"
                                onChange={handleChange}
                            />
                            <Form.Check
                                label="Nữ"
                                name="sex"
                                type="radio"
                                value="Female"
                                onChange={handleChange}
                            />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} >
                            <Form.Label>Mã nhân viên</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Mã nhân viên" 
                                disabled />
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label>Chức vụ</Form.Label>
                                <Form.Select
                                    name="pos" 
                                    defaultValue="Chọn chức vụ"
                                    onChange={handleChange}
                                >
                                    <option>Chọn chức vụ</option>
                                    <option>Bác sĩ</option>
                                    <option>Saler</option>
                                    <option>Quản lý</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        <Button variant="primary float-end" onClick={handleClick}>
                            Lưu
                        </Button>
                    </Form>
                    </Box>
                </Box>
            </main>
    )
}

export default AddEmployee;