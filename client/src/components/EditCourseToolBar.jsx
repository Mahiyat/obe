import axios from 'axios';
import React from 'react'
import { GridRowModes, GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";

import { API_URL_COURSE } from '../constants';

export default function EditCourseToolBar(props) {
  const { setCourses, setRowModesModel } = props;

  const handleClick = async () => {
    try {
      const response = await axios.post(API_URL_COURSE, {
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
      <GridToolbarFilterButton />
    </GridToolbarContainer>
  );
}
