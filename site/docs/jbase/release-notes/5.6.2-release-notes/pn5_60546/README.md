# PN5_60546

**Created At:** 6/9/2017 4:56:37 PM  
**Updated At:** 12/26/2017 12:55:22 PM  
**Original Doc:** [pn5_60546](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60546)  


### Description

Index queries with more complex expressions would only work if the operator was EQ or NE.

### Previous Release Behavior

KEY-SELECT/QUERY-INDEX using EQ or NE would work but LT, GT, LE, GE did not work.

### Current Release Behavior

Index queries now work using any comparative operator.
