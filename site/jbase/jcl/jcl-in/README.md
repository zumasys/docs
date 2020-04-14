# jCL IN

<PageHeader />

**Tags:**
<badge text='jcl' vertical='middle' />
<badge text='buffer' vertical='middle' />

## Description

This command prompts for input and places it in the secondary input buffer. Selects the secondary input buffer as the active buffer input. It takes the general form:

```
IN{c}
```

where **c** is an optional prompt character which, once used, remains in effect until a new IBN, IBP, IN or IP command is issued. If c is not specified, the prompt character will default to the last prompt character used, or to a colon (:).

The new data replaces the content of the SIB, and the SIB will remain active until an [RI](./../jcl-ri/README.md), S(n) or MV %n source command is used.

## Note

> Leading and trailing spaces are removed and groups of one or more embedded spaces are replaced by a single field mark. Use the IBN command if you want to maintain embedded spaces. If the user responds with ENTER only, a null parameter will be created.

When the command has been completed, the buffer pointer will be positioned at the beginning of the buffer.

### Example 1

```
|  Input  |   SIB Before  |   SIB After  |
|  -----  |   ----------  |   ---------  |
| ABC     | ^             | ABC          |
|         |             ^ | ^            |
```

### Example 2

```
|  Input  |  SIB Before  |  SIB After  |
|  -----  |  ----------  |  ---------  |
| ABC DEF | XYZ          | ABC^DEF     |
|         | ^            | ^           |
```

### Example 3

```
|  Input  | SIB Before | SIB After  |
|  -----  | ---------- | ---------  |
| <Enter> | WWW^XXX    |            |
|         | ^          | ^          |
```

Back to [jCL.](./../README.md)
  
<PageFooter />