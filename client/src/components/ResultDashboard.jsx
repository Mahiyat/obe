import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Typography } from "@mui/material";
import {
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
  GridRowModes,
  GridToolbarContainer,
} from "@mui/x-data-grid";
import { randomId } from "@mui/x-data-grid-generator";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";

import ResultDashboardRowActions from "./ResultDashboardRowActions";
import { API_URL } from "../constants";

function EditToolbar(props) {
  const { setCourses, setRowModesModel } = props;

  const handleClick = async () => {
    try {
      const response = await axios.post(API_URL, {
        course_id: " ",
        course_name: " ",
        exam_title: " ",
      });
      const newRecord = response.data;
      const id = newRecord.id;
      setCourses((oldRows) => [
        ...oldRows,
        {
          id,
          course_id: '',
          course_name: '',
          exam_title: '',
          details: {
            courseId: '',
            courseName: '',
            title: '',
          },
          isNew: true,
        },
      ]);
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [id]: { mode: GridRowModes.Edit, fieldToFocus: "course_id" },
      }));
    } catch (error) {
      console.error("Error adding record:", error);
    }
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add course
      </Button>
    </GridToolbarContainer>
  );
}

export default function ResultDashboard() {
  const [courses, setCourses] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const getFormattedRows = () =>
    courses.map((course) => ({
      ...course,
      details: {
        courseId: course.course_id,
        courseName: course.course_name,
        title: course.exam_title,
      },
    }));

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    processRowDelete(id);
    setCourses(courses.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = courses.find((row) => row.id === id);
    if (editedRow.isNew) {
      setCourses(courses.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (newRow) => {
    const api = API_URL + `${newRow.id}`;
    try {
      await axios.put(api, newRow);
      const updatedRowFromServer = newRow;
      setCourses((prevCourses) =>
        prevCourses.map((row) =>
          row.id === updatedRowFromServer.id ? updatedRowFromServer : row
        )
      );
      return updatedRowFromServer;
    } catch (error) {
      console.error("Error updating data:", error);
      throw error;
    }
  };

  const processRowDelete = async (id) => {
    const api = API_URL + `${id}`;
    try {
      await axios.delete(api);
    } catch (error) {
      console.error("Error deleting data:", error);
      throw error;
    }
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    // {
    //   field: "id",
    //   headerName: "Sl No",
    //   width: 350,
    // },
    { field: "course_id", headerName: "Course ID", width: 90, editable: true },
    {
      field: "course_name",
      headerName: "Course Name",
      width: 350,
      editable: true,
    },
    {
      field: "exam_title",
      headerName: "Exam Title",
      width: 350,
      editable: true,
    },
    {
      field: "details",
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
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

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
          editMode="row"
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
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
          slots={{
            toolbar: EditToolbar,
          }}
          slotProps={{
            toolbar: { setCourses, setRowModesModel },
          }}
        />
      </Box>
    </Box>
  );
}
