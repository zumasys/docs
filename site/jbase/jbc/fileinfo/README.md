# FILEINFO

**Created At:** 8/31/2017 7:25:43 AM  
**Updated At:** 10/25/2018 7:47:21 AM  
**Original Doc:** [271548-fileinfo](https://docs.jbase.com/36868-jbase-basic/271548-fileinfo)  
**Original ID:** 271548  
**Internal:** No  

**Tags:**
<badge text='file operations' vertical='middle' />

## Description

Use the **FILEINFO** function to return information about the specified file variable. It takes the general form:

```
FILEINFO(file.variable, key)
```

This function is currently limited to return values to determine if the file variable is a valid file descriptor.

**Key** returns 1 if **file.variable** is a valid files variable, or 0 if not.

```
OPEN "test_rec" TO file_Var ELSE ABORT 201, "This file "
IF FILEINFO(file_Var, 0) = 1 THEN CRT "File information is valid"
ELSE
    CRT "Invalid information"
END
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
