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

See also: [PROCREAD](./../../../jbase-basic-(jbc)/procread)

Go back to [jBASE BASIC](./../../../jbase-basic-(jbc)/jbase-basic-programmers-reference-guide).

Back to [jCL.](./../README.md)
  
<PageFooter />