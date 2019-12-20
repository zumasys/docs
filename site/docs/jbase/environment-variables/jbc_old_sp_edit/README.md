# JBC_OLD_SP_EDIT

**Created At:** 7/13/2018 2:38:37 PM  
**Updated At:** 7/19/2018 10:02:27 AM  
**Original Doc:** [jbc_old_sp_edit](https://docs.jbase.com/41717-environment-variables/jbc_old_sp_edit)  

**Tags:**
<badge text='spooler' vertical='middle' />
<badge text='environment variables' vertical='middle' />

## Description

When this environment variable is set, the alternative SP-EDIT program is invoked.



## Values

1



## Default

None.



## Note:


> The alternative SP-EDIT program prompts the user with a list of options to manipulate the print job. For example:
> 
> `jsh ~ -->SP-EDIT 4`
> 
> `Entry # 4 Display(Y/N/T/TN/S/D/X/(CR)?`
> 
> The options are:



| Y<br> | display the first 10 lines of the print job<br> |
| --- | --- |
| N<br> | skip to the "String" prompt<br> |
| T<br> | output the job to stdout with paging<br> |
| TN<br> | output the job to stdout without paging<br> |
| S<br> | skip to the "Spool" prompt<br> |
| D<br> | skip to the "Delete" prompt<br> |
| X or &lt;Enter&gt;<br> | exit SP-EDIT<br> |


If Y, N, T or TN is selected, the user is next prompted for String. Entering a string will cause a scan of each line of the print job, from the first line to the last line or until the string is found. The user is then prompted for "Spool (Y/N=CR)". If Y is entered the print job is spooled from the line in which the specified string was located. If the string was not located, the entire job is spooled.



## Setting

As per normal environment variable. It should be setup before jBASE is invoked.

**Unix**

```
export JBC_OLD_SP_EDIT=1
```



**Windows**

```
SET JBC_OLD_SP_EDIT=1
```



See also the behavior of the [standard SP-EDIT](306467-sp-edit).


