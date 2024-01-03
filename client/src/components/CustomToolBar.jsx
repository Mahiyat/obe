import { GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid'
import React from 'react'

export default function CustomToolBar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  )
}
