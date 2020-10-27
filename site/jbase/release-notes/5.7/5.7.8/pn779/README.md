# PN779

<PageHeader />

## Description

jQL queries missing results using range comparison on right justified dictionaries.

## Previous Release Behavior

Given values of:

```
A1
A2
A3
A11
```

a query using a right justified dictionary does not correctly filter the results when issuing the following type of query:

```
SORT filename WITH rjust_dict >= "A1" AND <= "A20"
```

## Current Release Behavior

The right-justified (ordinal) comparison now works.

Back to [5.7.8 Release Notes](./../README.md)
  
<PageFooter />
