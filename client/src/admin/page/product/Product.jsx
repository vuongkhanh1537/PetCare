import Sidebar from "../../components/global/Sidebar";
import Topbar from "../../components/global/Topbar";
import { Box, skeletonClasses } from '@mui/material';
import { DataGrid } from "@mui/x-data-grid"
import Header from "../../components/Header";
import { fetchAllEmployee } from "../../../services/EmployeeService";
import { useEffect, useState } from "react";
import { productData } from "../../../data/MockData";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import UpdateProduct from "./UpdateProduct"
import Button from "react-bootstrap/esm/Button";
import { fetchAllProduct, deleteAnProduct } from "../../../services/ProductServices";

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
    const [selectionModel, setSelectionModel] = useState([]);

    useEffect(() => {
        // getProduct();
    }, []);

    const getProduct = async () => {
        let res = await fetchAllProduct();
        if (res && res.data) {
            setRows(res.data);
        }
    }

    const handleClick = (params) => {
        const id = params.row.id;
        navigate("/san_pham/" + id);
    }

    const deleteProduct = async (id) => {
        let res = await deleteAnProduct(id);
        if (res) {
            getProduct();
        }
    }

    const handleDeleteClick = () => {
        selectionModel.forEach((value) => {deleteProduct(value)})
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
                        <Button 
                            variant="primary mb-3" 
                            onClick={()=>{navigate("/san_pham/add")}}
                        >Thêm sản phẩm</Button>
                        <Button
                            variant="danger mb-3"
                            disabled={selectionModel.length === 0}
                            onClick={handleDeleteClick}
                        >Xoá sản phẩm    
                        </Button>
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
                            onRowSelectionModelChange={(newSelection) => {
                                setSelectionModel(newSelection);
                            }}
                            setSelectionModel={selectionModel}
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