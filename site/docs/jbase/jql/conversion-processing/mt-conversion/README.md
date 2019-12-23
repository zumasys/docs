# MT Conversion

**Created At:** 6/8/2018 1:46:00 PM  
**Updated At:** 7/13/2018 10:04:49 AM  
**Original Doc:** [mt-conversion](https://docs.jbase.com/46351-conversion-processing/mt-conversion)  


## Description 

The MT code is used to convert time notations such as 01:40:30 or 1:30 AM between internal and external format. It takes the general form:

```
MT{H}{S}
```

where:

- H specifies 12-hour format. If omitted, 24-hour format will be used.
- S specifies that seconds are to be included.




Time is stored internally as the number of seconds since midnight. The stored value can be output in 12 hour or 24 hour (international) format.

12:00PM is defined as noon and 12:00AM is defined as midnight.

For output conversions, AM and PM designators are automatically displayed. For example: 09:40AM and 06:30PM.



## Input Conversion 

Input conversion is valid. Generally, for selection processing you should specify MT codes in field 7 of the data definition record.

AM or PM designators are taken into account. The result of the input conversion for certain values can be affected by the [time\_is\_hours](https://static.zumasys.com/jbase/r99/knowledgebase/manuals/3.0/30manpages/man/sup12_EMULATION.htm#TIMEISHOURS) emulation setting.



### EXAMPLES

### Input Conversion


| Code<br> | Input<br> | Result<br> |
| --- | --- | --- |
| MT<br> | 00:00<br> | 0<br> |
| MTH<br> | 12:00AM<br> | 0<br> |
| MT<br> | 01:00AM<br> | 3600<br> |
| MT<br> | 01:00<br> | 3600<br> |
| MTH<br> | 01:00<br> | 3600<br> |
| MTH<br> | 01:00AM<br> | 3600<br> |
| MT<br> | 01:00PM<br> | 46800<br> |
| MTH<br> | 01:00PM<br> | 46800<br> |
| MTS<br> | 01:00:30<br> | 3630<br> |


#### 


### Output Conversion


| Code<br> | Source Value<br> | Result<br> |
| --- | --- | --- |
| MTS<br> | 0<br> | 00:00:00<br> |
| MTHS<br> | 0<br> | 12:00:00AM<br> |
| MT<br> | 3600<br> | 01:00<br> |
| MTH<br> | 3600<br> | 01:00AM<br> |
| MT<br> | 46800<br> | 13:00<br> |
| MTS<br> | 46800<br> | 13:00:00<br> |
| MTH<br> | 46800<br> | 01:00PM<br> |
| MTHS<br> | 46800<br> | 01:00:00PM<br> |




Back to [Conversion Processing](./../conversion-processing)
