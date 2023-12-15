'use client'

import WelcomeDashboard from '@/components/WelcomeDashboard'
import { useCurrentPage } from '@/hooks/useCurrentPage'

export default function Dashboard() {
  useCurrentPage('Inicio')

  return <WelcomeDashboard />
}
