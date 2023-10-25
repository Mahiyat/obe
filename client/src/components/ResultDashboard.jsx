import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import ResultDashboardRowActions from "./ResultDashboardRowActions";

const columns = [
  {
    field: "id",
    headerName: "Sl No",
    width: 350,
  },
  { field: "courseId", headerName: "Course ID", width: 90 },
  {
    field: "courseName",
    headerName: "Course Name",
    width: 350,
  },
  {
    field: "title",
    headerName: "Exam Title",
    width: 350,
  },
  {
    field: "actions",
    headerName: "Details",
    width: 200,
    renderCell: (params) => <ResultDashboardRowActions />,
  },
];

const rows = [
  {
    id: 1,
    courseId: "CSE-105",
    courseName: "Structured Programming Language",
    title: "1st Year 1st Semester B.Sc. 2021",
    actions: { id: 1, title: "1st Year 1st Semester B.Sc. 2021" },
  },
  {
    id: 2,
    courseId: "CSE-107",
    courseName: "Electrical Circuit",
    title: "1st Year 1st Semester B.Sc. 2021",
    actions: { id: 2, title: "1st Year 1st Semester B.Sc. 2021" },
  },
];

export default function ResultDashboard() {
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
          rows={rows}
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
