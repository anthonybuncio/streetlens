# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint via next lint
```

No test suite is configured.

## Architecture

**StreetLens** is a dashcam video sharing platform where users can upload, browse, and discover dashcam footage on an interactive map (currently centered on Houston, TX).

### Stack

- **Next.js 14** with App Router
- **MongoDB Atlas** via direct driver (no ORM) — separate databases for `users` and `videos`
- **NextAuth v4** — Google OAuth as the primary provider; credentials provider is a stub
- **Google Maps API** — Advanced Markers with custom pins and InfoWindows
- **Tailwind CSS 3**

### Directory layout

```
app/
  _components/     # Shared React components (mix of client/server)
  api/             # API routes (NextAuth at /api/auth/[...nextauth])
  explore/         # Map page — server component + server actions
    actions.tsx    # "use server" data fetching for videos
    page.tsx       # Async server component, ISR revalidation 3600s
  upload/          # Video upload
  account/         # User profile
  login/           # Custom auth page
  (static pages)/  # about, faq, contact, privacy-policy, terms-of-service
  layout.tsx       # Root layout — fetches session, wraps with SessionProvider
  middleware.ts    # Adds geo-location country header to requests
lib/
  mongodb.ts       # Singleton MongoDB client with HMR-safe connection pooling
```

### Data flow

1. Root `layout.tsx` fetches the NextAuth session server-side and passes it to `SessionProvider`.
2. The `/explore` page runs server actions (`explore/actions.tsx`) to fetch video documents from MongoDB `videos.houston`.
3. Client components (`Map`, `VideoList`, `Sidebar`) receive data as props and handle interactivity.
4. Google Maps is initialized client-side via `useEffect` using `@googlemaps/js-api-loader`.

### Environment variables

| Variable | Purpose |
|---|---|
| `MONGODB_URI` | Primary MongoDB connection |
| `MONGODB_USERS` | MongoDB connection for users DB |
| `MONGODB_VIDEOS` | MongoDB connection for videos DB |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Google OAuth for NextAuth |
| `NEXTAUTH_SECRET` | JWT signing key |
| `NEXTAUTH_URL` | Callback base URL |
| `NEXT_PUBLIC_MAPS_API_KEY` | Google Maps API key |
| `NEXT_PUBLIC_MAP_ID` | Google Maps custom map ID |

Use `.env.local` for local development (not tracked by git).

### Key conventions

- Path alias `@/*` resolves to the project root.
- Server components are async by default; client components are explicitly marked `"use client"`.
- MongoDB connection is reused via a global singleton in `lib/mongodb.ts` to survive HMR in dev.
- `getServerSession()` (not `getSession()`) is used in server components/actions for session access.
