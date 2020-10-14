# PN818

<PageHeader />

## Description

Listing multiple columns containing multi-values and sub-values end up misaligned.

## Previous Release Behavior

Given the following:

```
MAINFILE
    REC1
001 1-1\1-2]2-1\2-2]3-1\3-2


SUB.FILE
    1
001 ONE
    2
001 TWO
    1-1
001 ONE-ONE
    1-2
001 ONE-TWO
    2-1
001 TWO-ONE
    2-2
001 TWO-TWO
```

```
*A0........... D/CODE... A/AMC.... S/NAME... V/CONV... V/CORR... V/TYPE... V/MAX

SUBRTEST       A                 1                     CALL SUB. R            10
                                                       DICT
TFILE_C        A                 1                     TSUB.FILE L            10
                                                       ;C;1;1
```

```
SUBROUTINE SUB.DICT(rtnval)
INCLUDE qbasiccommonpick
rec = access(3)
attr = access(5)
val = access(6)
subval = access(7)
rtnval = rec<attr, val, subval> : "<":attr:",":val:",":subval:">"
RETURN
```

```
LIST MAINFILE TFILE_C SUBRTEST COL-HDR-SUPP

MVSMVTEST..... TFILE_C... SUBRTEST..

REC1           ONE-ONE    1-1<1,1,1>
               ONE-TWO    1-2<1,1,2>
                          2-1<1,2,1>
               TWO-ONE    2-2<1,2,2>
               TWO-TWO
               3-1        3-1<1,3,1>
                          3-2<1,3,2>
               3-2
```

## Current Release Behavior

```
LIST MAINFILE TFILE_C SUBRTEST

MAINFILE...... TFILE_C... SUBRTEST..

REC1           ONE-ONE    1-1<1,1,1>
               ONE-TWO    1-2<1,1,2>
               TWO-ONE    2-1<1,2,1>
               TWO-TWO    2-2<1,2,2>
               3-1        3-1<1,3,1>
               3-2        3-2<1,3,2>
```

## Notes

This behavior is dependent on **jql_mv_subcall = 2** configuration setting.
