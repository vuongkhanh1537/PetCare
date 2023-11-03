import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography} from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: "#e0e0e0",
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = ({site}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState(site);

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: "white !important",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: "#e0e0e0",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Typography
              variant="h7"
              color="#a3a3a3"
              sx={{ m: "15px 0 5px 0" }}
            >
              Quản lý
            </Typography>
            <Item
              title="Tổng quan"
              to="/dashboard"
              icon={<DashboardOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
              <Item
                title="Ngân sách"
                to="/ngan_sach"
                icon={<AssessmentOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            <Item
              title="Dịch vụ"
              to="/dich_vu"
              icon={<ListOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Sản phẩm"
              to="/san_pham"
              icon={<Inventory2OutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Nhân viên"
              to="/nhan_vien"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h7"
              color="#a3a3a3"
              sx={{ m: "15px 0 5px 0px" }}
            >
              Nhân viên bán hàng
            </Typography>

            <Item
              title="Lịch hẹn"
              to="/lich_hen"
              icon={<LocalPhoneOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Tình trạng thú cưng"
              to="/tinh_trang_thu_cung"
              icon={<PetsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h7"
              color="#a3a3a3"
              sx={{ m: "15px 0 5px 0px" }}
            >
              Nhân viên chăm sóc
            </Typography>

            <Item
              title="Khách hàng"
              to="/khach_hang"
              icon={<PersonPinOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Đơn hàng"
              to="/don_hang"
              icon={<ShoppingBagOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
