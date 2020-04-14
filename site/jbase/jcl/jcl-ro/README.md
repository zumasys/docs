# jCL RO

<PageHeader /> 

**Tags:**
<badge text='secondary' vertical='middle' />
<badge text='buffer' vertical='middle' />
<badge text='primary' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description

This command resets (clears) the active output buffer. It takes the general form:

```
RO
```

## Note

> The RO command clears the active output buffer. The buffer pointer is left at the beginning of the buffer.

### Example 1

```
| Command | POB Before | POB After  |
| ------- | ---------- | ---------  |
| STOFF   |            |            |
| RO      | ABC^DEF    |            |
|         |        ^   | ^          |
```

### Example 2

```
| Command | SOB Before | SOB After |
| --------| ---------- | --------- |
| STON    |            |           |
| RO      | GHI^JKL    |           |
|         |        ^   | ^         |
```

Back to [jCL.](./../README.md)
  
<PageFooter />