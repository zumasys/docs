# PN5_60800

<PageHeader />  

## Description

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

Back to [5.7.1 Release Notes](./../jbase-5.7.1-release-notes/README.md)

<PageFooter />
