# PN5_60882

**Created At:** 6/29/2019 8:26:21 AM  
**Updated At:** 6/29/2019 8:27:42 AM  
**Original Doc:** [pn5_60882](https://docs.jbase.com/61286-5-7-3-release-notes/pn5_60882)  
**Original ID:** 401008  
**Internal:** No  

## Description

jQL: Extra blank lines appear on subvalued data that exceeds the defined column width

### Previous Release Behavior

When sub-valued data that exceeds the defined column width is listed, in some cases extra blank lines are inserted between subvalues.

For example, given this record...

```
    testrec
001 a1v1s1 abcdefghijklmnopqrstuvwxyz\a1v1s2 1234567890]a1v2s1\a1v2s2
002 a2v1s1\a2v1s2]a2v2s1\a2v2s2
```

...and these dictionaries...

```
    a1
001 A
002 1
003
004
005
006
007
008
009 L
010 10

    a2
001 A
002 2
003
004
005
006
007
008
009 L
010 10
```

This was the result:

```
jsh ~ -->list testfile 'testrec' a1 a2 hdr-supp

testfile......    1.........    2.........

testrec           a1v1s1 abc    a2v1s1
                  defghijklm
                  nopqrstuvw
                  xyz

                  a1v1s2 123    a2v1s2
                  4567890



                  a1v2s1        a2v2s1
                  a1v2s2        a2v2s2


 1 Records Listed
```

### Current Release Behavior

The extra blank lines do not display, e.g.

```
testfile......    1.........    2.........

testrec           a1v1s1 abc    a2v1s1
                  defghijklm
                  nopqrstuvw
                  xyz
                  a1v1s2 123    a2v1s2
                  4567890
                  a1v2s1        a2v2s1
                  a1v2s2        a2v2s2


1 Records Listed
```

Back to [5.7.3 Release Notes](./../README.md)
