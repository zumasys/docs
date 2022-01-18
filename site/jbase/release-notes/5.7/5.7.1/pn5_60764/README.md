# PN5_60764

<PageHeader />

## Description

Support DEFFUN with no parameters and no parenthesis

### Previous Release Behavior

The DEFFUN statement would need () even if there were no parameters, e.g.

```
    DEFFUN MYFUNCTION()
```

This was incompatible with UniVerse code.

### Current Release Behavior

Parenthesis are optional. This is now supported

```
    DEFFUN MYFUNCTION
```

Back to [5.7.1 Release Notes](./../jbase-5.7.1-release-notes/README.md)

<PageFooter />
