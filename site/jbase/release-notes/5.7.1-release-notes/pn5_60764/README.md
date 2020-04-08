# PN5_60764

<PageHeader />

## Description

Support DEFFUN with no parameters and no parenthesis

### Previous Release Behavior

The DEFFUN statement would need () even if there were no parameters, e.g.

```
    DEFFUN MYFUNCTION()
```

This was incompatible with Universe code.

### Current Release Behavior

Parenthesis are optional. This is now supported

```
    DEFFUN MYFUNCTION
```

Back to [5.7.1 Release Notes](./../README.md)
