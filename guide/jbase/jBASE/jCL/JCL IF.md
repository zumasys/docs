# JCL IF

**Created At:** 5/28/2018 11:00:13 AM  
**Updated At:** 6/11/2018 4:25:35 AM  

**Tags:**
<badge text='jcl' vertical='middle' />

## Description 

Allows conditional execution of jCL  commands based on the evaluation of an expression, or the presence (or absence) of a reference. It takes the general form:

```
IF{#} reference command
```

or

```
IF reference operator expression command
```

where:

- # tests for the absence of a value.
- reference can be a direct or indirect reference to a buffer or select register, or an A command without a surround character. Using an A command will not move a value but simply provides a reference to the parameter to be tested.
- operator performs a value comparison. Operators are:



| =<br> | Equal to<br> |
| --- | --- |
| #<br> | Not equal to<br> |
| &lt;<br> | Less than<br> |
| &gt;<br> | Greater than<br> |
| [<br> | Less than or equal to<br> |
| ]<br> | Greater than or equal to<br> |


- expression follows the operator and can be one of the following:
    - A direct or indirect reference to a buffer or select register.
    - A string. If the string contains embedded spaces or the first character is an exclamation mark (!), percent sign (%) or ampersand (&), enclose the string in single or double quotes.
    - A pattern format string. Refer to the IF (with Mask) command.
- command is any valid jCL  command.


###### 


## Note: 


> If the test result is true, the command at the end of the statement is executed. If the test yields false, command is ignored and processing continues with the next line. Buffer pointers will not be moved if you use a direct or indirect reference to a buffer or select register.


Comparative tests are performed on a character-by-character, left-to- right basis. For example, AAB is greater than AAAB and 20 is greater than 100. Use the IFN command if you want to perform numeric comparisons. You can use also perform multiple conditional tests in a single statement. For example:

```
IF %1 > A IF %1 < D T %1  is B or C
```

###### 


###### EXAMPLE 1

```
021 IF %1 T "%1 is not null"
022 IF # %1 T "%1 is null"
023 ...
```

Line 21 tests for a value in the 1st parameter of the PIB and outputs a message if the parameter is not null. Line 22 tests for opposite case.

###### 


###### EXAMPLE 2

```
021 IF &1.1 = ABC GO  10
022 MV %3 &1.1
023 10 ...
```

If &1.1 contains ABC execution will branch to line 23. Otherwise, the value in &1.1 will be moved into %3.

###### 


###### EXAMPLE 3

```
010 T "Continue (Y/n) :",+
011 IP %1
012 S1
013 IF # A G 10
014 IF A(1,1) = Y G 10
015 IF A(1,1) = y G 10
016 XFinished
017 10 ...
```

If the user enters Y, y or &lt;ENTER&gt; to the prompt on line 11, execution will continue at label 10 on line 17. Otherwise, the program will terminate.

### 


### IF Multivalued

Compares an expression with one of several different expressions or values, and conditionally executes one of several commands.

```
IF reference = expression{]expression}... command{]command]}...
```

or

```
IF reference # expression{]expression}... command.
```

where:

- reference can be a direct or indirect reference to a buffer or select register, or an A command without a surround character. Using an A command will not move a value but simply provides a reference to the parameter to be tested.
- expression follows the operator and can be one of the following:
    - A direct or indirect reference to a buffer or select register.
    - A string. If the string contains embedded spaces or the first character is an exclamation mark (!), percent sign (%) or ampersand (&), enclose the string in single or double quotes.
    - A pattern format string. Refer to the IF (with Mask) command.
- ] represents a value mark (Ctrl ])
- command is any valid jCL  command.




## Note: 


> The multivalues feature of the IF command enables one IF statement to be used instead of a series. Do not use O or X commands unless they are the last in the series. Commands after an O or X will be ignored.


The equal (=) operator, will perform a logical OR on the expressions. If the reference is equal to any expression, the condition is true. If more than one expression is true, the command corresponding to the first true expression is executed. If there are more expressions than commands, and the true expression does not have a corresponding command, the last command in the series will be executed. If there are more commands than expressions, remaining commands are ignored.

If you use the not equal (#) operator, a logical AND is performed on the expressions. The reference must not equal any expression in the series for the condition to be true. In this case, the first command specified is executed. Subsequent commands are ignored.

If a direct or indirect reference to a buffer or select register identifies a multivalued parameter, the same jCL  statement is executed regardless of which of the multivalues is true. This means that each value will not access a different command - as it would have if you had specified it directly in the IF statement. For example:

```
MV %1 A]B]C]D
IF %1 = X]Y]Z]C GO  10]20]30]40
```

will cause program execution to continue from label 40.



Back to [JCL Commands](jcl-commands)
