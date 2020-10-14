# PN846

<PageHeader />

## Description

A jQL query involving F and A correlatives with an attribute pointing to a sub-value list hangs.

## Previous Release Behavior

Create a file and dictionary:

```
CREATE-FILE SUBV
```

```
A1
001 A
002 1
008 A;1
009 L
010 1
```

Create one record with 2 subvalues

```
rec1
001 1\2
```

The following hangs:

```
LIST SUBV A1
```

## Current Release Behavior

LIST SUBV A1

```
SUBV.......... A1

rec1           1
               2
```

Back to [5.7.9 Release Notes](./../README.md)
  
<PageFooter />
