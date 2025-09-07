# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MyoCare is a React + TypeScript + Vite healthcare platform application. It's built with modern React 19, TypeScript, and uses React Router for navigation. The application is designed to be multilingual (currently French with English translation structure) and follows a component-based architecture.

## Development Commands

- `pnpm dev` - Start development server with hot reload at http://localhost:5173
- `pnpm build` - Build for production (runs TypeScript compiler then Vite build)
- `pnpm lint` - Run ESLint on all TypeScript/TSX files
- `pnpm preview` - Preview production build locally

## Architecture Overview

### Component Organization
- **Layout Components** (`src/components/layout/`): Shared layout elements like Header and Footer
- **Pages** (`src/pages/`): Route-based page components (Landing, etc.)
- **Styles** (`src/styles/`): Global CSS with CSS custom properties design system

### Internationalization (i18n)
The application uses a custom TypeScript-based i18n system:
- **Structure**: `src/i18n/` contains types, translations, and utilities
- **Languages**: French (default), English, Dutch (ready for expansion)
- **Type Safety**: Full TypeScript support for translation keys
- **Usage**: Import from `src/i18n/index.ts` for translations and utilities

### Routing
- Uses React Router DOM v7 with BrowserRouter
- Route definitions in `App.tsx`
- Layout wrapper with Header/Footer around all routes

### Styling System
- **Design System**: CSS custom properties in `src/styles/global.css`
- **Theme**: Blue/green gradient theme (#3b82f6 to #10b981)
- **Typography**: Nunito font family (rounded, friendly design)
- **Colors**: Comprehensive gray scale + primary brand colors
- **Responsive**: Mobile-first approach with CSS media queries

## Technology Stack

- **Frontend Framework**: React 19.1.1 with React Router DOM 7.8.2
- **Language**: TypeScript ~5.8.3 with strict configuration
- **Build Tool**: Vite ^7.1.2
- **Linting**: ESLint ^9.33.0 with TypeScript and React plugins
- **Package Manager**: pnpm (uses pnpm-lock.yaml)

## TypeScript Configuration

The project uses `verbatimModuleSyntax: true` which requires:
- Type imports must use `import type { ... }` syntax
- Regular imports for values, type imports for types only
- Affects i18n types and any cross-module type dependencies

## Development Notes

- Logo file available at `/public/logo-transparent.png`
- Global styles imported in `App.tsx` (not `main.tsx`)
- Component-level CSS files co-located with their components
- French language is primary, platform designed for healthcare/care management
- No test framework configured yet