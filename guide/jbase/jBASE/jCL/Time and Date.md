# Time and Date 

**Created At:** 5/23/2018 2:57:49 PM  
**Updated At:** 6/1/2018 5:14:13 PM  


The following commands provide a simple way of putting the current system time and date into the currently active input buffer:

```
S21
U147F
T
```

Puts the current time, in internal format (seconds since midnight), in the current input buffer (in this case, %21).

```
S10
U147F
D
```

Puts the current date, in internal format (days since 31 Dec 67), in the current input buffer (in this case, %10).

```
S8
U147F
T MTS
```

Puts the current time, in external format (MTS yields hh:mm:ss), in the current input buffer (in this case, %8).

```
S33
U147F
D D2/
```

Puts the current date, in external format (D2/ yields dd/mm/yy or mm/dd/yy - depending on your internationalization settings), in the current input buffer (in this case, %33).



## Validating Time and Date 

You can use pattern matching to input a valid date or time but it does not catch input like 10/32/94 or 25:25:25.

The example below checks for a valid date in D2/ format by converting it. This mechanism works because an invalid date converts to null.

```
001 PQN
002 10 T "Enter date (mm/dd/yy) :", +
003 IF # %1 XFinished
004 IBP %1
005 MV %2 "
006 IBH%1;D2/;
007 IF # %2 T B,"Oops!"\ GO  10
008 C Date OK
```





Back to [JCL Commands.](318022-jcl)
