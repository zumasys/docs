# READPREV

**Created At:** 9/27/2017 2:43:29 PM  
**Updated At:** 11/27/2018 9:31:33 AM  
**Original Doc:** [278660-readprev](https://docs.jbase.com/36868-jbase-basic/278660-readprev)  
**Original ID:** 278660  
**Internal:** No  

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
LIST_VAR = "DAVE" : : "GREG" : : "JIM"
SELECT LIST_VAR
```



the table shows what happens if [READNEXT](./../readnext)s and **READPREV**s on the above code and the reasons for it.


|  Statement executed<br> |  Result of operation <br> |  Comment<br> |
| --- | --- | --- |
| READNEXT key ELSE<br> | key becomes "DAVE"<br> | First key in list<br> |
| READNEXT key ELSE<br> | key becomes "GREG"<br> | Second key in list<br> |
| READPREV key ELSE<br> | key becomes "DAVE"<br> | Reversed so take preceding key<br> |
| READPREV key ELSE<br> | Take ELSE clause<br> | The next key ptr exhausted at start.<br> |
| READNEXT key ELSE<br> | key becomes "DAVE"<br> | First key in list<br> |
| READNEXT key ELSE<br> | key becomes "GREG"<br> | Second key in list<br> |
| READNEXT key ELSE<br> | key becomes "JIM"<br> | Final key. Next key ptr exhausted.<br> |
| READPREV key ELSE<br> | key becomes "JIM"<br> | Reversed but list exhausted.<br> |
| READPREV key ELSE<br> | key becomes "GREG"<br> | Second key in list<br> |
| READPREV key ELSE<br> | key becomes "DAVE"<br> | First key in list<br> |




Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
