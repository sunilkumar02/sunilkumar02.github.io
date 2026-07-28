# Personal AI Platform - Architecture Specification (MVP → Scalable)

## Project Overview

-   Single integrated platform to showcase portfolio, profile, and AI
    capabilities
-   One app, one login, everything connected
-   Public portfolio + authenticated AI chat
-   Future support for agents, MCP, and local models

------------------------------------------------------------------------

# 1. High-Level Architecture

``` text
                              Internet
                                  │
                ┌─────────────────┴─────────────────┐
                │                                   │
                ▼                                   ▼
        Portfolio Routes                    Authenticated Routes
      (No Login Required)                      (Supabase Auth)
                │                                   │
                └──────────────React SPA────────────┘
                               (React)
                                   │
                     Hosted on GitHub Pages / Vercel
                                   │
                                   ▼
                           HTTPS REST APIs
                                   │
                    Cloud Run (FastAPI + Python)
                                   │
       ┌───────────────┬───────────────┬────────────────┐
       │               │               │                │
       ▼               ▼               ▼                ▼
 Supabase Auth   PostgreSQL DB   Storage Bucket   AI Service Layer
       │               │               │                │
       │               │               │        ┌───────┴────────┐
       │               │               │        │                │
       │               │               │        ▼                ▼
       │               │               │      OpenAI         Anthropic
       │               │               │      Gemini         Ollama
       │               │               │      Future MCP     Agents
       └───────────────┴───────────────┴───────────────────────────
```

# 2. Tech Stack

## Frontend

-   React
-   React Router
-   TanStack Query
-   Axios
-   Tailwind CSS
-   shadcn/ui
-   React Hook Form
-   Zustand

## Backend

-   Python 3.12
-   FastAPI
-   Pydantic
-   SQLAlchemy
-   Alembic
-   Supabase Python SDK
-   OpenAI SDK
-   Anthropic SDK
-   Gemini SDK
-   LangChain (Future)
-   OpenAI Agents SDK (Future)
-   MCP SDK (Future)

## Database

-   Supabase PostgreSQL
-   UUID keys
-   JSONB
-   Row Level Security

## Authentication

-   Supabase Auth
-   Email/Password
-   Google Login
-   GitHub Login

# 3. Database Schema (SQL)

## users

``` sql
create table users (
 id uuid primary key,
 email text,
 full_name text,
 avatar_url text,
 created_at timestamp,
 updated_at timestamp
);
```

## chat_sessions

``` sql
create table chat_sessions (
 id uuid primary key,
 user_id uuid,
 title text,
 created_at timestamp,
 updated_at timestamp
);
```

## chat_messages

``` sql
create table chat_messages (
 id uuid primary key,
 session_id uuid,
 role text,
 content text,
 model text,
 tokens integer,
 created_at timestamp
);
```

## projects

``` sql
create table projects (
 id uuid primary key,
 title text,
 description text,
 github_url text,
 live_url text,
 image_url text,
 tags text[],
 created_at timestamp
);
```

## profile

``` sql
create table profile (
 id uuid primary key,
 bio text,
 linkedin text,
 github text,
 resume_url text,
 email text
);
```

## llm_models

``` sql
create table llm_models (
 id uuid primary key,
 provider text,
 model_name text,
 enabled boolean
);
```

## usage_logs

``` sql
create table usage_logs (
 id uuid primary key,
 user_id uuid,
 provider text,
 tokens integer,
 cost decimal,
 created_at timestamp
);
```

# 4. API Endpoints

## Public

-   GET /api/profile
-   GET /api/projects
-   GET /api/projects/{id}

## Auth

-   POST /signup
-   POST /login
-   POST /logout

## User

-   GET /me
-   PUT /me

## Chat

-   POST /chat
-   POST /chat/stream
-   GET /chat/history
-   GET /chat/session/{id}
-   DELETE /chat/session/{id}

## Future

-   POST /agents/run
-   POST /mcp/connect
-   GET /models
-   POST /models/change

# 5. Folder Structure

## Backend

``` text
backend/
└── app/
    ├── api/
    ├── core/
    ├── db/
    ├── services/
    ├── repositories/
    ├── middleware/
    ├── prompts/
    ├── utils/
    └── tests/
main.py
```

## Frontend

``` text
frontend/
└── src/
    ├── pages/
    ├── components/
    ├── services/
    ├── hooks/
    ├── store/
    ├── utils/
    ├── types/
    ├── assets/
    └── routes/
App.tsx
```

# 6. Cost Estimation

  Component        Cost
  ---------------- ------------------------------------
  GitHub Pages     Free
  Cloud Run        Free Tier
  Supabase         Free Tier
  Storage          Free Tier
  Authentication   Free Tier
  AI APIs          \~\$10--30/month (usage dependent)
  Domain           \~\$10/year (optional)

# 7. MVP Roadmap

## Phase 1 (2--3 Weeks)

-   Portfolio
-   Login
-   Basic Chat UI
-   GPT Integration
-   Chat History
-   Responsive Design

## Phase 2 (2--4 Weeks)

-   Claude
-   Gemini
-   Ollama
-   Model Selector
-   Admin Dashboard
-   Usage Analytics

## Phase 3 (4--6 Weeks)

-   Agents
-   MCP
-   RAG
-   Tool Calling
-   Memory
-   Analytics
-   Prompt Library

# 8. Environment Variables

## Backend

``` env
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_JWT_SECRET=
DATABASE_URL=
OPENAI_API_KEY=
ANTHROPIC_API_KEY=
GEMINI_API_KEY=
OLLAMA_BASE_URL=http://localhost:11434
APP_ENV=development
APP_DEBUG=true
ALLOWED_ORIGINS=http://localhost:5173
LOG_LEVEL=INFO
```

## Frontend

``` env
VITE_API_URL=http://localhost:8000
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_APP_NAME=Personal AI Platform
```
