import Sidebar from "../../components/global/Sidebar";
import Topbar from "../../components/global/Topbar";
import { Box } from '@mui/material';
import { DataGrid } from "@mui/x-data-grid"
import Header from "../../components/Header";
import { fetchAllEmployee } from "../../../services/EmployeeService";
import { useEffect, useState } from "react";
import { productData } from "../../../data/MockData";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import UpdateProduct from "./UpdateProduct"
import Button from "react-bootstrap/esm/Button";


const Product = () => {
    const navigate = useNavigate();
    const columns = [
        { field: 'id', headerName: 'ID', width: 90, },
        {
            field: 'product_name',
            headerName: 'Tên sản phẩm',
            width: 100,
            flex: 1,
            headerAlign: "center",
            align: "left"
        },
        {
            field: 'category',
            headerName: 'Loại',
            width: 100,
            flex: 1,
            headerAlign: "center",
            align: "center"
        },
        {
            field: 'quantity',
            headerName: 'Số lượng',
            width: 100,
            flex: 1,
            headerAlign: "center",
            align: "center"
        },
        {
            field: 'price',
            headerName: 'Đơn giá',
            width: 100,
            flex: 1,
            headerAlign: "center",
            align: "center"
        },
        {
            field: 'brand',
            headerName: 'Nhà cung cấp',
            width: 100,
            flex: 1,
            headerAlign: "center",
            align: "center"
        },
    ];
    const [rows, setRows] = useState([]);
    useEffect(() => {
        setRows(productData);
    }, []);

    const getEmployee = async () => {
        let res = await fetchAllEmployee(1);
        if (res && res.data) {
            setRows(res.data);
        }
    }

    const handleClick = (params) => {
        console.log(params.row.id);
        <Link to = {params.rows.id} />
    }
    return (
        <>
        <div className="app">
            <Sidebar site="Sản phẩm"/>
            <main className='content'>
                <Topbar />
                <Box m = "0 30px 10px 30px">
                    <Header title="Sản phẩm" subtitle="Danh sách sản phẩm"/>
                    <Box
                        ml = "20px"
                        sx={{ height: "fit-content", width: '90%'}}>
                        <Button variant="primary mb-3" onClick={()=>{navigate("/san_pham/add")}}>Thêm sản phẩm</Button>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            onRowClick={handleClick}
                            initialState={{
                            pagination: {
                                paginationModel: {
                                pageSize: 10,
                                },
                            },
                            }}
                            pageSizeOptions={[10]}
                            checkboxSelection
                            disableRowSelectionOnClick
                            sx={{
                                boxShadow: 2,
                                borderRadius: 3,
                                '& .MuiDataGrid-cell:hover': {
                                  color: 'primary.main',
                                },

                                '& .MuiDataGrid-columnHeaderTitle' : {
                                  fontWeight: 700,
                                }
                            }}
                        />
                    </Box>
                </Box>
            </main>
        </div>
        </>
    )
}

export default Product;