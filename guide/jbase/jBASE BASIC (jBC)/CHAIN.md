# CHAIN

**Created At:** 7/24/2017 1:04:50 PM  
**Updated At:** 10/25/2018 7:07:00 AM  


# Description

The **CHAIN** statement exits the current program and transfers process control to the program defined by the expression. Process control will never return to the originating program. The statement takes the form:

```
CHAIN expression
```

Where **expression** should evaluate to a valid UNIX or Windows command, Which may be another jBASE BASIC program.

The command string may be suffixed with the ‘I’ option, which will cause any [COMMON](276024-common) variables in the current program to be inherited by the new program (providing it is a jBASE BASIC program).

## Note:


> There are no restrictions to the **CHAIN** statement. However, it is advisable that your program follows a logical path easily seen by another programmer.


If the program, which contains the**CHAIN** command (the current program) was called from a JCL program, and the program to be executed (the target program) is another jBASE BASIC program, control will return to the original JCL program when the target program terminates. If the target program is a JCL program, control will return to the command shell when the JCL program terminates.

### Examples: 

```
CHAIN "OFF" ;* exit via the OFF command
```

Consider two programs as:

```
001    PROGRAM Prog1
002    COMMON A,B
003    A = 50;
004    B = 100
005    CHAIN "NEWPROG (I"
```

```
001    PROGRAM NEWPROG
002    COMMON I,J
003    * I and J inherited
004    CRT I,J
```

running prog1 will result in:

```
50      100
```

being displayed.

Go back to [jBASE BASIC](263498-jbase-basic).


