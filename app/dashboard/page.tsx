'use client'

import BuilderDashboard from '@/components/BuilderDashboard'
import Navigation from '@/components/Navigation'
import { useAppContext } from '../providers'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function DashboardPage() {
  const { isAuthenticated, setIsAuthenticated, user, isLoading } = useAppContext()
  const router = useRouter()
  const supabase = createClient()
  const [userProfile, setUserProfile] = useState<any>(null)
  const [profileLoading, setProfileLoading] = useState(true)
  
  useEffect(() => {
    // Redirect to login if not authenticated after loading
    if (!isLoading && !isAuthenticated) {
      router.push('/login')
    }
  }, [isLoading, isAuthenticated, router])
  
  useEffect(() => {
    // Fetch user profile data
    async function fetchProfile() {
      if (user?.id) {
        setProfileLoading(true)
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single()
        
        if (data && !error) {
          setUserProfile(data)
        }
        setProfileLoading(false)
      }
    }
    
    fetchProfile()
  }, [user?.id, supabase])
  
  const handleLogin = () => {
    router.push('/login')
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setIsAuthenticated(false)
    router.push('/')
    router.refresh()
  }
  
  const handleViewChange = (view: string) => {
    if (view === 'dashboard') {
      router.push('/dashboard')
    } else if (view === 'home') {
      router.push('/')
    }
  }

  // Show loading state while checking authentication or loading profile
  if (isLoading || profileLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  // If not authenticated after loading, return null (redirect will happen)
  if (!isAuthenticated) {
    return null
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
      <BuilderDashboard user={user} profile={userProfile} />
    </div>
  )
}