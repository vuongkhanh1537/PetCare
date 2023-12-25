import { fetchAllService, deleteAnService } from "../../../services/ServiceServices";
import Sidebar from "../../components/global/Sidebar";
import Topbar from "../../components/global/Topbar";
import { Box } from '@mui/material';
import { DataGrid } from "@mui/x-data-grid"
import Header from "../../components/global/Header";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const Service = () => {
    const navigate = useNavigate();
    const columns = [
        { field: 'id', headerName: 'ID', width: 90, headerAlign: "center", align: "center"},
        {
            field: 'tenDichVu',
            headerName: 'Tên dịch vụ',
            width: 100,
            flex: 1,
            headerAlign: "left",
            align: "left"
        },
        {
            field: 'category',
            headerName: 'Loại dịch vụ',
            width: 100,
            flex: 1,
            headerAlign: "center",
            align: "center"
        },
        {
            field: 'giaThanh',
            headerName: 'Giá thành',
            width: 50,
            flex: 1,
            headerAlign: "center",
            align: "center"
        },
        {
            field: 'thoiGianHoanThanh',
            headerName: 'Thời gian hoàn thành',
            width: 100,
            flex: 1,
            headerAlign: "center",
            align: "center"
        },
    ];
    const [rows, setRows] = useState([]);
    const [selectionModel, setSelectionModel] = useState([]);

    useEffect(() => {
        getService();
    }, []);

    const getService = async () => {
        let res = await fetchAllService();
        if (res) {
            setRows(res);
        }
    }
    const handleClick = (params) => {
        const id = params.row.id;
        navigate("/dich_vu/" + id);
    }

    const deleteEmployee = async (id) => {
        let res = await deleteAnService(id);
        if (res) {
            getService();
        }
    }

    const handleDeleteClick = () => {
        selectionModel.forEach((value) => {deleteEmployee(value)})
    }
    
    return (
        <>
        <div className="app">
            <Sidebar site="Dịch vụ"/>
            <main className='content'>
                <Topbar />
                <Box m = "0 30px 10px 30px">
                    <Header title="Dịch vụ" subtitle="Danh sách dịch vụ"/>
                    <Box
                        ml = "20px"
                        sx={{ height: "fix-content", width: '90%', alignItems: "center"}}>
                        <Button 
                            variant="primary mb-3" 
                            onClick={()=>{navigate("/dich_vu/add")}}
                        >Thêm dịch vụ
                        </Button>
                        <Button
                            variant="danger mb-3"
                            disabled={selectionModel.length === 0}
                            onClick={handleDeleteClick}
                        >Xoá dịch vụ
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
                            selectionModel={selectionModel}
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

export default Service;