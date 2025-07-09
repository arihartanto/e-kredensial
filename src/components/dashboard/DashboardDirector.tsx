import React from 'react'
import { BarChart3, Users, CheckCircle, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../ui/Card'
import { useAuth } from '../../hooks/useAuth'

export function DashboardDirector() {
  const { profile } = useAuth()

  const stats = [
    {
      title: 'Total Perawat',
      value: '156',
      icon: Users,
      color: 'text-primary-600',
      bgColor: 'bg-primary-100',
    },
    {
      title: 'Persetujuan Pending',
      value: '8',
      icon: CheckCircle,
      color: 'text-warning-600',
      bgColor: 'bg-warning-100',
    },
    {
      title: 'Compliance Rate',
      value: '96%',
      icon: TrendingUp,
      color: 'text-success-600',
      bgColor: 'bg-success-100',
    },
    {
      title: 'Laporan Bulan Ini',
      value: '12',
      icon: BarChart3,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">
          Dashboard Direktur - {profile?.full_name}
        </h1>
        <p className="text-indigo-100">
          Pantau kinerja dan compliance kredensial keperawatan secara menyeluruh
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className={`p-3 rounded-full ${stat.bgColor} mr-4`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Executive Summary */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold text-gray-900">Ringkasan Eksekutif</h2>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-gray-500">Dashboard eksekutif akan segera hadir</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}