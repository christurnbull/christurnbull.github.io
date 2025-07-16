# Kiowa

## Advanced Web Server Security & Log Analysis Tool

## Overview

Kiowa is a robust, TypeScript-based command-line utility designed for system administrators and DevOps professionals who need advanced log analysis and automated security enforcement for web servers. Built specifically for Linux environments, Kiowa integrates with iptables to provide real-time monitoring, malicious activity detection, and automated IP blocking for enhanced server protection. It is a useful ally for Apache HTTP Server.

## Core Features

### Log Monitoring & Analysis

- **Real-time Log Tailing:** Monitor multiple virtual host logs simultaneously with domain filtering
- **Historical Log Analysis:** Retrieve and analyze log entries within specified time frames (minutes or days)
- **Smart Log Parsing:** Convert Common Log Format (CLF) entries into structured data with enhanced metadata
- **Geolocation Integration:** Automatically resolve IP addresses to country codes and names for geographical insights
- **Bot Detection:** Identify and categorize crawler and bot traffic using advanced user agent analysis

### Security Automation

- **Malicious Request Detection:** Pattern-based identification of suspicious or malicious requests
- **Automatic IP Blocking:** Configure thresholds to automatically block IPs making repeated suspicious requests
- **Country-based Filtering:** Whitelist or blacklist traffic based on country of origin
- **Attack Pattern Rules:** Configurable rule system to identify common attack vectors (e.g., WordPress login attempts)
- **Firewall Management:** Command-line interface for managing iptables firewall rules

## Technical Architecture

Kiowa is built using modern TypeScript with a focus on modularity and extensibility. The system architecture consists of several key components:

### Command Line Interface

The application uses Commander.js to provide an intuitive CLI with multiple commands and subcommands. The main commands include:

- `tail` / `t`: Real-time monitoring of log files
- `cat` / `c`: View historical log entries
- `firewall` / `f`: Manage iptables firewall rules
  - `block` / `b`: Block specific IP addresses
  - `unblock` / `u`: Remove blocks for specific IPs
  - `malicious` / `m`: Automatically detect and block suspicious activity
  - `purge` / `p`: Remove all Kiowa-created firewall rules
  - `export` / `e`: Export firewall rules for backup or transfer

### Log Processing Engine

The log processing components transform raw log data into actionable intelligence:

- **Parser System:** Converts Common Log Format entries into structured Kiowa format
- **Enrichment Pipeline:** Adds geolocation data, bot detection, and user agent parsing
- **Presentation Layer:** Formats log entries for human-readable output with customizable truncation

### Security Enforcement

Kiowa's security system includes:

- **Rule Engine:** Configurable rules for identifying suspicious behavior patterns
- **Threshold System:** Configurable attempt counts and time windows for triggering blocks
- **Firewall Integration:** Direct management of iptables rules with specialized comment format for tracking

## Technologies Used

- **TypeScript:** Strongly-typed language providing enhanced developer experience and code reliability
- **Node.js:** Runtime environment for server-side JavaScript execution
- **Commander.js:** Comprehensive solution for building command-line interfaces
- **clf-parser:** Library for parsing Common Log Format entries
- **geoip-lite:** IP geolocation database and lookup functionality
- **isbot & crawler-user-agents:** Advanced bot and crawler detection
- **ua-parser-js:** User agent parsing for browser and OS identification
- **iptables:** Linux kernel firewall integration through system commands
- **tsx:** TypeScript execution engine used for rapid development and testing
- **pkg:** Packaging tool for creating standalone executable binaries for deployment

## Security-Conscious Design

Kiowa employs several security-focused design patterns that make it particularly valuable for production environments:

### 1. Non-Intrusive Monitoring

Kiowa reads log files without modifying them, ensuring the integrity of server logs while providing real-time analysis.

### 2. Audit-Friendly Rule Management

All firewall rules created by Kiowa include specially formatted comments that contain:
- Timestamp of rule creation
- Whether the rule was manually or automatically created
- Country code of the blocked IP (when available)
- Reference to the specific detection rule that triggered the block

This metadata enables precise auditing of security events and justification for all blocking actions.

### 3. Graceful Privilege Handling

While Kiowa requires sudo privileges for firewall manipulation, it minimizes the attack surface by:
- Using targeted command execution only for specific firewall operations
- Implementing careful input sanitization before constructing privileged commands

### 4. Persistent & Portable Firewall Rules

Kiowa allows exporting and importing rules in a format compatible with iptables, enabling:
- Backup of security configurations
- Transfer of rules between systems
- Restoration of rules after server reboots

### 5. Geographic Intelligence

The country-based whitelist system enables organizations to implement geographic security policies while maintaining access for legitimate users from specific regions.

## Use Cases

- **Managed Service Providers:** Monitor multiple client websites hosted on a single server
- **Security Operations:** Quickly identify and respond to suspicious activity across domains
- **DevOps Automation:** Integrate with monitoring systems to automate security responses
- **Server Hardening:** Implement protective measures against common web attacks
- **Traffic Analysis:** Gain insights into traffic patterns, bot activity, and potential security issues

## Future Development

Planned enhancements include:

- Integration with additional firewall systems beyond iptables
- Advanced reporting and visualization features
- Machine learning-based anomaly detection for identifying new attack patterns
- Rate limiting capabilities for fine-grained traffic control
- Expanded rule library for detecting emerging threats

## License

Kiowa is open-source software licensed under MIT.
