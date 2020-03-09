# jCL STON

**Created At:** 5/29/2018 7:10:38 AM  
**Updated At:** 6/1/2018 5:39:03 PM  
**Original Doc:** [318876-jcl-ston](https://docs.jbase.com/45792-jcl/318876-jcl-ston)  
**Original ID:** 318876  
**Internal:** No  

**Tags:**
<badge text='buffer' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description

This command selects the secondary output buffer as the active output buffer. It takes the general form:

```
STON
```

or

```
ST ON
```

The STON command selects the SOB as the active output buffer. With the stack turned on, all data moved to an output buffer with an MV, H or A command will be placed in the secondary output buffer.

Typically, you would create the command necessary to start the external job stream in the primary output buffer. Next you would turn the stack on and store all the necessary responses (or commands) to the external process. When you issue the P command to execute the external program, instead of taking it's input from the terminal, the program will be fed directly from the stack.

## Note

> The stack is often used to feed responses to interactive processes. It can also be used to store a series of commands that you might need for example when you are dealing with select lists. For example, do a GET-LIST, followed by a SORT -LIST and then run a jBC  program.
>
> Terminated successive responses in the stack, with a less-than-character (&lt;) to represent a RETURN  key depression. A single response or the last response in the stack does not require the less than character (&lt;) because a RETURN is generated by the P command.

### Example

```
| Command       |   POB Before   |   POB After    |
| -------       |   ----------   |   ---------    |
| STON          | COPY^SALES^ABC | COPY^SALES^ABC |
| H(SALES.HOLD  |          ^     |          ^     |
|               |                |                |
|               |   SOB Before   |   SOB After    |
|               |   ----------   |   ---------    |
|               |                | (SALES.HOLD<   |
|               | ^              |             ^  |
```

Back to [jCL.](./../README.md)