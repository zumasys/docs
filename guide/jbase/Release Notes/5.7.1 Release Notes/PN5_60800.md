# PN5_60800

**Created At:** 9/12/2018 4:12:39 PM  
**Updated At:** 10/24/2018 8:48:51 PM  


### Description

jQL: Using the keyword LIKE on a case insensitive file does not return correct result

### Previous Release Behavior

As an example, given a case insensitive file where all record keys are stored as upper case, a statement such as:

```
count filename with *a0 like "a..."
```

would not find any records, but the statement:

```
count filename with *a0 like "A..."
```

would.

### Current Release Behavior

The keyword LIKE now pattern matches correctly with case insensitive record data.
