import {Box, IconButton} from "@mui/material"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"


const Topbar = () => {
    return (
    <Box display="flex" justifyContent="right" p={2}>
        <IconButton>
            <NotificationsOutlinedIcon></NotificationsOutlinedIcon>
        </IconButton>
        <IconButton>
            <PersonOutlinedIcon></PersonOutlinedIcon>
        </IconButton> 
    </Box>
    )
}

export default Topbar;