import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { toast } from "react-toastify";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate, useParams } from "react-router-dom";
import { fetchAnEmployee, updateAnEmployee } from "../../services/EmployeeService";
import Header from "../../components/Header"

const UpdateEmployee = () => {

    const { id } = useParams();

    useEffect(() => {
        getEmployee();
    }, [])

    const getEmployee = async () => {
        let res = await fetchAnEmployee(id);
        console.log(res);
        if (res) {
            setEmployee(res);
        }
    }

    const [employee, setEmployee] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setEmployee((prev) => {
            return {...prev, [name] : value}
        })
    }

    
    const navigate = useNavigate();
    const handleClick = async () => {
        let res = await updateAnEmployee(employee);
        console.log(employee);
        toast.success("Đã chỉnh sửa thành công thông tin nhân viên");
        setTimeout(() => {
            navigate("/nhan_vien"); 
        }, 3000);
    }

    return (
        <main className="content">
            <Box m = "0 30px 10px 30px">
                <Header title="Nhân viên" subtitle="Chi tiết nhân viên"/>
                <Box 
                    ml = "20px"
                    sx={{ height: "fit-content", width: '90%'}}>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} >
                        <Form.Label>Họ</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Nhập họ" 
                            name="firstName" 
                            value={employee.firstName} 
                            onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col} >
                        <Form.Label>Tên</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Nhập tên" 
                            name="lastName" 
                            value={employee.lastName} 
                            onChange={handleChange}/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} >
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Nhập Email" 
                            name="email" 
                            value={employee.email} 
                            onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col} >
                        <Form.Label>Số điện thoại</Form.Label>
                        <Form.Control 
                            type="phone" 
                            placeholder="Nhập số điện thoại" 
                            name="phoneNum" 
                            value={employee.phoneNum}
                            onChange={handleChange}/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} >
                        <Form.Label>CCCD</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Nhập CCCD" 
                            name="cccd" 
                            value={employee.cccd} 
                            onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col} >
                        <Form.Label>Ngày cấp</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="DateRange"
                            name="date"
                            value={employee.date}
                            onChange={handleChange}
                        />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} >
                        <Form.Label>Nơi cấp</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Nhập nơi cấp" 
                            name="place" 
                            value={employee.place} 
                            onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col} >
                        <Form.Label>Địa chỉ hiện tại</Form.Label>
                        <Form.Control 
                            type="address" 
                            placeholder="Nhập địa chỉ" 
                            name="address" 
                            value={employee.address} 
                            onChange={handleChange}/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} >
                        <Form.Label>Ngày sinh</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="DateRange"
                            name="bdate"
                            value={employee.bdate}
                            onChange={handleChange}
                        />
                        </Form.Group>

                        <Form.Group as={Col} >
                        <Form.Label>Giới tính</Form.Label>
                        <Form.Check
                            label="Nam"
                            type="radio"
                            name="sex"
                            value="Nam"
                            checked={employee.sex === "male"}
                            onChange={handleChange}
                        />
                        <Form.Check
                            label="Nữ"
                            type="radio"
                            name="Nữ"
                            value={employee.sex}
                            checked={employee.sex === "female"}
                            onChange={handleChange} 
                        />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} >
                        <Form.Label>Mã nhân viên</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Nhập họ" 
                            name="firstName" 
                            value={id} 
                            disabled />
                        </Form.Group>

                        <Form.Group as={Col} >
                            <Form.Label>Chức vụ</Form.Label>
                            <Form.Select
                                name="pos" 
                                value={employee.pos}
                                onChange={handleChange}
                            >
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

export default UpdateEmployee;