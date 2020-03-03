# Executing jCL programs

**Created At:** 5/23/2018 2:54:43 PM  
**Updated At:** 6/1/2018 5:29:08 PM  
**Original Doc:** [318033-executing-jcl-programs](https://docs.jbase.com/45792-jcl/318033-executing-jcl-programs)  
**Original ID:** 318033  
**Internal:** No  

**Tags:**
<badge text='jcl' vertical='middle' />

jCL programs can be executed in several ways:

- Enter the name of the program from jSHELL,
- "jump to" another jCL  program of the same type by using the ( ) command,
- "call" another jCL program of the same type, as a subroutine, by using the [ ] command,
- Using  [PERFORM](./../../../jbase-basic-%28jbc%29/execute) , [EXECUTE](./../../../jbase-basic-%28jbc%29/execute) or [CHAIN](./../../../jbase-basic-%28jbc%29/chain)  statement from a jBC  program, or
- Convert the program to a UNIX executable and call it from any shell. Change the first line to

``` bash
#!usr/jbc/bin/jpq
```

and then use chmod to create an executable file.

Once started, a jCL  program will remain active until:

- control is explicitly passed to another jCL  program
- the jCL  program is explicitly exited
- all of the lines of the jCL  program are exhausted
- a fatal error is encountered.

Even when the jCL  program temporarily passes control to another process such as jED  or jBC , it will still remain in control (unless control is passed to a jBC program which then CHAINs or ENTERs another jCL program). Exiting from the called process will return control to the jCL program.

If it is desired to not store the main body of a jCL program in the MD file, a "pointer" jCL program can be created in the MD instead.  
For example, to run a jCL program called DAILY which is held on a file called REPORTS, create an MD entry like this:

```
DAILYYREPORT
001 PQN
002 (REPORTS DAILY)
```

This will chain to jCL  program DAILY in file REPORTS.

Note that the "pointer" program and the "pointed to" program can have the same name.

Back to [jCL Commands](./../README.md)
