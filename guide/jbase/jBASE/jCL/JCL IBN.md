# JCL IBN

**Created At:** 5/28/2018 10:58:19 AM  
**Updated At:** 6/11/2018 4:15:04 AM  


## Description  

Prompts for input, places the entered data in the secondary input buffer as a single parameter and maintains embedded spaces. The secondary input buffer becomes as the active input buffer.

```
IBN{c}
```

where c is an optional prompt character, which, once used, remains in effect until a new IBN, IBP, IN or IP command is issued. If c is not specified, the prompt character will default to the last prompt character used, or to a colon (:).



## Note:


> The IBN command is similar to the IN command except that the input string is placed in the buffer as a single parameter and all spaces are maintained. The new data replaces the content of the secondary input buffer, and the secondary input buffer will remain active until an [RI](318736-jcl-ri) , [S](318874-jcl-s)(n) or [MV](318730-jcl-mv) %n source command is used. If the user responds with ENTER only, a null parameter will be created.




##### EXAMPLE 1


| Input<br> | SIB Before<br> | SIB After<br> |
| --- | --- | --- |
| ABC<br> | XXX<br> | ABC<br> |
| <br> | ^<br> | ^<br> |


##### EXAMPLE 2


| Input<br> | SIB Before<br> | SIB After<br> |
| --- | --- | --- |
| ABC DEF<br> | XXX<br> | ABC DEF<br> |
| <br> | ^<br> | ^<br> |


##### EXAMPLE 3


| Input<br> | SIB Before<br> | SIB After<br> |
| --- | --- | --- |
| &lt;ENTER&gt;<br> | XXX<br> | ^<br> |
| <br> | ^<br> | ^<br> |




Back to [JCL Commands](jcl-commands)


