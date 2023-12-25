import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Header from "../../components/global/Header";
import Sidebar from "../../components/global/Sidebar";
import Topbar from "../../components/global/Topbar";
import { toast } from "react-toastify";
import { fetchAnService } from "../../../services/ServiceServices";

export default function UpdateService() {
    const navigate = useNavigate();
    const { id } = useParams();
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
    const [service, setService] = useState({});

    useEffect(() => {
        getService();
    }, []);

    const getService = async () => {
        let res = await fetchAnService(id);
        console.log(res);
        if (res) {
            setService(res);
        }
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setService((prev) => {
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
        setService((prev) => {
            return {...prev, thoiGianHoanThanh : time}
        })
    }

    const handleClick = () => {
        
    }
    return (
        <div className="app">
            <Sidebar site="Dịch vụ" />
            <main className="content">
                <Topbar />
                <Box m = "0 30px 10px 30px">
                    <Header title="Dịch vụ" subtitle="Chi tiết dịch vụ"/>
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
                                name="serviceName" 
                                value={service.tenDichVu}
                                onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group as={Col} >
                            <Form.Label>Mã dịch vụ</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Mã dịch vụ" 
                                value={service.id}
                                disabled={true}/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} xs={6}>
                                <Form.Label>Loại</Form.Label>
                                <Form.Select  
                                    name="category"
                                    value={service.category} 
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
                            value={service.description}
                            onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                        <Form.Label>Giá dịch vụ</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="price" 
                            value={service.giaThanh}
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
