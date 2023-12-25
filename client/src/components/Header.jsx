import { Typography, Box, useTheme } from "@mui/material";

const Header = ({ title, subtitle }) => {
  return (
    <Box mb="30px">
      <Typography
        variant="h3"
        color="#000000"
        fontWeight="bold"
        sx={{ m: "20px 0 5px 20px",}}
      >
        {title}
      </Typography>
      <Typography 
        variant="h6" 
        color="grey"
        sx={{ m: "0px 0 5px 20px",}}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;