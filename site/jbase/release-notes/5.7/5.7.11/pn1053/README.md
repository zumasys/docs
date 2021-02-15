# PN1053

<PageHeader />

## Description

jQL: BY-EXP limiter issue

## Current Release Behavior

Prior to this patch BY-EXP did not accept a mixed limiter expression, e.g.

```
BY-EXP BALANCE NE "" AND NOT "0"
```

Back to [5.7.11 Release Notes](./../README.md)
  
<PageFooter />
