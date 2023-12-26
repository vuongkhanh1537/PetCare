import React, {useState, useEffect} from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { fetchAllEmployee } from '../../../services/EmployeeService';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
    },
  },
};

export default function ChargedStaff(props) {
  const theme = useTheme();
  const [nameList, setNameList] = useState([]);
  const { personName, setPersonName, isDisable } = props;
  useEffect(() => {
    getListName();
  }, [])
  const getListName = async () => {
    let res = await fetchAllEmployee();
    if (res) {
      setNameList(res.map(item => ({ id: item.id, name: `${item.firstName} ${item.lastName}` })));
    }
  }

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    // console.log(value);
    setPersonName(nameList.find(item => item.name === value));
  };

  return (
    <div>
      <h4 className='required-field'>Nhân viên phụ trách</h4>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel >Nhân viên</InputLabel>
        <Select
          value={personName.name}
          onChange={handleChange}
          input={<OutlinedInput label="Nhân viên" />}
          MenuProps={MenuProps}
        >
          {nameList.map((item, index) => (
            <MenuItem
              key={item.id}
              value={item.name}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}