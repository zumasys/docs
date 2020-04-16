# SWAP

<PageHeader />

## Description

The **SWAP** function operates on a variable and replaces all occurrences of one string with another. It takes the general form:

```
SWAP(variable, expression1, expression2)
```

Where:

**expression1** may evaluate to any result and is the string of characters that will be replaced.

**expression2** may also evaluate to any result and is the string of characters that will replace **expression1**.

**variable** may be any previously assigned variable in the program.

Either string can be of any length and is not required to be the same length. This function is provided for compatibility with older systems.

An example would be as:

```
String1 = "Jim"
String2 = "James"
Variable = "Pick up the tab Jim"
CRT SWAP( Variable, String1, String2)
CRT SWAP( Variable, "tab", "check")
```

See also: [CHANGE](./../change).

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
