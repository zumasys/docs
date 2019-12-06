# BREAK

**Created At:** 7/18/2017 10:47:24 AM  
**Updated At:** 1/5/2018 12:08:23 AM  


# Description 

The statement allows for the configuration of the **BREAK** statement. This may take the form:

```
BREAK
```

Used alone, for instance in a loop, **BREAK** will terminate the innermost loop, which it ignores if used in the outside loop construct.

An example of its use is as:

```
  LOOP
    READNEXT KEY FROM LIST1 ELSE BREAK
    **code to be executed in the loop

  REPEAT
* Program resumes here after BREAK condition satisfied.
```



See also [BREAK ON/OFF](break-on-off), [CONTINUE](277124-continue)

Go back to [jBASE BASIC](263498-jbase-basic).
