vite-react/
├── src/
│   ├── api/services/        # API service modules (e.g., auth.ts)
│   ├── assets/              # Static assets (SVG, images, styles)
│   ├── components/          # React components
│   │   ├── Navbar/          # Feature components
│   │   ├── loaders/         # Loading UI components
│   │   └── shared/          # Reusable UI (Button, Dialog, InputField, etc.)
│   ├── helpers/             # Utility helpers (e.g., form handling)
│   ├── hooks/               # Custom React hooks
│   ├── layouts/             # Layout wrappers (AuthLayout, RestrictedLayout)
│   ├── locales/             # i18n translations (en, tr)
│   ├── pages/               # Page components (app/*, auth/*)
│   ├── plugins/             # Provider configs (i18n, MUI theme, toast)
│   ├── router/              # React Router configuration
│   ├── store/               # Jotai atoms (appStore, authStore)
│   ├── styles/              # Global SCSS styles
│   ├── utils/               # Utility functions
│   ├── Root.tsx             # Root component with providers
│   └── main.tsx             # Application entry point
├── config/                  # Design system defaults (colors, breakpoints)
├── tests/e2e/               # Playwright E2E tests
├── types/                   # TypeScript declarations
└── [config files]           # Vite, TypeScript, ESLint, Prettier, Tailwind, etc.