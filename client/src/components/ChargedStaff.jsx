import React, {useState, useEffect} from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { fetchAllEmployee } from '../services/EmployeeService';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function ChargedStaff(props) {
  const theme = useTheme();
  const [nameList, setNameList] = useState([]);
  const { personName, setPersonName } = props;
  useEffect(() => {
    getListName();
  }, [])
  const getListName = async () => {
    let res = await fetchAllEmployee();
    if (res) {
        setNameList(res.map(item => `${item.firstName} ${item.lastName}`));
    }
  }

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(value);
  };

  return (
    <div>
      <h4>Nhân viên phụ trách</h4>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>Nhân viên</InputLabel>
        <Select
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Nhân viên" />}
          MenuProps={MenuProps}
        >
          {nameList.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}