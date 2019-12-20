# OSDELETE

**Created At:** 9/22/2017 11:53:17 AM  
**Updated At:** 11/27/2018 9:45:04 AM  
**Original Doc:** [277622-osdelete](https://docs.jbase.com/36868-jbase-basic/277622-osdelete)  

**Tags:**
<badge text='file handling' vertical='middle' />

# Description

The **OSDELETE** command deletes a NT or UNIX file. It takes the general form:

```
OSDELETE filename [ON ERROR statements]
```

Where:

- **filename** Specifies the file to delete. filename must include the file path. If the path is not specified, jBASE searches the current directory.
- ON ERROR **statements** Specifies statements to execute if the **OSDELETE** statement fails with a fatal error because the file is not open, an I/O error occurs, or jBASE cannot find the file.


If the ON ERROR clause is not specified and a fatal error occurs, the program terminates.

After executing **OSDELETE**, the [STATUS](278661-status-function) function returns either 0 or a failure code.


| Code | Description |
| --- | --- |
| 0<br> | It deletes the file<br> |
| 1<br> | Delete failed.<br> |




An example of use is the program statement to delete the file ‘MYPIPE’ in the current directory:

```
OSDELETE "MYPIPE"
```



Go back to [jBASE BASIC](263498-jbase-basic).
