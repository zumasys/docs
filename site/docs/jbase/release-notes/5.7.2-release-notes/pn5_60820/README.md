# PN5_60820

**Created At:** 2/14/2019 9:41:41 AM  
**Updated At:** 2/14/2019 11:15:02 AM  
**Original Doc:** [pn5_60820](https://docs.jbase.com/5-7-2-release-notes/pn5_60820)  
**Original ID:** 365060  
**Internal:** No  


### Description

jQL: IF/THEN/ELSE A-correlative does not process embedded conversions [SD3290]



### Previous Release Behavior

An A-correlative of the form...

```
A;IF N(DATE1) < N(DATE2) THEN "yes" ELSE "no"
```

where the **DATE1** and **DATE2** dictionary items do translates (or other embedded conversions), did not process the embedded conversions.



### Current Release Behavior

Embedded conversions are now processed.
