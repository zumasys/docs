# PROCWRITE

**Created At:** 10/25/2017 2:54:59 PM  
**Updated At:** 4/3/2018 8:58:50 PM  
**Original Doc:** [282994-procwrite](https://docs.jbase.com/45792-jcl/282994-procwrite)  
**Original ID:** 282994  
**Internal:** No  

## Description

**PROCWRITE** is used to pass data back to the primary input buffer of a calling jCL program. It takes the general form:

```
PROCWRITE expression
```

where expression may evaluate to any valid data type.

An example of use may be as:

```
PROCWRITE "Success" : CHAR(254) : "0"
```

See also: [PROCREAD](./../../../jbase-basic-%28jbc%29/procread)

Go back to [jBASE BASIC](./../../../jbase-basic-%28jbc%29/jbase-basic-programmers-reference-guide).

Back to [jCL.](./../README.md)
