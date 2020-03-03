# jCL F

**Created At:** 5/28/2018 10:23:45 AM  
**Updated At:** 6/1/2018 5:30:50 PM  
**Original Doc:** [318626-jcl-f](https://docs.jbase.com/45792-jcl/318626-jcl-f)  
**Original ID:** 318626  
**Internal:** No  

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
