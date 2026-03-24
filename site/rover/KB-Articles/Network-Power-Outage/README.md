# Resolving Login Issues After Power or Network Outages in Rover

<PageHeader />

## Module Overview

This document describes how to resolve issues where **multiple users are unable to log into Rover** following a **power outage or network interruption**. These issues are typically caused by orphaned user sessions or the **QM Database Service** not fully recovering.

Rover ERP relies on the **QM Database Service (qmsvc.exe)** to manage shared memory, database access, and user sessions.

---

## Audience & Prerequisites

**Intended Audience:**
- System Administrators
- IT Support
- Rover Support Staff

**Prerequisites:**
- Access to **System.D**
- Server access to restart services or reboot the system

---

## Background Service: QM Database Service (qmsvc.exe)

The **QM Database Service (`qmsvc.exe`)** is the core Windows service for **OpenQM**, the multivalue database used by Rover ERP.

### Responsibilities

- Creates and manages **shared memory**
- Manages:
  - File access
  - Database processes
  - User sessions

> **Important:**
> If this service is not running or is unstable, users may be unable to log in or release record locks.

---

## Common Scenario: Users Cannot Log In After an Outage

### Symptoms

- Multiple users cannot log into Rover
- Users appear logged in when they are not
- Records remain locked with no visible owner
- General system instability

### Likely Causes

- Orphaned user sessions
- Shared memory not fully reinitialized
- Database services not fully restarted

---

## Resolution Procedure

### Restoring User Access After an Outage

1. Review **System.D -> User List** to identify active or orphaned sessions.
2. Log off any users with stale or orphaned sessions.
3. Restart the **QM Database Service (qmsvc.exe)**.
4. If issues persist:
   - Perform a **full server restart**.

> **Important:**
> Restarting the QM Database Service or rebooting the server will disconnect all users and reset shared memory.

---

## Best Practices & Prevention

> **Best Practice:**
> After a power or network outage, verify that the **QM Database Service** is running before users attempt to log in.

> **Best Practice:**
> Bring users back online gradually after a restart.

> **Common Pitfall:**
> Attempting to resolve widespread login issues without restarting the QM Database Service.

---

## Troubleshooting Checklist

- [ ] Check **System.D -> User List** for orphaned sessions
- [ ] Log off stale user sessions
- [ ] Verify **QM Database Service (qmsvc.exe)** is running
- [ ] Restart **QM Database Service**
- [ ] Restart the server if necessary

---

## Glossary

| Term | Definition |
|---|---|
| System.D | Administrative system menu for user and session management |
| OpenQM | Multivalue database management system developed by Rocket Software |
| QM Database Service (qmsvc.exe) | Core OpenQM Windows service responsible for shared memory and user sessions |
| Orphaned Session | A user session that remains active after an improper logout or outage |

---

<PageFooter />
