# Overview

This is a German sports tournament website for DAHSC 2026, a prestigious football tournament featuring 40 teams, 800+ players, and 5000+ visitors. The site serves as a marketing platform for sponsors and information hub for participating teams. Built as a full-stack web application with a React frontend and Express backend, it handles contact form submissions and provides downloadable sponsor materials.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React with TypeScript**: Modern component-based UI using functional components and hooks
- **Routing**: Wouter for lightweight client-side routing with single-page navigation
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **State Management**: React Query (TanStack Query) for server state management and API calls
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Express.js Server**: RESTful API with TypeScript for type safety
- **Storage Layer**: Abstract storage interface with in-memory implementation (MemStorage) for development
- **Middleware**: Custom logging, JSON parsing, and error handling middleware
- **Development Setup**: Vite middleware integration for seamless full-stack development

## Data Storage
- **Database Schema**: Drizzle ORM with PostgreSQL schema definitions for users and contact submissions
- **Current Implementation**: In-memory storage for development with UUID-based record identification
- **Migration Support**: Drizzle Kit configuration for database migrations and schema management

## API Design
- **Contact Submission**: POST `/api/contact` endpoint with Zod validation for form data
- **Download Service**: GET `/api/sponsor-materials` for PDF material downloads
- **Error Handling**: Structured error responses with German localization
- **Request Logging**: Automatic API request logging with timing and response data

## UI Component System
- **Design System**: shadcn/ui components with New York style variant
- **Theming**: CSS custom properties for consistent color scheme and spacing
- **Typography**: Custom font stack with Exo as primary typeface
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities

## Build and Deployment
- **Development**: Single command startup with concurrent frontend/backend development
- **Production Build**: Vite frontend build with esbuild backend bundling
- **Static Assets**: Public directory serving with Vite integration
- **Environment**: Environment variable configuration for database connections

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL provider (@neondatabase/serverless)
- **Connection**: Environment-based DATABASE_URL configuration

## UI Framework Dependencies
- **Radix UI**: Comprehensive primitive component library for accessible UI elements
- **Tailwind CSS**: Utility-first styling framework with custom configuration
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **TypeScript**: Full-stack type safety with shared schema definitions
- **ESLint/Prettier**: Code quality and formatting (implied by project structure)
- **Replit Integration**: Development environment plugins for runtime error handling

## Third-party Integrations
- **Font Services**: Google Fonts integration for custom typography
- **Image Services**: Unsplash for placeholder images and visual content
- **Session Management**: Connect-pg-simple for PostgreSQL session storage (configured but not actively used)