import Sidebar from "../../components/global/Sidebar";
import Topbar from "../../components/global/Topbar";
import { Box } from '@mui/material';
import { DataGrid } from "@mui/x-data-grid"
import Header from "../../components/Header";
import { fetchAllEmployee } from "../../../services/EmployeeService";
import { useEffect, useState } from "react";
import { serviceData } from "../../../data/MockData";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const Service = () => {

    const navigate = useNavigate();
    const columns = [
        { field: 'id', headerName: 'ID', width: 90, headerAlign: "center", align: "center"},
        {
            field: 'service_name',
            headerName: 'Tên dịch vụ',
            width: 100,
            flex: 1,
            headerAlign: "center",
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
            field: 'price',
            headerName: 'Giá thành',
            width: 50,
            flex: 1,
            headerAlign: "center",
            align: "center"
        },
        {
            field: 'complete_time',
            headerName: 'Thời gian hoàn thành',
            width: 100,
            flex: 1,
            headerAlign: "center",
            align: "center"
        },
    ];
    const [rows, setRows] = useState([]);
    useEffect(() => {
        setRows(serviceData);
    }, []);

    const handleClick = (params) => {
        
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
                        <Button variant="primary mb-3" onClick={()=>{navigate("/dich_vu/add")}}>Thêm dịch vụ</Button>
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

export default Service;