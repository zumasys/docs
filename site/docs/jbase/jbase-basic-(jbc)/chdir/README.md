# CHDIR

**Created At:** 7/24/2017 1:19:44 PM  
**Updated At:** 10/24/2018 10:59:05 PM  
**Original Doc:** [264330-chdir](https://docs.jbase.com/36868-jbase-basic/264330-chdir)  


# Description

The **CHDIR**function allows the current working directory, as seen by the process environment, to be changed. The function usually takes the form:

```
CHDIR(expression)
```

Where the **expression** should evaluate to a valid path name within the file system. The function returns a Boolean TRUE result if the**CHDIR**succeeded and a Boolean FALSE result if it failed, as illustrated by the results of the code below:

```
0001     IF CHDIR ("C:\jBASE\CurrentVersion\src") THEN
0002         CRT "jBASE development system INSTALLED"
0003     END
0004     ELSE
0005         CRT "NON EXISTENT DIRECTORY, SORRY"
0006     END
```



Go back to [jBASE BASIC](263498-jbase-basic).
