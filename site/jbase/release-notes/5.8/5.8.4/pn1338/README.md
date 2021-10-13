# PN1338

<PageHeader />

## Description

A LIST/SORT of a file with a BY expr and a WITH attr0_dict = '...' causes a seg fault.

Create a file with items 1 through 10 with the ID as attribute 1.

Add the following dictionary items:

```
attr0

001 D
002 0
005 10R

attr1

001 D
002 1
005 10R
```

SORT testfile BY attr1 WITH attr1 # "" AND WITH attr0 = "1""3""10"

## Previous Release Behavior

Segmentation violation

## Current Release Behavior

```
PAGE    1

testfile......

1
3
10


 3 Records Listed
```

Back to [5.8.4 Release Notes](./../README.md)

<PageFooter />
