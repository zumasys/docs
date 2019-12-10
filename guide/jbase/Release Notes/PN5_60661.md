# PN5_60661

**Created At:** 12/25/2017 6:02:14 PM  
**Updated At:** 2/16/2018 7:06:18 PM  


### Description

jQL: Unable to get Value Number from exploded sort using a dictionary subroutine.



### Previous Release Behavior

```
001     SUBROUTINE value_number
002     INCLUDE qbasiccommonpick
003     newpick(12) = access(14)
004     RETURN

create-file mvtest 1 1

ed mvtest 1
001 x]y]z

ed dict mvtest vn
001 A
002 1
...
008 CALL value_number
009 R
010 2

jsh home ~ -->sort mvtest by-exp *A1 *A1 vn hdr-supp ni-supp

mvtest........    *a1...........    vn

1                 x
1                 y
1                 z
```

Nothing would display in the **vn** column.



### Current Release Behavior

```
jsh home ~ -->sort mvtest by-exp *A1 *A1 vn hdr-supp ni-supp

mvtest........    *a1...........    vn

1                 x                  1
1                 y                  2
1                 z                  3
```
