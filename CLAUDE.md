# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Gray LLC — an admin dashboard built with Vite 8 + React 19, Ant Design v5 for UI components, and React Router DOM v7 for routing. Uses `@ant-design/icons` for iconography.

## Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Production build (output to `dist/`)
- `npm run preview` — Preview production build locally
- `npm run lint` — ESLint (flat config, ESLint 9+)

## Architecture

- **Entry point**: `index.html` → `src/main.jsx` → `src/App.jsx`
- **Routing**: `App.jsx` wraps the app in `<BrowserRouter>` + `<ConfigProvider>` (Ant Design theme: primary `#f17547`, Jost font, 8px border radius). Routes defined via React Router DOM v7 `<Routes>`/`<Route>`.
- **Layout**: `src/layouts/DashboardLayout/` provides the shell (Header + Sidebar + main content area). Accepts `activeKey` prop to highlight the current sidebar nav item. Sidebar uses `<NavLink>` for client-side navigation.
- **Pages**: `src/pages/` — each page wraps its content in `DashboardLayout` with the appropriate `activeKey`.
- **Components**: `src/components/` — each component in its own folder with co-located `.jsx` + `.css` files (e.g., `StatCard/StatCard.jsx` + `StatCard/StatCard.css`).
- **Design tokens**: `src/theme/variables.css` defines all CSS custom properties (brand colors, accent palette, neutrals, text colors, typography, spacing, shadows, transitions). Components reference these variables rather than hardcoded values.
- **Styling**: Plain CSS with CSS custom properties from `variables.css`; no CSS modules or preprocessors. Global resets and Ant Design overrides live in `src/index.css`.
- **Fonts**: Jost (headings + body) and Poppins (navigation), loaded via Google Fonts in `index.html`.

## Tooling Notes

- Vite 8 with `@vitejs/plugin-react`
- ESLint flat config with `react-hooks` and `react-refresh` plugins
- `no-unused-vars` rule allows uppercase and underscore-prefixed variables
