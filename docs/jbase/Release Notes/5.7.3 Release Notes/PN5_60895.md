# PN5_60895

**Created At:** 6/27/2019 12:24:51 PM  
**Updated At:** 6/29/2019 8:04:10 AM  


### Description

Support sub-valued fields in a secondary index



### Previous Release Behavior

If a data field was indexed, and that field had sub-values then the index would include multiple sub-values.

In the example below, where ] is a value mark and \ is a sub-value mark, we would have the following index keys created:

- CHELSEA
- FOREST\DERBY
- CITY
- UNITED\LIVERPOOL\EVERTON




```
CHELSEA]FOREST\DERBY]CITY]UNITED\LIVERPOOL\EVERTON
```



### Current Release Behavior

Sub-values are now automatically treated in the same way as multi-values, and an index key is generated for each sub-value within a multi-value.

In the above example, we would now have the following index keys:

- CHELSEA
- FOREST
- DERBY
- CITY
- UNITED
- LIVERPOOL
- EVERTON




### Notes

There are no options in create-index for this enhancement, it just occurs automatically.
