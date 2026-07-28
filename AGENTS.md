# Repository Guidelines

## Project Overview

This portfolio is a client-rendered React 19 application built with Vite 6 and TypeScript. Routing uses React Router.
The production build is static and is suitable for GitHub Pages or another static host. There is no server-side
rendering and no Next.js App Router.

## Source of Truth

- `package.json` is the source of truth for available scripts and installed libraries.
- `vite.config.ts` and the TypeScript configs are the source of truth for build and path-alias behavior.
- Do not write code for an uninstalled library. Check `package.json` first.
- Keep changes scoped. Do not reorganize existing files merely to match this document unless the task explicitly
  requests a migration.

## Common Commands

```bash
npm run dev       # Start the Vite development server
npm run build     # Type-check and create the production build
npm run lint      # Run ESLint
npm run preview   # Preview the production build locally
```

Use Node.js 20 or newer, as declared in `package.json`. Use `npm ci` for clean dependency installation.

## Canonical File Structure (Mandatory for New Files)

The repository uses a feature-first structure. The tree below is the only approved destination map for newly created
files. Entries ending in `/` are categories, not directories that must exist in advance; create a directory only when
it has real content.

```text
.
├── public/                         # Files copied unchanged and addressed from the site root
│   ├── favicon.ico
│   ├── icons/
│   └── images/
├── src/
│   ├── app/                        # Application composition; no domain implementation
│   │   ├── <page>                  # Route-level pages e.g. login, chat, portfolio, settings
│   │   ├── App.tsx                 # Root application component
│   │   ├── router.tsx              # Route definitions and route guards
│   │   └── providers.tsx           # Composition of application-wide providers
│   ├── assets/                     # Assets imported by TypeScript/CSS and processed by Vite
│   │   ├── fonts/
│   │   ├── icons/
│   │   └── images/
│   ├── components/                 # Reusable, domain-agnostic components only
│   │   ├── ui/                     # Small design-system primitives
│   │   │   └── Button/
│   │   │       ├── Button.tsx
│   │   │       ├── Button.test.tsx
│   │   │       ├── Button.module.scss
│   │   │       └── index.ts
│   │   └── common/                 # Shared composed UI such as Header and ErrorBoundary
│   │       └── Header/
│   │           ├── Header.tsx
│   │           ├── Header.test.tsx
│   │           ├── Header.module.scss
│   │           └── index.ts
│   ├── features/                   # Business/domain modules
│   │   └── <feature>/              # e.g. auth, chat, portfolio, projects, settings
│   │       ├── api/                # Feature API calls and response schemas
│   │       ├── components/         # Components used only by this feature
│   │       ├── hooks/              # Feature-specific hooks
│   │       ├── pages/              # Route-level feature screens
│   │       ├── schemas/            # Validation schemas when a validator is installed
│   │       ├── store/              # Feature client state, only when necessary
│   │       ├── types/              # Feature-owned TypeScript types
│   │       ├── utils/              # Pure feature helpers
│   │       └── index.ts            # Explicit public API for cross-feature imports
│   ├── layouts/                    # Route/page shells shared by multiple pages
│   ├── hooks/                      # Domain-agnostic reusable hooks
│   ├── lib/                        # Configured third-party clients and infrastructure
│   │   ├── firebase/
│   │   └── constants.ts
│   ├── services/                   # Cross-feature external integrations only
│   ├── store/                      # Truly application-wide client state only
│   ├── styles/                     # Global entry styles, tokens, themes, and shared mixins
│   │   ├── globals.scss
│   │   ├── themes/
│   │   └── utilities.css
│   ├── types/                      # Types genuinely shared across features
│   ├── utils/                      # Domain-agnostic pure helpers
│   ├── config/                     # Typed environment, navigation, and site configuration
│   ├── main.tsx                    # Browser entry point; render only
│   └── vite-env.d.ts
├── tests/                          # Cross-cutting setup, fixtures, and mocks only
│   ├── setup.ts
│   ├── fixtures/
│   └── mocks/
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Strict File-Placement Rules

Before creating a file, determine its owner and place it using this order:

1. If it belongs to one business domain, place it in `src/features/<feature>/`.
2. If it is reusable UI with no business knowledge, place it in `src/components/ui/` or `src/components/common/`.
3. If it is a route-level screen owned by a feature, place it in that feature's `pages/`; otherwise use `src/pages/`.
4. If it wraps or configures a third-party package, place it in `src/lib/`.
5. If it integrates with an external system across features, place it in `src/services/`.
6. Use top-level `src/hooks`, `src/types`, `src/utils`, and `src/store` only when the code is truly shared by at least
   two features. Otherwise keep it inside the owning feature.

Additional mandatory rules:

- Do not create new top-level folders under `src/` without updating this document first.
- Do not create generic dumping grounds such as `helpers/`, `misc/`, `shared/`, or `common/` outside the approved
  `components/common/` directory.
- Do not duplicate route ownership. Routes are declared in `src/app/router.tsx`; route screens live in `pages/`.
- `src/main.tsx` may initialize and render the app only. Providers belong in `src/app/providers.tsx`.
- Never put feature state or feature API logic in a shared component.
- Do not create empty placeholder directories.
- Keep tests next to the unit under test. Reserve root `tests/` for shared setup, fixtures, and mocks.
- Keep component-specific styles beside the component. Keep only global styles, tokens, themes, and reusable mixins in
  `src/styles/`.
- Use `public/` only for assets that must keep their filename or cannot be imported. Prefer `src/assets/` for assets
  imported by application code.
- Expose a feature's cross-feature surface through `src/features/<feature>/index.ts`. Do not use barrel files for
  unrelated directories or export private feature internals.
- Prefer configured aliases over long relative imports. Add a matching alias to both `vite.config.ts` and
  `tsconfig.app.json`; never update only one.
- Existing legacy folders such as `src/views/` and `src/context/` may remain until deliberately migrated, but no new
  files may be added to them. New pages go to `pages/` and new providers go to `app/providers.tsx` or the owning
  feature.

## Naming Conventions

- Component folders and component files use PascalCase: `components/ui/Button/Button.tsx`.
- Hooks use camelCase with a `use` prefix: `useMediaQuery.ts`.
- Utilities and configured clients use camelCase: `formatDate.ts`, `firebaseClient.ts`.
- Tests use `<source-name>.test.ts` or `<source-name>.test.tsx` and are colocated with the source.
- Interfaces start with `I`, type aliases with `T`, and enums with `E`.
- Use descriptive filenames; avoid generic names such as `utils.ts`, `types.ts`, or `index2.ts` except for intentional
  public `index.ts` entry points.

## Architecture Boundaries

- A feature may import from shared `components`, `hooks`, `lib`, `types`, `utils`, `config`, and other features' public
  `index.ts` APIs.
- A feature must not deep-import another feature's internal files.
- Shared code must not import from `features/`; dependencies flow from feature code toward shared infrastructure.
- Components in `components/ui/` are pure and prop-driven. They must not read feature stores, call APIs, or depend on
  route-specific behavior.
- Prefer props for local data, Context for dependency injection or a tightly scoped provider, and an installed state
  library only for state that genuinely needs it.
- Keep API response validation adjacent to the owning API code when a schema library is available.

## Styling

- Prefer Tailwind utilities for new interface work; Tailwind v4 is configured through Vite.
- Use semantic theme utilities/tokens rather than raw color values in components.
- Use CSS Modules (`*.module.scss`) for component-scoped styles that Tailwind cannot express clearly.
- Global selectors, theme definitions, animations, and shared Sass mixins belong in `src/styles/`.
- Do not add unscoped component Sass files or inline style objects for static styling.

## Quality Checklist

Before considering a change complete:

1. Run `npm run lint`.
2. Run `npm run build`.
3. Add or update tests when a test runner exists and the behavior is testable.
4. Confirm every new file follows the canonical placement and naming rules above.
5. Confirm no private feature internals are imported across feature boundaries.
