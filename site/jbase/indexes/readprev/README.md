# READPREV

<PageHeader />

## Description

This statement is syntactically similar to the READNEXT but it works in reverse order. There are some considerations when the direction is changed from a forward search to a backward search or vice-versa.

When a [SELECT](./../select) statement is first executed a forward direction is assumed. Therefore if a SELECT is immediately followed by a READPREV, then a change of direction is assumed.

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

| Statement executed | Result of operation | Comment |
| --- | --- | --- |
| READNEXT key ELSE | key becomes "DAVE" | First key in list |
| READNEXT key ELSE | key becomes "GREG" | Second key in list |
| READPREV key ELSE | key becomes "DAVE" | Reversed so take preceding key |
| READPREV key ELSE | Take ELSE clause | The next key ptr exhausted at start. |
| READNEXT key ELSE | key becomes "DAVE" | First key in list |
| READNEXT key ELSE | key becomes "GREG" | Second key in list |
| READNEXT key ELSE | key becomes "JIM" | Final key. Next key ptr exhausted. |
| READPREV key ELSE | key becomes "JIM" | Reversed but list exhausted. |
| READPREV key ELSE | key becomes "GREG" | Second key in list |
| READPREV key ELSE | key becomes "DAVE" | First key in list |

Back to [Indexes](./../README.md)
