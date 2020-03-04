# jCL MVD

**Created At:** 5/28/2018 11:15:04 AM  
**Updated At:** 6/1/2018 5:24:38 PM  
**Original Doc:** [318732-jcl-mvd](https://docs.jbase.com/45792-jcl/318732-jcl-mvd)  
**Original ID:** 318732  
**Internal:** No  

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

- **target** is a direct or indirect reference to a buffer or select register which contains the data to be deleted.
- **source** is the data you want to delete. Can be a literal string, or a direct or indirect reference to a buffer or select register.

## Note

> Values in the target must be in ascending ASCII  sequence, otherwise the result of the command will be unpredictable. If the source does not exist or if the multivalue cannot be matched, the command wills no effect, except perhaps to move the buffer pointer.
>
> If the source element exists more than once in the target parameter, only the first occurrence will be deleted.
>
> If the target is the primary input buffer, the buffer pointer will be left at the beginning of the specified target parameter.

### Example

```
|    Command   | File Buffer 1 Before  | File Buffer 1 After  |
|    -------   | --------------------  | -------------------- |
| MVD &1.1 DEF | 000 Key               | 000 Key              |
|              | 001 AAA]DEF]GHI       | 001 ABC]GHI          |
|              | 002 YYY               | 002 YYY              |
```

Back to [jCL.](./../README.md)
