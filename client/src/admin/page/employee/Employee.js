import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";
import { Box, Typography } from '@mui/material';
import { DataGrid } from "@mui/x-data-grid"
import Header from "../../components/Header";
import { fetchAllEmployee } from "../../../services/EmployeeService";
import { useEffect, useState } from "react";

const Employee = () => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90, },
        {
          field: 'first_name',
          headerName: 'First name',
          width: 100,
          flex: 1,
        },
        {
          field: 'last_name',
          headerName: 'Last name',
          width: 100,
          flex: 1,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 100,
            flex: 1,
        },
    ];
    const [rows, setRows] = useState([]);
    useEffect(() => {
        getEmployee();
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
                <Box m = "20px">
                    <Header title="Nhân viên" />
                    <Box
                        ml = "20px"
                        sx={{ height: 400, width: '80%'}}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            onRowClick={handleClick}
                            initialState={{
                            pagination: {
                                paginationModel: {
                                pageSize: 5,
                                },
                            },
                            }}
                            pageSizeOptions={[5]}
                            checkboxSelection
                            disableRowSelectionOnClick
                        />
                        </Box>
                </Box>
            </main>
        </div>
        </>
    )
}

export default Employee;