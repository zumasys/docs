# jCL RI

<PageHeader />

**Tags:**
<badge text='buffer' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description

The command resets (clears) the primary and secondary input buffers. It takes the general form:

```
RI
```

or

```
RIp
```

or

```
RI(n)
```

where:

- **p** specifies starting parameter from which to clear to the end of the buffer. Can be a number, or a direct or indirect reference to a buffer or select register.
- **(n)** specifies the starting column from which to clear to the end of the buffer. Can be a number, or a direct or indirect reference to a buffer or select register.

## Note

> The RI command clears the entire PIB and SIB.
>
> RIp clears the PIB starting from parameter p and continuing to the end of the buffer.
>
> RI(n) clears the PIB starting from parameter n and continuing to the end of the buffer.

The buffer pointer will be left at the end of the PIB. The primary input buffer becomes the active buffer and the secondary input buffer will be cleared.

### Example 1

```
| Command |  PIB Before  | PIB After |
| ------- |  ----------  | --------- |
| RI      | ABC^DEF^GHI  |           |
|         |        ^     | ^         |
```

### Example 2

```
| Command |  PIB Before | PIB After |
| ------- |  ---------- | --------- |
| RI3     | ABC^DEF^GHI | ABC^DEF   |
|  |               ^    |        ^  |
```

### Example 3

```
| Command |  PIB Before | PIB After |
| ------- |  ---------- | --------- |
| RI(6)   | ABC^DEF^GHI | ABC^D     |
|         | ^           |      ^    |
```

Back to [jCL.](./../README.md)
  
<PageFooter />