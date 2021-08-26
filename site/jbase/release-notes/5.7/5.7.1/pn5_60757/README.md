# PN5_60757

<PageHeader />

## Description

**PRINTER CLOSE** prevents the **FOOTING** text from being printed on the last page of a print job

### Previous Release Behavior

When this program is run, the **PRINTER CLOSE** prevents the **FOOTING** text from printing:

```
EXECUTE "SP-ASSIGN HS"
PRINTER ON
HEADING "Heading"
FOOTING "Footing"
FOR x = 1 TO 2
    PRINT "Line ":x
NEXT x
PRINTER OFF
PRINTER CLOSE
```

The **FOOTING** will print on every page except the last page.

### Current Release Behavior

All pages print the FOOTING.

Back to [5.7.1 Release Notes](./../jbase-5.7.1-release-notes/README.md)

<PageFooter />
