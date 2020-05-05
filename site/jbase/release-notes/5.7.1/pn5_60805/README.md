# PN5_60805

<PageHeader />  

## Description

jQL: Sorting by default "inbuilt" ID column ignores justification

### Previous Release Behavior

```
LIST MYFILE
```

would always display its result left justified even if you added an @ID dictionary with right justification.

```
001: D
002: 0
005: 20R
```

### Current Release Behavior

Use the formatting if there is a @ID dictionary or if there is a dictionary that matches the filename, if not keep the existing 14 left justified formatting.

Back to [5.7.1 Release Notes](./../jbase-5.7.1-release-notes/README.md)
  
<PageFooter />
