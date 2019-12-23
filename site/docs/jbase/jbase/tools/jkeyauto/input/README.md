# INPUT

**Created At:** 8/30/2018 1:31:54 PM  
**Updated At:** 5/16/2019 6:29:22 PM  
**Original Doc:** [336881-input](https://docs.jbase.com/48575-jkeyauto/336881-input)  

**Tags:**
<badge text='program profiling' vertical='middle' />

## Description

Pass data to one or all programs loaded through the [PROGRAM](./../program) statement so the programs see this as though it were input from the keyboard.

When the characters in "expression" are piped to the program , there will be a delay of 0.1 seconds between each character and this is used to simulate a typical keyboard entry rate. This value can be changed with the TYPEDELAY statement. If the data to send begins with a 0x02 or a 0x1b, then this is assumed to be the start of a function key sequence and the first 4 characters will not have a type delay associated with them. In a string constant a 0x02 would be "~002" and a 0x1b would be "~027".



```
INPUT expression {PIPE expression_pipe} {NOCR}
```

where:

- **expression\_pipe** is the pipe number to send the data to, default is -1 or ALL of them. See the example below for how to decide what pipe number to use.
- **NOCR** optionally tells jkeyauto not to append a carriage return at the end of the statement. Without this option, jkeyauto automatically appends a 0x0a at the end of writing "expression".




### Example

```
program "MYPROG " : filename : " " : itemid
if $? ne 0 then goto programerror
pipeno=$PIPE ;* Save the pipe number the program started at
INPUT "This is my name" TO pipeno
```
