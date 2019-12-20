# READPREV

**Created At:** 8/16/2018 1:16:31 PM  
**Updated At:** 10/31/2018 8:11:59 AM  
**Original Doc:** [readprev](https://docs.jbase.com/48152-indexes/readprev)  


## Description

This statement is syntactically similar to the READNEXT but it works in reverse order. There are some considerations when the direction is changed from a forward search to a backward search or vice-versa.

When a [SELECT](334506-select) statement is first executed a forward direction is assumed. Therefore if a SELECT is immediately followed by a READPREV, then a change of direction is assumed.

During the READNEXT or READPREV sequence a next-key pointer is kept up to date. This is the record key, or index key to use should a READNEXT be executed.

During a change of direction from forward (READNEXT) to backward (READPREV) then the next record key or index key read in by the READPREV will be the one preceding the next-key pointer.

When the select list is exhausted it will either point one before the start of the select list (if READPREVs have been executed) or one past the end of the select list (if READNEXTs have been executed). Thus in the event of a change of direction the very first or very last index key or record key will be used.



### Example

Consider the following jBC code

```
list = "DAVE" : : "GREG" : : "JIM"
SELECT list
```

The following table shows what happens if you do READNEXTs and READPREVs on the above code and the reasons for it.


| Statement executed<br> | Result of operation<br> | Comment<br> |
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



