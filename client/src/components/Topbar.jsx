import {Box, IconButton} from "@mui/material"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import * as React from 'react';
import { useNavigate } from "react-router-dom";
import LogoBrand from "../assests/images/Logo_Brand.png"


const Topbar = () => {
    const MenuPopupState = () => {
        const navigate = useNavigate();

        const handleLogout = () => {
            localStorage.removeItem("username");
            localStorage.removeItem("id");
            navigate("/login");
        }

        return (
          <PopupState variant="popover" popupId="demo-popup-menu"> 
            {(popupState) => (
              <React.Fragment>
                <IconButton {...bindTrigger(popupState)}>
                    <PersonOutlinedIcon></PersonOutlinedIcon>
                </IconButton> 
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        );
      } 

    return (
    <Box display="flex" justifyContent="space-between" p={2}> 
        <img src={LogoBrand} width="195" height="54"/>  
        <div> 
          <IconButton>
              <NotificationsOutlinedIcon></NotificationsOutlinedIcon> 
          </IconButton>  
          <MenuPopupState />
        </div>
    </Box> 
    ) 
} 

export default Topbar;