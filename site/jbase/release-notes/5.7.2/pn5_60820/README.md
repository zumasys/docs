# PN5_60820

<PageHeader />

## Description

jQL: IF/THEN/ELSE A-correlative does not process embedded conversions

### Previous Release Behavior

An A-correlative of the form...

```
A;IF N(DATE1) < N(DATE2) THEN "yes" ELSE "no"
```

where the **DATE1** and **DATE2** dictionary items do translates (or other embedded conversions), did not process the embedded conversions.

### Current Release Behavior

Embedded conversions are now processed.

Back to [5.7.2 Release Notes](./../README.md)

  
<PageFooter />
