# PN614

<PageHeader />

## Description

Various F-correlative features are currently not working (specifically repeating values).

## Previous Release Behavior

Assuming attr 1 is a multi-valued field using the following:

```
ID: REPEAT_ID
001 S
002 0
...
008 F;1;0R
...
```

Would only display the ID once when listing a file using that type of dictionary.

## Current Release Behavior

The ID correctly repeats with each multi-value.

## Notes

This patch/enhancement works if the following subroutines are callable:

```
JQL_FCORR_CONV
JQL_FCORR_HANDLER
JQL_FCORR_TRANSLATE
```

These programs must be compiled in native jBASE emulation and are part of the Zumasys conversion suite.

At run-time any F-correlative is converted using JQL_FCORR_CONV to transform it into a structure that JQL_FCORR_HANDLER will process subsequently using JQL_FCORR_TRANSLATE to do the actual work.

Back to [5.7.7 release Notes](../jbase-5.7.7-release-notes/README.md)
  
<PageFooter />
