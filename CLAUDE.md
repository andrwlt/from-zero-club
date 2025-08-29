# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Install dependencies**: `npm i`
- **Start development server**: `npm run dev` (runs on port 3000 by default)
- **Build for production**: `npm run build`
- **Start production server**: `npm run start`
- **Lint code**: `npm run lint`

## Tech Stack & Architecture

This is a **Next.js 15** application with the following key technologies:

- **Framework**: Next.js 15.2.2 with App Router
- **UI Components**: shadcn/ui (built on Radix UI primitives)
- **Styling**: Tailwind CSS v4 with PostCSS
- **State Management**: React Context API (AppProvider in `app/providers.tsx`)
- **Type Safety**: TypeScript with strict mode enabled
- **Database**: Supabase (PostgreSQL) with auth, profiles, metrics, and streaks tables

## Project Structure

- **`app/`**: Next.js App Router pages and layouts
  - `layout.tsx`: Root layout with AppProvider wrapper
  - `providers.tsx`: Global app context for auth state
  - `page.tsx`: Home page
  - `dashboard/`: Dashboard route
- **`components/`**: React components
  - `ui/`: shadcn/ui components library
  - Application-specific components (BuilderCarousel, BuilderDashboard, etc.)
- **`supabase/migrations/`**: Database schema migrations
  - Defines profiles, auth_connections, metrics_snapshots, streaks, and milestones tables
  - Includes Row Level Security policies

## Key Patterns

- **Client Components**: Use `'use client'` directive when needed for interactivity
- **Authentication**: Mock auth state managed through AppContext
- **Path Aliases**: Use `@/` for imports (maps to project root)
- **Image Optimization**: Next.js Image component configured for Unsplash images

## Database Schema

The Supabase database includes:
- User profiles with social handles
- OAuth connections (Twitter, GitHub)
- Metrics tracking (followers, posts, commits)
- Streak tracking system
- Milestones and achievements