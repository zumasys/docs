# PN5_60786

**Created At:** 8/29/2018 10:34:38 AM  
**Updated At:** 10/24/2018 8:47:51 PM  
**Original Doc:** [pn5_60786](https://docs.jbase.com/48420-5-7-1-release-notes/pn5_60786)  
**Original ID:** 336540  
**Internal:** No  


### Description

SQL: Issue with I-descriptors and ODBC



### Previous Release Behavior

ODBC was not recognizing last value if it was null from an I-type dictionary



### Current Release Behavior

We now check when there are less values that the requested one.
