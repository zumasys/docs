# PN5_60723

**Created At:** 3/15/2018 9:51:15 AM  
**Updated At:** 4/9/2018 1:31:31 PM  
**Original Doc:** [pn5_60723](https://docs.jbase.com/release-notes/pn5_60723)  


### Description

FOOTING statement creates second print job after PRINTER CLOSE



### Previous Release Behavior

Given this code:

```
0001     EXECUTE "SP-ASSIGN HS"
0002     PRINTER ON
0003     HEADING "Heading"
0004     FOOTING "Footing"
0005     PRINT "Line 1"
0006     PRINT "Line 2"
0007     PRINTER OFF
0008     PRINTER CLOSE
```

an additional blank page would be printed, creating a second Hold entry.



### Current Release Behavior

No additional Hold entry with a blank page is created.
