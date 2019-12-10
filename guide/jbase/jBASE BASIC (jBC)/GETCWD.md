# GETCWD

**Created At:** 9/6/2017 12:44:31 PM  
**Updated At:** 10/30/2018 9:57:38 AM  

**Tags:**
<badge text='directories' vertical='middle' />

# Description

This function returns the current working directory of the program, which is normally the directory in which execution of the program occurred but possibly changed using the [CHDIR](264330-chdir) function. It takes the general form:

```
 GETCWD(Var)
```

Where **v****ar** will be set to the name of the current working directory at execution. The function itself  returns a boolean **TRUE**or **FALSE**value to indicate whether the command was successful or not.

## Note:


> Refer to underlying operating system documentation for more information on the concept of the current working directory.


An example of use is as follows:

```
0001     IF GETCWD(W_DIR) THEN
0002         CRT "Current Working Directory = ":W_DIR
0003     END ELSE
0004         CRT "Could not determine CWD!"
0005     END
```

# 


Go back to [jBASE BASIC](263498-jbase-basic).
