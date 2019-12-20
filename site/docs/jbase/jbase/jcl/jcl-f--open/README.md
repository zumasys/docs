# JCL F -OPEN

**Created At:** 5/28/2018 10:51:31 AM  
**Updated At:** 6/11/2018 4:14:11 AM  
**Original Doc:** [318664-jcl-f-open](https://docs.jbase.com/45792-jcl/318664-jcl-f-open)  

**Tags:**
<badge text='file' vertical='middle' />
<badge text='open' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description 

This command clears a file buffer and opens a file for reading and writing. It takes the general form:

```
F-OPEN  file-buffer {DICT} file-name{,data-section-name} error-cmd-line
```

or

```
F-O file-buffer {DICT} file-name{,data-section-name} error-cmd-line
```

where:

- file-buffer is the number (1 to 9) of the file buffer with which the file is to be associated.
- DICT specifies the dictionary section of file-name, if required.
- file-name is the name of the file to be opened. Can be a literal (not enclosed in quotes), or a direct or indirect reference to a buffer or select register.
- data-section-name specifies an alternative data section of file-name.
- error-cmd-line is the line immediately after the F-OPEN  command. Only executed if the specified file cannot be opened.




## Note: 


> If the file cannot be opened, the line immediately after the F-OPEN  command will be executed. If the file is opened successfully, this line will be ignored. File buffers are maintained when control is transferred between jCL  programs. The file will remain open until closed or until the end of the program.




##### EXAMPLE

```
001 PQN
002 F-OPEN  1 SALES
003 X ERROR: Can't find the Sales File!
004 T C, (5,10), "Welcome to...",+
```

If the SALES file is opened, execution continues with line 004. Otherwise, the program terminates with an appropriate error message.



See also  [F-KLOSE](318663-jcl-f-klose)

Back to [JCL Commands](jcl-commands)
