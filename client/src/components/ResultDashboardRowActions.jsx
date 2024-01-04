import React from "react";
import { GridActionsCellItem } from "@mui/x-data-grid";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";


export function EditActions({ id, handleSaveClick, handleCancelClick }) {
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

export function DefaultActions({ id, handleEditClick, handleDeleteClick }) {
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
}
