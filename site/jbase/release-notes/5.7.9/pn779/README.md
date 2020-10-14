# PN779

<PageHeader />

## Description
Queries using a range selection criteria on right-justified dictionaries involving alphanumeric values does not sort correctly.

## Previous Release Behavior
Given values of:
```
A1
A2
A3
A11
```
a query using a right-justustified dictionary does not correctly filter the results when issuing the following type of query:
```
SORT filename WITH rjust_dict ge "A1" AND le "A20"
```

## Current Release Behavior

The right-justified (ordinal) comparisons now work.

Back to [5.7.9 Release Notes](./../README.md)
  
<PageFooter />
