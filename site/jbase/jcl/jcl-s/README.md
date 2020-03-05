# jCL S

**Created At:** 5/29/2018 7:00:34 AM  
**Updated At:** 6/1/2018 5:24:30 PM  
**Original Doc:** [318874-jcl-s](https://docs.jbase.com/45792-jcl/318874-jcl-s)  
**Original ID:** 318874  
**Internal:** No  

**Tags:**
<badge text='pointer' vertical='middle' />
<badge text='buffer' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description

The command positions the primary input buffer pointer to a specified parameter or column, and selects the primary input buffer as active. It takes the general form:

```
Sp
```

or

```
S(n)
```

Where:

- **p** specifies the parameter to which the buffer pointer should be set. Can be a number, or a direct or indirect reference to a buffer or select register.
- **(n)** specifies the starting column to which the buffer pointer should be set. Can be a number, or a direct or indirect reference to a buffer or select register.

## Note

> Sp sets the buffer pointer to the field mark preceding parameter p. If the specified column or parameter number is less than 2, the buffer pointer is placed at the beginning of the active input buffer.
>
> If the specified column or parameter number is beyond the end of the buffer, the buffer pointer will positioned at the end of the buffer. Use the MV command to create parameters beyond the current end of the buffer. All data in the secondary input buffer will be cleared.

### Example 1

```
| Command  | PIB Before  |  PIB After  |
| -------- | ----------- |  ---------  |
| S3       | ABC^DEF^GHI | ABC^DEF^GHI |
|          |    ^        |        ^    |
```

### Example 2

```
| Command  | PIB Before  | PIB After  |
| -------  | ----------  | ---------  |
| S(4)     | 12345^ABC   | 12345^ABC  |
|          | ^           |    ^       |
```

Back to [jCL.](./../README.md)
