# Backend Services

The backend services use the Loopback framework to provide a robust, secure Content Management System built on modern web technologies. It provides a flexible platform for managing web content with a strong focus on security, scalability, and developer experience.

## Technology Stack

The Loopback Server leverages a powerful and modern technology stack:

- **Backend Framework**: LoopBack 4 - A highly extensible Node.js and TypeScript framework for building REST APIs
- **Database**: MySQL - Used for structured data storage with full-text search capabilities
- **Authentication**: Multi-strategy authentication system with JWT, Azure, and Google OAuth integration
- **Security**: Role-based access control (RBAC) with fine-grained authorization
- **API**: RESTful API with comprehensive OpenAPI documentation
- **TypeScript**: Used throughout for type safety and modern JavaScript features

## Key Features

- **Multi-strategy Authentication**: Supports JWT, Azure AD, and Google OAuth authentication methods for flexible user access
- **Fine-grained Authorization**: Role-based access control with custom voter patterns for granular permissions
- **Content Management**: Complete page, route, and tag management with full-text search capabilities
- **Content Versioning**: History tracking for content changes with the ability to restore previous versions
- **Media Management**: Support for image and document file uploads with metadata
- **Navigation Management**: Hierarchical navigation structure with dynamic menu building
- **SEO Optimization**: Built-in tools for managing meta tags, routes, and SEO-friendly content
- **Multi-environment Support**: Configuration options for development and production environments

## Architecture

The Loopback Server follows a clean architecture pattern with clear separation of concerns:

- **Models**: Define the data structures with properties, validations, and relationships
- **Repositories**: Implement data access patterns with transaction support
- **Controllers**: Handle HTTP requests and responses, implement business logic
- **Services**: Encapsulate reusable business logic and external integrations
- **Mixins**: Provide reusable functionality across multiple components
- **Sequence**: Custom request handling pipeline for authentication, error handling, and response formatting

The application implements the Repository pattern for data access, leveraging LoopBack's powerful ORM capabilities. The system utilizes dependency injection throughout, making components easily testable and replaceable.

A particularly notable architectural feature is the use of custom sequence handlers and middleware for processing HTTP requests, providing precise control over the request/response cycle and enabling features like custom header management and security controls.

## Security

Security is a primary focus of Thatcher, implemented through multiple layers:

- **JWT Authentication**: Secure token-based authentication with configurable expiration
- **OAuth Integration**: Support for Azure AD and Google authentication providers
- **CORS Protection**: Configurable CORS settings to prevent cross-origin attacks
- **Content Security Headers**: Implementation of security headers like X-Content-Type-Options
- **Role-based Authorization**: Granular permission control through role-based access and custom authorization voters
- **Owner-based Access Control**: Content creators have special permissions for their own content
- **Environment Variable Security**: Critical configuration stored in environment variables
- **Password Security**: Bcrypt hashing for secure password storage
- **HTTPS Support**: Configured for secure HTTPS connections in production

The system employs a novel approach to authorization through custom voters that can make context-aware decisions based on user roles and content ownership, going beyond simple role checks.

## Client Integration

Thatcher is designed as a headless CMS with multiple integration options:

- **RESTful API**: Comprehensive API with detailed OpenAPI documentation
- **API Explorer**: Built-in API explorer in development environments (disabled in production)
- **CORS Support**: Configured for cross-origin requests with appropriate security controls
- **Authentication Flow**: Support for various client authentication workflows including browser redirects
- **JWT Tokens**: Simple token-based authentication for API clients
- **Content Delivery**: Structured content delivery optimized for front-end consumption
- **Webhooks**: Support for content change notifications (through the history service)

The API is designed to be consumed by any front-end technology, with special consideration for modern JavaScript frameworks. The system includes specific redirect handling for single-page applications, making it particularly well-suited for Angular, React, or Vue frontends.

---

The Loopback Server represents a modern approach to content management, combining the flexibility of a headless CMS with the security and structure of enterprise systems. Its architecture makes it suitable for projects ranging from small websites to large, complex content platforms with multiple contributors and strict security requirements.