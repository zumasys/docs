# PN5_60622

<PageHeader />

## Description

jFormatCode to parse out expressions that are used in the LOCATE statement and LOCATE() function

### Previous Release Behavior

```
LOCATE (exp) IN (exp)<mv extract>
```

would fail to compile.

### Current Release Behavior

jFormatCode now handles the LOCATE statement and LOCATE function correctly.

Back to [5.6.2 release Notes](./../README.md)

  
<PageFooter />
