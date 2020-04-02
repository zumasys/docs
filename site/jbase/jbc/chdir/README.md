# CHDIR

**Created At:** 7/24/2017 1:19:44 PM  
**Updated At:** 10/24/2018 10:59:05 PM  
**Original Doc:** [264330-chdir](https://docs.jbase.com/36868-jbase-basic/264330-chdir)  
**Original ID:** 264330  
**Internal:** No  

## Description

The **CHDIR** function allows the current working directory, as seen by the process environment, to be changed. The function usually takes the form:

```
CHDIR(expression)
```

Where the **expression** should evaluate to a valid path name within the file system. The function returns a Boolean TRUE result if the **CHDIR** succeeded and a Boolean FALSE result if it failed, as illustrated by the results of the code below:

```
    IF CHDIR ("C:\jBASE\CurrentVersion\src") THEN
        CRT "jBASE Development system Installed"
    END
    ELSE
        CRT "Non-existent directory, Sorry!"
    END
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
