# PN1123

<PageHeader />

## Description

Programs ending in `.B` are not treated as `.b` until attempting to CATALOG in case insensitve mode

## Previous Release Behavior

```
jsh jbase ~ -->BASIC BP FAILS.B
FAILS.B
Source file FAILS.B compiled successfully
jsh jbase ~ -->CATALOG BP FAILS.B
 ** Error [ 202 ] **
Record fails.b is not on file
```

## Current Release Behavior

```
jsh ~ -->CATALOG BP FAILS.B
fails
Object FAILS ( changed to fails ) cataloged successfully
```

Back to [5.7.12 Release Notes](./../README.md)
  
<PageFooter />
