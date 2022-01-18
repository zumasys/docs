# JBSE-5862

<PageHeader />

## Description

In a query with two dictionaries which derive the same non-existent key in a file, the first correctly returns null but the second returns the translating key.

## Previous Release Behavior

```text
CT master 1

001 123*123
```

```text
CT DICT master dict1 dict2
001 S
002 1
...
008 G0*1]Tmaster;X;0;0
009 R
010 5

dict2
001 S
002 1
...
008 G1*1]Tmaster;X;0;0
009 R
010 5
```

```text
LIST master dict1 dict2

master dict1 dict21      
1            123
```

## Current Release Behavior

```text
LIST master dict1 dict2

PAGE    1                                                                                                                  15:40:02  13 JAN 2022

master........    dict1    dict2

1


 1 Records Listed
```

Back to [5.8.5 Release Notes](./../README.md)

<PageFooter />
