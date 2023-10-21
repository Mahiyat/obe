import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import ResultDashboardRowActions from "./ResultDashboardRowActions";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "title",
    headerName: "Title",
    width: 350,
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "actions",
    headerName: "",
    width: 200,
    renderCell: (params) => <ResultDashboardRowActions />,
  },
];

const rows = [
  {
    id: 1,
    title: "1st Year 1st Semester B.Sc. 2021",
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    actions: { id: 1, title: "1st Year 1st Semester B.Sc. 2021" },
  },
];

export default function ResultDashboard() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
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
  );
}
