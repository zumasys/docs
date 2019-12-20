# JCL B

**Created At:** 5/28/2018 10:19:31 AM  
**Updated At:** 6/1/2018 5:38:12 PM  
**Original Doc:** [318616-jcl-b](https://docs.jbase.com/45792-jcl/318616-jcl-b)  

**Tags:**
<badge text='jcl' vertical='middle' />

## Description 

The command moves the active input buffer pointer back to the previous parameter. It takes the general form:

```
B
```



## Note:


> The input buffer pointer is moved backwards to the preceding field mark or to the beginning of the input buffer. If the pointer is on the first character of a parameter (or a field marker), the pointer will be moved back to the field mark of the previous parameter.




##### EXAMPLE 1


| Command | PIB Before | PIB After  |
| --- | --- | --- |
| B<br> | ABC^DEF^GHIJK<br> | ABC^DEF^GHIJK<br> |




##### EXAMPLE 2


| Command<br> | PIB Before<br> | PIB After<br> |
| --- | --- | --- |
| B<br> | ABC^DEF^GHIJK<br> | ABC^DEF^GHIJK<br> |


### 


Back to [JCL Commands](jcl-commands)
