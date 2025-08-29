---
description: Create MVP implementation plan for Next.js + Supabase + shadcn/ui stack
argument-hint: [product-description | path/to/description.md]
allowed-tools: Read, Write, Edit, Grep, Glob, TodoWrite, Task, Bash
---

Create a simple, shippable implementation plan using:
- Next.js 15 (App Router) → Deploy to Vercel
- Supabase (Database + Auth)
- shadcn/ui components
- TypeScript + Tailwind CSS

## Core Philosophy:
- **Simplicity First**: Start with the simplest solution that works
- **Modular Design**: Each feature as an independent module that can be added/removed
- **Incremental Growth**: Architecture that evolves naturally without rewrites

Given the product: $ARGUMENTS

## 1. DATABASE SCHEMA
Design minimal Supabase tables following these principles:
- **Keep It Simple**: 3-5 core tables for MVP, avoid over-engineering relationships
- **Start Normalized**: Don't optimize prematurely, denormalize only when proven necessary
- **Use UUIDs v4**: For primary keys (Supabase default)
- **Add RLS Early**: Row Level Security from day one, not as afterthought
- **Leverage Supabase**: Use auth.users, don't create custom user tables

## 2. IMPLEMENTATION RULES
- **Always use shadcn/ui components** - Don't write custom UI from scratch
- **Always use Supabase Auth** - Never build custom authentication
- **Server Components by default** - Client Components only for interactivity
- **One feature end-to-end first** - Complete vertical slice before expanding
- **One happy path test per feature** - Single success test for core logic and API endpoints

## 3. CREATE TODO LIST
Use TodoWrite tool to create actionable tasks following these principles:
- **Small & Specific**: Each task completable in 15-60 minutes
- **Ordered by Priority**: Core functionality first, enhancements later
- **Dependencies Clear**: Mark which tasks block others
- **Session-Focused**: What can realistically be done now, not wishful planning