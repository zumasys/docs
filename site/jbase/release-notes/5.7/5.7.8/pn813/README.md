# PN813

<PageHeader />

## Description

In D3 emulation an null string is equivalent to 0.

## Previous Release Behavior

Given a file **NULLTEST** and a single record:

```
ID: 1
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

```
LIST NULLTEST FCORR

NULLTEST......    FCORR

1                     0


 1 Records Listed
```

## Current Release Behavior

```
NULLTEST......    FCORR

1                     1


 1 Records Listed
```

## Notes

This behavior is dependent on the configuration setting **generic_d3 = true**.

Back to [5.7.8 Release Notes](./../README.md)
  
<PageFooter />
