# PROCWRITE

<PageHeader />

**Tags:**
<badge text='jbc' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description

**PROCWRITE** is used to pass data back to the primary input buffer of a calling jCL program. It takes the general form:

```
PROCWRITE expression
```

Where **expression** may evaluate to any valid data type.

An example of use is as:

```
PROCWRITE "Success" : CHAR(254) : "0"
```

See also: [PROCREAD](./../procread)

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
