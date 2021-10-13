# PN1310

<PageHeader />

## Description

In "universe" emulation, a SELECT file WITH @ID = 'key1' is the equivalent of SELECT file WITH @ID 'key1'.  
The latter does not perform a full file scan.

## Previous Release Behavior

```
SELECT mdf WITH @ID = '001''002' WITH FIRSTNAME = 'Peter'
```

Scans the entire file instead of just selecting items 001, 002

## Current Release Behavior

```
SELECT file WITH @ID = *quoted_itemlist* 
```

is now the same as:

```
SELECT file WITH @ID *quoted_itemlist*
```

Back to [5.8.4 Release Notes](./../README.md)

<PageFooter />
