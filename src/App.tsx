import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useAuth } from './hooks/useAuth'
import { LoginForm } from './components/auth/LoginForm'
import { Layout } from './components/layout/Layout'
import { Dashboard } from './pages/Dashboard'

const queryClient = new QueryClient()

function AppContent() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (!user) {
    return <LoginForm />
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="credentials" element={<div className="p-6">Kredensial Saya - Coming Soon</div>} />
          <Route path="applications" element={<div className="p-6">Pengajuan RKK - Coming Soon</div>} />
          <Route path="validation" element={<div className="p-6">Validasi - Coming Soon</div>} />
          <Route path="users" element={<div className="p-6">Manajemen User - Coming Soon</div>} />
          <Route path="reports" element={<div className="p-6">Laporan - Coming Soon</div>} />
          <Route path="notifications" element={<div className="p-6">Notifikasi - Coming Soon</div>} />
          <Route path="calendar" element={<div className="p-6">Kalender - Coming Soon</div>} />
          <Route path="settings" element={<div className="p-6">Pengaturan - Coming Soon</div>} />
          <Route path="team" element={<div className="p-6">Tim Saya - Coming Soon</div>} />
          <Route path="approvals" element={<div className="p-6">Persetujuan - Coming Soon</div>} />
          <Route path="executive-reports" element={<div className="p-6">Laporan Eksekutif - Coming Soon</div>} />
        </Route>
      </Routes>
    </Router>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  )
}

export default App