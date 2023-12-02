import { fetchAllEmployee, deleteAnEmployee } from "../../../services/EmployeeService";
import Sidebar from "../../components/global/Sidebar";
import Topbar from "../../components/global/Topbar";
import { Box } from '@mui/material';
import { DataGrid } from "@mui/x-data-grid"
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

const Employee = () => {
    const navigate = useNavigate();
    const columns = [
        { field: 'id', headerName: 'ID', width: 90, },
        {
          field: 'firstName',
          headerName: 'Họ',
          width: 100,
          flex: 1,
          headerAlign: "center",
          align: "center"
        },
        {
          field: 'lastName',
          headerName: 'Tên',
          width: 100,
          flex: 1,
          headerAlign: "center",
          align: "center"
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 100,
            flex: 1,
            headerAlign: "center",
            align: "center"
        },
        {
            field: 'pos',
            headerName: 'Chức vụ',
            width: 100,
            flex: 1,
            headerAlign: "center",
            align: "center"
        },
    ];
    const [rows, setRows] = useState([]);

    const [selectionModel, setSelectionModel] = useState([]);

    useEffect(() => {
        getEmployee();
    }, []);

    const getEmployee = async () => {
        let res = await fetchAllEmployee();
        console.log(res);
        if (res) {
            setRows(res);
        }
    }

    const handleClick = (params) => {
        const id = params.row.id;
        navigate("/nhan_vien/" + id);
    }

    const deleteEmployee = async (id) => {
        let res = await deleteAnEmployee(id);
        if (res) {
            getEmployee();
        }
    }

    const handleDeleteClick = () => {
        selectionModel.forEach((value) => {deleteEmployee(value)})
    }

    return (
        <>
        <div className="app">
            <Sidebar site="Nhân viên"/>
            <main className='content'>
                <Topbar />
                <Box m = "0 30px 10px 30px">
                    <Header title="Nhân viên" subtitle="Danh sách nhân viên"/>
                    <Box
                        ml = "20px"
                        sx={{ height: "fit-content", width: '90%'}}>
                        <Button 
                            variant="primary mb-3" 
                            onClick={()=>{navigate("/nhan_vien/add")}}
                        >Thêm nhân viên
                        </Button>
                        <Button 
                            variant="danger mb-3"
                            disabled={selectionModel.length === 0}
                            onClick={handleDeleteClick}
                        >Xoá nhân viên
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

export default Employee;