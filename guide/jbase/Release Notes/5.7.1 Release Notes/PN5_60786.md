# PN5_60786

**Created At:** 8/29/2018 10:34:38 AM  
**Updated At:** 10/24/2018 8:47:51 PM  


### Description

SQL: Issue with I-descriptors and ODBC



### Previous Release Behavior

ODBC was not recognizing last value if it was null from an I-type dictionary



### Current Release Behavior

We now check when there are less values that the requested one.
