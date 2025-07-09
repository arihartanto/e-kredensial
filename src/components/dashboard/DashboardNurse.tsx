import React from 'react'
import { Award, Clock, AlertTriangle, CheckCircle, Calendar, FileText } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { useAuth } from '../../hooks/useAuth'
import { formatDate } from '../../lib/utils'

export function DashboardNurse() {
  const { profile } = useAuth()

  const stats = [
    {
      title: 'Kredensial Aktif',
      value: '8',
      icon: Award,
      color: 'text-success-600',
      bgColor: 'bg-success-100',
    },
    {
      title: 'Akan Berakhir',
      value: '2',
      icon: Clock,
      color: 'text-warning-600',
      bgColor: 'bg-warning-100',
    },
    {
      title: 'Pengajuan Pending',
      value: '1',
      icon: AlertTriangle,
      color: 'text-danger-600',
      bgColor: 'bg-danger-100',
    },
    {
      title: 'Selesai Bulan Ini',
      value: '3',
      icon: CheckCircle,
      color: 'text-primary-600',
      bgColor: 'bg-primary-100',
    },
  ]

  const expiringCredentials = [
    {
      title: 'STR (Surat Tanda Registrasi)',
      expiryDate: '2024-03-15',
      status: 'expiring',
    },
    {
      title: 'Sertifikat BLS',
      expiryDate: '2024-02-28',
      status: 'critical',
    },
  ]

  const recentActivities = [
    {
      date: '2024-01-15',
      activity: 'Pengajuan perpanjangan STR disetujui',
      status: 'approved',
    },
    {
      date: '2024-01-10',
      activity: 'Upload dokumen sertifikat pelatihan',
      status: 'completed',
    },
    {
      date: '2024-01-05',
      activity: 'Pengajuan RKK baru - menunggu verifikasi',
      status: 'pending',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">
          Selamat datang, {profile?.full_name}!
        </h1>
        <p className="text-primary-100">
          Kelola kredensial keperawatan Anda dengan mudah dan efisien
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Expiring Credentials */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <AlertTriangle className="h-5 w-5 text-warning-500 mr-2" />
              Kredensial Akan Berakhir
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {expiringCredentials.map((credential, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{credential.title}</p>
                    <p className="text-sm text-gray-600">
                      Berakhir: {formatDate(credential.expiryDate)}
                    </p>
                  </div>
                  <Badge
                    variant={credential.status === 'critical' ? 'danger' : 'warning'}
                  >
                    {credential.status === 'critical' ? 'Kritis' : 'Segera'}
                  </Badge>
                </div>
              ))}
              <Button variant="warning" size="sm" className="w-full">
                Perpanjang Sekarang
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <FileText className="h-5 w-5 text-primary-500 mr-2" />
              Aktivitas Terbaru
            </h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className={`h-2 w-2 rounded-full mt-2 ${
                      activity.status === 'approved' ? 'bg-success-500' :
                      activity.status === 'completed' ? 'bg-primary-500' :
                      'bg-warning-500'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.activity}
                    </p>
                    <p className="text-xs text-gray-500">
                      {formatDate(activity.date)}
                    </p>
                  </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="primary" className="flex items-center justify-center">
              <FileText className="h-4 w-4 mr-2" />
              Ajukan RKK Baru
            </Button>
            <Button variant="secondary" className="flex items-center justify-center">
              <Award className="h-4 w-4 mr-2" />
              Lihat Kredensial
            </Button>
            <Button variant="ghost" className="flex items-center justify-center">
              <Calendar className="h-4 w-4 mr-2" />
              Jadwal Evaluasi
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}