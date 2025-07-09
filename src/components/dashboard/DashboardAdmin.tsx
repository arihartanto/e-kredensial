import React from 'react'
import { FileText, Users, CheckCircle, Clock, TrendingUp, AlertTriangle } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { useAuth } from '../../hooks/useAuth'

export function DashboardAdmin() {
  const { profile } = useAuth()

  const stats = [
    {
      title: 'Pengajuan Hari Ini',
      value: '12',
      change: '+2',
      icon: FileText,
      color: 'text-primary-600',
      bgColor: 'bg-primary-100',
    },
    {
      title: 'Menunggu Verifikasi',
      value: '23',
      change: '+5',
      icon: Clock,
      color: 'text-warning-600',
      bgColor: 'bg-warning-100',
    },
    {
      title: 'Disetujui Bulan Ini',
      value: '89',
      change: '+12',
      icon: CheckCircle,
      color: 'text-success-600',
      bgColor: 'bg-success-100',
    },
    {
      title: 'Total Perawat Aktif',
      value: '156',
      change: '+3',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ]

  const pendingApplications = [
    {
      name: 'Nia Kusuma Wardhani',
      unit: 'IGD',
      type: 'Perpanjangan STR',
      submittedAt: '2024-01-15 10:30',
      priority: 'high',
    },
    {
      name: 'Asep Saepudin',
      unit: 'Ruang Bedah',
      type: 'RKK Baru',
      submittedAt: '2024-01-15 09:15',
      priority: 'medium',
    },
    {
      name: 'Rina Marlina',
      unit: 'ICU',
      type: 'Update Sertifikat',
      submittedAt: '2024-01-14 16:45',
      priority: 'low',
    },
  ]

  const incompleteDocuments = [
    {
      name: 'Ahmad Fauzi',
      unit: 'Rawat Inap',
      missing: 'Sertifikat Pelatihan',
      daysOverdue: 5,
    },
    {
      name: 'Siti Nurhaliza',
      unit: 'Poliklinik',
      missing: 'STR, SKP',
      daysOverdue: 12,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-success-500 to-success-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">
          Dashboard Admin Komite - {profile?.full_name}
        </h1>
        <p className="text-success-100">
          Kelola dan verifikasi kredensial keperawatan dengan efisien
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 text-success-500 mr-1" />
                    <span className="text-xs text-success-600">{stat.change} dari kemarin</span>
                  </div>
                </div>
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending Applications */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <Clock className="h-5 w-5 text-warning-500 mr-2" />
              Pengajuan Menunggu Verifikasi
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingApplications.map((app, index) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{app.name}</h3>
                    <Badge
                      variant={
                        app.priority === 'high' ? 'danger' :
                        app.priority === 'medium' ? 'warning' : 'default'
                      }
                      size="sm"
                    >
                      {app.priority === 'high' ? 'Tinggi' :
                       app.priority === 'medium' ? 'Sedang' : 'Rendah'}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{app.unit} • {app.type}</p>
                  <p className="text-xs text-gray-500 mt-1">Diajukan: {app.submittedAt}</p>
                  <div className="flex space-x-2 mt-3">
                    <Button size="sm" variant="primary">Verifikasi</Button>
                    <Button size="sm" variant="ghost">Detail</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Incomplete Documents */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <AlertTriangle className="h-5 w-5 text-danger-500 mr-2" />
              Dokumen Belum Lengkap
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {incompleteDocuments.map((doc, index) => (
                <div key={index} className="border rounded-lg p-4 bg-danger-50 border-danger-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{doc.name}</h3>
                    <Badge variant="danger" size="sm">
                      {doc.daysOverdue} hari
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{doc.unit}</p>
                  <p className="text-sm text-danger-700 mt-1">
                    Kurang: {doc.missing}
                  </p>
                  <Button size="sm" variant="danger" className="mt-3">
                    Kirim Reminder
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold text-gray-900">Aksi Cepat</h2>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button variant="primary" className="flex items-center justify-center">
              <FileText className="h-4 w-4 mr-2" />
              Verifikasi Pengajuan
            </Button>
            <Button variant="success" className="flex items-center justify-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              Input Hasil Evaluasi
            </Button>
            <Button variant="warning" className="flex items-center justify-center">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Kirim Reminder
            </Button>
            <Button variant="ghost" className="flex items-center justify-center">
              <Users className="h-4 w-4 mr-2" />
              Kelola User
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}