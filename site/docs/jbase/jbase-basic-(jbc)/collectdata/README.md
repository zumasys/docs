# COLLECTDATA

**Created At:** 9/6/2017 6:48:55 AM  
**Updated At:** 1/5/2018 1:30:48 PM  
**Original Doc:** [276023-collectdata](https://docs.jbase.com/36868-jbase-basic/276023-collectdata)  
**Original ID:** 276023  
**Internal:** No  

## Description

The **COLLECTDATA**statement is used to retrieve data passed from the PASSDATA clause of an [EXECUTE](./../execute) statement. It takes the general form:

```
COLLECTDATA variable
```

Where:

Variable is the name of the variable, which is to store the retrieved data.

## Note

The **COLLECTDATA** statement can be used in any program, which is [EXECUTE](./../execute)d (or [PERFORM](./../execute)ed) by another program where the calling program uses a PASSDATA clause. The [EXECUTE](./../execute)d program uses a **COLLECTDATA** statement to retrieve the passed data.

If a PASSDATA clause is not in effect, variable will be assigned a value of null.

An example of use is as:

First

```
 EXECUTE "RUN JBASIC_PROGS SECOND" PASSDATA "Handover"
```

Second

```
 COLLECTDATA PassedMessage
 CRT PassedMessage
```

In the above example, program FIRST will [EXECUTE](./../execute) program SECOND and will pass the string "Handover" in the PASSDATA clause. Program SECOND retrieves the string to a variable PassedMessage and prints the string on the Terminal screen.

GO back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
