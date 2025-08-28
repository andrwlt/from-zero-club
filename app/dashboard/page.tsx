'use client'

import BuilderDashboard from '@/components/BuilderDashboard'
import Navigation from '@/components/Navigation'
import { useAppContext } from '../providers'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const { isAuthenticated, setIsAuthenticated, user } = useAppContext()
  const router = useRouter()
  
  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    router.push('/')
  }
  
  const handleViewChange = (view: string) => {
    if (view === 'dashboard') {
      router.push('/dashboard')
    } else if (view === 'home') {
      router.push('/')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        currentView="dashboard" 
        onViewChange={handleViewChange}
        isAuthenticated={isAuthenticated}
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      <BuilderDashboard />
    </div>
  )
}