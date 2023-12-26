import { fetchAllEmployee, deleteAnEmployee } from "../../services/EmployeeService";
import { Box } from '@mui/material';
import { DataGrid } from "@mui/x-data-grid"
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Header from "../../components/Header"
import CustomToolbar from "../../components/CustomToolbar";
import { GridToolbar } from "@mui/x-data-grid";
import { toast } from "react-toastify";

const Employee = () => {
    const navigate = useNavigate();
    const [top, setTop] = useOutletContext();
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
            field: 'phoneNum',
            headerName: 'Số điện thoại',
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
            let newData = res;
            if (newData.length > 0) {
                newData = newData.map((item, index) => {
                    return {...item, rowId: index + 1};
                });
                if (top === true) {
                    const lastObject = newData[newData.length - 1];
                    const rest = newData.slice(0, newData.length - 1);
                    newData = [lastObject, ...rest];
                    setTop(false);
                }
                setRows(newData);
            }
            // console.log(rows);
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
        // console.log(selectionModel);
        const workingId = parseInt(localStorage.getItem("id"));
        selectionModel.forEach((value) => {
            if (value !== workingId) {
                deleteEmployee(value);
            } else {
                toast.error(`Nhân viên ${localStorage.getItem("username")} không thể tự xoá chính mình`);
            }
        })
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
                            getRowId={(row) => row.id}
                            rows={rows}
                            columns={columns}
                            onRowClick={handleClick}
                            // slots={{ toolbar: CustomToolbar }}
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
                                // console.log(newSelection);
                                setSelectionModel(newSelection);
                            }}
                            selectionModel={selectionModel}
                            sx={{
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