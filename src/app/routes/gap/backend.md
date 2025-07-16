# Gateshead Assessment Profile Web App

## Backend Overview

The backend is a secure, high-performance platform built with Fastify that provides authentication, user management, and data storage capabilities. The system is designed with security and scalability in mind, implementing modern authentication practices and a clean architecture that separates concerns across various modules.

## Technology Stack

### Core Technologies
- **Fastify**: High-performance web framework for Node.js
- **TypeScript**: For type safety and improved developer experience
- **Drizzle ORM**: Modern, lightweight SQL ORM for database operations
- **SQLite**: Lightweight, file-based relational database
- **Zod**: TypeScript-first schema validation library
- **JWT (JSON Web Tokens)**: For secure authentication and authorization
- **Mailjet**: For transactional emails including verification and password reset

### Development Tools
- **TSX**: For TypeScript execution with watch mode
- **TSUP**: For bundling TypeScript applications
- **OpenAPI**: For API documentation and client generation
- **Drizzle Kit**: For database migrations and schema management

## Architecture

The application follows a modular architecture pattern that separates concerns and promotes maintainable code:

### Core Components

#### Authentication System
The platform implements a robust authentication system with features including:

- JWT-based authentication with secure token handling
- Email verification workflow
- Password recovery mechanisms
- Account management (signup, login, logout)
- Advanced JWT security implementation following **OWASP** best practices:
  - **Token Sidejacking Prevention**: Uses a dual-security approach combining Bearer authentication header with a fingerprint stored in hardened HttpOnly cookies (Secure + SameSite + Max-Age)
  - **CSRF Protection**: Implements nonce verification where a SHA256 hash of a secure fingerprint is stored in the JWT payload and verified against the cookie value
  - **Token Revocation Strategy**: Overcomes JWT's inherent lack of built-in revocation by requiring both the JWT token and fingerprint cookie to be present, enabling effective logout by clearing either
  - **Information Disclosure Prevention**: Minimizes JWT payload content to only essential data (userId)
  - **Secure Storage Requirements**: Enforces storing JWTs in sessionStorage or private variables in closures

#### Database Layer
- Uses Drizzle ORM for type-safe database operations
- Implements a migration system for database schema evolution
- Structured schema with proper indexing for performance
- JSON storage capabilities for flexible data structures
- **SQLite Benefits**:
  - **Serverless Architecture**: Eliminates the need for a separate database server process, reducing deployment complexity and operational overhead
  - **Zero Configuration**: Requires no setup or administration, simplifying deployment across different environments
  - **Self-contained**: The entire database resides in a single cross-platform file, making backups, version control, and deployment straightforward
  - **High Reliability**: ACID-compliant with robust transaction support, ensuring data integrity during critical operations
  - **Efficient Resource Usage**: Minimal memory and storage footprint makes it ideal for both development and production environments where resources may be constrained
  - **Embeddable Design**: Integrates directly into the application process, reducing network latency and improving performance for typical workloads

#### API Layer
- RESTful API design with consistent patterns
- OpenAPI/Swagger documentation built-in
- Type-safe endpoints using Zod validation
- Proper error handling and status codes
- **Auto-generated Angular API Client**:
  - TypeScript Angular client code automatically generated from OpenAPI specification
  - Seamless type safety between backend and frontend with shared interfaces
  - Eliminates manual API integration work and reduces human error
  - Immediate frontend adaptation to API changes through re-generation
  - Consistent API access patterns across the application
  - Developer-friendly with proper TypeScript typing and IntelliSense support

#### Security Features
- Bcrypt password hashing for secure credential storage
- Key Management Service (KMS) for cryptographic operations including secure random number generation
- Environment-specific configuration with separate dev/production settings
- CORS protection with origin validation
- **Schema Validation with Zod**:
  - Runtime type validation to prevent injection attacks and malformed data
  - Input sanitization and strict data format enforcement
  - Prevention of mass assignment (over-posting) vulnerabilities 
  - Protection against DoS attacks via payload size constraints
  - Guaranteed server-side validation that can't be bypassed by clients

#### Background Processing
- Cron job system for scheduled tasks
- Asynchronous email delivery

## Key Features

### User Management
- User registration with email verification
- Role-based permissions (admin vs. regular users)
- Profile management
- Organization tracking

### Data Storage
- Key-value storage system for administrative settings
- Specification storage for flexible configuration
- Blob storage for file management

### Email Communications
- Verification emails with secure tokens
- Password reset workflows
- Notifications to administrators for new user signups

## Security Innovations

### OWASP-Compliant JWT Authentication

The platform implements a sophisticated JWT security system following OWASP best practices to address the inherent statelessness vulnerabilities of traditional JWT implementations:

1. **Multi-layered Token Security**:
   - **None Algorithm Attack Prevention**: Uses @fastify/jwt which is not vulnerable to algorithm downgrade attacks
   - **Token Sidejacking Countermeasures**: Combines 256-bit fingerprint in HttpOnly cookies with JWT bearer tokens
   - **Token Revocation Strategy**: Overcomes JWT's stateless nature by requiring both the JWT token and fingerprint cookie to be present, enabling effective logout by clearing either
   - **Information Disclosure Protection**: Minimizes JWT payload content to only essential data (userId)
   - **Secure Storage Requirements**: Prevents XSS attacks by requiring proper client-side storage patterns

2. **Advanced Token Lifecycle Management**:
   - Secure token generation using cryptographically strong random values
   - Transaction-based verification and expiration handling
   - Automatic cookie clearing during logout operations
   - Refresh token mechanisms with proper security controls

### Additional Security Measures

3. **Transaction-based Security Operations**: Critical operations like password changes use database transactions to ensure data integrity and atomicity, preventing partial state updates during security-critical operations.

4. **Environment-specific Security Controls**: Implements different security configurations for development and production environments, with stricter controls in production including mandatory nonce verification.

5. **Comprehensive Schema Validation**: Uses Zod's runtime type checking to create a strong security boundary at the API level, preventing common vulnerabilities:
   - Input validation prevents SQL and command injection vectors
   - Schema enforcement blocks mass assignment/over-posting attacks
   - Size constraints protect against resource exhaustion and DoS attacks
   - Server-side validation ensures client-side security bypasses are ineffective

## Client Integration

The backend generates TypeScript Angular clients through OpenAPI, enabling seamless integration with frontend applications. This approach ensures type safety across the full stack and reduces API integration errors.

---

This platform represents a modern approach to building secure, scalable backend systems with an emphasis on developer experience and security best practices. The combination of high-performance components like Fastify with modern tooling creates a foundation that can scale with increasing demand while maintaining robust security measures.

Designed with extensibility in mind, the GAP platform can serve as the backend for various applications requiring user authentication and data management capabilities.