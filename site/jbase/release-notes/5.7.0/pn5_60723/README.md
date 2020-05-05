# PN5_60723

<PageHeader />

## Description

FOOTING statement creates second print job after PRINTER CLOSE

### Previous Release Behavior

Given this code:

```
EXECUTE "SP-ASSIGN HS"
PRINTER ON
HEADING "Heading"
FOOTING "Footing"
PRINT "Line 1"
PRINT "Line 2"
PRINTER OFF
PRINTER CLOSE
```

an additional blank page would be printed, creating a second Hold entry.

### Current Release Behavior

No additional Hold entry with a blank page is created.

Back to [jBASE 5.7.0 Release Notes](./../README.md)

<PageFooter />
