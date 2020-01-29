# HUSH

**Created At:** 9/6/2017 3:01:08 PM  
**Updated At:** 10/30/2018 1:05:41 PM  
**Original Doc:** [276081-hush](https://docs.jbase.com/36868-jbase-basic/276081-hush)  
**Original ID:** 276081  
**Internal:** No  

## Description

The **HUSH** statement controls character echo of input and output in programs and procs. **HUSH** also affects output to a COMO file.

It takes the general form:

```
HUSH { ON | OFF | INPUT | expression }
```

Where:

- **ON** suppresses input and output
- **OFF** resumes input and output
- **INPUT** suppresses input only
- **expression** must evaluate to one of the above values

**HUSH** acts as a toggle. If it is used without a qualifier, it changes the current state. It is not recommended that the statement be used to shut off output display unless it is really necessary. When **HUSH** **ON** is used, all output is suppressed including error messages and requests for information.

An example of use is as:

```
HUSH ON
```

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
