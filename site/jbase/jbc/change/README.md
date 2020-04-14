# CHANGE

<PageHeader />

## Description

The **CHANGE** statement operates on a variable and replaces all occurrences of one string with another. It takes the form:

```
CHANGE expression1 TO expression2 IN variable
```

Where:

- **expression1** may evaluate to any result and is the string of characters that will be replaced,
- **expression2** may also evaluate to any result and is the string of characters that will replace **expression1**,
- **variable** may be any previously assigned variable in the program.

## Note

> There is no requirement that strings be of the same length. The jBASE BASIC language also supports the **CHANGE** function for compatibility with older systems.

An example of use is as:

```
String1 = "Jim"
String2 = "James"
Variable = "Pick up the tab Jim"
CHANGE String1 TO String2 IN Variable
CHANGE "tab" TO "check" IN Variable
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
