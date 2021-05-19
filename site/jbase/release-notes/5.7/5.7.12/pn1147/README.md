# PN1147

<PageHeader />

## Description

A file made up of keys (or fields) with values made up of hyphenated data, e.g. `nn-nnnnn`, do not return correct results on relational operators like `GT` or `LT`.

## Previous Release Behavior

`CREATE-FILE TESTFILE` with a right-justified ID dictionary and keys of:

```
* 01-0001
* 02-0001
* 02-0002
```

```
LIST TESTFILE WITH RID GT '02-0001'

TESTFO;E......

01-0001
02-0001
02-0002

 3 Records Listed
```

## Current Release Behavior

```
LIST TESTFILE WITH RID GT '02-0001'

TESTFILE......

02-0002

 1 Records Listed
```

Back to [5.7.12 Release Notes](./../README.md)
  
<PageFooter />
