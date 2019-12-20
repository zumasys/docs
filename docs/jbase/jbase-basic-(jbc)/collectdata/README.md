# COLLECTDATA

**Created At:** 9/6/2017 6:48:55 AM  
**Updated At:** 1/5/2018 1:30:48 PM  


# Description

The **COLLECTDATA**statement is used to retrieve data passed from the PASSDATA clause of an [EXECUTE](269198-execute) statement. It takes the general form:

```
COLLECTDATA variable
```

Where:

Variable is the name of the variable, which is to store the retrieved data.

# Please note:

The **COLLECTDATA** statement can be used in any program, which is [EXECUTE](269198-execute)d (or [PERFORM](269198-execute)ed) by another program where the calling program uses a PASSDATA clause. The [EXECUTE](269198-execute)d program uses a **COLLECTDATA** statement to retrieve the passed data.

If a PASSDATA clause is not in effect, variable will be assigned a value of null.

An example of use is as:

FIRST

```
 EXECUTE "RUN JBASIC_PROGS SECOND" PASSDATA "Handover"
```

SECOND

```
 COLLECTDATA PassedMessage
 CRT PassedMessage
```



In the above example, program FIRST will [EXECUTE](269198-execute) program SECOND and will pass the string "Handover" in the PASSDATA clause. Program SECOND retrieves the string to a variable PassedMessage and prints the string on the Terminal screen.



GO back to [jBASE BASIC](263498-jbase-basic).
