# INPUT

**Created At:** 9/13/2017 1:45:41 PM  
**Updated At:** 11/27/2018 7:57:04 AM  
**Original Doc:** [input](https://docs.jbase.com/36868-jbase-basic/input)  
**Original ID:** 276628  
**Internal:** No  

**Tags:**
<badge text='external input' vertical='middle' />

## Description

The **INPUT** statement allows the program to collect data from the current input device, which will normally be the terminal keyboard but may be stacked input from the same or separate program. The function takes the general form:

```
INPUT {@ (expression1 {, expression2 )}{:} Var{{, expression3}, expression4} {:}{_} {WITH expression5} {FOR expression6 THEN|ELSE statements}
```

Where:

- [**@**](./../the-'@'-function)**(expression1, expression2**) allows the screen cursor to be positioned to the specified column and row before the input prompt is sent to the screen. The syntax for this is the same as the ['@' Function](./../the-'@'-function)‍.
- **Var** is the variable in which the input data is to be stored.
- **expression3**, when specified, should evaluate to a numeric value. This will cause input to be terminated with an automatic newline sequence after exactly this number of characters has been input.
- If the **'\_'** option is specified with **expression4** then the automatic newline sequence is not specified but any subsequent input characters are belled to the terminal and thrown away.
- **expression4** when specified, should evaluate to a sequence of 1 to 3 characters. The first character will be displayed **expression3** times to define the field on the terminal screen. At the end of the input if less than **expression3** characters were input then the rest of the field is padded with the second character if it was supplied. If the third character is supplied then the cursor will be positioned after the last character input rather than at the end of the input field.
- The '**:**' option, when specified, suppresses the echoing of the newline sequence to the terminal. This will leave the cursor positioned after the last input character on the terminal screen.
- '**WITH expression5**' allows the default input delimiter (the newline sequence) to be changed. When specified, **expression5**, should evaluate to a string of up to 256 characters, each of which may delimit the input field. If this clause is used then the newline sequence is removed as a delimiter and must be specified explicitly within **expression5** as CHAR(10).
- The **FOR** clause allows the **INPUT** statement to time out after a specified waiting period instead of blocking as normal.
- **expression6** should evaluate to a numeric value, which will be taken as the number of deci-seconds (tenths of a second) to wait before timing out. The time-out value is used as the time between each keystroke and should a time-out occur, **Var** would hold the characters that were input until the time-out.
- The **FOR** clause requires either the **THEN** and **ELSE** clauses or both; if no time-out occurs the **THEN** clause is taken. If a time-out does occur, the **ELSE** clause is taken.

## Note

> The **INPUT** statement will always examine the data input stack before requesting data from the input device. If data is present on the stack then it is used to satisfy **INPUT** statements one field at a time until the stack is exhausted. Once exhausted, the **INPUT** statement will revert to the input device for further input. There is no way (by default) to input a null field to the **INPUT@** statement. If the INPUT@ statement receives the newline sequence only as input, then **Var** will be unchanged. Use the [INPUTNULL](./../inputnull) statement to define a character that indicates a NULL input.
>
> It is possible to use the CONTROL-CHARS command to control whether or not control characters (i.e. those outside the range x'1F' - x'7F') are accepted by **INPUT**.

An example of use is as:

```
CRT "Blank input is unacceptable!!!! "
CRT

var_In = ''
LOOP
WHILE var_In = '' DO
    INPUT var_In, 1 : FOR 30 ELSE END
REPEAT
IF var_In NE '' THEN CRT 'You entered : ', DQUOTE(var_In)
STOP
```

The above example attempts to read a single character from the input device, within a time of 30 seconds . The [LOOP](./../loop) will exit when a character has been input, then will display the character that was entered.

See also:  [IN](./../in), [INPUTNULL](./../inputnull).

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
