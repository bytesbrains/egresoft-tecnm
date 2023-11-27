'use client'

import { DataTable } from 'primereact/datatable'
import Paper from '@mui/material/Paper'

export default function Table({
  list,
  selectable = false,
  selectedItem,
  handleSelectedItem,
  children
}) {
  return (
    <Paper
      elevation={1}
      sx={{
        padding: '10px',
        width: 'fit-content'
      }}
    >
      <DataTable
        value={list}
        removableSort
        paginator
        rows={8}
        selection={selectable && selectedItem}
        onSelectionChange={(e) => handleSelectedItem(e)}
        dataKey='id'
        tableStyle={{ minWidth: '50rem', minHeight: '700px' }}
      >
        {children}
      </DataTable>
    </Paper>
  )
}
