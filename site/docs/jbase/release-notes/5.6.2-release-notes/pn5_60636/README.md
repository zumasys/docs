# PN5_60636

**Created At:** 10/3/2017 9:07:34 AM  
**Updated At:** 11/22/2017 12:13:21 PM  
**Original Doc:** [pn5_60636](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60636)  


### Description

Record locking not case insensitive



### Previous Release Behavior

Under D3 emulation, item locks were not case insensitive.

READU/READVU/MATREADU would not respect locks on differently cased IDs.



### Current Release Behavior

Record locks are case insensitive.

We always store an upper case version of the ID.

Note: This case insensitivity matches D3 which means it is ALWAYS case insensitive regardless of CASING ON/OFF or CASE ON/OFF.
