# CONTINUE

**Created At:** 9/18/2017 12:02:58 PM  
**Updated At:** 11/27/2018 9:46:44 AM  

**Tags:**
<badge text='program control' vertical='middle' />

# Description

The **CONTINUE** statement is the complimentary statement to the [BREAK](263578-break) statement, without arguments. If used within a loop, program execution will skip the remaining code after the ‘continue’ statement in the current iteration and proceed directly on to the next iteration.

The compiler will issue a warning message and ignore the statement if it is found outside an iterative  loop such as [FOR...NEXT](279813-for), [LOOP...REPEAT](276941-loop).

An example of use is as:

```
     FOR I = 1 TO 30
         IF MOD(I,2) = 0  THEN CONTINUE
         ELSE CRT I
     NEXT I
```

The above example will execute the loop 30 times but will only print the value of I when I is a prime number.



See also: [BREAK](263578-break), [EXIT](269199-exit)

Go back to [jBASE BASIC](263498-jbase-basic).
