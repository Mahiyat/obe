import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VisibilityIcon from "@mui/icons-material/Visibility";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BarChartIcon from "@mui/icons-material/BarChart";

const data = [
  { icon: <DashboardIcon />, label: "Dashboard", path: "/" },
  { icon: <VisibilityIcon />, label: "View Courses", path: "/view-courses" },
  {
    icon: <KeyboardArrowUpIcon />,
    label: "Submit Request",
    path: "/submit-request",
  },
  {
    icon: <BarChartIcon />,
    label: "Result Statistics",
    path: "/result-statistics",
  },
];

export default function CustomizedList() {
  const navigate = useNavigate();
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
                <ListItemButton
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  sx={{ py: 0, minHeight: 45 }}
                >
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
