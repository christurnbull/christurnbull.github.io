# LB-Tribal Project

## Overview

LB-Tribal is a LoopBack 4 based REST API application designed to manage educational courses and job vacancies data. This application serves as an integration layer between different systems managing course offerings, apprenticeships, and job vacancies.

## Features

### Course Management
- Comprehensive course information storage including:
  - Course details (name, code, accreditation)
  - Schedule information (start dates, duration, times)
  - Cost and availability details
  - Course content and assessment methods
  - Location relationships
  - Topic classifications

### Vacancy Management
The application handles multiple vacancy formats:

1. **GOV.UK Apprenticeships**:
   - Interfaces with the UK government's apprenticeship service
   - Handles standardized apprenticeship postings
   - Manages required fields like Standard LARS codes, qualifications, and disability confident information

2. **HubSpot Vacancies**:
   - Integration with HubSpot CRM for job vacancies
   - Tracks application details and employer information

3. **GMFJ (Greater Manchester Jobs & Futures) Vacancies**:
   - Regional job posting format support

### Location Management
- Stores location data with address and postal code information
- Provides geographic context for courses and vacancies

## Technical Stack

- **Framework**: LoopBack 4 (TypeScript-based REST API framework)
- **Database**: MySQL (indicated by MySQL-specific data type configurations)
- **Architecture**: Model-Repository-Controller pattern with:
  - Entity models with relationships
  - REST API endpoints
  - Repository-based data access

## Integration Points

The system appears to integrate with:

- GOV.UK Apprenticeship Service API
- HubSpot CRM
- Tribal (possibly an education management system)
- Postal code validation services

## Deployment

The application runs on port 3001 in development mode and 3002 in production, with configurable host settings via environment variables.

## API Documentation

API documentation is available through the built-in LoopBack Explorer at the `/explorer` endpoint when the application is running.
