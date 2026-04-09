# Common RoverERP Commands: Account Management

<PageHeader />

<badge text='Administration' vertical='middle' />

## Problem Statement

Users need to quickly switch between accounts or list available data accounts in RoverERP.

---

## Resolution Steps

Use the following commands at the RoverERP command prompt:

| Command | What it Does |
| --- | --- |
| `TO [AccountName]` | Switches to another account |
| `LIST QM.ACCOUNTS` | Gets a list of data accounts |

---

## Verification

- [ ] Confirm that `TO [AccountName]` switches to the expected account
- [ ] Confirm that `LIST QM.ACCOUNTS` returns the available data accounts

---

## Note

- Replace `[AccountName]` with the target account name exactly as defined in your environment

<PageFooter />
