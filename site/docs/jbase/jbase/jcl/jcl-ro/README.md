# JCL RO

**Created At:** 5/28/2018 11:19:51 AM  
**Updated At:** 6/1/2018 5:35:41 PM  
**Original Doc:** [318737-jcl-ro](https://docs.jbase.com/45792-jcl/318737-jcl-ro)  

**Tags:**
<badge text='secondary' vertical='middle' />
<badge text='buffer' vertical='middle' />
<badge text='primary' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description 

This command resets (clears) the active output buffer. It takes the general form:

```
RO
```



## Note: 


> The RO command clears the active output buffer. The buffer pointer is left at the beginning of the buffer.




###### EXAMPLE 1


| Command  | POB Before  | POB After  |
| --- | --- | --- |
| STOFF<br> | <br> | <br> |
| RO<br> | ABC^DEF<br> | <br> |
| <br> |                ^ | ^<br> |




###### EXAMPLE 2


| Command  | SOB Before  | SOB After  |
| --- | --- | --- |
| STON<br> | <br> | <br> |
| RO<br> | GHI^JKL<br> | <br> |
| <br> |               ^  | ^<br> |




Back to [JCL Commands](./../jcl-commands)


