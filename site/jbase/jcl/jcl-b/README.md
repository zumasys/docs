# jCL B

<PageHeader />

**Tags:**
<badge text='jcl' vertical='middle' />

## Description

The command moves the active input buffer pointer back to the previous parameter. It takes the general form:

```
B
```

## Note

> The input buffer pointer is moved backwards to the preceding field mark or to the beginning of the input buffer. If the pointer is on the first character of a parameter (or a field marker), the pointer will be moved back to the field mark of the previous parameter.

### Example 1

```
| Command |  PIB Before   |   PIB After   |
| ------- |  ----------   |   ---------   |
| B       | ABC^DEF^GHIJK | ABC^DEF^GHIJK |
|         |            ^  |        ^      |
```

### Example 2

```
| Command |  PIB Before   |    PIB After  |
| ------- |  ----------   |    ---------  |
| B       | ABC^DEF^GHIJK | ABC^DEF^GHIJK |
|         |         ^     |    ^          |
```

ack to [jCL Commands](./../README.md)
  
<PageFooter />