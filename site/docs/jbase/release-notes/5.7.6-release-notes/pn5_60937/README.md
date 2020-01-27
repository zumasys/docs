# PN5_60937

**Created At:** 1/14/2020 9:31:56 AM  
**Updated At:** 1/15/2020 2:04:05 PM  
**Original Doc:** [pn5_60937](https://docs.jbase.com/88391-5-7-6-release-notes/pn5_60937)  
**Original ID:** 516402  
**Internal:** No  


### Description

**L#0** returns entire string, some emulations require it to return null



### Previous Release Behavior

Format expressions (masks) such as **L#0** or **R%0** would always return the whole value. For example,

```
PRINT "Contradiction""L#0"  ;* returns "Contradiction"
```



### Current Release Behavior

Format masks specifying a length of zero can now be configured to return null rather than the whole string.

This behavior is activated by setting the following configuration option in the **$JBCRELEASEDIR/config/Config\_EMULATE** (**%JBCRELEASEDIR%\config\Config\_EMULATE** on Windows) file under the emulation section defined by the **JBCEMULATE** environment variable

```
format_mask_zero_returns_null = true
```
