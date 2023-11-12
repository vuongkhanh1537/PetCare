import {Box, IconButton} from "@mui/material"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import * as React from 'react';
import { useNavigate } from "react-router-dom";


const Topbar = () => {
    const MenuPopupState = () => {
        const navigate = useNavigate();

        const handleLogout = () => {
            localStorage.removeItem("token");
            navigate("/");
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
    <Box display="flex" justifyContent="right" p={2}>
        <IconButton>
            <NotificationsOutlinedIcon></NotificationsOutlinedIcon>
        </IconButton>
        <MenuPopupState />
    </Box>
    )
}

export default Topbar;