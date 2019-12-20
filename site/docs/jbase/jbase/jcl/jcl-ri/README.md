# JCL RI

**Created At:** 5/28/2018 11:17:59 AM  
**Updated At:** 6/1/2018 5:35:59 PM  
**Original Doc:** [318736-jcl-ri](https://docs.jbase.com/45792-jcl/318736-jcl-ri)  

**Tags:**
<badge text='buffer' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description 

The command resets (clears) the primary and secondary input buffers. It takes the general form:

```
RI
```

or

```
RIp
```

or

```
RI(n)
```

where:

- p specifies starting parameter from which to clear to the end of the buffer. Can be a number, or a direct or indirect reference to a buffer or select register.
- (n) specifies the starting column from which to clear to the end of the buffer. Can be a number, or a direct or indirect reference to a buffer or select register.




## Note:


> The RI command clears the entire PIB and SIB.
> 
> RIp clears the PIB starting from parameter p and continuing to the end of the buffer.
> 
> RI(n) clears the PIB starting from parameter n and continuing to the end of the buffer.


The buffer pointer will be left at the end of the PIB. The primary input buffer becomes the active buffer and the secondary input buffer will be cleared.



###### EXAMPLE 1


| Command<br> | PIB Before<br> | PIB After<br> |
| --- | --- | --- |
| RI<br> | ABC^DEF^GHI<br> | <br> |
| <br> |                  ^ | ^<br> |




###### EXAMPLE 2


| Command<br> | PIB Before<br> | PIB After<br> |
| --- | --- | --- |
| RI3<br> | ABC^DEF^GHI<br> | ABC^DEF<br> |
| <br> |                  ^ |                ^ |




###### EXAMPLE 3


| Command<br> | PIB Before<br> | PIB After<br> |
| --- | --- | --- |
| RI(6)<br> | ABC^DEF^GHI<br> | ABC^D<br> |
| <br> | ^<br> |             ^ |




Back to [JCL Commands](jcl-commands)
