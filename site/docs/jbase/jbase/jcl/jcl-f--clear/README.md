# JCL F -CLEAR

**Created At:** 5/28/2018 10:25:06 AM  
**Updated At:** 6/11/2018 4:21:49 AM  
**Original Doc:** [318628-jcl-f-clear](https://docs.jbase.com/45792-jcl/318628-jcl-f-clear)  

**Tags:**
<badge text='file' vertical='middle' />
<badge text='buffer' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description 

The **F-CLEAR** command clears the specified file buffer. It takes the general form:

```
F-CLEAR file-buffer
or
```

```
F-C file-buffer
```

where file-buffer is the number (1 to 9) of the file buffer to be cleared.



## Note: 


> This command is equivalent to using the MV file-buffer.0 ",\_ command




##### EXAMPLE

```
001 PQN
002 F-C 1
003 MV &1.0 "Key", "Field 1"
```

Clear file buffer 1. Set the record key to "Key" and the first field to "Field 1". Functionally equivalent to MV &1.0 "Key", " Field1",\_. (Note the use of the underscore character as the last character of the command.)



Back to [JCL Commands](./../jcl-commands)
