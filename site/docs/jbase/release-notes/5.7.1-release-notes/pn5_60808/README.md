# PN5_60808

**Created At:** 10/17/2018 9:21:15 AM  
**Updated At:** 10/24/2018 9:11:24 PM  
**Original Doc:** [pn5_60808](https://docs.jbase.com/48420-5-7-1-release-notes/pn5_60808)  
**Original ID:** 344519  
**Internal:** Yes  

## Description

BASIC/CATALOG/DECATALOG commands to require an explicit item-list **[this patch has been reverted]**

### Previous Release Behavior

When a users does:

```
BASIC BP
CATALOG BP
```

all program in the BP file are compiled and cataloged. This behavior caused unwanted programs to be cataloged over the top of 'live' programs from other program libraries.

### Current Release Behavior

The BASIC, CATALOG and DECATALOG commands now require one of the following:

- an explicit item-list
- "\*" for all programs
- a preceding select-list

e.g.

```
BASIC BP *
CATALOG BP *
```
