# JBCPORTNO

**Created At:** 11/3/2017 3:29:03 PM  
**Updated At:** 7/17/2018 1:48:29 PM  

**Tags:**
<badge text='environment variables' vertical='middle' />
<badge text='ports' vertical='middle' />

## Description

This defines current port number and is useful when a particular user wishes to keep the same port number whenever they log on. On Unix it takes a sensible default, but this default may change if the Unix configuration is changed. On Windows, port numbers are allocated sequentially from zero.



## Values

Decimal port number
Combinations of lists and ranges of port numbers can be specified.



## Default

None



## Setting

Must be set prior to the execution of the initial jBASE program (e.g.  the jShell).

On Unix, this is typically done in the .profile as:

```
export JBCPORTNO=300,304,310,350,360-390
```



On Windows, it is typically assigned in the Environment Variables panel of the  System Properties.

```
set JBCPORTNO=300,304,310,350,360-390 
```



## Note:


> If JBCPORTNO is explicitly set then jBASE will assign the lowest available port number from the list or range specified. If all port numbers specified by JBCPORTNO are already in use then the user will be denied access and the user will be rewarded with  the following error message:
> 
> ```
> No ports free in the specified range . . .
> ```


Under normal situations, a single port number will suffice. However, if the  user is envoking other programs that start a new jBASE process (e.g. BASIC or  EXECUTE @IM:'k') then it would be necessary to assign at least 2 port  numbers for that user so that the secondary process can obtain a port number.
