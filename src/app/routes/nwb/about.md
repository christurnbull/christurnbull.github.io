# Node WordPress Backup (NWB)

## Overview

Node WordPress Backup (NWB) is a sophisticated, modular Node.js application designed for efficient and secure WordPress site backups. Built with TypeScript, this system provides a comprehensive solution for backing up WordPress databases, uploads, and media files to secure cloud storage.

## Core Features

- **Database Backup**: Automated MySQL database backup with configurable retention policies
- **Media File Management**: Intelligent backup of WordPress media files with optimization
- **Upload Directory Handling**: Efficient backup of WordPress uploads directory
- **Incremental Backups**: Only backs up files that have changed since the last backup
- **Image Optimization**: Automatically optimizes and resizes images during backup
- **Cloud Storage Integration**: Seamless integration with S3-compatible storage providers
- **CLI Interface**: User-friendly command-line interface for backup and restore operations

## Technologies & Architecture

### Core Technologies
- **Node.js & TypeScript**: Provides a robust, type-safe foundation
- **AWS SDK**: Integrates with S3-compatible storage for secure, scalable storage
- **Sharp**: High-performance image processing and optimization
- **Commander.js**: Clean CLI implementation for user interaction
- **zlib**: Efficient compression of backup artifacts

### Architectural Highlights

#### Modular Component Design
The system is built around specialized modules:

- **Database Backup**: Handles MySQL database exports with secure credential management
- **Framework Backup**: Manages WordPress core files and configuration
- **Upload Backup**: Efficiently manages user-uploaded content
- **Image Backup**: Implements advanced image optimization and management

#### Manifest-Based Backup Strategy
The system employs a manifest-based approach for tracking file metadata, which:
- Reduces storage requirements by implementing intelligent incremental backups
- Preserves file modification timestamps for accurate restoration
- Uses efficient binary serialization for manifest storage

#### Advanced Image Management

The image backup subsystem offers:
- **Intelligent Deduplication**: Only stores original images while tracking derivatives
- **Size Capping**: Automatically resizes oversized images while preserving quality
- **Format Optimization**: Converts between image formats for optimal storage
- **Symbolic Linking**: Uses symbolic links for efficient storage of WordPress image variants

## Security Considerations

- **Environment-Based Authentication**: Secure credential management using environment variables
- **Password Path Protection**: Support for secure password files rather than hardcoded credentials
- **Compression & Encryption**: Data is compressed during transfer and storage
- **Minimal Permissions**: Follows principle of least privilege for database interactions

## Implementation Highlights

### Incremental Backup Logic
The system intelligently compares existing backups with current files:
```typescript
// Only upload files that are new or modified
newManifest.metadata.forEach(md => {
    const exMd = exMds.find(ex => ex.abs === md.abs)
    if (!exMd || exMd.modified.getTime() < md.modified.getTime()) {
        puts.push(md)
    }
});
```

### Efficient Image Handling
Advanced image processing with smart derivative management:
```typescript
// Create derived images based on shape and size requirements
if (shape === 's') {
    await resizeImage(original.abs, squareAbs, squareSize, squareSize)
} else if (shape === 'l') {
    await resizeImage(original.abs, landscapeAbs, longPx, shortPx)
} else {
    await resizeImage(original.abs, portraitAbs, shortPx, longPx)
}
```

### Manifest Packing for Optimal Storage
Efficient storage of backup metadata:
```typescript
export const packManifest = (manifest: UploadManifest) => {
    const numProps = manifest.packedPropCount
    const { metadata, ...head }: any = manifest;
    const packedArr: (string | number)[] = new Array(numProps * manifest.metadata.length)
    // ... efficient packing logic
    return packed
}
```

## Development & Future Enhancements

The system is designed for extensibility with planned enhancements:
- Year/site/multi-site backup and restore functionality
- Improved CLI feedback and logging
- Integration with additional storage providers
- Support for WordPress multisite installations

## Conclusion

Node WordPress Backup represents a modern, efficient approach to WordPress site backup and management. Its thoughtful architecture balances performance, storage efficiency, and security while providing a developer-friendly interface for customization and extension.

This project demonstrates proficiency in:
- Node.js/TypeScript development
- Cloud storage integration
- Database management
- Image processing and optimization
- CLI application development
- Creating maintainable, modular software architecture