# RTNDATA

**Created At:** 9/28/2017 8:30:17 AM  
**Updated At:** 1/5/2018 6:13:21 PM  
**Original Doc:** [278795-rtndata](https://docs.jbase.com/36868-jbase-basic/278795-rtndata)  


The **RTNDATA** statement allows a program to return specific data to the **RTNDATA** clause of another program's [EXECUTE](269198-execute) statement. It takes the general form:

```
RTNDATA expression
```

Where:

expression may evaluate to any data type.

When a jBASE BASIC program executes another jBASE BASIC program using the [EXECUTE](269198-execute) statement, it may specify a variable to pick up data using the **RTNDATA** clause. The data picked up will be that specified by the executed program using the **RTNDATA** statement.

The data will be discarded if the program is not executed by an [EXECUTE](269198-execute) statement in another program.



Go back to [jBASE BASIC](263498-jbase-basic).
