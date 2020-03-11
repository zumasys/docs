# ENTER

**Created At:** 9/6/2017 8:35:02 AM  
**Updated At:** 10/30/2018 1:22:57 PM  
**Original Doc:** [276031-enter](https://docs.jbase.com/36868-jbase-basic/276031-enter)  
**Original ID:** 276031  
**Internal:** No  

**Tags:**
<badge text='program execution' vertical='middle' />

## Description

The **ENTER** statement unconditionally passes control to another executable program. It takes the general form:

```
ENTER program_name
```

or

```
ENTER @variable_name
```

Where:

- **program\_name**, is the name of the program for execution. The use of single or double quotes to surround **program\_name** is optional.
- The '**@**' specifies that the program name is contained in a named variable.
- **variable\_name**, is the name of the variable which contains the program name.

## Note

> The jBASE BASIC [COMMON](./../common) data area can be passed to another jBASE BASIC program by specifying the option "I" after the program name. Pass the [COMMON](./../common) data area only to another jBASE BASIC program.

Use **ENTER** to execute any type of program.

If the program which contains the **ENTER** command (the current program) was called from a JCL program, and the program for execution (the target program) is another jBASE BASIC program, control will return to the original JCL program when the target program terminates. If the target program is a JCL program, control will return to the command shell when the JCL program terminates.

An example is as follows:

```
ENTER "menu"
```

or

```
ProgName = "UPDATE"
ENTER @ ProgName
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
