# jCL IP

<PageHeader />

**Tags:**
<badge text='input' vertical='middle' />
<badge text='file' vertical='middle' />
<badge text='buffer' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description

The command prompts for input and places it into the active input buffer or a nominated buffer. It takes the general form:

```
IP{c{r}}
```

where:

- **c** is an optional prompt character which, once used, remains in effect until a new IBN, IBP, IN or IP command is issued. If c is not specified, the prompt character will default to the last prompt character used, or to a colon ( : ).
- **r** is a direct or indirect reference to a buffer or select register which is to receive the data. If you use a reference, the prompt character c must be specified.

## Note

> If the no buffer reference is specified, the active input buffer will be used. The new data will replace the parameter at the current buffer pointer position but the pointer will not be moved. Leading and trailing spaces will be removed and groups of one or more embedded spaces will be replaced by a single field mark. By replacing a parameter with data that contains spaces, you can insert several new parameters. If the user responds with RETURN only, a null parameter will be created. If it is desired to keep the input data exactly as entered, use the IBP command.

When data containing embedded spaces is placed into a file buffer, the new parameters will replace successive fields in the buffer. For example, if the response to an

```
IP?&2.1
```

command is:

```
<SPACE>AA<SPACE><SPACE>BB<SPACE>CC"
```

fields one, two, and three, of file buffer 2 will be replaced with "AA", "BB", and "CC".

If the user responds with Return only, a null parameter will be created.  

If you want to keep the input data exactly as entered, use the [IBP](./../jcl-ibp/README.md) command.  

### Example 1

```
| Command | PIB Before | Input |  PIB After  |
| ------- | ---------- | ----- |  ---------  |
| IP?     | AAA^BBB    | CCC   | AAA^BBB^CCC |
|         |        ^   |       |       ^     |
```

### Example 2

```
| Command | PIB Before | Input |  PIB After |
| ------- | ---------- | ----- |  --------- |
| IP?     | AA^BB^CC   | XX X  | AA^XX^X^CC |
|         |    ^       |       |    ^       |
```

### Example 3

```
| Command | PIB Before | Input | PIB After |
| --- | --- | --- | --- |
| IP? | ABC^DEF^GHI | &lt;ENTER&gt; | ABC^^GHI |
|  |    ^ |  |    ^ |
```

### Example 4

```
| Command | File Buffer 2 Before | Input | File Buffer 2 After |
| ------- | -------------------- | ----- | ------------------- |
| IP:&2.2 | 000 Key              | BBB   | 000 Key             |
|         | 001 AAA              |       | 001 AAA             |
|         | 002 XXX              |       | 002 BBB             |
|         | 003 CCC              |       | 003 CCC             |
```

### Example 5

```
| Command | File Buffer 2 Before |   Input  | File BUffer 2 After |
| ------- | -------------------- |   -----  | ------------------- |
| IP:&2.2 | 000 Key              | BB CC DD | 000 Key             |
|         | 001 AAA              |          | 001 AAA             |
|         | 002 XXX              |          | 002 BB              |
|         | 003 DDD              |          | 003 CC              |
|         |                      |          | 004 DD              |
```

Back to [jCL.](./../README.md)
  
<PageFooter />