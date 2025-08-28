'use client'

import HomePage from '@/components/HomePage'
import { useAppContext } from './providers'
import Navigation from '@/components/Navigation'
import { useRouter } from 'next/navigation'

export default function Home() {
  const { isAuthenticated, setIsAuthenticated, user } = useAppContext()
  const router = useRouter()
  
  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
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
        currentView="home" 
        onViewChange={handleViewChange}
        isAuthenticated={isAuthenticated}
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      <HomePage isAuthenticated={isAuthenticated} />
    </div>
  )
}