# GETCWD

**Created At:** 9/6/2017 12:44:31 PM  
**Updated At:** 10/30/2018 9:57:38 AM  
**Original Doc:** [276056-getcwd](https://docs.jbase.com/36868-jbase-basic/276056-getcwd)  
**Original ID:** 276056  
**Internal:** No  

**Tags:**
<badge text='directories' vertical='middle' />

## Description

This function returns the current working directory of the program, which is normally the directory in which execution of the program occurred but possibly changed using the [CHDIR](./../chdir) function. It takes the general form:

```
 GETCWD(Var)
```

Where **Var** will be set to the name of the current working directory at execution.

The function itself  returns a boolean **TRUE** or **FALSE** value to indicate whether the command was successful or not.

## Note

> Refer to underlying operating system documentation for more information on the concept of the current working directory.

An example of use is as follows:

```
     IF GETCWD(W_DIR) THEN
         CRT "Current Working Directory = ":W_DIR
     END ELSE
         CRT "Could not determine CWD!"
     END
```

Go back to [jBASE BASIC](./../README.md)
