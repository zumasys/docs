# JCL BO

**Created At:** 5/28/2018 10:20:54 AM  
**Updated At:** 6/11/2018 4:21:22 AM  
**Original Doc:** [318617-jcl-bo](https://docs.jbase.com/45792-jcl/318617-jcl-bo)  

**Tags:**
<badge text='pointer' vertical='middle' />
<badge text='buffer' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description 

The command moves the active output buffer pointer back by one parameter. It takes the general form:

```
BO
```



## Note: 


> The buffer pointer will move backward until it finds a field mark or the start of the buffer. To completely clear the buffer, use the [RO](./../jcl-ro) command. To clear specific parameters, use the MV #n command






##### EXAMPLE 1


| Command<br> | POB Before<br> | POB After<br> |
| --- | --- | --- |
| BO<br> | ABC^DEF^GHIJK<br> | ABC^DEF^GHIJK<br> |
| <br> |       ^<br> |                              ^<br> |




##### EXAMPLE 2


| Command<br> | SOB Before<br> | SOB After<br> |
| --- | --- | --- |
| BO<br> | SAVE-LIST<br> | SAVE-LIST<br> |
| <br> | ^<br> |                  ^<br> |


## Note: 


> SOB - Secondary Output Buffer.




Back to [JCL Commands](./../jcl-commands)
