import * as React from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ArrowRight from "@mui/icons-material/ArrowRight";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Home from "@mui/icons-material/Home";
import Settings from "@mui/icons-material/Settings";
import People from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import Dns from "@mui/icons-material/Dns";
import Public from "@mui/icons-material/Public";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VisibilityIcon from "@mui/icons-material/Visibility";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BarChartIcon from "@mui/icons-material/BarChart";
import LogoutIcon from "@mui/icons-material/Logout";

const data = [
  { icon: <DashboardIcon />, label: "Dashboard" },
  { icon: <VisibilityIcon />, label: "View Courses" },
  { icon: <KeyboardArrowUpIcon />, label: "Submit Request" },
  { icon: <BarChartIcon />, label: "Result Statistics" },
];

export default function CustomizedList() {
  const [open, setOpen] = React.useState(true);
  return (
    <Box sx={{ display: "flex" }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
        })}
      >
        <ListItem component="div" disablePadding>
          <Box>
            {open &&
              data.map((item) => (
                <ListItemButton key={item.label} sx={{ py: 0, minHeight: 45 }}>
                  <ListItemIcon sx={{ color: "inherit" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: 16,
                      fontWeight: "regular",
                    }}
                  />
                </ListItemButton>
              ))}
          </Box>
        </ListItem>
      </ThemeProvider>
    </Box>
  );
}
