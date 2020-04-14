# PROCWRITE

<PageHeader />

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
  
<PageFooter />