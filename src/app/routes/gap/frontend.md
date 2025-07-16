# Gateshead Assessment Profile Web App

## Frontend Overview

The frontend is a modern, secure, and feature-rich Angular application designed to provide a seamless user interface for interacting with the GAP backend services. This document outlines the architecture, technology stack, and key features of the frontend application.

## Technology Stack

- **Framework**: Angular with standalone component architecture
- **UI Libraries**: Angular Material, Tailwind CSS
- **State Management**: RxJS for reactive state management
- **Form Validation**: Angular Reactive Forms with client-side validation
- **HTTP Client**: Angular's HttpClient with auto-generated TypeScript interfaces
- **Rich Text Editing**: NGX Editor for rich text content creation
- **Data Processing**: XLSX for dynamic spreadsheet creation
- **Authentication**: JWT-based authentication with secure storage
- **Offline Storage**: Dexie.js (IndexedDB wrapper) for client-side data persistence
- **Multimedia Handling**: YouTube and Vimeo player integrations
- **Cryptography**: Browser Crypto API, multiformats/hashes, and @scure/base libraries
- **Activity Streams**: Activity Streams protocol for data modeling

## Architecture

The frontend follows a modular architecture with clear separation of concerns:

### Core Structure

- **Components**: Reusable UI building blocks organized by functionality
- **Services**: Centralized business logic and data access
- **Routes**: Feature-based page components with lazy loading
- **Interceptors**: HTTP request/response transformation and error handling
- **Directives**: Custom DOM behavior extensions
- **Pipes**: Data transformation utilities
- **Resolvers**: Data pre-fetching before route activation

### Key Architectural Patterns

#### Modular Design
- Standalone components for better tree-shaking and build optimization
- Feature-based organization of related components, services, and utilities
- Clean separation between presentation and business logic

#### API Integration
- Auto-generated Angular services from OpenAPI specification
- Type-safe API calls with shared interfaces between frontend and backend
- Centralized error handling and HTTP interceptors for authentication

#### Data Modeling
- Implementation of the Activity Streams protocol for structured data representation
- Semantic modeling of content, actions, and relationships
- Hashtag-based linking system to create connections between resources
- Extensible object model supporting various content types

## Key Features

### Authentication and Authorization
- Complete self-service onboarding with signup, email verification, and password reset
- Administrative moderation capabilities to control user access
- JWT token management with secure storage practices
- Password strength enforcement and generation
- Protected routes with authentication guards
- Cross-tab authentication state synchronization to maintain consistent user experience

### User Experience
- Responsive design for various screen sizes
- Material Design components for consistent UI/UX
- Strives for WCAG 2.0 AA accessibility compliance
- Progressive loading indicators for network operations
- Comprehensive form validation with immediate feedback
- Dynamic theming support
- Search engine optimization with dynamic meta tag management

### Data Management
- Client-side caching and offline capabilities with IndexedDB
- Optimized data synchronization with the backend
- Local storage encryption for sensitive data
- Efficient state management using RxJS observables
- Cross-browser tab state synchronization using BroadcastChannel API

### Media Handling
- Browser-based WebP image conversion and optimization
- Multiple resolution support for responsive images
- Video integration with YouTube and Vimeo players
- Document handling and processing
- Unified file upload system based on Activity Streams protocol

### Security Features
- CSRF protection through proper token handling
- XSS prevention with Angular's built-in sanitization
- Secure cryptographic operations using the Web Crypto API
- Sensitive data protection in client-side storage
- Key derivation functions for enhanced password security

## Application Workflow

The application provides several key workflows:

1. **Authentication Flow**:
   - User registration with email verification
   - Secure login with JWT tokens
   - Password reset and change capabilities
   - Session management and secure logout

2. **Content Management**:
   - Assessment creation and management
   - Document and image uploads with preview
   - Rich text editing and formatting

3. **Admin Functions**:
   - User management interface
   - System configuration settings

## Integration with Backend

- **Type-Safe API Integration**: Uses auto-generated TypeScript Angular client from the backend's OpenAPI specification
- **Bi-directional Type Safety**: Shares interface definitions between frontend and backend
- **Error Handling**: Consistent error handling patterns across all API interactions
- **Authentication**: Coordinated JWT authentication flow with the backend security model

## Development Features

- **Developer Experience**:
  - HMR (Hot Module Replacement) for rapid development
  - ESBuild for fast compilation times
  - Component generator shortcuts for productivity
  - TypeScript strict mode for robust typing

- **Build Optimization**:
  - Production builds with advanced tree-shaking
  - Bundle analysis capabilities
  - Tailwind CSS optimization for minimal CSS footprint

## Deployment

The Angular application is built into static assets that can be served by any web server. The production build process optimizes all assets for performance and minimal bundle size, ensuring fast loading times and efficient execution.