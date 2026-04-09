# Resolving Locked Records in Rover

<PageHeader />

## Module Overview

This document describes how to resolve **locked record issues** in Rover, such as reconciliation records that appear to be in use and cannot be accessed by a user. These issues are typically caused by active or orphaned user sessions.

Rover ERP relies on the **QM Database Service (qmsvc.exe)** to manage database access and user sessions.

---

## Audience & Prerequisites

**Intended Audience:**
- System Administrators
- IT Support
- Rover Support Staff

**Prerequisites:**
- Access to **System.D**
- Permission to view and log off users

---

## Common Scenario: User Locked Out of a Record

A user may be unable to access a record because Rover believes the record is already in use.

### Possible Causes

- Another user is actively using the record
- The same user has an open background window
- The user is logged in from another device
- A prior session did not close cleanly

---

## Resolution Procedure

### Unlocking a Locked Record

1. Confirm that no other users are actively using the record.
   - Check for background windows or secondary devices.
2. Navigate to **System.D**.
3. Open **User List**.
4. Locate the user who is locking the record.
5. Check with the user and ask them to log out. If they are in the middle of processing data, you can end up mismatched/corrupt data.  The logoff command should only be used when a line is truly hung.

> **Note:**  
> This process can be used to resolve other types of locked records in Rover.

---

## Best Practices & Prevention

> **Best Practice:**  
> Encourage users to close all Rover windows before logging out.

> **Best Practice:**  
> Periodically review **System.D -> User List** for stale sessions.

> **Common Pitfall:**  
> Attempting to resolve record locks without checking for orphaned sessions.

---

## Troubleshooting Checklist

- [ ] Verify no other user is actively in the record
- [ ] Check **System.D -> User List** for the affected user
- [ ] Log off the user holding the lock

---

## Glossary

| Term | Definition |
|---|---|
| System.D | Administrative system menu for user and session management |
| Locked Record | A record restricted to single-user access |
| Orphaned Session | A user session that remains active after an improper logout |

---

<PageFooter />
