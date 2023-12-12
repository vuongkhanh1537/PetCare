import { Box } from '@mui/material';
import { DataGrid } from "@mui/x-data-grid"
import { useEffect, useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { fetchAllProduct, deleteAnProduct } from "../../services/ProductServices";
import Header from "../../components/Header"

const Order = () => {
    const navigate = useNavigate();
    const columns = [
        { field: 'productId', headerName: 'ID', width: 90, },
        {
            field: 'productName',
            headerName: 'Mã đơn hàng',
            width: 100,
            flex: 1,
            headerAlign: "center",
            align: "left"
        },
        {
            field: 'supplier',
            headerName: 'Ngày tạo đơn',
            width: 100,
            flex: 1,
            headerAlign: "center",
            align: "center"
        },
        {
            field: 'category',
            headerName: 'Nhân viên phụ trách',
            width: 100,
            flex: 1,
            headerAlign: "center",
            align: "center"
        },
        {
            field: 'quantity',
            headerName: 'Giá thành',
            width: 100,
            flex: 1,
            headerAlign: "center",
            align: "center"
        },
        {
            field: 'cost',
            headerName: 'Tình trạng đơn',
            width: 100,
            flex: 1,
            headerAlign: "center",
            align: "center"
        },
    ];
    const [rows, setRows] = useState([]);
    const [selectionModel, setSelectionModel] = useState([]);

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        try {
            let res = await fetchAllProduct();
            console.log(res.data); 
            if (res && res.data) {
                setRows(res.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleClick = (params) => {
        const id = params.row.productId;
        // navigate("/san_pham/" + id);
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
        <main className='content'>
            <Box m = "0 30px 10px 30px">
                <Header title="Đơn hàng" subtitle="Danh sách đơn hàng"/> 
                <Box
                    ml = "20px"
                    sx={{ height: "fit-content", width: '90%'}}>
                    <div className='button-list'>
                    <Button 
                        variant="outline-primary mb-3" 
                        onClick={()=>{navigate("add")}}
                        >Tạo đơn hàng</Button>
                    <Button
                        variant="danger mb-3"
                        disabled={selectionModel.length === 0}
                        onClick={handleDeleteClick}
                        >Xoá sản phẩm    
                    </Button>
                        </div>
                    <DataGrid
                        getRowId={(row) => row.productId}
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
    )
}

export default Order;
