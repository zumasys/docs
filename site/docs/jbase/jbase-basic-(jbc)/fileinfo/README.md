# FILEINFO

**Created At:** 8/31/2017 7:25:43 AM  
**Updated At:** 10/25/2018 7:47:21 AM  
**Original Doc:** [271548-fileinfo](https://docs.jbase.com/36868-jbase-basic/271548-fileinfo)  

**Tags:**
<badge text='file operations' vertical='middle' />

# Description

Use the **FILEINFO** function to return information about the specified file variable. It takes the general form:

```
FILEINFO(file.variable, key)
```

This function is currently limited to return values to determine if the file variable is a valid file descriptor variable.

**Key** Return Status returns 1 if ***file.variable*** is a valid files variable, or 0 if not.

```
0001     OPEN "test_rec" TO FILE_VAR ELSE ABORT 201, "THIS FILE "
0002     IF FILEINFO(FILE_VAR, 0) = 1 THEN CRT "FILE INFORMATION IS VALID"
0003     ELSE
0004         CRT "INVALID INFORMATION"
0005     END
```





Go back to [jBASE BASIC](263498-jbase-basic).
