// Import necessary Material-UI components
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Box,
} from "@mui/material";

// Homepage component
const HomePage = () => {
  return (
    <Box sx={{height: "150px",display: "flex", flexGrow: "1" }}>
      {/* App Bar with Sign Up and Login options */}
      <AppBar position="static" sx={{backgroundColor: "#42a5f5"}}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            OBE Result Analysis System
          </Typography>
          <Button color="inherit">Sign Up</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* Main Content Container */}
      <Container style={{ marginTop: "20px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Welcome to OBE Result Analysis System
            </Typography>
          </Grid>

          {/* Add more components as needed for your homepage content */}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
