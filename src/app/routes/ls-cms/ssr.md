# Public Frontend

The public frontend is a modern, performance-optimized frontend application built for content delivery with an emphasis on SEO, security, and developer experience. Utilizing server-side rendering (SSR), it delivers high-performance web pages with optimized search engine visibility while maintaining the interactivity of a single-page application.

## Technology Stack

- **Frontend Framework**: Angular - A platform for building mobile and desktop web applications
- **Server-Side Rendering**: Angular Universal - For improved performance and SEO optimization
- **HTML Sanitization**: DOMPurify - A modern HTML sanitizer for XSS protection
- **Analytics**: Angulartics2 with Google Tag Manager integration
- **HTTP Communication**: Angular HttpClient with custom interceptors
- **Routing**: Angular Router with SEO-friendly configuration
- **API Integration**: Auto-generated API clients from OpenAPI specifications
- **CSS Preprocessor**: SCSS for advanced styling capabilities
- **TypeScript**: Strongly-typed language enhancing code quality and developer experience

## Key Features

- **Server-Side Rendering (SSR)**: Pre-renders pages on the server for faster initial loading and improved SEO
- **Dynamic Page Resolution**: Intelligently resolves content based on URL paths for flexible routing
- **SEO Optimization**: Comprehensive meta tag management, canonical URLs, and OpenGraph support
- **Content Security**: HTML sanitization through DOMPurify to prevent XSS attacks
- **Responsive Design**: Adapts to various screen sizes and devices
- **Analytics Integration**: Built-in Google Tag Manager for comprehensive user behavior tracking
- **Performance Optimization**: Efficient content delivery through optimized rendering process
- **Dynamic Navigation**: Hierarchical navigation structure with flexible tree traversal
- **Environment Configuration**: Separate configurations for development and production environments
- **Error Handling**: Dedicated error page and graceful degradation

## Architecture

Thatcher SSR follows a modern, modular Angular architecture with several key design patterns:

- **Component-Based Structure**: Encapsulated UI components with clear responsibilities
- **Service Layer**: Dedicated services for business logic, data fetching, and cross-cutting concerns
- **Resolver Pattern**: Pre-fetches data before route activation for improved user experience
- **Repository Pattern**: Abstracted data access through API services generated from OpenAPI specs
- **Singleton Services**: Global state management through injectable services
- **Lazy Loading**: Modules are loaded on demand for optimized performance
- **Universal Rendering**: Server-side rendering with seamless transition to client-side interactivity

The application features a novel approach to content rendering through the NftViewer system, which dynamically processes and displays content retrieved from the backend API. The system utilizes a resolver-based architecture to prefetch necessary data before rendering, reducing perceived loading times and improving user experience.

The component hierarchy is designed for maximum reusability, with generic components that can be configured and composed to create complex UIs while maintaining clean separation of concerns.

## Security

Security is a fundamental aspect of the Thatcher SSR architecture, implemented through multiple layers:

- **Content Sanitization**: Custom DOMPurify integration for both client and server-side HTML sanitization
- **XSS Protection**: Comprehensive sanitization of user-generated content before rendering
- **Server-Side Security Headers**: Implementation of security headers for enhanced protection
- **Environment-Specific Configuration**: Sensitive configuration parameters isolated in environment files
- **HTTP-Only Cookies**: Secure authentication implementation
- **Content Security Policy**: Strict CSP setup through secure rendering pipeline

A particularly novel security approach is the implementation of a custom server-side DOMPurify sanitizer that ensures content is sanitized during the server rendering process, eliminating the risk of XSS vulnerabilities even before content reaches the client. This dual-layer sanitization strategy (both server and client-side) provides robust protection against content injection attacks.

## Deployment

Thatcher SSR features a robust and flexible deployment architecture designed for reliability and scalability:

- **Angular Universal Prerendering**: Build-time prerendering for static content optimization
- **Server-Side Rendering**: Node.js Express server for dynamic SSR capabilities
- **Production Optimization**: Advanced bundling and minification for reduced payload sizes
- **Environment Configuration**: Separate production and development environments with appropriate settings
- **API Endpoint Configuration**: Configurable backend API endpoints for different deployment environments
- **Asset Optimization**: Efficient asset handling and caching strategies
- **Build Automation**: Streamlined build process for consistent deployments
- **Cloud-Ready Architecture**: Designed for deployment to modern cloud platforms and services

The application's deployment process is streamlined through Angular CLI's build system, allowing for easy configuration of environment-specific settings. The production build includes optimizations such as ahead-of-time compilation, tree shaking, and minification to ensure optimal performance in production environments.

---

Thatcher SSR represents a modern approach to frontend development that balances performance, security, and developer experience. Its architecture makes it particularly suitable for content-focused applications where SEO, security, and rendering performance are critical requirements.