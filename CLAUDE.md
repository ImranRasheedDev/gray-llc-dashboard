# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Gray LLC — a Vite + React 19 application with Ant Design (v5) for UI components and React Router DOM (v7) for routing. Currently in early setup phase; Ant Design and React Router are installed but not yet integrated.

## Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Production build (output to `dist/`)
- `npm run preview` — Preview production build locally
- `npm run lint` — ESLint (flat config, ESLint 9+)

## Architecture

- **Entry point**: `index.html` → `src/main.jsx` → `src/App.jsx`
- **Styling**: Plain CSS with native nesting; CSS custom properties for theming; light/dark mode via `prefers-color-scheme`
- **Static assets**: `public/` for unprocessed files, `src/assets/` for import-resolved files

## Tooling Notes

- Vite 8 with `@vitejs/plugin-react`
- ESLint flat config with `react-hooks` and `react-refresh` plugins
- `no-unused-vars` rule allows uppercase and underscore-prefixed variables
