my-react-app/
├── public/                 # Raw static assets (unprocessed by Vite)
│   ├── favicon.ico
│   └── robots.txt
├── src/                    # Main source code
│   ├── assets/             # Images, SVGs, and styles processed by the bundler
│   ├── components/         # Shared, global UI elements (Buttons, Modals)
│   │   └── common/
│   │   └── ui/
│   ├── context/            # Global React Context providers
│   ├── features/           # Feature-based folders (Auth, Dashboard, Profile)
│   │   └── auth/           # Highly recommended for scaling large apps
│   │       ├── components/
│   │       ├── hooks/
│   │       └── authService.ts
│   ├── hooks/              # Reusable global custom hooks
│   ├── layouts/            # Persistent layout components (Navbar, Sidebar)
│   ├── pages/              # Route-level components mapping to app views
│   ├── routes/             # React Router / route orchestration configurations
│   ├── services/           # API client integrations (Axios instances, API calls)
│   ├── utils/              # Pure JavaScript/TypeScript helper functions
│   ├── App.tsx             # Root application component / Provider injection
│   ├── index.css           # Global CSS variables and Tailwind directives
│   └── main.tsx            # DOM mounting and application entry point
├── .env                    # Local environment variables
├── .gitignore              # Files/folders excluded from Git tracking
├── index.html              # Core HTML entry point (Vite's default entry)
├── package.json            # Project dependencies and run scripts
├── tsconfig.json           # TypeScript compilation configurations
└── vite.config.ts          # Core Vite bundler configuration file
