# READPREV

<PageHeader /> 

**Tags:**
<badge text='traversing lists' vertical='middle' />

## Description

This statement is syntactically similar to the [READNEXT](./../readnext) but it works in reverse order. There are some considerations when the direction is changed from a forward search to a backward search or vice-versa.

When a [SELECT](./../select) statement is first executed a forward direction is assumed. Therefore if a [SELECT](./../select) is immediately followed by a **READPREV**, then a change of direction is assumed.

During the [READNEXT](./../readnext) or **READPREV** sequence a next-key pointer is kept up to date. This is the record key, or index key to use should a [READNEXT](./../readnext) be executed.

During a change of direction from forward ([READNEXT](./../readnext)) to backward (**READPREV**) then the next record key or index key read in by the **READPREV** will be the one preceding the next-key pointer.

When the select list is exhausted it will either point one before the start of the select list (if **READPREV**s have been executed) or one past the end of the select list (if [READNEXT](./../readnext)s have been executed). Thus in the event of a change of direction the very first or very last index key or record key will be used.

For example, consider the following:

```
LIST_VAR = "Dave" : : "Greg" : : "Jim"
SELECT LIST_VAR
```

the table shows what happens if [READNEXT](./../readnext)s and **READPREV**s on the above code and the reasons for it.

|  Statement executed |  Result of operation  |  Comment |
| --- | --- | --- |
| READNEXT key ELSE | key becomes "Dave" | First key in list |
| READNEXT key ELSE | key becomes "Greg" | Second key in list |
| READPREV key ELSE | key becomes "Dave" | Reversed so take preceding key |
| READPREV key ELSE | Take ELSE clause | The next key ptr exhausted at start. |
| READNEXT key ELSE | key becomes "Dave" | First key in list |
| READNEXT key ELSE | key becomes "Greg" | Second key in list |
| READNEXT key ELSE | key becomes "Jim" | Final key. Next key ptr exhausted. |
| READPREV key ELSE | key becomes "Jim" | Reversed but list exhausted. |
| READPREV key ELSE | key becomes "Greg" | Second key in list |
| READPREV key ELSE | key becomes "Dave" | First key in list |

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
