'use server'

import { createClient } from '@/lib/supabase/server'

export async function syncTwitterProfile() {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { error: 'Not authenticated' }

  try {
    // Update profile with Twitter data
    const { error: profileError } = await supabase
      .from('profiles')
      .upsert({
        id: user.id,
        username: user.user_metadata?.user_name,
        full_name: user.user_metadata?.full_name || user.user_metadata?.name,
        avatar_url: user.user_metadata?.avatar_url || user.user_metadata?.picture,
        twitter_handle: user.user_metadata?.user_name,
        updated_at: new Date().toISOString(),
      })

    if (profileError) throw profileError

    // Get the session for access token
    const { data: { session } } = await supabase.auth.getSession()
    
    if (session?.provider_token) {
      // Store Twitter OAuth tokens
      const { error: connectionError } = await supabase
        .from('auth_connections')
        .upsert({
          user_id: user.id,
          provider: 'twitter',
          access_token: session.provider_token,
          refresh_token: session.provider_refresh_token || null,
          expires_at: session.expires_at ? new Date(session.expires_at * 1000).toISOString() : null,
          updated_at: new Date().toISOString(),
        })

      if (connectionError) throw connectionError
    }

    return { success: true }
  } catch (error) {
    console.error('Error syncing Twitter profile:', error)
    return { error: 'Failed to sync profile' }
  }
}