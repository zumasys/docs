# PN5_60952

**Created At:** 1/14/2020 10:08:46 AM  
**Updated At:** 1/15/2020 2:04:05 PM  
**Original Doc:** [pn5_60952](https://docs.jbase.com/88391-5-7-6-release-notes/pn5_60952)  
**Original ID:** 516413  
**Internal:** No  

## Description

jBC: Remove the limit imposed by **INPUT**on **DATA**stack

### Previous Release Behavior

On the previous releases there was a fixed limit on an **INPUT** statement of 32768 (and on earlier releases 1024).

```
l = 100000
DATA STR('X',l)
INPUT val
IF LEN(VAL) EQ l THEN CRT 'Success' ELSE CRT 'Failure' ;! we would see "Failure"
```

### Current Release Behavior

The length restriction has been removed and the above test would print "Success"

Back to [5.7.6 release Notes](../jbase-5.7.6-release-notes/README.md)
