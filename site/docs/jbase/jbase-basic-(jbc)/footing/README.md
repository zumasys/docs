# FOOTING

**Created At:** 11/6/2017 2:12:14 PM  
**Updated At:** 1/5/2018 6:50:08 PM  
**Original Doc:** [284341-footing](https://docs.jbase.com/36868-jbase-basic/284341-footing)  
**Original ID:** 284341  
**Internal:** No  


# Description

The **FOOTING** statement halts all subsequent output to the terminal at the end of each output page. It takes the general from:

```
FOOTING expression
```

Where:

expression should evaluate to a string, which is printed at the bottom of every page of output. The string could contain a number of interpreted special characters, replaced in the string before printing.

The following characters have special meaning within the string:

- "C{n}" center the line, if n is specified the output line is assumed to be n characters long
- "D" or \\ replace with the current date
- "L" or ] replace with the newline sequence
- "N" terminal output does not pause at the end of each page
- "P" or ^ replace with the current page number
- "PP" or ^^ replace with the current page number in a field of 4 characters; the field is right justified
- "T" or \ replace with the current time and date
- " replace with a single " character


The statement allows the evaluation and display of an expression at the foot of each page. Output, which is current, and being sent to the terminal, the output is paused until the entry of a carriage return at the terminal (unless the N option is specified either in the current [HEADING](./../heading) or in this **FOOTING**).

If the output is to the printer a [PRINTER ON](./../printer) statement is in force; output sent to the terminal with the [CRT](./../crt) statement is not paged; if output is to the terminal then all output is paged.

An example of use is as:

```
FOOTING "Programming staff by weight Page "P"
```



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
