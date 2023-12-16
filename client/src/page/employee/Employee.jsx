import { fetchAllEmployee, deleteAnEmployee } from "../../services/EmployeeService";
import { Box } from '@mui/material';
import { DataGrid } from "@mui/x-data-grid"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Header from "../../components/Header"
import CustomToolbar from "../../components/CustomToolbar";

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
            <main className='content'>  
                <Box m = "0 30px 10px 30px">
                    <Header title="Nhân viên" subtitle="Danh sách nhân viên"/> 
                    <Box
                        ml = "20px"
                        sx={{ height: "fit-content", width: '90%'}}> 
                        <div className="button-list">
                            <Button 
                                variant="danger mb-3" 
                                disabled={selectionModel.length === 0}
                                onClick={handleDeleteClick}
                                >Xoá nhân viên
                            </Button>
                            <Button 
                                variant="primary mb-3" 
                                onClick={()=>{navigate("/nhan_vien/add")}}
                            >Thêm nhân viên
                            </Button>
                        </div>
                        <DataGrid 
                            rows={rows}
                            columns={columns}
                            onRowClick={handleClick}
                            slots={{ toolbar: CustomToolbar }}
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
        </>
    )
}

export default Employee;