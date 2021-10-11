# PROCWRITE

<PageHeader />

## Description

**PROCWRITE** is used to pass data back to the primary input buffer of a calling jCL program. It takes the general form:

```
PROCWRITE expression
```

where **expression** may evaluate to any valid data type.

An example of use may be as:

```
PROCWRITE "Success" : CHAR(254) : "0"
```

See also: [PROCREAD](./../../jbc/procread/README.md)

Go back to [jBASE BASIC](./../../reference-guides/jbc/README.md).

Back to [jCL.](./../README.md)
  
<PageFooter />