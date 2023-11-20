'use client'

import { DataTable } from "primereact/datatable";

export default function Table({list, selectable = false, selectedItem, handleSelectedItem, children}) {

  return (
      <DataTable
        value={list}
        removableSort
        paginator
        rows={8}
        selection={selectable && selectedItem}
        onSelectionChange={(e)=>handleSelectedItem(e)}
        dataKey="id"
        tableStyle={{ minWidth: "50rem" }}
      >
        {children}
      </DataTable>
  )
}