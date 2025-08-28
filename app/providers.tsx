'use client'

import { useState } from 'react'

export interface AppContextValue {
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
  user?: {
    name: string
    handle: string
    avatar: string
  }
}

import { createContext, useContext } from 'react'

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
  
  // Mock user data
  const user = isAuthenticated ? {
    name: "Alex Chen",
    handle: "@alexchen",
    avatar: "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjMwNzUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  } : undefined

  return (
    <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated, user }}>
      {children}
    </AppContext.Provider>
  )
}