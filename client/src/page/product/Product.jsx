import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { useEffect, useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { fetchAllProduct, deleteAnProduct } from "../../services/ProductServices";
import Header from "../../components/Header"

const Product = () => {
    const navigate = useNavigate();
    const columns = [
        { field: 'productId', headerName: 'ID', width: 90, },
        {
            field: 'productName',
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
            field: 'cost',
            headerName: 'Đơn giá',
            width: 100,
            flex: 1,
            headerAlign: "center",
            align: "center"
        },
        {
            field: 'supplier',
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
        <main className='content'>
            <Box m = "0 30px 10px 30px">
                <Header title="Sản phẩm" subtitle="Danh sách sản phẩm"/> 
                <Box
                    ml = "20px"
                    sx={{ height: "fit-content", width: '90%'}}>
                    <div className='button-list'>
                        <Button
                            variant="danger mb-3"
                            disabled={selectionModel.length === 0}
                            onClick={handleDeleteClick}
                            >Xoá sản phẩm</Button>
                        <Button 
                            variant="primary mb-3" 
                            onClick={()=>{navigate("/san_pham/add")}}
                            >Thêm sản phẩm</Button>
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
                        slots={{ toolbar: GridToolbar }}
                        slotProps={{
                            toolbar: {
                                showQuickFilter: true,
                                csvOptions: { disableToolbarButton: true },
                                printOptions: { disableToolbarButton: true },
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

export default Product;