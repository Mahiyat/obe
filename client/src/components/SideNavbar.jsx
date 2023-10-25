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

const drawerWidth = 240;

export default function SideNavbar() {
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
        <Box sx={{height: "70%"}}>
          <CustomizedList />
        </Box>
        <Box>
          <Button
            variant="outlined"
            sx={{ color: "black" }}
            startIcon={<LogoutIcon />}
          >
            Logout
          </Button>
        </Box>
        {/* <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
    </Box>
  );
}
