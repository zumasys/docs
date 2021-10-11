# PN1421

<PageHeader />

## Description

The CHANGE statement can cause a SEGV

## Previous Release Behavior

In the example below, we get a SEGV.

```
    A = "quxm#="
    CHANGE "#=" TO "# =" IN A
    A = "nxwov#"
    CHANGE "#=" TO "# =" IN A
```

## Current Release Behavior

Does not cause a problem  

Back to [5.8.4 Release Notes](./../README.md)

<PageFooter />
