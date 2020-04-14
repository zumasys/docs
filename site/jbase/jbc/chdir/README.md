# CHDIR

<PageHeader />

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

  
<PageFooter />
