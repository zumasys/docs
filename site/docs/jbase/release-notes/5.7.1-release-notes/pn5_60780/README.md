# PN5_60780

**Created At:** 8/28/2018 9:21:40 AM  
**Updated At:** 10/24/2018 8:46:08 PM  
**Original Doc:** [pn5_60780](https://docs.jbase.com/48420-5-7-1-release-notes/pn5_60780)  


### Description

jBC: MINIMUM() function returns incorrect results when there are null elements in the dynamic array



### Previous Release Behavior

Example:

```
x = @AM:24@AM:@AM:@AM:6
CRT MINIMUM(x)
```

displayed "2" when it should have displayed "0" (zero) because null dynamic array elements are treated as zero.



### Current Release Behavior

The MINIMUM() function now works correctly.
