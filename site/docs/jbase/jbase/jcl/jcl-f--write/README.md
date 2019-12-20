# JCL F -WRITE

**Created At:** 5/28/2018 10:52:52 AM  
**Updated At:** 6/11/2018 4:20:56 AM  
**Original Doc:** [318672-jcl-f-write](https://docs.jbase.com/45792-jcl/318672-jcl-f-write)  

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

where file-buffer is the number (1 to 9) of the file buffer with which the target file is associated.



## Note: 


> The key of the record is contained in field zero of the file buffer. If this field is null, the record will not be written. F-WRITE  will not alter the contents of the file buffer.
> 
> Normally writing a record should not be attempted unless it is first locked with an F-UREAD command. The lock will be released when the F-WRITE  is complete. If the file has not been opened , the program will terminate with an error message.




##### EXAMPLE

```
001 PQN
002 F-OPEN  1 SALES
003 X ERROR: Can't find the Sales File!
004 T C, (5, 10), "Welcome to...",+
.
015 F-UREAD 1 ABC
016 F-F 1 \ G 1002
017 T "Record ABC found"
018 MV &1.2 "Field 2"
019 F-WRITE  1
```

Line 15 reads and locks record ABC in file SALES. If the record does not exist, the lock is released on line 16 and control is transferred to label 1002. If the record is read successfully, field 2 is overwritten on line 18. The record is then written back to the file on line 19 and unlocked.



See also [F-OPEN](318664-jcl-f-open)

Back to [JCL Commands](jcl-commands)


