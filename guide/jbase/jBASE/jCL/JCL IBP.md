# JCL IBP

**Created At:** 5/28/2018 10:58:48 AM  
**Updated At:** 6/11/2018 4:27:51 AM  

**Tags:**
<badge text='jcl' vertical='middle' />
<badge text='buffer' vertical='middle' />

## Description 

Prompts for input from the terminal. Input data is kept as a single parameter and embedded spaces are retained. It takes the general form:

```
IBP{c{r}}
```

where:

- c is an optional prompt character, which, once used, remains in effect until a new IBN, IBP, IN or IP command is issued. If c is not specified, the prompt character will default to the last prompt character used, or to a colon (:).
- r is a direct or indirect reference to a buffer or select register which is to receive the data. If you use a reference, the prompt character c must be specified.




## Note: 


> The IBP command is similar to the IP command except that the input is placed in the buffer as a single parameter and embedded spaces are maintained. If a buffer reference is not specified, the active input buffer will be used. The new data will always replace the parameter pointed to by the buffer pointer but the position of the pointer will not be changed. If the user responds with RETURN  only, a null parameter will be created.




##### EXAMPLE 1 


| Command<br> | PIB Before<br> | Input | PIB After<br> |
| --- | --- | --- | --- |
| IBP?<br> |    AA^A^BBB<br> | CCC | AAA^BBB^CCC<br> |
| <br> |                       ^ | <br> |                  ^ |




EXAMPLE 2


| Command<br> | PIB Before<br> | Input | PIB After<br> |
| --- | --- | --- | --- |
| IBP?  <br> | AA^BB^CC        <br> |   XX X  <br> |  AA^XX X^CC<br> |
| <br> |        ^         | <br> |          ^ |




EXAMPLE 3


| Command<br> | PIB Before<br> | Input  | PIB After<br> |
| --- | --- | --- | --- |
| IBP?      <br> | ABC^DEF^GHI<br> | &lt;RETURN&gt;<br> |  ABC^^GHI<br> |
| <br> |        ^     | <br> |          ^ |




##### EXAMPLE 4


| Command<br> | File Buffer 2 Before<br> | Input  | File Buffer 2 After<br> |
| --- | --- | --- | --- |
| IBP:&2.2<br><br> | 000 Key<br>001  AAA<br>002 XXX<br>003 CCC<br> | BBB | 000 Key<br>001  AAA<br>002 BBB<br>003 CCC<br> |




##### EXAMPLE 5


| Command<br> | File Buffer 2 Before<br> | Input  | File Buffer 2 After<br> |
| --- | --- | --- | --- |
| IBP:&2.2<br><br> | 000 Key<br>001  AAA<br>002 XXX<br>003 CCC<br> | &lt;RETURN&gt; | 000 Key<br>001  AAA<br>002<br>003 CCC<br> |




Back to [JCL Commands](jcl-commands)
