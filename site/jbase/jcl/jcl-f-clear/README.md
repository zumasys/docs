# jCL F-CLEAR

<PageHeader />

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

where **file-buffer** is the number (1 to 9) of the file buffer to be cleared.

## Note

> This command is equivalent to using the MV file-buffer.0 ",\_ command

### Example

```
PQN
F-C 1
MV &1.0 "Key", "Field 1"
```

Clear file buffer 1. Set the record key to "Key" and the first field to "Field 1". Functionally equivalent to MV &1.0 "Key", " Field1",\_. (Note the use of the underscore character as the last character of the command.)

Back to [jCL.](./../README.md)
  
<PageFooter />