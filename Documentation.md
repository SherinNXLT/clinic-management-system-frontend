# Clinic Management System

## Folder Structure:
```
📦 src
├── 📂 assets/            # Images, fonts, static files
│   ├── images/
│   └── icons/
│
├── 📂 components        # Reusable UI components (buttons, inputs, modals, etc.).
│   ├── ui/              # Low-level UI (atoms: Button, Input, Loader, etc.).
│   ├── layout/          # Layout components (Navbar, Sidebar, Footer).
│   └── common/          # Common reusable features (Table, Chart, etc.).
│
├── 📂 auth/            # Api
│
├── 📂 lib/               # Config & setup for external libs (axios, react-query)
│
├── 📂 pages             # Page-level components (route targets)
│   ├── LandingPage/
│   ├── Dashboard/
│   └── NotFound.tsx
│
├── 📂 utils/             # Helpers (formatDate, debounce, validation, constants)
│
├── App.tsx              # Root App component
├── main.tsx             # Entry point (ReactDOM.createRoot)
└── index.css            # Global styles, CSS variables, tailwind config, etc.

```