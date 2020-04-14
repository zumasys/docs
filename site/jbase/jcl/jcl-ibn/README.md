# jCL IBN

<PageHeader />

## Description  

Prompts for input, places the entered data in the secondary input buffer as a single parameter and maintains embedded spaces. The secondary input buffer becomes as the active input buffer.

```
IBN{c}
```

where **c** is an optional prompt character, which, once used, remains in effect until a new IBN, IBP, IN or IP command is issued. If **c **is not specified, the prompt character will default to the last prompt character used, or to a colon ( : ).

## Note

> The IBN command is similar to the IN command except that the input string is placed in the buffer as a single parameter and all spaces are maintained. The new data replaces the content of the secondary input buffer, and the secondary input buffer will remain active until an [RI](./../jcl-ri) , [S](./../jcl-s)(n) or [MV](./../jcl-mv) %n source command is used. If the user responds with ENTER only, a null parameter will be created.

### Example 1

```
| Input | SIB Before | SIB After |
| ----- | ---------- | --------- |
| ABC   | XXX        | ABC       |
|       | ^          | ^         |
```

### Example 2

```
|  Input  | SIB Before | SIB After |
|  -----  | ---------- | --------- |
| ABC DEF | XXX        | ABC DEF   |
|         | ^          | ^         |
```

### Example 3

```
|    Input      | SIB Before | SIB After |
|    -----      | ---------- | --------- |
| &lt;ENTER&gt; | XXX        | ^         |
|               | ^          | ^         |
```

Back to [jCL.](./../README.md)
  
<PageFooter />