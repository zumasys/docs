# PN1432

<PageHeader />

## Description

In jBASE, the WITHIN functionality of jQL expects the controlling attribute to be in attribute 6 of DICT filename .  

On Universe it is derived from attribute 6 of the MD/VOC filename entry.

## Previous Release Behavior

```text
CT MD Q1345
001 F
002 F1345
003 F1345]D
```

```text
LIST WITHIN Q1345 "all" dict1345

Record "Q1345" not found.
```

## Current Release Behavior

```text
CT MD Q1345
001 F
002 F1345
003 F1345]D
004
005
006 9
```

```text
LIST WITHIN Q1345 "all" dict1345
PAGE    1

level    Q1345.........    attr 1......

  1      all               the
  2      1                 quick
  2      2                 brown
  3      3                 fox
  3      4                 jumps
  3      5                 over
  3      6                 the
  3      7                 lazy
  3      8                 dog
```

Back to [5.8.5 Release Notes](./../README.md)

<PageFooter />
