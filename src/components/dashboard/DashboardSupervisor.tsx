import React from 'react'
import { Users, TrendingUp, Award, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { useAuth } from '../../hooks/useAuth'

export function DashboardSupervisor() {
  const { profile } = useAuth()

  const stats = [
    {
      title: 'Tim Saya',
      value: '24',
      icon: Users,
      color: 'text-primary-600',
      bgColor: 'bg-primary-100',
    },
    {
      title: 'Kredensial Aktif',
      value: '186',
      icon: Award,
      color: 'text-success-600',
      bgColor: 'bg-success-100',
    },
    {
      title: 'Perlu Perhatian',
      value: '5',
      icon: AlertCircle,
      color: 'text-warning-600',
      bgColor: 'bg-warning-100',
    },
    {
      title: 'Compliance Rate',
      value: '94%',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">
          Dashboard Supervisor - {profile?.full_name}
        </h1>
        <p className="text-purple-100">
          Monitor dan supervisi kredensial tim keperawatan Anda
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

      {/* Team Overview */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold text-gray-900">Tim Keperawatan</h2>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-gray-500">Fitur manajemen tim akan segera hadir</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}