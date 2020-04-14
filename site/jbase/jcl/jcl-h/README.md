# jCL H

<PageHeader /> 

**Tags:**
<badge text='secondary' vertical='middle' />
<badge text='primary' vertical='middle' />
<badge text='jcl' vertical='middle' />
<badge text='buffer' vertical='middle' />

## Description

This command places a text string in the active output buffer. It takes the general form:

```
H text-string
```

where **text-string** is the text to be placed in the active output buffer. Can be a literal (not enclosed in quotes), or a direct or indirect reference to a buffer or select register.

## Note

> The H command is used to place a text string in the currently active output buffer. Use the POB, to create a shell command. Use the SOB to create secondary commands (such as PQ-SELECT ) or to "stack" a series of inputs required by the active process.

The string is moved into the buffer starting at the current location of the buffer pointer. At the end of the operation, the buffer pointer will be positioned immediately after the last character in the string.

If quotes are used to delimit the string everything within quotes will be treated as a single field and the string will be moved into the buffer as a single parameter.

If quotes are not used, each group of one or more spaces in the string will be replaced by a field mark as the text is moved into the buffer. Include a leading space if you want to add a new parameter. If you want to concatenate the string to the current buffer parameter, do not use a leading space.

The P command is used to process the contents of the POB and SOB.

## Usng H with the Primary Output Buffer

When the shell command is issued, field marks will be replaced by spaces and a carriage return will be appended automatically.

## Using H with the Secondary Output Buffer  

A carriage return is not appended automatically to output from the SOB. Terminate each line with a less than character (&lt;) to represent a carriage return.

### Example 1

```
PQN
HSLEEP 10
P
```

Forces the process to sleep for 10 seconds.

### Example 2

```
| Command |     POB Before      |          POB After       |
| ------- |     ----------      |          ---------       |
| H       |                     | COPY                     |
|         | ^                   |     ^                    |
| H SALES | COPY                | COPY^SALES               |
|         |     ^               |           ^              |
| H ABC   | COPY^SALES          | COPY^SALES^ABC           |
|         |           ^         |               ^          |
| H-DEF   | COPY^SALES^ABC      | COPY^SALES^ABC-DEF       |
|         |               ^     |                   ^      |
| H (P)   | COPY^SALES^ABC-DEF  | COPY ^SALES^ABC-DEF^(P)  |
|         |                   ^ |                        ^ |
```

Note how COPY and SALES have become separate parameters but ABC and -DEF have been concatenated.

### Example 3

```
PQN
HGET-LIST LISTA
STON
HCOPY SALES<
H(SALES.HOLD
P
```

Back to [jCL.](./../README.md)
  
<PageFooter />