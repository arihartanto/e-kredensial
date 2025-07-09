import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { DashboardNurse } from '../components/dashboard/DashboardNurse'
import { DashboardAdmin } from '../components/dashboard/DashboardAdmin'
import { DashboardSupervisor } from '../components/dashboard/DashboardSupervisor'
import { DashboardDirector } from '../components/dashboard/DashboardDirector'

export function Dashboard() {
  const { profile } = useAuth()

  if (!profile) return null

  const renderDashboard = () => {
    switch (profile.role) {
      case 'nurse':
        return <DashboardNurse />
      case 'admin':
        return <DashboardAdmin />
      case 'supervisor':
        return <DashboardSupervisor />
      case 'director':
        return <DashboardDirector />
      default:
        return <DashboardNurse />
    }
  }

  return (
    <div className="p-6">
      {renderDashboard()}
    </div>
  )
}