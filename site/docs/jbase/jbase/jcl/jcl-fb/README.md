# JCL FB

**Created At:** 5/28/2018 10:53:16 AM  
**Updated At:** 6/11/2018 4:12:35 AM  
**Original Doc:** [318673-jcl-fb](https://docs.jbase.com/45792-jcl/318673-jcl-fb)  
**Original ID:** 318673  
**Internal:** Yes  

**Tags:**
<badge text='buffer' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description 

This command reads a record from a file into the special "fast" buffer without having to open the file first. It takes the general form:

```
FB {DICT} file-name{,data-section-name} {key} error-cmd-line
```

or

```
FB ({DICT} file-name{,data-section-name} {key}) error-cmd-line
```

where:

- DICT specifies the dictionary section of file-name, if required.
- file-name is the name of the file to be opened. Can be a literal (not enclosed in quotes), or a direct or indirect reference to a buffer or select register.
- data-section-name specifies an alternative data section of file-name.
- key is the key of the record to be read. Can be a literal (not enclosed in quotes), or a direct or indirect reference to a buffer or select register. If key is not specified, the value at the active input buffer
pointer is used to supply the key.
- error-cmd-line is the line immediately after the FB command. Only executed if the specified file cannot be opened or the record read.




Each time the FB command is used,  the previous contents of the buffer will be overwritten. The FB command is useful if only reading one record from a file, otherwise, the F-OPEN  and F-READ  commands should be used. If the specified record is not on file, or if the file does not exist, the line immediately following the FB command will be executed. If the read is successful, this line will be ignored.



## Note: 


> Subsequent references to the fast buffer use a special syntax. For example, to refer to the second field of a record in the fast buffer, one would use &2.




##### EXAMPLE 1

```
001 PQN
002 FB SALES ABC
003 T "ABC not on file" / G 1001
004 MV %3 &2
```

The FB command on line 2 attempts to read record ABC from file SALES. If the record cannot be found for any reason, a message is output and control transferred to label 1001 by line 3. If the record is read successfully, execution continues at line 004, which moves field 2 of the record into parameter 3 of the PIB.



##### EXAMPLE 2

```
001 PQN
002 T C, (5, 10), "Name :",+
003 IP %2
004 FB SALES %2
005 T "New record"
006 T "Area :",+
007 IP %3
```

Here the user is prompted for a name (the record key) and the fast buffer is used to read the record from the SALES file. If the record does not exist, a message is output but processing continues.

###  

Back to[JCL Commands](./../jcl-commands)
