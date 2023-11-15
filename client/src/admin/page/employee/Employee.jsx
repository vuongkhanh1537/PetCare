import Sidebar from "../../components/global/Sidebar";
import Topbar from "../../components/global/Topbar";
import { Box, Typography } from '@mui/material';
import { DataGrid } from "@mui/x-data-grid"
import Header from "../../components/Header";
import { fetchAllEmployee } from "../../../services/EmployeeService";
import { useEffect, useState } from "react";
import { employeeData } from "../../../data/MockData";

const Employee = () => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90, },
        {
          field: 'first_name',
          headerName: 'First name',
          width: 100,
          flex: 1,
          headerAlign: "center",
          align: "center"
        },
        {
          field: 'last_name',
          headerName: 'Last name',
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
            field: 'position',
            headerName: 'Chức vụ',
            width: 100,
            flex: 1,
            headerAlign: "center",
            align: "center"
        },
    ];
    const [rows, setRows] = useState([]);
    useEffect(() => {
        setRows(employeeData);
    }, []);

    const getEmployee = async () => {
        let res = await fetchAllEmployee(1);
        if (res && res.data) {
            setRows(res.data);
        }
    }

    const handleClick = (params) => {
        
    }
    console.log(rows);
    return (
        <>
        <div className="app">
            <Sidebar site="Nhân viên"/>
            <main className='content'>
                <Topbar />
                <Box m = "0 30px 10px 30px">
                    <Header title="Nhân viên" />
                    <Box
                        ml = "20px"
                        sx={{ height: "fit-content", width: '90%'}}>
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

export default Employee;