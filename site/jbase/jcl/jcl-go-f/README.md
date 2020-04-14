# jCL GO F

<PageHeader /> 

**Tags:**
<badge text='go' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description

This command transfers control to the statement containing the next M (mark) command. It takes the general form:

```
G F
```

or

```
GO  F
```

or

```
GOTO F
```

## Note

> The program is scanned forward from the current line, until the next M command is found. Program execution then jumps to that line. If an M command cannot be found, the jCL  program will terminate with an error message: Can't find mark at line n in programname.

### Example

```
001 PQN

...

005 GO  F
006 10 MV %1 "ABC"
007 MV %6 "DEF"
008 MV %10 "HIJ"
009 M
.
```

The GO F command on line 5 causes the program to be scanned from line 6, looking for the next M command. In this case, control will be transferred to line 9.

Back to [jCL.](./../README.md)
  
<PageFooter />