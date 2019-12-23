# Paragraphs 

**Created At:** 5/28/2018 10:12:58 AM  
**Updated At:** 4/29/2019 11:22:44 PM  
**Original Doc:** [318606-paragraphs](https://docs.jbase.com/45792-jcl/318606-paragraphs)  


## Description

Paragraphs are stored procedures in that their contents can contain a sequence of commands. They are typically stored in the file defined by the [**JEDIFILENAME\_MD**](./../../../environment-variables/jedifilename_md) environment variable (i.e. MD or VOC) and run directly from the **jsh**mode of the jShell:

```
jsh ~ -->paragraph_name
```

Paragraphs can also be stored and run from any file via the **para**command:

```
para {filename} paragraph_name
```

In this case, it is not necessary for the paragraph to be envoked from the jShell. If the optional filename is omitted then it is assumed that the paragraph is stored in the MD/VOC.

A logon paragraph record can also be invoked by the jShell via the dash option:

```
jsh -
```



## Format

The first line of a paragraph record begins with PA e.g.
PARAGRAPHX

```
001 PA
```

This line can then be followed by any of the following :

**Comment lines**

Any Line preceded by an asterisk. e.g:

```
* THIS IS A COMMENT LINE
```

**Label**

Any non-spaced text suffixed by a colon. e.g.:

```
Label:
```



**Paragraph Prompt**

A paragraph prompt to obtain values, e.g.:

```
<<I2,Second,1N>>
```

Load parameter two from the command line into PromptId Second. If parameter two on the command line is null then prompt for value for Second ensure validates to 1 numeric. The paragraph prompt is formatted as follows:

```
<<{Code,}PromptId{,Mask}>>
```

where:

- code may be:



| Code | Meaning |
| --- | --- |
| A | Always Prompt.<br> |
| Cn<br> | Use parameter n from command line. If value does not exist then null is used.<br> |
| In<br> | Use parameter n from command line. If value does not exist then prompt.<br> |
| Sn<br> | Use parameter n from original command line. If value does not exist then prompt.<br> |
| P<br> | Use input for all PromptIds of the same name. This is the default action.<br> |
| R{s}Prompt<br> | use s as separator, until null input. Default separator is space.<br> |
| F(File, RecordId {,Attr {,Value {,Subvalue}}})<br> | Input from record RecordId, in file File.<br> |
| @(c,r)<br> | Prompt at column c, row r.<br> |
| @(BELL)<br> | Sound BELL at prompt.<br> |
| @(CLR)<br> | Clear screen before prompt.<br> |
| @(TOF)<br> | Prompt at top left of screen.<br> |


- PromptId   Identifier used to name prompt values.
- Mask  Validate Input
Pattern Match
e.g. 0N - Match any numerics
7X - Match seven printable characters.
3A - Match three alpha characters.
text - Match text
(Conversion)
e.g. (D2/) - Match date dd/mm/yy or mm/dd/yy.

~~Mask means input should NOT  match mask.


## Note: 


> A Paragraph prompt not mixed with a command line or paragraph statement will attempt to execute the resultant value.


## 


### Paragraph Statement  

One of the following syntax statements.


| Statement | Result |
| --- | --- |
| DISPLAY text<br> | Output text<br> |
| DATA Input<br> | Stacked input<br> |
| GO  Label<br> | Continue at Label<br> |
| LOOP<br> | Start Loop<br> |
| REPEAT<br> | Repeat Loop<br> |
| CLEARPROMPTS<br> | Clear Prompt Identifier Values<br> |


IF Expression THEN Statement

where:
Expression - Includes PromptId, operators and/or @variables


| @DATE<br> | Current internal date<br> | <br> |
| @TIME<br> | Current internal time<br> | <br> |
| @DAY<br> | Current two digit day of month<br> | <br> |
| @MONTH<br> | Current two digit month of year<br> | <br> |
| @YEAR<br> | Current two digit year<br> | <br> |
| @LOGNAME<br> | Environment PLID value<br> | SYSTEM(49)<br> |
| @USERNO<br> | Current port number<br> | SYSTEM(18)<br> |
| @WHO<br> | Current user name<br> | SYSTEM(19)<br> |
| @ABORT .CODE<br> | Last error code<br> | SYSTEM(17)<br> |
| @SYSTEM.RETURN .CODE<br> | Last error code<br> | SYSTEM(17)<br> |
| @USER.RETURN .CODE<br> | TBD<br> | <br> |


Operators include MATCHES, EQ, LE, LT, etc.

Command
Any executable command with or without paragraph prompts. e.g:

```
SSELECT <<I2,FILEX,10X>>
```

or

```
SELECT  FILEX
```

##### 


##### EXAMPLES

PARAGRAPHX

```
001 PA
002 IF <<C3,THIRD>> EQ THEN GO  CHK.SECOND
003 DISPLAY GOT 3 ARGUMENTS
004 GO END
004 CHK.SECOND:
005 IF <<C2,SECOND>> EQ THEN GO END
006 DISPLAY GOT 2 ARGUMENTS
007 END:
```



PARAGRAPHX

```
001 PA
002 * This is an example paragraph
003 IF <<C2,COMMAND>> NE "" THEN GO DO.CMD
004 DISPLAY ENTER
005 CLEARPROMPTS
006 DO.CMD:
007 DISPLAY ENTER
```


