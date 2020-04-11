# PN5_60716

<PageHeader />

### Description

Add optional parameters to REGEXP() for case insensivity



### Previous Release Behavior

REGEXP() had no options to handle case insensitivity.



### Current Release Behavior

You can now use 2 added options to REGEXP() with an optional parameter. These control extended POSIX regular expressions and case insensitivity.

```
INCLUDE JBC.h
CRT "Match = " : REGEXP("Hello World", "WORLD" , REGEXP_ICASE + REGEXP_EXTENDED)
```

  
<PageFooter />
