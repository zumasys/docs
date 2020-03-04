# jCL GO  B

**Created At:** 5/28/2018 10:54:00 AM  
**Updated At:** 6/11/2018 4:23:54 AM  
**Original Doc:** [318679-jcl-go-b](https://docs.jbase.com/45792-jcl/318679-jcl-go-b)  
**Original ID:** 318679  
**Internal:** No  

**Tags:**
<badge text='jcl' vertical='middle' />

## Description

This command transfers control to the statement following the most recent M (mark) command executed. It takes the general form:

```
G B
```

or

```
GO  B
```

or

```
GOTO B
```

## Note

> GO  B goes back to the last executed M, no matter where it is located in the program. If a "mark" has not previously been executed, the program will terminate with an error message: Can't find mark at line n in programname

### Example 1

```
001 PQN

...
...

010 MV #1 "SSELECT  SALES BY MONTH"
011 STON
012 MV #1 "PQ-SELECT  1"
013 P
014 M
015 MV %1 !1
016 IF # %1 GO  F
017 C Process the record

...
...

025 GO B
026 M
```

Lines 10 to 13 create a sorted list of the records in the SALES file. After each record is processed, the GO  B command on line 25 returns control to the M command on line 14. When the end of the list is reached, the IF command on line 16 transfers control to the M command on line 26.

### Example 2

```
001 PQN

...
...

009 MV %1 ","
010 M
011 IF # %1 GO  30
012 M
013 IF # %2 GO 40
014 GO 50
015 30 MV %1 "ABC"
016 GO B
017 40 MV %2 "DEF"
018 GO B
019 50 ....
```

This example simply serves to demonstrate how the GO  B command will remember the last M command rather than search backwards for it. First, the values in %1 and %2 are set to null in line 9 and the M at line 10 is recorded. When control reaches line 11, %1 is tested and control is transferred to label 30 on line 15. The intervening M command (at line 12) is not recorded. Line 15 assigns a value of ABC to %1 and line 16 transfers control back to the M on line 10. %1 does have a value now, so control moves on to line 12 and the M on this line is recorded. Next, %2 is tested at line 13 and control is transferred to label 40 on line 17. When the GO B is processed on line 18, control is transferred back to line 12.

Back to [jCL.](./../README.md)
