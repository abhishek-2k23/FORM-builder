<div align="center">

```
 ██╗    ██╗███████╗██████╗ ███████╗ ██████╗ ██████╗ ███╗   ███╗
 ██║    ██║██╔════╝██╔══██╗██╔════╝██╔═══██╗██╔══██╗████╗ ████║
 ██║ █╗ ██║█████╗  ██████╔╝█████╗  ██║   ██║██████╔╝██╔████╔██║
 ██║███╗██║██╔══╝  ██╔══██╗██╔══╝  ██║   ██║██╔══██╗██║╚██╔╝██║
 ╚███╔███╔╝███████╗██████╔╝██║     ╚██████╔╝██║  ██║██║ ╚═╝ ██║
  ╚══╝╚══╝ ╚══════╝╚═════╝ ╚═╝      ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝
                        V E R S E
```

### *Your Friendly Neighborhood Form Builder — Spin Smarter Workflows*

<br/>

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-webforms.iamabhishek01.dev-DC143C?style=for-the-badge&logoColor=white)](https://webforms.iamabhishek01.dev/)
[![API](https://img.shields.io/badge/⚡_API-form--builder--7wnk.onrender.com-1A1A2E?style=for-the-badge&logoColor=white)](https://form-builder-7wnk.onrender.com)
[![API Docs](https://img.shields.io/badge/📖_API_Docs-/docs-6C3483?style=for-the-badge)](https://form-builder-7wnk.onrender.com/docs)

[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript_5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![tRPC](https://img.shields.io/badge/tRPC_11-2596BE?style=flat-square&logo=trpc&logoColor=white)](https://trpc.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Clerk](https://img.shields.io/badge/Clerk_Auth-6C47FF?style=flat-square&logo=clerk&logoColor=white)](https://clerk.com/)

</div>

---

## ✦ What Is WebForm Verse?

**WebForm Verse** is a production-grade, full-stack form builder built with a Spider-Man aesthetic — every form is a node, every connection a strand in an intelligent web. Create dynamic multi-field forms, protect them with passwords, collect and analyze responses, apply themes, send automated emails, and discover public forms in a community explore feed.

The architecture is a **Turborepo monorepo** with a Next.js 16 frontend deployed on **Vercel** and an Express 5 + tRPC backend deployed on **Render** — sharing type-safe API contracts through a unified `@repo/trpc` package.

```
                    ╔══════════════════════╗
                    ║  🕸  YOUR FORM WEB  🕸 ║
                    ╚══════════════════════╝
          ┌─────────────────┬─────────────────┐
          │                 │                 │
    ┌─────▼──────┐   ┌──────▼──────┐  ┌──────▼──────┐
    │  Create &  │   │  Collect &  │  │  Analyze &  │
    │  Publish   │   │  Protect    │  │  Automate   │
    └────────────┘   └─────────────┘  └─────────────┘
```

---

## ✦ Table of Contents

- [Live Deployments](#-live-deployments)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Monorepo Structure](#-monorepo-structure)
- [Database Schema](#-database-schema)
- [API Reference](#-api-reference)
- [Security](#-security)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Scripts Reference](#-scripts-reference)
- [Deployment](#-deployment)

---

## ✦ Live Deployments

| Service | URL | Platform |
|---------|-----|----------|
| **Frontend** | [webforms.iamabhishek01.dev](https://webforms.iamabhishek01.dev/) | Vercel |
| **Backend API** | [form-builder-7wnk.onrender.com](https://form-builder-7wnk.onrender.com) | Render |
| **API Docs (Scalar)** | [form-builder-7wnk.onrender.com/docs](https://form-builder-7wnk.onrender.com/docs) | Render |
| **OpenAPI JSON** | [/openapi.json](https://form-builder-7wnk.onrender.com/openapi.json) | Render |

---

## ✦ Key Features

### 🔨 Form Builder
- **14 field types** — `short_text`, `long_text`, `email`, `number`, `phone`, `url`, `date`, `time`, `select`, `multi_select`, `checkbox`, `rating`, `scale`, `file_upload`
- **Drag-to-reorder fields** with automatic order indexing
- **Conditional logic** per field — show/hide fields based on other answers (`and` / `or` operators)
- **Field-level validations** — `minLength`, `maxLength`, `min`, `max`, `regex pattern` with custom error messages
- **Select/multi-select options** with optional image URLs per choice
- **Rating & scale** fields with min/max labels and configurable ranges
- **Success screen** — custom message or redirect URL after submission

### 🔒 Form Protection & Access Control
- **Password protection** — SHA-256 hashed passwords stored in form settings; respondents must verify before accessing
- **One-response-per-IP** enforcement using hashed IP checks
- **Max responses cap** — forms auto-close when the limit is reached
- **Expiry date** — forms auto-close at a configurable `closesAt` timestamp
- **Require authentication** — optional Clerk auth gate on public forms
- **Creator ownership** — all mutations assert database-level ownership; no IDOR vulnerabilities

### 📊 Analytics & Insights
- **Event tracking** — `view`, `start`, `submit`, `abandon` events with session deduplication via SHA-256(IP + formId) hashing
- **Funnel metrics** — total views → unique views → starts → submissions → completion rate
- **Average completion time** — tracked per response in milliseconds
- **Geographic distribution** — top 10 countries by view count
- **Top referrers** — top 10 referring domains
- **Daily submissions chart** — date-bucketed trend data
- **Date range filter** — 7d / 30d / 90d / all-time analysis
- **UTM parameter capture** — source, medium, campaign stored per response

### 🌐 Public Form Responses
- Fully public `f/[slug]` route — no auth required for respondents
- **Themed rendering** — each form can have a custom color/font theme applied
- **Real-time field validation** — client-side before submission with server-side re-validation
- **Completion time tracking** — measures from first interaction to submit
- **Referrer capture** — stores `document.referrer` from the respondent's browser
- **State machine UI** — `loading → locked → ok → submitted` with error states for closed/expired/full forms

### 🎨 Themes
- Pre-built color + font themes selectable from the **Explore** page
- Theme properties: `primary`, `background`, `surface`, `text`, `textMuted`, `accent`, `border`, `error` colors + `heading`, `body`, `mono` font stacks
- Applied to public form pages as inline CSS variables
- Community-browsable in the **Themes** section

### 🔍 Explore Feed
- Public form discovery — search by title across all `visibility=public, status=published` forms
- Pagination support
- Theme browsing gallery

### 📧 Email Notifications (Resend)
- **Creator alert** — instant notification when a new response arrives with summary + deep link
- **Respondent confirmation** — thank-you email sent on successful submission
- Graceful no-op when `RESEND_API_KEY` is not set (logs instead)

### 🔗 API & Developer Tooling
- **Full OpenAPI spec** auto-generated from tRPC routes via `trpc-to-openapi`
- **Scalar API reference UI** at `/docs` — beautiful interactive documentation
- **End-to-end type safety** — TypeScript types flow from database schema → services → tRPC router → React query hooks without code generation

---

## ✦ Tech Stack

### Frontend (`apps/web`)
| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16.2.0 | React framework (App Router, Turbopack) |
| React | 19.2.3 | UI rendering |
| TypeScript | 5.9.2 | Type safety |
| tRPC React Query | 11.x | Type-safe API client |
| TanStack Query | 5.x | Server state, caching, mutations |
| Clerk Next.js | 7.x | Authentication & session management |
| Tailwind CSS | 3.x | Utility-first styling |
| Lucide React | 1.x | Icon set |
| class-variance-authority | 0.7 | Variant-driven component styling |

### Backend (`apps/server`)
| Technology | Version | Purpose |
|-----------|---------|---------|
| Express | 5.x | HTTP server |
| tRPC Server | 11.x | Type-safe RPC framework |
| trpc-to-openapi | 3.x | OpenAPI spec generation |
| Clerk Express | 2.x | Auth middleware & JWT verification |
| Drizzle ORM | 0.45 | Type-safe database queries |
| PostgreSQL (`pg`) | 8.x | Database driver |
| Zod | 4.x | Runtime schema validation |
| Helmet | 8.x | Security HTTP headers |
| cors | 2.x | Cross-origin request control |
| express-rate-limit | 8.x | IP-based rate limiting |
| compression | 1.x | Gzip response compression |
| Resend | 6.x | Transactional email |
| Svix | 1.x | Webhook signature verification |
| Winston (logger pkg) | — | Structured logging |
| uuid | 14.x | ID generation |
| morgan | 1.x | HTTP access logging |

### Infrastructure
| Service | Role |
|---------|------|
| **Vercel** | Frontend hosting + CDN + Edge |
| **Render** | Backend API server (Node.js) |
| **PostgreSQL** | Primary data store |
| **Clerk** | Auth provider (JWTs, user webhooks) |
| **Resend** | Email delivery |

### Monorepo Tooling
| Tool | Purpose |
|------|---------|
| Turborepo 2.x | Task orchestration, build caching |
| pnpm 10 | Package manager + workspace linking |
| TypeScript 5.9 | Full-stack type safety |
| ESLint 9 | Linting across all workspaces |

---

## ✦ Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                    VERCEL EDGE NETWORK                           │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │              Next.js 16 — apps/web (Port 3000)           │   │
│  ├──────────────────────────────────────────────────────────┤   │
│  │  /                    → Landing page (SSR)               │   │
│  │  /dashboard/*         → Protected dashboard (SSR)        │   │
│  │  /dashboard/forms     → Form management                  │   │
│  │  /dashboard/analytics → Analytics & response viewer      │   │
│  │  /dashboard/explore   → Browse themes + public forms     │   │
│  │  /f/[slug]            → Public form response page        │   │
│  │  /explore             → Public form discovery            │   │
│  │  proxy.ts             → Clerk auth proxy (all routes)    │   │
│  └──────────────────────────────────────────────────────────┘   │
└───────────────────────────▼──────────────────────────────────────┘
                     tRPC HTTP Batch Link
                  (Bearer JWT via Clerk token)
┌──────────────────────────────────────────────────────────────────┐
│                   RENDER — apps/server (Port 8000)               │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │                     Middleware Stack                       │  │
│  │   Helmet → Compression → RequestID → Logging → CORS       │  │
│  │   ClerkMiddleware → RateLimit → Body Parser               │  │
│  ├────────────────────────────────────────────────────────────┤  │
│  │                    tRPC Routers                            │  │
│  │  health  │  auth  │  forms  │  public  │  explore         │  │
│  ├────────────────────────────────────────────────────────────┤  │
│  │              OpenAPI + Scalar /docs                        │  │
│  │              POST /webhooks/clerk                          │  │
│  └────────────────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │                   Services Layer                           │  │
│  │  FormService │ ResponseService │ AnalyticsService          │  │
│  │  UserService │ ThemeService    │ EmailService              │  │
│  └────────────────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │            Drizzle ORM  →  PostgreSQL                      │  │
│  │   users │ forms │ form_fields │ form_responses             │  │
│  │   response_answers │ form_analytics │ themes               │  │
│  └────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
           ↑                            ↑
    Clerk Webhooks                 Resend Emails
  (user.created/updated/deleted)  (response notifications)
```

### Data Flow — Form Submission
```
Respondent Browser
  → GET  /f/[slug]               (tRPC: public.getForm)
  → POST /f/[slug] (pw verify?)  (tRPC: public.verifyPassword)
  → POST /f/[slug] submit        (tRPC: public.submit)
       │
       ├─ Validate answers server-side (required, length, pattern, min/max)
       ├─ Check oneResponsePerIp  (SHA-256 IP dedup)
       ├─ Check maxResponses cap
       ├─ Check closesAt expiry
       ├─ Insert form_responses + response_answers
       ├─ trackEvent (submit, sessionHash)
       ├─ EmailService.sendNewResponseNotification → creator
       └─ EmailService.sendRespondentConfirmation  → respondent
```

### Auth Flow
```
User → Clerk Sign-In/Up
  → Clerk Webhook → POST /webhooks/clerk
      → UserService.upsertUser() → DB users table

API Request:
  Clerk (browser) → getToken() → Bearer JWT in Authorization header
  → Server: clerkMiddleware() verifies JWT
  → getAuth(req).userId passed to tRPC context
  → protectedProcedure middleware checks userId
  → maps Clerk ID → DB user ID for business logic
```

---

## ✦ Monorepo Structure

```
form-builder/
│
├── apps/
│   ├── web/                          # Next.js 16 frontend
│   │   ├── app/
│   │   │   ├── (dashboard)/          # Protected route group
│   │   │   │   ├── dashboard/        # Home, forms list, settings
│   │   │   │   ├── _components/      # Shared dashboard components
│   │   │   │   └── layout.tsx        # Auth guard + layout
│   │   │   ├── f/[slug]/             # Public form response page
│   │   │   ├── explore/              # Public form discovery
│   │   │   ├── naruto/               # Easter egg page 🥷
│   │   │   ├── layout.tsx            # Root layout (ClerkProvider)
│   │   │   └── page.tsx              # Landing page
│   │   ├── components/
│   │   │   ├── verse/                # Spider-Man themed UI components
│   │   │   ├── konoha/               # Naruto themed UI components
│   │   │   └── ui/                   # Base button, badge, etc.
│   │   ├── lib/
│   │   │   └── trpc.ts               # tRPC React client
│   │   ├── providers/
│   │   │   └── index.tsx             # QueryClient + tRPC + Toast providers
│   │   ├── proxy.ts                  # Clerk auth proxy (Next.js 16)
│   │   └── next.config.js
│   │
│   └── server/                       # Express 5 API server
│       └── src/
│           ├── index.ts              # HTTP server bootstrap
│           ├── server.ts             # Express app + middleware stack
│           ├── env.ts                # Zod-validated environment
│           ├── lib/
│           │   ├── api-response.ts   # Standardized JSON responses
│           │   └── api-error.ts      # Typed HTTP error class
│           ├── middleware/
│           │   ├── security.ts       # Helmet, rate limits, logging
│           │   └── error-handler.ts  # Global error + 404 handlers
│           └── webhooks/
│               └── clerk.ts          # User sync webhook handler
│
├── packages/
│   ├── trpc/                         # Shared tRPC layer
│   │   ├── server/
│   │   │   ├── trpc.ts               # publicProcedure + protectedProcedure
│   │   │   ├── context.ts            # Request context type
│   │   │   ├── schema.ts             # Zod schemas (forms, fields, answers)
│   │   │   ├── index.ts              # serverRouter (merged all routers)
│   │   │   └── routes/
│   │   │       ├── health/           # Health check
│   │   │       ├── auth/             # getMe
│   │   │       ├── forms/            # Form CRUD, fields, responses
│   │   │       ├── public/           # getForm, submit, trackEvent
│   │   │       └── explore/          # listForms, listThemes
│   │   └── client/
│   │       └── index.ts              # RouterInputs, RouterOutputs, ServerRouter
│   │
│   ├── database/                     # Drizzle ORM
│   │   ├── schema.ts                 # Re-exports all model schemas
│   │   ├── index.ts                  # Drizzle DB instance
│   │   ├── models/                   # Table definitions per domain
│   │   ├── drizzle/                  # Migration SQL files
│   │   └── drizzle.config.ts
│   │
│   ├── services/                     # Business logic layer
│   │   ├── index.ts                  # Singleton service exports
│   │   ├── base.ts                   # BaseService (error helpers)
│   │   ├── user/                     # UserService
│   │   ├── form/                     # FormService
│   │   ├── response/                 # ResponseService
│   │   ├── analytics/                # AnalyticsService
│   │   ├── theme/                    # ThemeService
│   │   └── email/                    # EmailService (Resend)
│   │
│   ├── logger/                       # Winston structured logger
│   ├── ui/                           # Shared React components
│   ├── eslint-config/                # Shared ESLint rules
│   └── typescript-config/            # Shared tsconfig bases
│
├── .env                              # Local development secrets
├── .env.example                      # Template (commit this, not .env)
├── turbo.json                        # Turborepo pipeline config
└── package.json                      # Root workspace + pnpm overrides
```

---

## ✦ Database Schema

Seven PostgreSQL tables managed by Drizzle ORM with full cascade deletes.

### `users`
| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID PK | Random UUID |
| `clerkId` | VARCHAR(255) UNIQUE | Clerk user ID |
| `fullName` | VARCHAR(80) | Nullable |
| `email` | VARCHAR(255) UNIQUE | Primary email |
| `profileImageUrl` | TEXT | Nullable |
| `createdAt` / `updatedAt` | TIMESTAMP | Auto-managed |

### `forms`
| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID PK | |
| `userId` | UUID FK → users | Cascade delete |
| `title` | VARCHAR(255) | |
| `slug` | VARCHAR(255) UNIQUE | Auto-generated, URL-safe |
| `status` | ENUM | `draft` `published` `closed` `archived` |
| `visibility` | ENUM | `public` `unlisted` |
| `themeId` | UUID FK → themes | Nullable |
| `settings` | JSONB | `showProgressBar`, `shuffleFields`, `oneResponsePerIp`, `requireAuth`, `passwordHash` |
| `maxResponses` | INTEGER | Nullable — auto-close cap |
| `closesAt` | TIMESTAMP | Nullable — expiry deadline |
| `collectEmail` | BOOLEAN | Request respondent email |
| `successMessage` | TEXT | Shown post-submit |
| `redirectUrl` | TEXT | Redirect after submit |
| `publishedAt` | TIMESTAMP | Set when first published |

### `form_fields`
| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID PK | |
| `formId` | UUID FK → forms | Cascade delete |
| `type` | ENUM | 14 field types |
| `label` | VARCHAR(500) | |
| `order` | INTEGER | Display position index |
| `required` | BOOLEAN | |
| `validations` | JSONB | `minLength`, `maxLength`, `min`, `max`, `pattern`, `patternMessage` |
| `options` | JSONB | `[{ value, label, imageUrl? }]` for select fields |
| `minValue` / `maxValue` | INTEGER | For scale/rating |
| `conditionalLogic` | JSONB | `{ action, conditions[], logicOperator }` |

### `form_responses`
| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID PK | |
| `formId` | UUID FK → forms | Cascade delete |
| `respondentEmail` | VARCHAR(255) | Nullable |
| `ipAddress` | VARCHAR(45) | IPv4 or IPv6 |
| `metadata` | JSONB | `referer`, `utmSource`, `utmMedium`, `utmCampaign`, `country` |
| `completionTimeMs` | INTEGER | Milliseconds to complete |
| `submittedAt` | TIMESTAMP | |

### `response_answers`
| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID PK | |
| `responseId` | UUID FK → form_responses | Cascade delete |
| `fieldId` | UUID FK → form_fields | Cascade delete |
| `value` | JSONB | `string \| number \| boolean \| string[] \| null` |

### `form_analytics`
| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID PK | |
| `formId` | UUID FK → forms | Cascade delete |
| `event` | ENUM | `view` `start` `submit` `abandon` |
| `sessionHash` | VARCHAR(64) | SHA-256(ipAddress + formId) for deduplication |
| `ipAddress` | VARCHAR(45) | |
| `country` | VARCHAR(2) | ISO country code |
| `referrer` | TEXT | |
| `durationMs` | INTEGER | |
| `occurredAt` | TIMESTAMP | |

### `themes`
| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID PK | |
| `name` / `slug` | VARCHAR UNIQUE | |
| `colors` | JSONB | `{ primary, background, surface, text, textMuted, accent, border, error }` |
| `fonts` | JSONB | `{ heading, body, mono }` |
| `isActive` | BOOLEAN | Soft-disable |

---

## ✦ API Reference

The full interactive API documentation is available at **[/docs](https://form-builder-7wnk.onrender.com/docs)** (Scalar UI) and the raw OpenAPI spec at **[/openapi.json](https://form-builder-7wnk.onrender.com/openapi.json)**.

### Base URL
```
https://form-builder-7wnk.onrender.com
```

### Authentication
Protected routes require a **Clerk JWT** in the `Authorization` header:
```
Authorization: Bearer <clerk_session_token>
```

### Route Overview

#### Public Routes (no auth)
| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/health` | API health check — returns status + uptime |
| `GET` | `/api/public/forms/{slug}` | Fetch published form by slug |
| `POST` | `/api/public/forms/{slug}/verify` | Verify form password |
| `POST` | `/api/public/forms/{slug}/submit` | Submit a form response |
| `POST` | `/api/public/analytics/track` | Track a form interaction event |
| `GET` | `/api/explore/forms` | Browse public forms (paginated + search) |
| `GET` | `/api/explore/themes` | List all themes |
| `GET` | `/api/explore/themes/{slug}` | Get a theme by slug |

#### Protected Routes (Bearer JWT required)
| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/authentication/me` | Get authenticated user profile |
| `GET` | `/api/forms/` | List my forms with response counts |
| `POST` | `/api/forms/` | Create a form |
| `GET` | `/api/forms/{formId}` | Get form with all fields |
| `PATCH` | `/api/forms/{formId}` | Update form metadata |
| `DELETE` | `/api/forms/{formId}` | Soft-delete (archive) form |
| `POST` | `/api/forms/{formId}/publish` | Publish form |
| `POST` | `/api/forms/{formId}/unpublish` | Close form |
| `POST` | `/api/forms/{formId}/password` | Set or clear form password |
| `POST` | `/api/forms/{formId}/fields` | Add a field |
| `PATCH` | `/api/forms/{formId}/fields/{fieldId}` | Update a field |
| `DELETE` | `/api/forms/{formId}/fields/{fieldId}` | Delete a field |
| `POST` | `/api/forms/{formId}/fields/reorder` | Reorder fields |
| `GET` | `/api/forms/{formId}/responses` | List responses (paginated + date filter) |
| `GET` | `/api/forms/{formId}/responses/{responseId}` | Get single response with all answers |
| `DELETE` | `/api/forms/{formId}/responses/{responseId}` | Delete a response |
| `GET` | `/api/forms/{formId}/analytics` | Form analytics (date range filter) |

### Standard Response Envelope
```json
// Success
{
  "success": true,
  "data": { "..." },
  "meta": { "timestamp": "2025-01-01T00:00:00.000Z" }
}

// Error
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "Form not found"
  },
  "meta": { "timestamp": "2025-01-01T00:00:00.000Z" }
}
```

---

## ✦ Security

Security is a first-class concern. The following measures are implemented at multiple layers:

### 🔐 Authentication & Authorization
- **Clerk JWT verification** on every protected request via `clerkMiddleware()`
- **Database-level ownership assertions** — every form/field/response mutation calls `assertOwner(form, userId)` before executing; no IDOR vulnerabilities
- **Clerk user sync** via signed webhooks (Svix) — user DB records stay in sync with Clerk identity events
- **Webhook signature verification** using `svix` — prevents forged webhook deliveries

### 🛡️ HTTP Security Headers (Helmet)
- `Strict-Transport-Security` — 1 year, includeSubDomains, preload
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- Cross-Origin policies configured for embed compatibility

### 🚦 Rate Limiting
| Limiter | Endpoint | Limit |
|---------|----------|-------|
| `generalRateLimit` | `/api/*` | 120 req / 15 min per IP |
| `authRateLimit` | `/api/authentication/*` | 20 req / 15 min per IP |
| `submissionRateLimit` | `/api/public.submit` | 10 req / 15 min per IP |

All limiters use **draft-7 standard headers** (`RateLimit-Limit`, `RateLimit-Remaining`, `RateLimit-Reset`) and return structured JSON on 429.

### 🔑 Form-Level Security
- **Password protection** — passwords stored as SHA-256 hex digests, never plaintext
- **One-response-per-IP** — enforced via indexed `(formId, ipAddress)` lookup on every submission
- **Session deduplication** — analytics events deduplicated via SHA-256(IP + formId) session hash
- **Max response caps** — server-enforced, prevents unbounded data collection
- **Form expiry** — `closesAt` enforced server-side on every submission attempt

### 🔒 Transport & Input
- **CORS** — production origin whitelist (`WEB_URL`, `BASE_URL`); unrestricted in development
- **Body size limit** — 1 MB max request body enforced by Express
- **Zod validation on all inputs** — every tRPC procedure validates inputs at runtime; no raw request data reaches services
- **Trust proxy** — `app.set("trust proxy", 1)` for accurate IP extraction behind Render's reverse proxy
- **HTTPS** — enforced at the hosting layer (Vercel + Render both terminate TLS)

### 🪵 Observability
- **Request ID propagation** — UUID injected into every request (`req.requestId`) and exposed as `x-request-id` response header for end-to-end tracing
- **Structured logging** — Winston with JSON output in production (log aggregation ready)
- **Error logging** — all 5xx errors logged with full context before responding
- **HTTP access logs** — method, path, status, duration, IP, user-agent logged per request via morgan

---

## ✦ Getting Started

### Prerequisites
- Node.js >= 18
- pnpm 10 (`npm install -g pnpm@10`)
- PostgreSQL database (local or cloud — Neon, Supabase, Render, etc.)
- [Clerk](https://clerk.com) account (free tier works)
- [Resend](https://resend.com) account (optional — emails fall back to logs)

### 1. Clone & Install
```bash
git clone <repository-url>
cd form-builder
pnpm install
```

### 2. Configure Environment
```bash
cp .env.example .env
# Edit .env with your credentials
```

### 3. Set Up the Database
```bash
# Generate Drizzle migrations from schema
pnpm --filter @repo/database db:generate

# Push schema to your database
pnpm --filter @repo/database db:push

# (Optional) Seed themes and sample data
pnpm --filter @repo/database db:seed
```

### 4. Configure Clerk Webhooks
In your Clerk dashboard, create a webhook endpoint pointing to:
```
https://your-backend-url.com/webhooks/clerk
```
Subscribe to: `user.created`, `user.updated`, `user.deleted`

Copy the **Signing Secret** → `CLERK_WEBHOOK_SECRET` in `.env`.

### 5. Run in Development
```bash
# Run everything (web + server) in parallel via Turborepo
pnpm dev

# Or run individually
pnpm --filter web dev           # Next.js on :3000
pnpm --filter @repo/server dev  # Express on :8000
```

The API documentation will be available at `http://localhost:8000/docs`.

### 6. Build for Production
```bash
pnpm build
```

---

## ✦ Environment Variables

All variables live in the root `.env` file, loaded by each workspace via `dotenv-cli`.

> ⚠️ **Important:** Do **not** set `NODE_ENV` in `.env`. Each tool manages its own — having `NODE_ENV=development` in `.env` breaks `next build` on Next.js 16 (Turbopack uses dev-mode SSR paths, causing null module errors at prerender time).

```bash
# ─── Database ─────────────────────────────────────────────────────
DATABASE_URL=postgresql://user:password@host:5432/dbname

# ─── Clerk Auth ───────────────────────────────────────────────────
CLERK_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
CLERK_WEBHOOK_SECRET=whsec_...

# ─── Server ───────────────────────────────────────────────────────
PORT=8000
BASE_URL=http://localhost:8000          # Public API URL (for CORS + OpenAPI)
WEB_URL=http://localhost:3000           # Public web URL (for CORS + emails)
NEXT_PUBLIC_API_URL=http://localhost:8000  # API URL embedded in browser bundle

# ─── Email (Resend) ───────────────────────────────────────────────
RESEND_API_KEY=re_...                   # Optional — omit to disable emails
EMAIL_FROM=noreply@yourdomain.com

# ─── App ──────────────────────────────────────────────────────────
APP_NAME=FormCraft

# ─── Logger ───────────────────────────────────────────────────────
LOGGER_LEVEL=debug                      # debug | info | warn | error
```

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | ✅ | PostgreSQL connection string |
| `CLERK_SECRET_KEY` | ✅ | Server-side Clerk secret |
| `CLERK_PUBLISHABLE_KEY` | ✅ | Clerk publishable key (server) |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | ✅ | Clerk publishable key (browser) |
| `CLERK_WEBHOOK_SECRET` | ✅ | Svix webhook signing secret |
| `BASE_URL` | ✅ | API server public URL |
| `WEB_URL` | ✅ | Web app URL |
| `NEXT_PUBLIC_API_URL` | ✅ | API URL embedded in frontend bundle |
| `PORT` | ➖ | API server port (default: 8000) |
| `RESEND_API_KEY` | ➖ | Email delivery — omit to disable |
| `EMAIL_FROM` | ➖ | Sender address for notification emails |
| `APP_NAME` | ➖ | Shown in API docs + emails |
| `LOGGER_LEVEL` | ➖ | Log verbosity |

---

## ✦ Scripts Reference

### Root (Turborepo — runs across all workspaces)
```bash
pnpm dev          # Start web + server in parallel watch mode
pnpm build        # Production build (respects dependency order)
pnpm lint         # Lint all workspaces
pnpm check-types  # TypeScript check all workspaces
pnpm format       # Prettier format all .ts/.tsx/.md files
```

### Web (`pnpm --filter web <script>`)
```bash
pnpm dev          # next dev on :3000 (Turbopack)
pnpm build        # next build (production)
pnpm start        # Serve the production build
pnpm lint         # ESLint
pnpm check-types  # next typegen + tsc --noEmit
```

### Server (`pnpm --filter @repo/server <script>`)
```bash
pnpm dev          # tsx watch — hot reload on save
pnpm build        # tsup — bundles to dist/
pnpm start        # node dist/index.js — production
pnpm lint         # ESLint src/
```

### Database (`pnpm --filter @repo/database <script>`)
```bash
pnpm db:generate  # Generate migration files from Drizzle schema
pnpm db:push      # Push schema directly (dev only)
pnpm db:migrate   # Run migration files
pnpm db:seed      # Seed themes and sample data
pnpm dev          # Drizzle Studio (visual database browser)
```

---

## ✦ Deployment

### Frontend → Vercel

The `apps/web` directory deploys automatically via Vercel's Next.js integration.

Set these in the **Vercel dashboard → Environment Variables**:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY   = pk_live_...
NEXT_PUBLIC_API_URL                 = https://form-builder-7wnk.onrender.com
CLERK_SECRET_KEY                    = sk_live_...
CLERK_PUBLISHABLE_KEY               = pk_live_...
CLERK_WEBHOOK_SECRET                = whsec_...
```

### Backend → Render

Deploy `apps/server` as a **Node.js Web Service** on Render.

| Setting | Value |
|---------|-------|
| Build command | `pnpm --filter @repo/server build` |
| Start command | `pnpm --filter @repo/server start` |
| Node version | 18+ |

Set these in the **Render dashboard → Environment**:
```
DATABASE_URL      = postgresql://...
CLERK_SECRET_KEY  = sk_live_...
CLERK_PUBLISHABLE_KEY = pk_live_...
CLERK_WEBHOOK_SECRET  = whsec_...
RESEND_API_KEY    = re_...
EMAIL_FROM        = noreply@yourdomain.com
BASE_URL          = https://form-builder-7wnk.onrender.com
WEB_URL           = https://webforms.iamabhishek01.dev
APP_NAME          = FormCraft
LOGGER_LEVEL      = info
```

> Render sets `NODE_ENV=production` automatically — do not add it manually.

---

<div align="center">

```
         ╔═══════════════════════════════════════╗
         ║  With great forms comes great data.  ║
         ╚═══════════════════════════════════════╝
```

Built with ❤️ and a lot of web-slinging.

[![Live](https://img.shields.io/badge/🕸_Try_It_Live-webforms.iamabhishek01.dev-DC143C?style=for-the-badge)](https://webforms.iamabhishek01.dev/)

</div>
