# JBASETHREADCreate

**Created At:** 9/14/2017 12:35:49 PM  
**Updated At:** 5/20/2019 5:35:01 PM  
**Original Doc:** [276761-jbasethreadcreate](https://docs.jbase.com/36868-jbase-basic/276761-jbasethreadcreate)  
**Original ID:** 276761  
**Internal:** No  

## Description

Use the **JBASETHREADCreate** command to start a new thread. It takes the general form:

```
JBASETHREADCreate(ProgramName, Arguments, User, Handle)
```

Where:

- **ProgramName** is the name of program to execute,
- **Arguments** are any command line arguments,
- **User** is the name of the user in format:  "user{,account{,password}}" or "" to configure as calling user id.
- **Handle** will contain the value of the returned thread handle

Example code can be found in the "Threads" folder under "samples" in the jBASE install directory.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
