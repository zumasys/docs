# JCL IP

**Created At:** 6/7/2018 9:30:49 AM  
**Updated At:** 6/11/2018 4:28:01 AM  

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

- c is an optional prompt character which, once used, remains in effect until a new IBN, IBP, IN or IP command is issued. If c is not specified, the prompt character will default to the last prompt character used, or to a colon (:).
- r is a direct or indirect reference to a buffer or select register which is to receive the data. If you use a reference, the prompt character c must be specified.




## Note:


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



### EXAMPLE 1


| Command<br> | PIB Before<br> | Input<br> | PIB After<br> |
| --- | --- | --- | --- |
| <samp>IP?</samp><br> | <samp>AAA^BBB</samp><br> | <samp>CCC</samp><br> | <samp>AAA^BBB^CCC</samp><br> |
| <br> | <samp>&nbsp; &nbsp; &nbsp; &nbsp;^</samp><br> | <br> | <samp>&nbsp; &nbsp; &nbsp; ^</samp><br> |




### EXAMPLE 2


| Command<br> | PIB Before<br> | Input<br> | PIB After<br> |
| --- | --- | --- | --- |
| <samp>IP?</samp><br> | <samp>AA^BB^CC</samp><br> | <samp>XX X</samp><br> | <samp>AA^XX^X^CC</samp><br> |
| <br> | <samp>&nbsp; &nbsp;^</samp><br> | <br> | <samp>&nbsp; &nbsp;^</samp><br> |




### EXAMPLE 3


| Command<br> | PIB Before<br> | Input<br> | PIB After<br> |
| --- | --- | --- | --- |
| <samp>IP?</samp><br> | <samp>ABC^DEF^GHI</samp><br> | <samp>&lt;ENTER&gt;</samp><br> | <samp>ABC^^GHI</samp><br> |
| <br> | <samp>&nbsp; &nbsp;^</samp><br> | <br> | <samp>&nbsp; &nbsp;^</samp><br> |




### EXAMPLE 4


| Command<br> | File Buffer 2 Before<br> | Input<br> | File Buffer 2 After<br> |
| --- | --- | --- | --- |
| <samp>IP:&amp;2.2</samp><br> | <samp>000 Key</samp><br> | <samp>BBB</samp><br> | <samp>000 Key</samp><br> |
| <br> | <samp>001 AAA</samp><br> | <br> | <samp>001 AAA</samp><br> |
| <br> | <samp>002 XXX</samp><br> | <br> | <samp>002 BBB</samp><br> |
| <br> | <samp>003 CCC</samp><br> | <br> | <samp>003 CCC</samp><br> |




### EXAMPLE 5


| Command<br> | File Buffer 2 Before<br> | Input<br> | File BUffer 2 After<br> |
| --- | --- | --- | --- |
| <samp>IP:&amp;2.2</samp><br> | <samp>000 Key</samp><br> | <samp>BB CC DD</samp><br> | <samp>000 Key</samp><br> |
| <br> | <samp>001 AAA</samp><br> | <br> | <samp>001 AAA</samp><br> |
| <br> | <samp>002 XXX</samp><br> | <br> | <samp>002 BB</samp><br> |
| <br> | <samp>003 DDD</samp><br> | <br> | <samp>003 CC</samp><br> |
| <br> | <br> | <br> | <samp>004 DD</samp><br> |




Back to [JCL Commands](jcl-commands)
