# jstat

**Created At:** 7/20/2018 1:28:32 PM  
**Updated At:** 5/29/2019 8:50:14 PM  
**Original Doc:** [jstat](https://docs.jbase.com/42462-distributed-files/jstat)  
**Original ID:** 328693  
**Internal:** No  

**Tags:**
<badge text='statistics' vertical='middle' />
<badge text='hash files' vertical='middle' />

## Description 

The jstat utilities provides statistical information about jBASE Hash files. It's use is as:

```
jstat -Options Filename
```

Where Options can be:


| Option<br> | Description<br> |
| --- | --- |
| -DChr<br> | Specify alternate delimiter for -m option (default is tab)<br> |
| -f<br> | Free space display<br> |
| -m<br> | Machine mode output<br> |
| -r<br> | Record Display mode<br> |
| -s<br> | Short summary display<br> |
| -v<br> | Verbose display<br> |
| -w<br> | Do not wait on locked objects (use caution)<br> |




If the machine mode option is selected, then 16 values are output,  as follows:

1.    The file type.

2.    Total number of records.

3.    Total record size.

4.    File length.

5.    Frame size.

6.    Group Quantity.

7.    Bytes per record.

8.    Bytes per group.

9.    Primary file space in frames.

10.    Secondary file space in frames.

11.    Free space in the free space chain.

12.    Size of each frame.

13.    Secondary frame size in frames.

14.    Hash method (Displayed as "0" for dynamic files).

15.    Standard Deviation Mean.

16.    Mean key length.
