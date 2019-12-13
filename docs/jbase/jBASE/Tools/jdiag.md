# jdiag

**Created At:** 8/24/2018 2:05:56 PM  
**Updated At:** 10/25/2018 8:47:32 AM  

**Tags:**
<badge text='diagnosis' vertical='middle' />

## Description 

The **jdiag**utility is used to display information about the current jBASE installation. It is useful in pin-pointing problem areas of the setup.

It's use is as:

```
jdiag {-cwvlLm} {-MMemory}
```




| <br>Option<br> | <br>Explanation<br> |
| --- | --- |
| -c | Check environment for potential 32-bit/64-bit problems<br> |
| -d | Display disk drive information (Windows only)<br> |
| -h | Display only the header information |
| -l | Copy output to log file **jdiag.out** |
| -L | Output only to log file **jdiag.out** |
| -m | Memory allocation Test (4 Mbyte default) |
| -Mmem | use **Mem**ory Mbytes for memory test |
| -s | Display jBASE services information (Windows only) |
| -v | Verbose output |
| -w | Terse output (only Warnings) |



