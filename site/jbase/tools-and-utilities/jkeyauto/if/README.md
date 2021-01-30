# JKEYAUTO IF

<PageHeader />

## Description

Conditionally execute a statement.

## Syntax

```
IF binary_result then statement
IF binary_result else statement
```

The **binary_result** is something that can be set to true or false, i.e. 1 or 0. 

The operators **AND** , **OR** , **EQ** , **NE** , **LT** , **LE** , **GT** , **GE** and **=** are all supported as in jBC code.  
The **IF** statement does not support nested statements.  
The **THEN** or **ELSE** clause must be followed by the statements to execute.  
If no statements follow, then this is the equivalent of a "No Operation".  

## Example

```
IF result THEN PRINT "result was non-zero, exiting" ; exit
if elapsed GT 10 AND warning_flag THEN goto errorlabel
if (var EQ A:B OR var EQ C:D) AND msgflag THEN PRINT "hello"
```

Back to [jkeyauto](./../jkeyauto/README.md)

<PageFooter />
