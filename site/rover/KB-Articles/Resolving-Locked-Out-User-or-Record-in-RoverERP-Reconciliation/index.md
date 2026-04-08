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

- 1.Confirm that no other users are actively using the record

Check for background windows or secondary devices.

- 2.Navigate to System.D

- 3.Open User List

- 4.Locate the user who is locking the record

- 5.Check with the user and ask them to log out. If they are in the middle of processing data, you can end up mismatched/corrupt data.  The logoff command should only be used when a line is truly hung

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
