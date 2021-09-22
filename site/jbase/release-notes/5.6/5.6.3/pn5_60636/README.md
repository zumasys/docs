# PN5_60636

<PageHeader />

## Description

Record locking not case insensitive

### Previous Release Behavior

Under D3 emulation, item locks were not case insensitive.

READU/READVU/MATREADU would not respect locks on differently cased IDs.

### Current Release Behavior

Record locks are case insensitive.

We always store an upper case version of the ID.

Note: This case insensitivity matches D3 which means it is ALWAYS case insensitive regardless of CASING ON/OFF or CASE ON/OFF.

Back to [5.6.3 Release Notes](./../README.md)

<PageFooter />
