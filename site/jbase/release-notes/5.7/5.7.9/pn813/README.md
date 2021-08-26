# PN813

<PageHeader />

## Description

In D3 emulation an null string should be equivalent to 0.

## Previous Release Behavior

Given an file/record:
NULLTEST,1
```
001 0
002
```
An F correlative:
DICT NULLTEST FCORR
```
001 S
002 0
003
004
005
006
007
008 F;1;2;]
009 R
010 1
```

Testing: LIST NULLTEST FCORR

```
NULLTEST......    FCORR

1                     0


 1 Records Listed
```

## Current Release Behavior

```
NULLTEST......    FCORR

1                     1


 1 Records Listeddelete
```

## Notes

This behavior is dependent on the configuration setting **null_eq_zero = true**.

Back to [5.7.9 Release Notes](./../README.md)
  
<PageFooter />
