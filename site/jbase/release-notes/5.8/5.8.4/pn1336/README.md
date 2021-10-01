# PN1336

<PageHeader />

## Description

If a TRANS() function uses a dictionary instead of a number for the ATTR parameter and the dictionary is a D type the attribute the dictionary points to should be used as the ATTR parameter instead of the result of the D type.

## Previous Release Behavior

```
TRANS('mdf',@ID,ZIP,'X')
```

Returns an empty column value.

## Current Release Behavior

Returns the same as the ZIP dictionary.

## Example

```
jsh UVSandBox ~ -->CT DICT F1336

    attr11
001 D
002 11
003
004 Eleven
005 15L

    id
001 D
002 0
003
004 ID
005 15L

    dict1336
001 I
002 TRANS("T1336",attr11,attr11a,"X")
003
004
005 15L
```

```
jsh UVSandBox ~ -->CT DICT T1336

    attr11a
001 D
002 11
003
004 Eleven
005 15L
```

```
jsh UVSandBox ~ -->CT F1336

    Nigel
001
002
003
004
005
006
007
008
009
010
011 joins
```

```
jsh UVSandBox ~ -->CT T1336

    joins
001
002
003
004
005
006
007
008
009
010
011 Spinal Tap
```

```
jsh UVSandBox ~ -->LIST F1336 id attr11 dict1336

PAGE    1                                                                                                                                                                    15:57:41  01 OCT 2021

F1336.........    ID.............    Eleven.........    dict1336.......

Nigel             Nigel              joins              Spinal Tap


 1 Records Listed

```

Back to [5.8.4 Release Notes](./../README.md)

<PageFooter />
