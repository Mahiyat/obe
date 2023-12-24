import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import ResultDashboardRowActions from "./ResultDashboardRowActions";
import { useEffect, useState } from "react";

const columns = [
  {
    field: "id",
    headerName: "Sl No",
    width: 350,
  },
  { field: "course_id", headerName: "Course ID", width: 90 },
  {
    field: "course_name",
    headerName: "Course Name",
    width: 350,
  },
  {
    field: "exam_title",
    headerName: "Exam Title",
    width: 350,
  },
  {
    field: "actions",
    headerName: "Details",
    width: 200,
    renderCell: (params) => (
      <ResultDashboardRowActions
        courseId={params.value.courseId}
        courseName={params.value.courseName}
        title={params.value.title}
      />
    ),
  },
];

// const rows = [
//   {
//     id: 1,
//     course_id: "CSE-105",
//     course_name: "Structured Programming Language",
//     exam_title: "1st Year 1st Semester B.Sc. 2021",
//     actions: {
//       courseId: "CSE-105",
//       courseName: "Structured Programming Language",
//       title: "1st Year 1st Semester B.Sc. 2021",
//     },
//   },
//   {
//     id: 2,
//     course_id: "CSE-107",
//     course_name: "Electrical Circuit",
//     exam_title: "1st Year 1st Semester B.Sc. 2021",
//     actions: {
//       courseId: "CSE-107",
//       courseName: "Electrical Circuit",
//       title: "1st Year 1st Semester B.Sc. 2021",
//     },
//   },
// ];

export default function ResultDashboard() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/courses/")
      .then((data) => data.json())
      .then((data) => setCourses(data));
  }, []);
  // console.log(rows);

  const getFormattedRows = () =>
    courses.map((course) => ({
      ...course.fields,
      id: course.pk,
      actions: {
        courseId: course.fields.coure_id,
        courseName: course.fields.course_name,
        title: course.fields.exam_title,
      },
    }));

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
          Courses
        </Typography>
        <DataGrid
          rows={getFormattedRows()}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
}
