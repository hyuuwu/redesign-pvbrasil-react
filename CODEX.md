# CODEX.md - Instructions for OpenAI Codex / GitHub Copilot / Cursor

## 📌 Project Overview
- **Project Name**: PV Brasil Importação - Web Application Redesign
- **Type**: Institutional Wholesale Product Showcase & Corporate Site
- **Tech Stack**:
  - **Framework**: React 19 (`react`, `react-dom`)
  - **Build Tool**: Vite 8 (`vite`, `@vitejs/plugin-react`)
  - **Routing**: React Router 7 (`react-router-dom`)
  - **Styling**: TailwindCSS 3 with custom theme tokens (`tailwind.config.js`)
  - **Icons**: Lucide React / SVG icons

---

## 🎨 Design System & Styling Rules
- **Color Palette**:
  - `deep-navy` (`#0A192F`): Main background
  - `surface-dark` (`#112240`): Card and container backgrounds
  - `electric-cyan` (`#00D8FF`): Primary brand accent & highlights
  - `on-surface` (`#E0E3E5`): Primary body text
  - `outline` (`#8892B0`): Muted text and borders
- **Aesthetics**: Glassmorphism, smooth hover transitions, sleek dark mode theme.
- **Responsive**: Full mobile, tablet, and desktop responsiveness.

---

## ⚠️ Critical Business Rules
1. **NO PRICES**: This is an institutional B2B wholesale catalog. Products MUST ONLY display **Photo**, **Name**, and **SKU Code**. NEVER display prices.
2. **Product Photos**: Ensure image containers use `object-contain` with clean neutral backgrounds to prevent aspect ratio distortion or stretching.
3. **Data Source**: Product listings and catalog data are loaded via static JSON (`/data/catalog.json`) in memory for ultra-fast, zero-delay client rendering.

---

## 📂 Project Directory Map
```
/home/luiz/redesign-pvbrasil-react/
├── public/                # Static assets & catalog data (/data/catalog.json)
├── src/
│   ├── components/        # Reusable UI components (Navbar, Footer, etc.)
│   ├── pages/             # Route pages (Home, About, Location, Partners, Products)
│   ├── App.jsx            # Main app router component
│   ├── index.css          # Tailwind CSS directives & global styles
│   └── main.jsx           # React app entry point
├── package.json           # Scripts & dependencies
├── tailwind.config.js     # Custom design tokens & colors
└── vite.config.js         # Vite configuration
```

---

## 🛠️ Commands
- **Development Server**: `npm run dev`
- **Production Build**: `npm run build`
- **Linting**: `npm run lint`
- **Preview Build**: `npm run preview`
