# JCL GOSUB

**Created At:** 5/28/2018 10:54:51 AM  
**Updated At:** 6/11/2018 4:28:13 AM  

**Tags:**
<badge text='go' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description 

This command transfers control to a specific subroutine. It takes the general form:

```
GOSUB  label
```

or

```
GOSUB label] label... (Multivalued form)
```

where label specifies the label, which marks the required subroutine.



## Note:


> When an RSUB statement is encountered, control is transferred back to the line immediately following the calling GOSUB .




## Multivalued Form 

To use the multivalued form of the GOSUB  command, you must specify one label for each result of a multiple comparison. For example:

```
IF %2 = A]B]C]D GOSUB  1000]2000]3000]4000
```

Separate the test values and the destination labels with value marks (ctrl ]).

Note that this is a special case of the GOSUB  command. and should not be used where it is desired to have a mix of command types in the resulting actions. You can still achieve the same effect but each result must contain a separate command. For example:

```
IF %2 = A]B]" GOSUB  1000]GOSUB 2000]XFinished
```

In this case, if the result of the test for null is true the program will terminate with a suitable message.



##### EXAMPLE

```
010 GOSUB  1000
011 T "Returned from GOSUB"
.
031 1000 T "In subroutine"
032 IP %1
033 RSUB
```

The GOSUB  command on line 10 transfers control to label 1000 on line 31. When the RSUB on line 33 is processed, control returns to line 11.



See also["\[ \] {n}" command](318585-jcl-command)

Back to[JCL Commands](jcl-commands)
