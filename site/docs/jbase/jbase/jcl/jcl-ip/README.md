# JCL IP

**Created At:** 6/7/2018 9:30:49 AM  
**Updated At:** 6/11/2018 4:28:01 AM  
**Original Doc:** [321166-jcl-ip](https://docs.jbase.com/45792-jcl/321166-jcl-ip)  

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
| IP?<br> | AAA^BBB<br> | CCC<br> | AAA^BBB^CCC<br> |
| <br> |        ^<br> | <br> |       ^<br> |




### EXAMPLE 2


| Command<br> | PIB Before<br> | Input<br> | PIB After<br> |
| --- | --- | --- | --- |
| IP?<br> | AA^BB^CC<br> | XX X<br> | AA^XX^X^CC<br> |
| <br> |    ^<br> | <br> |    ^<br> |




### EXAMPLE 3


| Command<br> | PIB Before<br> | Input<br> | PIB After<br> |
| --- | --- | --- | --- |
| IP?<br> | ABC^DEF^GHI<br> | &lt;ENTER&gt;<br> | ABC^^GHI<br> |
| <br> |    ^<br> | <br> |    ^<br> |




### EXAMPLE 4


| Command<br> | File Buffer 2 Before<br> | Input<br> | File Buffer 2 After<br> |
| --- | --- | --- | --- |
| IP:&2.2<br> | 000 Key<br> | BBB<br> | 000 Key<br> |
| <br> | 001 AAA<br> | <br> | 001 AAA<br> |
| <br> | 002 XXX<br> | <br> | 002 BBB<br> |
| <br> | 003 CCC<br> | <br> | 003 CCC<br> |




### EXAMPLE 5


| Command<br> | File Buffer 2 Before<br> | Input<br> | File BUffer 2 After<br> |
| --- | --- | --- | --- |
| IP:&2.2<br> | 000 Key<br> | BB CC DD<br> | 000 Key<br> |
| <br> | 001 AAA<br> | <br> | 001 AAA<br> |
| <br> | 002 XXX<br> | <br> | 002 BB<br> |
| <br> | 003 DDD<br> | <br> | 003 CC<br> |
| <br> | <br> | <br> | 004 DD<br> |




Back to [JCL Commands](./../jcl-commands)
