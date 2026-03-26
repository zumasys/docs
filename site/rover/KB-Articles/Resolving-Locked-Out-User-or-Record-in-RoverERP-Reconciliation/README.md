# Resolving Locked Out User or Record in RoverERP Reconciliation

<PageHeader />

<badge text='Administration' vertical='middle' />

## Problem Statement

A user is locked out of a reconciliation record in RoverERP and cannot access or edit the record.

---

## Symptoms

- User is unable to access or modify a reconciliation record
- The system indicates the record is locked, preventing further action

---

## Cause

- The record may be locked due to an active or incomplete session by the user
- This can occur if the user did not log off properly or if the session was interrupted

---

## Resolution Steps

### 1. Access the User List

- Navigate to: System.D > User List

### 2. Locate the Locked User

- Find the user who is locked out of the record in the list

### 3. Log Off the User

- Select the locked user and click "Logoff" to terminate their session

### 4. Retry Accessing the Record

- Have the user attempt to access the reconciliation record again

---

## Verification

- [ ] Confirm that the user can now access and edit the reconciliation record
- [ ] Ensure that the lock on the record has been released

---

## Note

- This process can also be used to resolve other locked records in RoverERP caused by user sessions

---

## Additional Information

- If the issue persists after logging off the user, contact RoverERP support for further assistance
- Regularly monitor user sessions to prevent record locking issues

<PageFooter />
