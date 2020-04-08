# PN5_60793

<PageHeader />

## Description

jQL crashes when supplied a list of more than 255 values when querying via an index.

### Previous Release Behavior

Previously doing something like...

```
SELECT testfile WITH FIRSTNAME "HOS" "JOE" "HOP" "ROY" "CANDY" "BEN" . . .
```

If the list of keys exceeded 255, the query would fail.

### Current Release Behavior

The limit of the number of index keys supplied as jQL values has been lifted.

However, this type query is tied to resources on the host OS and may see OS limitations due to:

- Length of command passed to EXECUTE
- Number of values

Internally there may be a call stack overflow as indexes are recursively selected and merged.

Back to [5.7.1 Release Notes](./../README.md)
