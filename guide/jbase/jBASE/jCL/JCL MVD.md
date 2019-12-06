# JCL MVD

**Created At:** 5/28/2018 11:15:04 AM  
**Updated At:** 6/1/2018 5:24:38 PM  

**Tags:**
<badge text='buffer' vertical='middle' />
<badge text='multivalue' vertical='middle' />
<badge text='delete' vertical='middle' />

## Description 

This command deletes a value from a multivalued parameter in the target buffer. It takes the general form:

```
MVD target source
```

where:

- target is a direct or indirect reference to a buffer or select register which contains the data to be deleted.
- source is the data you want to delete. Can be a literal string, or a direct or indirect reference to a buffer or select register.




## Note: 


> Values in the target must be in ascending ASCII  sequence, otherwise the result of the command will be unpredictable. If the source does not exist or if the multivalue cannot be matched, the command wills no effect, except perhaps to move the buffer pointer.
> 
> If the source element exists more than once in the target parameter, only the first occurrence will be deleted.
> 
> If the target is the primary input buffer, the buffer pointer will be left at the beginning of the specified target parameter.




###### EXAMPLE


| Command  | File Buffer 1 Before  | File Buffer 1 After  |
| --- | --- | --- |
| MVD &1.1 DEF<br> | 000 Key<br>001 AAA]DEF]GHI<br>002 YYY<br> | 000 Key<br>001 ABC]GHI<br>002 YYY<br> |




Back to [JCL Commands](jcl-commands).
