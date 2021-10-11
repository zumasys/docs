# PN5_60617

<PageHeader />

## Description

Case Independence: Casing issue with IF statement in combination with the LOCATE() function

### Current Release Behavior

Prior to this patch:

```
IF 1 THEN LOCATE(a,b,c;pos;'AL') ELSE NULL
```

jFormatCode would change **LOCATE** to **locate**.

Back to [5.6.3 Release Notes](./../README.md)

<PageFooter />
