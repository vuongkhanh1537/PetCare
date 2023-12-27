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
    const [changed, setChanged] = useState(false);

    useEffect(() => {
        getEmployee();
    }, [])

    const getEmployee = async () => {
        let res = await fetchAnEmployee(id);
        // console.log(res);
        if (res) {
            setEmployee(res);
        }
    }

    const [employee, setEmployee] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setChanged(true);
        setEmployee((prev) => {
            return {...prev, [name] : value}
        })
    }

    function isValidEmail(email) {
        // Biểu thức chính quy kiểm tra định dạng email
        var emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
        // Kiểm tra chuỗi email với biểu thức chính quy
        let check = emailRegex.test(email);
        console.log(check);
        return check;
    }

    const validate = () => {
        let check = true;
        if (employee.firstName === "" || employee.lastName === "") {
            toast.error("Vui lòng nhập đầy đủ họ tên");
            check = false;
        }
        if (employee.email === "") {
            toast.error("Vui lòng nhập email");
            check = false;
        } else if (!isValidEmail(employee.email)) {
            toast.warning("Sai định dạng email");
            check = false;
        }
        if (employee.cccd === "") {
            toast.error("Vui lòng nhập CCCD");
            check = false;
        } else if (employee.cccd.length !== 12) {
            toast.warning("Sai định dạng CCCD");
            check = false;
        }
        if (employee.phoneNum === "") {
            toast.error("Vui lòng nhập số điện thoại");
            check = false;
        }
        if (employee.date === "") {
            toast.error("Vui lòng chọn ngày cấp");
            check = false;
        }
        if (employee.place === "") {
            toast.error("Vui lòng chọn nơi cấp");
            check = false;
        }
        if (employee.bdate === "") {
            toast.error("Vui lòng chọn ngày sinh");
            check = false;
        }
        if (employee.sex === "") {
            toast.error("Vui lòng chọn giới tính");
            check = false;
        }
        return check;
    }

    
    const navigate = useNavigate();
    const handleClick = async () => {
        if (validate()) {
            let res = await updateAnEmployee(employee);
            if (res) {
                toast.success("Đã chỉnh sửa thành công thông tin nhân viên");
                setTimeout(() => {
                    navigate("/nhan_vien"); 
                }, 3000);
            }
        } 
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
                        <Form.Label className="required-field">Họ</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Nhập họ" 
                            name="firstName" 
                            value={employee.firstName} 
                            onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col} >
                        <Form.Label className="required-field">Tên</Form.Label>
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
                        <Form.Label className="required-field">Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Nhập Email" 
                            name="email" 
                            value={employee.email} 
                            onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col} >
                        <Form.Label className="required-field">Số điện thoại</Form.Label>
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
                        <Form.Label className="required-field">CCCD</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Nhập CCCD" 
                            name="cccd" 
                            maxLength={12}
                            value={employee.cccd} 
                            onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col} >
                        <Form.Label className="required-field">Ngày cấp</Form.Label>
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
                        <Form.Label className="required-field">Nơi cấp</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Nhập nơi cấp" 
                            name="place" 
                            value={employee.place} 
                            onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col} >
                        <Form.Label >Địa chỉ hiện tại</Form.Label>
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
                        <Form.Label className="required-field">Ngày sinh</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="DateRange"
                            name="bdate"
                            value={employee.bdate}
                            onChange={handleChange}
                        />
                        </Form.Group>
                        <Form.Group as={Col} >
                        <Form.Label>Mã nhân viên</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Nhập họ" 
                            name="firstName" 
                            value={id} 
                            disabled />
                        </Form.Group>

                        
                    </Row>

                    <Row className="mb-3">
                    <Form.Group as={Col} >
                        <Form.Label className="required-field">Giới tính</Form.Label>
                        <Form.Check
                            label="Nam"
                            type="radio"
                            name="sex"
                            value="Male"
                            checked={employee.sex === "Male" || employee.sex === "male"}
                            onChange={handleChange}
                        />
                        <Form.Check
                            label="Nữ"
                            type="radio"
                            name="sex"
                            value="Female"
                            checked={employee.sex === "female" || employee.sex === "Female"}
                            onChange={handleChange} 
                        />
                        </Form.Group>
                    </Row>

                    <Button variant="primary float-end" onClick={handleClick} disabled={changed === false}>
                        Lưu
                    </Button>
                </Form>
                </Box>
            </Box>
        </main>
    )
}

export default UpdateEmployee;