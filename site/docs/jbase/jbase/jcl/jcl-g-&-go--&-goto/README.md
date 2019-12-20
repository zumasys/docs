# JCL G / GO  / GOTO

**Created At:** 5/28/2018 10:55:27 AM  
**Updated At:** 6/11/2018 4:19:16 AM  
**Original Doc:** [318682-jcl-g-go-goto](https://docs.jbase.com/45792-jcl/318682-jcl-g-go-goto)  

**Tags:**
<badge text='jcl' vertical='middle' />

## Description 

This command transfers control unconditionally to another location in the program. It takes the general form:

```
G label
```

or

```
GO  label
```

or

```
GOTO label
```

or

```
GO label] label...  (Multivalued form used with multivalued IF command)
```

where label specifies the location from which execution is to continue.



## Note: 


> If the label has not already been encountered in the program, GOTO will search for the label, from the current position. The target label must be found at the beginning of a command line, separated from the command by at least one space. If the label cannot be found, or is defined more than once, the program will terminate with an error message.




## Muultivalued Form 

To use the multivalued form of the GO  command, you must specify one label for each result of a multiple comparison. For example:

```
IF %2 = A]B]C]D GO  10]20]30]40
```

Separate the test values and the destination labels with value marks (ctrl ]).

Note that this is a special case of the GO  command. If you need to mix command types in the resulting actions, you should not use this form of the GO command. You can still achieve the same effect but each value must contain a separate command. For example:

```
IF %2 = A]B]C]" GO  10]GO 20]GO 30]XFinished
```

In this case, if the result of the test for null is true the program will terminate with a suitable message.

##### 


##### EXAMPLE 1

```
001 PQN
002 F-OPEN  1 SALES
003 G 1001
004 T C, (5, 10), "Welcome to...",+
.
087 1001 T "ERROR: Can"t find the Sales File!"
088 IP %99
089 RTN
.
```

If the SALES file is opened, execution continues with line 004. Otherwise, control is transferred to label 1001 on line 87.



##### EXAMPLE 2

```
022 5 T "Option :",+
023 IP %1
024 IF %1 = A]B]C GO  10]20]30
025 GOTO 5
.
```

This example transfers control to label 10 if "A" is entered, to label 20 if "B" is entered and to label 30 if "C" is entered. If the response is not recognized, control transfers back to label 5.



Back to [JCL Commands](jcl-commands)
