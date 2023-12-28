import React, { useState } from "react";
import { Box } from "@mui/material";
import { toast } from "react-toastify";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { addEmployee } from "../../services/EmployeeService";
import { useNavigate, useOutletContext } from "react-router-dom";
import Header from "../../components/Header"
import { gridRowMaximumTreeDepthSelector } from "@mui/x-data-grid";

const AddEmployee = () => {
    const navigate = useNavigate();
    const [top, setTop] = useOutletContext();
    const [newEmployee, setNewEmployee] = useState({
        cccd:"",
        email:"",
        place:"",
        date:"",
        sex :"",
        phoneNum:"",
        firstName:"",
        lastName:"",
        address:"",
        bdate:""
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNewEmployee((prev) => {
            return {...prev, [name] : value}
        })
    }

    function isValidEmail(email) {
        // Biểu thức chính quy kiểm tra định dạng email
        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
        // Kiểm tra chuỗi email với biểu thức chính quy
        return emailRegex.test(email);
    }

    const validate = () => {
        let check = true;
        if (newEmployee.firstName === "" || newEmployee.lastName === "") {
            toast.error("Vui lòng nhập đầy đủ họ tên");
            check = false;
        }
        if (newEmployee.email === "") {
            toast.error("Vui lòng nhập email");
            check = false;
        } else if (!isValidEmail(newEmployee.email)) {
            toast.warning("Sai định dạng email");
            check = false;
        }
        if (newEmployee.cccd === "") {
            toast.error("Vui lòng nhập CCCD");
            check = false;
        } else if (newEmployee.cccd.length !== 12) {
            toast.warning("Sai định dạng CCCD");
            check = false;
        }
        if (newEmployee.phoneNum === "") {
            toast.error("Vui lòng nhập số điện thoại");
            check = false;
        }
        if (newEmployee.date === "") {
            toast.error("Vui lòng chọn ngày cấp");
            check = false;
        }
        if (newEmployee.place === "") {
            toast.error("Vui lòng chọn nơi cấp");
            check = false;
        }
        if (newEmployee.bdate === "") {
            toast.error("Vui lòng chọn ngày sinh");
            check = false;
        }
        if (newEmployee.sex === "") {
            toast.error("Vui lòng chọn giới tính");
            check = false;
        }
        return check;
    }
    const handleClick = async () => {
        // console.log(newEmployee);
        // console.log(validate());
        if (validate()) {
            try {
                let res = await addEmployee(newEmployee);
                if (res && res.status === 400) {
                    toast.error("CCCD đã tồn tại");
                } else {
                    toast.success("Đã thêm thành công một nhân viên");
                    setTimeout(() => {
                        navigate("/nhan_vien");
                    }, 3000);
                    setTop(true);
                }
            } catch (err) {
                console.log(err);
            }
        }
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
                            <Form.Label className="required-field">Họ</Form.Label>
                            <Form.Control type="text" placeholder="Nhập họ" name="firstName" onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group as={Col} >
                            <Form.Label className="required-field">Tên</Form.Label>
                            <Form.Control type="text" placeholder="Nhập tên" name="lastName" onChange={handleChange}/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} >
                            <Form.Label className="required-field">Email</Form.Label>
                            <Form.Control type="email" placeholder="Nhập Email" name="email" onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group as={Col} >
                            <Form.Label className="required-field">Số điện thoại</Form.Label>
                            <Form.Control type="phone" placeholder="Nhập số điện thoại" name="phoneNum" onChange={handleChange}/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} >
                            <Form.Label className="required-field">CCCD</Form.Label>
                            <Form.Control type="text" placeholder="Nhập CCCD" maxLength={12} name="cccd" onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group as={Col} >
                            <Form.Label className="required-field">Ngày cấp</Form.Label>
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
                            <Form.Label className="required-field">Nơi cấp</Form.Label>
                            <Form.Control type="text" placeholder="Nhập nơi cấp" name="place" onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group as={Col} >
                            <Form.Label>Địa chỉ hiện tại</Form.Label>
                            <Form.Control type="address" placeholder="Nhập địa chỉ" name="address" onChange={handleChange}/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} >
                            <Form.Label className="required-field">Ngày sinh</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="DateRange"
                                name="bdate"
                                onChange={handleChange}
                            />
                            </Form.Group>

                            <Form.Group as={Col} >
                            <Form.Label>Mã nhân viên</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Mã nhân viên" 
                                disabled />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} >
                            <Form.Label className="required-field">Giới tính</Form.Label>
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