import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

export default function ResultStatistics() {
  const navigate = useNavigate();

  const [course, setCourse] = React.useState("");
  const [examTitle, setExamTitle] = React.useState("");

  const handleChange1 = (event) => {
    setCourse(event.target.value);
  };

  const handleChange2 = (event) => {
    setExamTitle(event.target.value);
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
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "50%",
            }}
          >
            <Typography variant="body1" sx={{ textAlign: "left" }} gutterBottom>
              <strong>Select Course: </strong>
            </Typography>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="course-select-label">Course</InputLabel>
                <Select
                  labelId="course-select-label"
                  id="course-select"
                  value={course}
                  label="Course"
                  onChange={handleChange1}
                >
                  <MenuItem value={"CSE-105"}>CSE-105</MenuItem>
                  <MenuItem value={"CSE-107"}>CSE-107</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Typography variant="body1" sx={{ textAlign: "left" }} gutterBottom>
              <strong>Select Exam: </strong>
            </Typography>
            <Box sx={{ minWidth: 250 }}>
              <FormControl fullWidth>
                <InputLabel id="exam-select-label">Course</InputLabel>
                <Select
                  labelId="exam-select-label"
                  id="exam-select"
                  value={examTitle}
                  label="Exam Title"
                  onChange={handleChange2}
                >
                  <MenuItem value={"1st Year 1st Semester 2021"}>
                    1st Year 1st Semester 2021
                  </MenuItem>
                  <MenuItem value={"1st Year 1st Semester 2020"}>
                    1st Year 1st Semester 2020
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            position: "relative",
            top: "70%",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              position: "absolute",
              right: "10%",
              bottom: "0",
            }}
            onClick={() => navigate("./single-course-graph", {state: {course: course, exam: examTitle}})}
          >
            Show Graph
          </Button>
        </Box>
        <Outlet />
      </Box>
    </Box>
  );
}
