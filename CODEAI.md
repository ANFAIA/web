# CODEAI.md

This file provides guidance to AI code assistants when working with this repository. Compatible with various AI coding tools including:
- Claude Code (claude.ai/code)
- Gemini CLI
- GitHub Copilot
- Cursor AI
- Codeium
- Other AI-powered development tools

## Common Development Commands

### Development Workflow
```bash
npm install          # Install dependencies
npm run dev         # Start development server at http://localhost:3000
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run ESLint checks
```

### Missing Development Scripts
- **No testing framework**: No `npm test` available - consider adding Jest, Vitest, or Playwright
- **No type checking script**: No standalone TypeScript checking - consider adding `npm run type-check`
- **No format script**: No Prettier configured - consider adding code formatting

## Architecture Overview

### Next.js 14 App Router Structure
This is a modern Next.js application using the App Router architecture (not Pages Router). The main application logic lives in a single large component at `/components/page.tsx`, which renders the entire ANFAIA website as a single-page application.

**Key architectural decisions:**
- **Single Page Component**: The entire site content is in `/components/page.tsx` (800+ lines)
- **Component Library**: Uses shadcn/ui pattern with Radix UI primitives in `/components/ui/`
- **Client-Side Rendering**: Main page uses `'use client'` directive for interactivity
- **Static Assets**: All images and content are static (no CMS or external data fetching)

### Component System
Based on **shadcn/ui** with these key patterns:
- **Variant-based design**: Components use `class-variance-authority` for styling variants
- **Composite components**: Card system exports multiple sub-components (Card, CardHeader, CardContent, etc.)
- **Forward refs**: All UI components properly forward refs for composition

### Styling Architecture
- **Tailwind CSS**: Primary styling with custom design tokens in `app/globals.css`
- **CSS Custom Properties**: Comprehensive theming system with light/dark mode support
- **Design System**: Consistent spacing, colors, and components following modern design patterns

## Code Patterns & Conventions

### File Naming Conventions
- **React components**: PascalCase with `.tsx` extension
- **Utilities**: camelCase with `.ts` extension
- **Styles**: kebab-case for CSS files
- **Static assets**: descriptive names with proper extensions

## Development Patterns

### State Management
- **Local state only**: Uses React `useState`/`useEffect` for simple UI interactions
- **No global state**: No Redux, Zustand, or Context for state management
- **Scroll tracking**: Custom useEffect for active navigation section detection

### Content & Data
- **Hardcoded content**: All text and data is static within components
- **External links**: Official documents link to Google Docs
- **Static images**: WebP optimized images in `/public/` directory
- **Spanish language**: Site is primarily in Spanish (`lang="es"` in layout)

### Component Organization
```
/components/
├── page.tsx           # Main application (entire site content)
└── ui/               # Reusable primitives
    ├── button.tsx    # Button with variants (default, outline, ghost, etc.)
    ├── card.tsx      # Composite card system
    ├── dialog.tsx    # Modal/dialog component
    └── input.tsx     # Form input component
```

## Key Files to Understand

### `/components/page.tsx`
- **Main component**: Contains all site sections (hero, areas, program, ethics)
- **Navigation logic**: Smooth scrolling and active section tracking
- **Interactive features**: Dropdown menus, modal dialogs, form handling
- **Animation**: Framer Motion animations throughout

### `/app/layout.tsx`
- **Root layout**: Defines HTML structure, metadata, and font loading
- **Metadata**: Title "ANFAIA" and description in Spanish
- **Typography**: Uses Inter font from Google Fonts

### `/app/globals.css`
- **Design tokens**: CSS custom properties for theming
- **Tailwind base**: Imports and custom layer configurations
- **Dark mode support**: Complete color system for light/dark themes

## Tailwind Configuration

Two config files exist (both are active):
- `tailwind.config.js` - Main configuration with custom animations
- `tailwind.config.ts` - Basic TypeScript configuration

The design system uses CSS custom properties for colors, allowing seamless theme switching.

## TypeScript Setup

- **Strict mode enabled**: Comprehensive type checking
- **Path aliases**: `@/*` points to project root
- **Next.js integration**: Uses Next.js TypeScript plugin

## ANFAIA-Specific Context

### Organization
ANFAIA (Asociación Nacional Faro, para la Aceleración de la Inteligencia Artificial) is a Spanish non-profit focused on AI advancement across:
- Culture and Art
- Health applications  
- Robotics/Automation
- Environmental Sustainability
- AI Ethics

### Key Features
- **Scholarship program**: Summer 2025 program with application deadlines
- **Official documents**: Links to Google Docs for legal notices, privacy policy
- **Contact**: info@anfaia.org
- **Ethical focus**: Emphasis on responsible AI development

### External Dependencies
- **Google Forms**: Newsletter signup integration
- **Google Docs**: Official document hosting
- **Static hosting**: Designed for platforms like Vercel

## AI Assistant Guidelines

### When Working with Components
- Follow the shadcn/ui pattern for new UI components
- Use `class-variance-authority` for component variants
- Maintain forward ref pattern for proper composition
- Keep UI components in `/components/ui/` directory

### When Modifying Styles
- Use Tailwind utility classes over custom CSS
- Add new design tokens to `app/globals.css` CSS custom properties
- Maintain the existing color scheme and spacing system
- Test both light and dark mode variations

### When Adding Features
- Consider if functionality belongs in the main `/components/page.tsx` or needs extraction
- Use React hooks for local state management
- Implement smooth animations with Framer Motion
- Ensure mobile-responsive design

### Content Guidelines
- Maintain Spanish language for primary content
- Update external links if documents change
- Optimize images to WebP format for performance
- Follow ANFAIA's focus areas and ethical guidelines

## Development Notes

- **No environment variables**: Currently no .env configuration needed
- **No backend**: Purely static frontend application  
- **No authentication**: Public informational website
- **Mobile-first**: Responsive design with Tailwind breakpoints
- **Performance**: Uses WebP images and Framer Motion for smooth animations
- **Static hosting**: Optimized for Vercel deployment
- **SEO**: Basic meta tags configured in layout.tsx