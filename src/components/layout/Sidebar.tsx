import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  FileText,
  CheckCircle,
  BarChart3,
  Calendar,
  Settings,
  LogOut,
  Award,
  Users,
  Bell,
} from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'
import { cn } from '../../lib/utils'

const navigation = {
  nurse: [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Kredensial Saya', href: '/credentials', icon: Award },
    { name: 'Pengajuan RKK', href: '/applications', icon: FileText },
    { name: 'Notifikasi', href: '/notifications', icon: Bell },
    { name: 'Kalender', href: '/calendar', icon: Calendar },
    { name: 'Pengaturan', href: '/settings', icon: Settings },
  ],
  admin: [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Pengajuan RKK', href: '/applications', icon: FileText },
    { name: 'Validasi', href: '/validation', icon: CheckCircle },
    { name: 'Manajemen User', href: '/users', icon: Users },
    { name: 'Laporan', href: '/reports', icon: BarChart3 },
    { name: 'Kalender', href: '/calendar', icon: Calendar },
    { name: 'Pengaturan', href: '/settings', icon: Settings },
  ],
  supervisor: [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Pengajuan RKK', href: '/applications', icon: FileText },
    { name: 'Validasi', href: '/validation', icon: CheckCircle },
    { name: 'Tim Saya', href: '/team', icon: Users },
    { name: 'Laporan', href: '/reports', icon: BarChart3 },
    { name: 'Kalender', href: '/calendar', icon: Calendar },
    { name: 'Pengaturan', href: '/settings', icon: Settings },
  ],
  director: [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Persetujuan', href: '/approvals', icon: CheckCircle },
    { name: 'Laporan Eksekutif', href: '/executive-reports', icon: BarChart3 },
    { name: 'Manajemen User', href: '/users', icon: Users },
    { name: 'Pengaturan', href: '/settings', icon: Settings },
  ],
}

export function Sidebar() {
  const { profile, signOut } = useAuth()

  if (!profile) return null

  const userNavigation = navigation[profile.role] || navigation.nurse

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <div className="w-64 bg-white shadow-lg flex flex-col h-full">
      {/* Logo */}
      <div className="p-4 flex items-center justify-center border-b">
        <img
          src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=150&h=50&fit=crop"
          alt="RS dr. Suyudi"
          className="h-12 w-auto object-cover rounded"
        />
      </div>

      {/* User Profile */}
      <div className="p-4 border-b">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
            <span className="text-primary-600 font-semibold text-sm">
              {profile.full_name.split(' ').map(n => n[0]).join('').toUpperCase()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {profile.full_name}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {profile.role === 'nurse' ? 'Perawat' :
               profile.role === 'admin' ? 'Admin Komite' :
               profile.role === 'supervisor' ? 'Supervisor' : 'Direktur'}
            </p>
            {profile.unit && (
              <p className="text-xs text-gray-400 truncate">{profile.unit}</p>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {userNavigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                    isActive
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  )
                }
              >
                <item.icon
                  className="mr-3 h-5 w-5 flex-shrink-0"
                  aria-hidden="true"
                />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sign Out */}
      <div className="p-4 border-t">
        <button
          onClick={handleSignOut}
          className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-600 rounded-md hover:bg-red-50 transition-colors"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Keluar
        </button>
      </div>
    </div>
  )
}