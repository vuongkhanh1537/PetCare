import React, { useState } from "react";
import { Box } from "@mui/material";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Header from "../../components/global/Header";
import Sidebar from "../../components/global/Sidebar";
import Topbar from "../../components/global/Topbar";
import { addService } from "../../../services/ServiceServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddService = () => {
    const navigate = useNavigate();
    const [newService, setNewService] = useState({});
    const [hours, setHours] = useState(() => {
        const hour = [];
        for (let i = 0; i <= 12; i++) {
            hour.push(<option>{i}</option>);
        }
        return hour;
    });

    const [minutes, setMinutes] = useState(() => {
        const minute = [];
        for (let i = 0; i <= 60; i+=5) {
            minute.push(<option>{i}</option>);
        }
        return minute;
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNewService((prev) => {
            return {...prev, [name] : value} 
        })
    }

    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const handleTimeChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, " ", value);
        if (name == "hour") {
            setHour(value);
        } else {
            setMinute(value);
        }
        const time = `${hour}:${minute}:00`;
        setNewService((prev) => {
            return {...prev, thoiGianHoanThanh : time}
        })
    }


    const handleClick = async () => {
        const res = await addService(newService);
        if (res) {
            toast.success("Đã thêm thành công một dịch vụ mới");
            setTimeout(() => {
                navigate("/dich_vu");
            }, 3000);
        }
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
                            <Form.Group as={Col} >
                            <Form.Label>Tên dịch vụ</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Nhập tên dịch vụ" 
                                name="tenDichVu" 
                                onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridID">
                            <Form.Label>Mã dịch vụ</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Mã dịch vụ" 
                                disabled={true}/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} xs={6}>
                                <Form.Label>Loại</Form.Label>
                                <Form.Select 
                                    defaultValue="Chọn loại" 
                                    name="category" 
                                    onChange={handleChange}>
                                        <option>Chọn loại</option>
                                        <option>Spa</option>
                                        <option>Tắm rửa</option>
                                </Form.Select>
                            </Form.Group>
                           
                            <Form.Group as={Col} >
                            <Form.Label>Giờ</Form.Label>
                                <Form.Select 
                                    name="hour" 
                                    onChange={handleTimeChange}>
                                        {hours}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} >
                                <Form.Label>Phút</Form.Label>
                                <Form.Select 
                                    name="minute" 
                                    onChange={handleTimeChange}>
                                        {minutes}
                                </Form.Select>
                            </Form.Group>                        
                        </Row>

                        <Form.Group className="mb-3" >
                        <Form.Label>Mô tả</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={8} 
                            name="description" 
                            onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridPrice">
                        <Form.Label>Giá dịch vụ</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="giaThanh" 
                            onChange={handleChange}/>
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