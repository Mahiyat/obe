import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CustomizedList from "./CustomizedList";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

export default function SideNavbar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      ></AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#42a5f5",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <AccountCircleIcon
          sx={{
            height: "100px",
            width: "auto",
            fontSize: "large",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />

        <Divider />
        <Box sx={{ height: "70%" }}>
          <CustomizedList />
        </Box>
        <Box>
          <Button
            variant="outlined"
            sx={{ color: "black" }}
            startIcon={<LogoutIcon />}
            onClick={() => navigate("/home")}
          >
            Logout
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}
