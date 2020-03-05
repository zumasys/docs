# Paragraphs

**Created At:** 5/28/2018 10:12:58 AM  
**Updated At:** 4/29/2019 11:22:44 PM  
**Original Doc:** [318606-paragraphs](https://docs.jbase.com/45792-jcl/318606-paragraphs)  
**Original ID:** 318606  
**Internal:** No  

## Description

Paragraphs are stored procedures in that their contents can contain a sequence of commands. They are typically stored in the file defined by the [**JEDIFILENAME\_MD**](./../../../environment-variables/jedifilename_md) environment variable (i.e. MD or VOC) and run directly from the **jsh**mode of the jShell:

```
jsh ~ -->paragraph_name
```

Paragraphs can also be stored and run from any file via the **para** command:

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

## Comment lines

Any Line preceded by an asterisk. e.g:

```
* This is a comment line
```

## Label

Any non-spaced text suffixed by a colon. e.g.:

```
Label:
```

## Paragraph Prompt

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
| A | Always Prompt. |
| Cn | Use parameter n from command line. If value does not exist then null is used. |
| In | Use parameter n from command line. If value does not exist then prompt. |
| Sn | Use parameter n from original command line. If value does not exist then prompt. |
| P | Use input for all PromptIds of the same name. This is the default action. |
| R{s}Prompt | use s as separator, until null input. Default separator is space. |
| F(File, RecordId {,Attr {,Value {,Subvalue}}}) | Input from record RecordId, in file File. |
| @(c,r) | Prompt at column c, row r. |
| @(BELL) | Sound BELL at prompt. |
| @(CLR) | Clear screen before prompt. |
| @(TOF) | Prompt at top left of screen. |

- PromptId   Identifier used to name prompt values.
- Mask  Validate Input
- Pattern Match e.g. 
  - 0N - Match any numerics
  - 7X - Match seven printable characters.
  - 3A - Match three alpha characters.
  - text - Match text
- (Conversion) e.g. 
  - (D2/) - Match date dd/mm/yy or mm/dd/yy.

~~Mask meansinput should NOT match mask.

## Note

> A Paragraph prompt not mixed with a command line or paragraph statement will attempt to execute the resultant value.

### Paragraph Statement  

One of the following syntax statements.

| Statement | Result |
| --- | --- |
| DISPLAY text | Output text |
| DATA Input | Stacked input |
| GO  Label | Continue at Label |
| LOOP | Start Loop |
| REPEAT | Repeat Loop |
| CLEARPROMPTS | Clear Prompt Identifier Values |

IF Expression THEN Statement

where:
Expression - Includes PromptId, operators and/or @variables

| <!----> | <!----> |
| --- | --- |
| @DATE | Current internal date |  |
| @TIME | Current internal time |  |
| @DAY | Current two digit day of month |  |
| @MONTH | Current two digit month of year |  |
| @YEAR | Current two digit year |  |
| @LOGNAME | Environment PLID value | SYSTEM(49) |
| @USERNO | Current port number | SYSTEM(18) |
| @WHO | Current user name | SYSTEM(19) |
| @ABORT .CODE | Last error code | SYSTEM(17) |
| @SYSTEM.RETURN .CODE | Last error code | SYSTEM(17) |
| @USER.RETURN .CODE | TBD |  |

Operators include MATCHES, EQ, LE, LT, etc.

Command:  
Any executable command with or without paragraph prompts. e.g:

```
SSELECT <<I2,FILEX,10X>>
```

or

```
SELECT  FILEX
```

### Examples

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

Back to [jCL.](./../README.md)
