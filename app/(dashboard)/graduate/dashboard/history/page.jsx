'use client'
import { PrimeReactProvider } from 'primereact/api'
import 'primereact/resources/themes/lara-light-indigo/theme.css' // theme
import 'primeflex/primeflex.css' // css utility
import 'primeicons/primeicons.css'
import 'primereact/resources/primereact.css'
import GraduateTable from '../../../../../components/GraduateTable'

export default function HistoryTable() {
  return (
    <PrimeReactProvider>
      <GraduateTable />
    </PrimeReactProvider>
  )
}
