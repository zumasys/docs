# HEADING

**Created At:** 9/6/2017 2:59:26 PM  
**Updated At:** 10/30/2018 10:00:33 AM  
**Original Doc:** [276079-heading](https://docs.jbase.com/36868-jbase-basic/276079-heading)  

**Tags:**
<badge text='page formatting' vertical='middle' />

# Description

**HEADING** halts all subsequent output to the terminal at the end of each page. The statement evaluates and displays an expression at the top of each page. Current output sent to the terminal, is paused until entry of a carriage return at the terminal - unless the N option is specified. It takes the general form:

```
HEADING expression
```

Where the **expression** should evaluate to a string printed at the top of every page of output. The string may contain a number of interpreted special characters, replaced in the string before printing.

The following characters have special meaning within the string:

- "C{n}" Center the line. If n is specified the output line is assumed n characters long.
- "D" or \\ Replace with the current date.
- "L" or ] Replace with the newline sequence.
- "N" Terminal output does not pause at the end of each page.
- "P" or ^ Replace with the current page number.
- "PP" or ^^ Replace with the current page number in a field of 4 characters. The field is right justified.
- "T" or \ Replace with the current time and date.
- " Replace with a single " character.


Alphabetic special characters are case insensitive, e.g. "D" is the same as "d".



## Note:


> If output is to the printer, a [PRINTER ON](277632-printer) statement is in use, and does not page output sent to the terminal with the [CRT](266868-crt) statement. Unless you specify the “N” option, all output sent to the terminal is paged.


An example of use is as:

```
 HEADING "This is the first thing that shows up"
```



Go back to [jBASE BASIC](263498-jbase-basic).
