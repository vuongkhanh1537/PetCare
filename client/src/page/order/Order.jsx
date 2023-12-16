import { Box } from '@mui/material';
import { DataGrid } from "@mui/x-data-grid"
import { useEffect, useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { fetchAllProduct, deleteAnProduct } from "../../services/ProductServices";
import Header from "../../components/Header"
import { fetchAllOrder } from '../../services/OrderService';

const Order = () => {
    const navigate = useNavigate();
    const order_status = ["Đã lưu", "Đang xử lý", "Đã thanh toán", "Đã huỷ"];
    const columns = [
        { field: 'id', headerName: 'ID', width: 90, },
        {
            field: 'orderDate',
            headerName: 'Ngày tạo đơn',
            width: 100,
            flex: 1,
            headerAlign: "center",
            align: "center"
        },
        {
            field: 'employee',
            headerName: 'Nhân viên phụ trách',
            width: 100,
            flex: 1,
            headerAlign: "center",
            align: "center"
        },
        {
            field: 'totalPrice',
            headerName: 'Tổng đơn',
            width: 100,
            flex: 1,
            headerAlign: "center",
            align: "center"
        },
        {
            field: 'status',
            headerName: 'Tình trạng đơn',
            width: 100,
            flex: 1,
            headerAlign: "center",
            align: "center",
            valueGetter: (params) => {
                return (params.row.status === false ? "Đang xử lý" : "Hoàn thành");
            } 
        },
    ];
    const [rows, setRows] = useState([]);
    const [selectionModel, setSelectionModel] = useState([]);

    useEffect(() => {
        getOrderList();
    }, []);

    const getOrderList = async () => {
        try {
            let res = await fetchAllOrder();
            if (res) {
                let tmp = res;
                const data = tmp.map(item => ({
                    id: item.id,
                    totalPrice: item.totalPrice,
                    orderDate: item.orderDate,
                    employee: `${item.employee.firstName} ${item.employee.lastName}`,
                    status: item.status
                }));
                console.log(data);
                setRows(data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleClick = (params) => {
        const id = params.row.productId;
        // navigate("/san_pham/" + id);
    }
    
    return (
        <main className='content'>
            <Box m = "0 30px 10px 30px">
                <Header title="Đơn Hàng" subtitle="Danh sách đơn hàng"/> 
                <Box
                    ml = "20px"
                    sx={{ height: "fit-content", width: '90%'}}>
                    <div className='button-list'>
                    <Button 
                        variant="primary mb-3" 
                        onClick={()=>{navigate("add")}}
                        >Tạo đơn hàng</Button>
                        </div>
                    <DataGrid
                        getRowId={(row) => row.id}
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
