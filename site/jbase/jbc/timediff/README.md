# TIMEDIFF

**Created At:** 9/28/2017 9:15:14 AM  
**Updated At:** 1/5/2018 6:15:48 PM  
**Original Doc:** [278803-timediff](https://docs.jbase.com/36868-jbase-basic/278803-timediff)  
**Original ID:** 278803  
**Internal:** No  

## Description

This function returns the interval between two timestamp values as a dynamic array. It takes the general form:

```
TIMEDIFF(Timestamp1, Timestamp2,Mask)
```

Where:

**timestamp1** and **timestamp2** are timestamp values to be subtracted.

the Mask is an integer from 0 to 7 and selects one of the following output formats:

| Mask | Array |
| --- | --- |
| 0 | Days^Hours^Minutes^Seconds^Milliseconds (Default) |
| 1 | Weeks^Days^Hours^Minutes^Seconds^Milliseconds |
| 2 | Months^Days^Hours^Minutes^Seconds^Milliseconds |
| 3 | Months^Weeks^Days^Hours^Minutes^Seconds^Milliseconds |
| 4 | Years^Days^Hours^Minutes^Seconds^Milliseconds |
| 5 | Years^Weeks^Days^Hours^Minutes^Seconds^Milliseconds |
| 6 | Years^Months^Days^Hours^Minutes^Seconds^Milliseconds |
| 7 | Years^Months^Weeks^Days^Hours^Minutes^Seconds^Milliseconds |

The **TIMEDIFF** function returns the interval between two timestamp values . The interval is returned as an attribute delimited array of the time difference.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
