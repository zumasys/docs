# jCL F

<PageHeader />

**Tags:**
<badge text='buffer' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description

This command moves the active input buffer pointer forward to the next parameter. It takes the general form:

```
F
```

## Note

> The input buffer pointer is moved forward to the next field mark, or to the end of the buffer.

### Example 1

```
| Command |  PIB Before |  PIB After  |
| ------- |  ---------- |  ---------  |
| F       | ABC^DEF^GHI | ABC^DEF^GHI |
|         |     ^       |        ^    |
```

### Example 2

```
| Command |  PIB Before |  PIB After   |
| ------- |  ---------- |  ---------   |
| F       | ABC^DEF^GHI | ABC^DEF^GHI  |
|         |        ^    |            ^ |
```

**PIB** - Primary Input Buffer.

Back to [jCL.](./../README.md)
  
<PageFooter />