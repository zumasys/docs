# PN5_60788

**Created At:** 8/29/2018 10:38:57 AM  
**Updated At:** 10/24/2018 8:47:58 PM  
**Original Doc:** [pn5_60788](https://docs.jbase.com/48420-5-7-1-release-notes/pn5_60788)  
**Original ID:** 336542  
**Internal:** No  


### Description

jQL: Grand totals longer than the defined column width were being truncated

### Previous Release Behavior

A total of [152,183,838.27] would be truncated as the column is set to be formatted 12 characters, right justified.

```
           ============
***        2,183,838.27
```

### Current Release Behavior

The totals now wrap:

```
           ============
***        152,183,838.
                     27
```
