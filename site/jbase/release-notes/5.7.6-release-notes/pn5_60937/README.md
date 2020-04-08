# PN5_60937

<PageHeader />

## Description

**L#0** returns entire string, some emulations require it to return null

### Previous Release Behavior

Format expressions (masks) such as **L#0** or **R%0** would always return the whole value. For example,

```
PRINT "Contradiction""L#0"  ;* returns "Contradiction"
```

### Current Release Behavior

Format masks specifying a length of zero can now be configured to return null rather than the whole string.

This behavior is activated by setting the following configuration option in the **$JBCRELEASEDIR/config/Config\_EMULATE**, (**%JBCRELEASEDIR%\config\Config\_EMULATE** on Windows) file under the emulation section defined by the **JBCEMULATE** environment variable

```
format_mask_zero_returns_null = true
```

Back to [5.7.6 release Notes](../jbase-5.7.6-release-notes/README.md)
