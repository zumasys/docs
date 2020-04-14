# jCL IBP

<PageHeader />

**Tags:**
<badge text='jcl' vertical='middle' />
<badge text='buffer' vertical='middle' />

## Description

Prompts for input from the terminal. Input data is kept as a single parameter and embedded spaces are retained. It takes the general form:

```
IBP{c{r}}
```

where:

- **c** is an optional prompt character, which, once used, remains in effect until a new IBN, IBP, IN or IP command is issued. If c is not specified, the prompt character will default to the last prompt character used, or to a colon ( : ).
- **r** is a direct or indirect reference to a buffer or select register which is to receive the data. If you use a reference, the prompt character c must be specified.

## Note

> The IBP command is similar to the IP command except that the input is placed in the buffer as a single parameter and embedded spaces are maintained. If a buffer reference is not specified, the active input buffer will be used. The new data will always replace the parameter pointed to by the buffer pointer but the position of the pointer will not be changed. If the user responds with RETURN  only, a null parameter will be created.

### Example 1

```
| Command | PIB Before | Input |  PIB After  |
| ------- | ---------- | ----- |  ---------  |
| IBP?    | AA^A^BBB   | CCC   | AAA^BBB^CCC |
|         |         ^  |       |        ^    |
```

### Example 2

```
| Command | PIB Before | Input |  PIB After |
| ------  | ---------- | ----- |  --------- |
| IBP?    | AA^BB^CC   | XX X  | AA^XX X^CC |
|         |    ^       |       |    ^       |
```

### Example 3

```
| Command |  PIB Before |   Input  | PIB After |
| ------- |  ---------- |   -----  | --------  |
| IBP?    | ABC^DEF^GHI | <Return> | ABC^^GHI  |
|         |    ^        |          |    ^      |
```

### Example 4

```
|  Command | File Buffer 2 Before |  Input | File Buffer 2 After |
|  ------- | -------------------- |  ----- | ------------------- |
| IBP:&2.2 | 000 Key              | BBB    | 000 Key             |
|          | 001 AAA              |        | 001 AAA             |
|          | 002 XXX              |        | 002 BBB             |
|          | 003 CCC              |        | 003 CCC             |

```

### Example 5

```
|  Command | File Buffer 2 Before |   Input  | File Buffer 2 After |
|  ------- | -------------------- |   -----  | ------------------- |
| IBP:&2.2 | 000 Key              | <Return> | 000 Key             |
|          | 001 AAA              |          | 001 AAA             |
|          | 002 XXX              |          | 002                 |
|          | 003 CCC              |          | 003 CCC             |    
```

Back to [jCL.](./../README.md)
  
<PageFooter />