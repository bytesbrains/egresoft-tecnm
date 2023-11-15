'use client'

import CircularProgressWithLabel from '@/components/CircularProgressWithLabel'
import { useSession } from 'next-auth/react'

const Dashboard = () => {
  const { data: session, status } = useSession()

  if (status === 'loading') return <CircularProgressWithLabel/>

  console.log(session)

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>
        <code>{JSON.stringify(session?.user, null, 2)}</code>
      </pre>
    </div>
  )
}

export default Dashboard
