# EXECUTE

**Created At:** 8/28/2017 8:28:19 AM  
**Updated At:** 7/17/2019 11:04:52 PM  
**Original Doc:** [269198-execute](https://docs.jbase.com/36868-jbase-basic/269198-execute)  


# Description

The **EXECUTE** or**PERFORM** statement allows the currently executing program to pause and execute another program. This may be any program, including another jBASE BASIC program or a jBASE command.

It takes the general form:

```
EXECUTE|PERFORM expression {CAPTURING variable} {RETURNING|SETTING variable} {PASSLIST {expression}} {RTNLIST {variable}}{PASSDATA variable} {RTNDATA variable}
```

where:

- **Expression** can be formed from any jBASE construct. The system will not verify that the command exists before executing it. Use a new Bourne Shell to execute a command (sh) by default. The shell type can be changed by preceding the command with a CHAR(255) concatenated with either "k", "c", or "s" to signify the Korn shell, C shell or Bourne Shell.
- The capturing clause will capture any output that the executing program would normally send to the terminal screen and place it in the **variable**specified. A field mark in the variable replaces every newline normally sent to the terminal.
- The returning and setting clauses are identical. Both clauses will capture the output associated with any error messages the executing program issues. The first field of the **variable** will be set to the exit code of the program.
- The **PASSLIST** clause allows jBASE programs to exchange lists or dynamic arrays between them. The variable should contain the list that the program wishes to pass to the jBASE program it is executing.The program to be executed should be able to process lists, otherwise the list will just be ignored. If the variable name is not specified then the clause will pass the default select list to the executing program.
- If the executed program sets up a list then use the **RTNLIST** clause to place that list into a specified variable. It places the list in the default list variable if omitted.
- Passes the data in the specified variable to another jBASE BASIC program, the executing jBASE BASIC program should retrieve the data using the [COLLECTDATA](./../collectdata) statement.
- The [RTNDATA](./../rtndata) statement returns any data passed from an executing jBASE BASIC program in the specified variable. The executing jBASE BASIC program should use the [RTNDATA](./../rtndata) statement to pass data back to the calling program.


## Note:


> The clauses may be specified in any order within the statement but only one of each clause may exist.
> 
> Variables used to pass data to the executed program should have been assigned to a value beforehand, any variable name may be used to receive data.


The statement not only Passes Data, Dynamic Arrays and lists to programs written in jBASE BASIC, but makes it possible to intercept screen output and error messages from any program.

An example of use is as:

```
PERFORM "MyProg" SETTING ErrorList PASSLIST
EXECUTE "ls" CAPTURING DirListing
```



Go back to[jBASE BASIC](./../jbase-basic-programmers-reference-guide).




