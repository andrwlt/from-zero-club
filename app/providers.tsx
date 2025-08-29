'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { User } from '@supabase/supabase-js'

export interface AppContextValue {
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
  user?: {
    id: string
    email?: string
    name?: string
    handle?: string
    avatar?: string
  }
  isLoading: boolean
}

const AppContext = createContext<AppContextValue | undefined>(undefined)

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider')
  }
  return context
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<AppContextValue['user']>()
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setIsAuthenticated(true)
        setUser({
          id: session.user.id,
          email: session.user.email,
          name: session.user.user_metadata?.full_name || session.user.user_metadata?.name,
          handle: session.user.user_metadata?.user_name || session.user.user_metadata?.preferred_username,
          avatar: session.user.user_metadata?.avatar_url || session.user.user_metadata?.picture,
        })
      }
      setIsLoading(false)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setIsAuthenticated(true)
        setUser({
          id: session.user.id,
          email: session.user.email,
          name: session.user.user_metadata?.full_name || session.user.user_metadata?.name,
          handle: session.user.user_metadata?.user_name || session.user.user_metadata?.preferred_username,
          avatar: session.user.user_metadata?.avatar_url || session.user.user_metadata?.picture,
        })
      } else {
        setIsAuthenticated(false)
        setUser(undefined)
      }
    })

    return () => subscription.unsubscribe()
  }, [supabase.auth])

  return (
    <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, isLoading }}>
      {children}
    </AppContext.Provider>
  )
}