'use client'

import MUIDataTable from 'mui-datatables'

const data = [
    {
      "id": 1,
      "nombre": "Encuesta de satisfacción",
      "estado_encuesta": "En proceso",
      "fecha_envio": "2023-11-14",
      "generacion": "2020-2024"
    },
    {
      "id": 2,
      "nombre": "Encuesta de producto",
      "estado_encuesta": "Completada",
      "fecha_envio": "2023-11-12",
      "generacion": "2020-2024"
    },
    {
      "id": 3,
      "nombre": "Encuesta de servicio al cliente",
      "estado_encuesta": "Pendiente",
      "fecha_envio": "2023-11-10",
      "generacion": "2020-2024"
    },
    {
      "id": 4,
      "nombre": "Encuesta de opinión",
      "estado_encuesta": "Enviada",
      "fecha_envio": "2023-11-08",
      "generacion": "2020-2024"
    },
    {
      "id": 5,
      "nombre": "Encuesta de experiencia de usuario",
      "estado_encuesta": "Completada",
      "fecha_envio": "2023-11-05",
      "generacion": "2020-2024"
    },
    {
      "id": 6,
      "nombre": "Encuesta de mercado",
      "estado_encuesta": "Pendiente",
      "fecha_envio": "2023-11-03",
      "generacion": "2020-2024"
    },
    {
      "id": 7,
      "nombre": "Encuesta de empleados",
      "estado_encuesta": "En proceso",
      "fecha_envio": "2023-11-01",
      "generacion": "2020-2024"
    },
    {
      "id": 8,
      "nombre": "Encuesta de calidad de servicio",
      "estado_encuesta": "Completada",
      "fecha_envio": "2023-10-30",
      "generacion": "2020-2024"
    },
    {
      "id": 9,
      "nombre": "Encuesta de preferencias de compra",
      "estado_encuesta": "Enviada",
      "fecha_envio": "2023-10-27",
      "generacion": "2020-2024"
    },
    {
      "id": 10,
      "nombre": "Encuesta de salud y bienestar",
      "estado_encuesta": "Pendiente",
      "fecha_envio": "2023-10-25",
      "generacion": "2020-2024"
    },
    {
      "id": 11,
      "nombre": "Encuesta de deportes",
      "estado_encuesta": "Completada",
      "fecha_envio": "2023-10-23",
      "generacion": "2020-2024"
    },
    {
      "id": 12,
      "nombre": "Encuesta de alimentación",
      "estado_encuesta": "En proceso",
      "fecha_envio": "2023-10-20",
      "generacion": "2020-2024"
    },
    {
      "id": 13,
      "nombre": "Encuesta de moda",
      "estado_encuesta": "Enviada",
      "fecha_envio": "2023-10-18",
      "generacion": "2020-2024"
    },
    {
      "id": 14,
      "nombre": "Encuesta de cine",
      "estado_encuesta": "Pendiente",
      "fecha_envio": "2023-10-15",
      "generacion": "2020-2024"
    },
    {
      "id": 15,
      "nombre": "Encuesta de viajes",
      "estado_encuesta": "En proceso",
      "fecha_envio": "2023-10-12",
      "generacion": "2020-2024"
    }
]

const columns = [
  { name: 'id', label: 'ID' },
  { name: 'nombre', label: 'Nombre' },
  { name: 'estado_encuesta', label: 'Estado de Encuesta' },
  { name: 'fecha_envio', label: 'Fecha de Envío' },
  { name: 'generacion', label: 'Generación' }
]

const options = {

  textLabels: {
    body: {
      noMatch: "No se encontraron registros",
      toolTip: "Ordenar",
      columnHeaderTooltip: column => `Ordenar por ${column.label}`
    },
    pagination: {
      next: "Siguiente pagina",
      previous: "Pagina anterior",
      rowsPerPage: "Registros por pagina:",
      displayRows: "of",
    },
    toolbar: {
      search: "Buscar",
      downloadCsv: "Descargar CSV",
      print: "Imprimir",
      viewColumns: "Ver columnas",
      filterTable: "Filtrar tabla",
    },
    filter: {
      all: "Todos",
      title: "Filtros",
      reset: "Reiniciar",
    },
    viewColumns: {
      title: "Mostrar columnas",
      titleAria: "Mostrar/Ocultar Columnas",
    },
    selectedRows: {
      text: "Fila(s) selecionadas",
      delete: "Borrar",
      deleteAria: "Eliminar filas selecionadas",
    },
  }
}

export default function TableExample() {
  return <MUIDataTable title={'Encuestas'} data={data} columns={columns} options={options} />
}
