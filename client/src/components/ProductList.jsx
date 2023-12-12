import React, {useEffect, useState} from 'react'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { fetchAllProduct } from "../services/ProductServices";

const ProductList = (props) => {
    const { addItem } = props;
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
    const getProduct = async () => {
      try {
          let res = await fetchAllProduct();
          if (res && res.data) {
              setRows(res.data);
          }
      } catch (err) {
          console.log(err);
      }
    }
    useEffect(() => {
      getProduct();
    }, []);
  
    const handleClick = (params) => {
      addItem(params.row);
    } 
    return (
      <DataGrid
        getRowId={(row) => row.productId}
        rows={rows}
        columns={columns}
        onRowDoubleClick={handleClick}
        disableRowSelectionOnClick
        ignoreDiacritics
        onRowSelectionModelChange={(newSelection) => {
            setSelectionModel(newSelection);
        }}
        pageSizeOptions={[100]}
        setSelectionModel={selectionModel}
        disableColumnFilter
        disableColumnSelector
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            csvOptions: { disableToolbarButton: true },
            printOptions: { disableToolbarButton: true },
          },
        }}
        sx={{
            boxShadow: 2,
            borderRadius: 3, 
            '& .MuiDataGrid-cell:hover': {
                color: 'primary.main',
            },
  
            '& .MuiDataGrid-columnHeaderTitle' : {
                fontWeight: 700,
            },
            "& .MuiDataGrid-cell:focus-within": {
              outline: "none !important",
           },
        }}
    />
    )
}

export default ProductList;