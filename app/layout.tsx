import type { Metadata } from 'next'
import './globals.css'
import { AppProvider } from './providers'

export const metadata: Metadata = {
  title: 'From Zero Club Platform',
  description: 'Build and grow your business with community support',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}