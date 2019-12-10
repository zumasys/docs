# JCL IN

**Created At:** 6/7/2018 9:20:24 AM  
**Updated At:** 6/11/2018 4:19:01 AM  

**Tags:**
<badge text='jcl' vertical='middle' />
<badge text='buffer' vertical='middle' />

## Description 

This command prompts for input and places it in the secondary input buffer. Selects the secondary input buffer as the active buffer input. It takes the general form:

```
IN{c}
```

where c is an optional prompt character which, once used, remains in effect until a new IBN, IBP, IN or IP command is issued. If c is not specified, the prompt character will default to the last prompt character used, or to a colon (:).

The new data replaces the content of the SIB, and the SIB will remain active until an [RI](http://jbase.com/r5/knowledgebase/manuals/3.0/30manpages/man/jcl2_JCL.RI.htm), S(n) or MV %n source command is used.



## Note: 


> Leading and trailing spaces are removed and groups of one or more embedded spaces are replaced by a single field mark. Use the IBN command if you want to maintain embedded spaces. If the user responds with ENTER only, a null parameter will be created.


When the command has been completed, the buffer pointer will be positioned at the beginning of the buffer.



### EXAMPLE 1


| Input <br> | SIB Before <br> | SIB After <br> |
| --- | --- | --- |
| ABC<br> | ^<br> | ABC<br> |
| <br> |               ^<br> | ^<br> |




### EXAMPLE 2


| Input <br> | SIB Before <br> | SIB After <br> |
| --- | --- | --- |
| ABC DEF<br> | XYZ<br> | ABC^DEF<br> |
| <br> | ^<br> | ^<br> |




### EXAMPLE 3


| Input<br> | SIB Before<br> | SIB After <br> |
| --- | --- | --- |
| &lt;ENTER&gt;<br> | WWW^XXX<br> | <br> |
| <br> | ^<br> | ^<br> |




Back to [JCL Commands](jcl-commands)
