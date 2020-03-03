# jCL F-KLOSE

**Created At:** 5/28/2018 10:51:12 AM  
**Updated At:** 6/11/2018 4:19:44 AM  
**Original Doc:** [318663-jcl-f-klose](https://docs.jbase.com/45792-jcl/318663-jcl-f-klose)  
**Original ID:** 318663  
**Internal:** No  

**Tags:**
<badge text='buffer' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description

The command closes a specified file buffer. It takes the general form:

```
F-KLOSE  file-buffer
```

or

```
F-K file-buffer
```

where **file-buffer** is the number (1 to 9) of the file buffer to be closed.

## Note

> F-KLOSE  is normally only used when you have finished working with a remote file and need to close it.

### Example

```
F-K 1
```

Closes file buffer 1.

Back to [jCL.](./../README.md)
