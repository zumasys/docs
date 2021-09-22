# PN5_60624

<PageHeader />

## Description

jQL: Date and Time conversion codes are not case insensitive

### Current Release Behavior

Prior to this patch, dictionaries with the output conversion (attribute 7) in lower case would fail, e.g.

```
001 a
007 d
009 r
010 10

001 a
007 mths
009 r
010 10
```

Back to [5.6.3 Release Notes](./../README.md)

<PageFooter />
