# OSCLOSE

**Created At:** 9/22/2017 11:51:23 AM  
**Updated At:** 11/27/2018 9:45:08 AM  

**Tags:**
<badge text='file handling' vertical='middle' />

# Description

The **OSCLOSE** command closes a sequential file that was previously opened with the [OSOPEN](277623-osopen) or [OPENSEQ](277543-openseq) command. the command takes the general form:

```
OSCLOSE file.var [ON ERROR statements]
```

Where:

- **file.var** Specifies the file to close.
- ON ERROR **statements** Specifies statements to execute if the **OSCLOSE** statement fails with a fatal error because the file is not open, an I/O error occurs, or jBASE cannot find the file.


If the ON ERROR clause is not specified,  and a fatal error occurs, the program will enter the debugger. After execution of **OSCLOSE**, the [STATUS](278661-status-function) function returns either 0 or a failure code.


| Code<br> | Description<br> |
| --- | --- |
| 0<br> | it closes the file successfully.<br> |
| 1<br> | Close failed.<br> |


An example of use is as:

```
OSCLOSE MYFILE_VARIABLE
```



Go back to [jBASE BASC](263498-jbase-basic).
