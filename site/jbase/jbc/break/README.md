# BREAK

**Created At:** 7/18/2017 10:47:24 AM  
**Updated At:** 1/5/2018 12:08:23 AM  
**Original Doc:** [263578-break](https://docs.jbase.com/36868-jbase-basic/263578-break)  
**Original ID:** 263578  
**Internal:** No  

## Description

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

See also [BREAK ON/OFF](./../break-on&off), [CONTINUE](./../continue)

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
