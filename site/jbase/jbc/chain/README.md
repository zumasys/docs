# CHAIN

**Created At:** 7/24/2017 1:04:50 PM  
**Updated At:** 10/25/2018 7:07:00 AM  
**Original Doc:** [264324-chain](https://docs.jbase.com/36868-jbase-basic/264324-chain)  
**Original ID:** 264324  
**Internal:** No  

## Description

The **CHAIN** statement exits the current program and transfers process control to the program defined by the expression. Process control will never return to the originating program. The statement takes the form:

```
CHAIN expression
```

Where **expression** should evaluate to a valid UNIX or Windows command, which may be another jBASE BASIC program.

The command string may be suffixed with the ‘I’ option, which will cause any [COMMON](./../common) variables in the current program to be inherited by the new program (providing it is a jBASE BASIC program).

## Note

> There are no restrictions to the **CHAIN** statement. However, it is advisable that your program follows a logical path easily seen by another programmer.

If the program, which contains the **CHAIN** command (the current program) was called from a jCL program, and the program to be executed (the target program) is another jBASE BASIC program, control will return to the original jCL program when the target program terminates. If the target program is a jCL program, control will return to the command shell when the jCL program terminates.

### Examples

```
CHAIN "OFF" ;* exit via the OFF command
```

Consider two programs as:

```
PROGRAM Prog1
COMMON varA, varB
varA = 50;
varB = 100
CHAIN "newPROG (I"
```

```
PROGRAM newPROG
COMMON varI, varJ
* varI and varJ inherited
CRT varI, varJ
```

running Prog1 will result in:

```
50      100
```

being displayed.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
