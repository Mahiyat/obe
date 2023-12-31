import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import AllCourseGraph from "./AllCourseGraph";
import SingleCourseMenu from "./SingleCourseMenu";

export default function ResultStatistics() {

  const [type, setType] = React.useState("");

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Box sx={{ height: 400, display: "flex", flexGrow: "1" }}>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Typography
          variant="h3"
          sx={{ textAlign: "left", textDecoration: "underline #42a5f5" }}
          gutterBottom
        >
          Result Statistics
        </Typography>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Typography variant="body1" sx={{ textAlign: "left" }} gutterBottom>
              <strong>Select Type: </strong>
            </Typography>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="type-select-label">Chart Type</InputLabel>
                <Select
                  labelId="type-select-label"
                  id="type-select"
                  value={type}
                  label="Type"
                  onChange={handleTypeChange}
                >
                  <MenuItem value={"Single Course"}>Single Course</MenuItem>
                  <MenuItem value={"All Courses"}>All Courses</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
        {type === "All Courses" ? (<AllCourseGraph />) : type === "Single Course" ? (<SingleCourseMenu />) : (null)}
      </Box>
    </Box>
  );
}
