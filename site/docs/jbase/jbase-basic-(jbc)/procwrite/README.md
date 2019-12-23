# PROCWRITE

**Created At:** 9/22/2017 2:21:56 PM  
**Updated At:** 11/27/2018 9:43:02 AM  
**Original Doc:** [277636-procwrite](https://docs.jbase.com/36868-jbase-basic/277636-procwrite)  

**Tags:**
<badge text='jbc' vertical='middle' />
<badge text='jcl' vertical='middle' />

# Description

**PROCWRITE** is used to pass data back to the primary input buffer of a calling jCL program. It takes the general form:

```
PROCWRITE expression
```

Where **expression** may evaluate to any valid data type.

An example of use is as:

```
PROCWRITE "Success":CHAR (254):"0"
```



See also: [PROCREAD](./../procread)

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
