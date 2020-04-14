# CLEARINPUT

<PageHeader />

## Description

The command clears the terminal type-ahead buffer to allow the next **INPUT** statement to force a response from the user. The statement can be used as:

```
CLEARINPUT
```

In the following example, the **CLEARINPUT** statement clears the terminal type-ahead buffer to provoke a response from the user to the prompt:

```
CLEARINPUT
CRT "Do you want to delete this file? (Y or N)";
INPUT Answer, 1
```

## Note

> CLEARINPUT command is synonymous with INPUTCLEAR.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
