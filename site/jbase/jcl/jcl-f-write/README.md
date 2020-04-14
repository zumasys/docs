# jCL F-WRITE

<PageHeader />

**Tags:**
<badge text='buffer' vertical='middle' />
<badge text='read' vertical='middle' />
<badge text='write' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description

This command writes the contents of a file buffer as a record. It takes the general form:

```
F-WRITE  file-buffer
```

or

```
F-W file-buffer
```

where **file-buffer** is the number (1 to 9) of the file buffer with which the target file is associated.

## Note

> The key of the record is contained in field zero of the file buffer. If this field is null, the record will not be written. F-WRITE  will not alter the contents of the file buffer.
>
> Normally writing a record should not be attempted unless it is first locked with an F-UREAD command. The lock will be released when the F-WRITE  is complete. If the file has not been opened , the program will terminate with an error message.

### Example

```
PQN
F-OPEN  1 SALES
X ERROR: Can't find the Sales File!
T C, (5, 10), "Welcome to...",+

...
...

F-UREAD 1 ABC
F-F 1 \ G 1002
T "Record ABC found"
MV &1.2 "Field 2"
F-WRITE  1
```

The "F-UREAD" line reads and locks record ABC in file SALES. If the record does not exist, the lock is released and control is transferred to label 1002. If the record is read successfully, field 2 is overwritten. The record is then written back to the file via "F-WRITE" and unlocked.

See also [F-OPEN](./../jcl-f-open)

Back to [jCL.](./../README.md)
  
<PageFooter />