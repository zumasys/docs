# PN5_60571

**Created At:** 6/13/2017 2:03:02 PM  
**Updated At:** 11/20/2017 8:15:46 PM  
**Original Doc:** [pn5_60571](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60571)  
**Original ID:** 258853  
**Internal:** No  


### Description

jBC: Add new version of FOLD() with 3 parameters for D3 compatibility



### Previous Release Behavior

The FOLD() function always used @AM as the delimiter.



### Current Release Behavior

The FOLD() function now accepts a 3rd parameter which is the delimiting character. If the delimiter is "" then the we defaul to @VM.

```
0001     s = "Space the final frontier"
0002
0003     folded = FOLD(s, 10, "")
0004     CRT OCONV(folded, "mcp")
0005
0006     folded = FOLD(s, 10, ";")
0007     CRT folded
```

This displays:

```
Space the]final]frontier
Space the;final;frontier
```

Note that the current 2-parameter version of FOLD() has some ideosyncracies, including allowing a field to be generated the wrong width. This new 3-parameter version of FOLD() fixes these problems, however the old 2-parameter version will continue to work as before for backward compatibility.
