# TIMEDIFF

**Created At:** 9/28/2017 9:15:14 AM  
**Updated At:** 1/5/2018 6:15:48 PM  
**Original Doc:** [278803-timediff](https://docs.jbase.com/36868-jbase-basic/278803-timediff)  


# Description

This function returns the interval between two timestamp values as a dynamic array. It takes the general form:

```
TIMEDIFF(Timestamp1, Timestamp2,Mask)
```

Where:

timestamp1 and timestamp2 are timestamp values to be subtracted.

the Mask is an integer from 0 to 7 and selects one of the following output formats:


| Mask<br> | Array<br> |
| --- | --- |
| 0<br> | Days^Hours^Minutes^Seconds^Milliseconds (Default)<br> |
| 1<br> | Weeks^Days^Hours^Minutes^Seconds^Milliseconds<br> |
| 2<br> | Months^Days^Hours^Minutes^Seconds^Milliseconds<br> |
| 3<br> | Months^Weeks^Days^Hours^Minutes^Seconds^Milliseconds<br> |
| 4<br> | Years^Days^Hours^Minutes^Seconds^Milliseconds<br> |
| 5<br> | Years^Weeks^Days^Hours^Minutes^Seconds^Milliseconds<br> |
| 6<br> | Years^Months^Days^Hours^Minutes^Seconds^Milliseconds<br> |
| 7<br> | Years^Months^Weeks^Days^Hours^Minutes^Seconds^<br>Milliseconds<br> |


The**TIMEDIFF** function returns the interval between two timestamp values . The interval is returned as an attribute delimited array of the time difference.



Go back to [jBASE BASIC](263498-jbase-basic).
