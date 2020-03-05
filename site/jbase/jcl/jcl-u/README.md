# jCL U

**Created At:** 5/29/2018 7:20:41 AM  
**Updated At:** 6/6/2019 8:22:01 AM  
**Original Doc:** [jcl-u](https://docs.jbase.com/45792-jcl/jcl-u)  
**Original ID:** 318878  
**Internal:** No  

## Description

This command executes a "user exit" from a **jCL** program. It takes the general form:

```
Unxxx
```

Where:

- **n** represents the user exit entry point
- **xxx** is the id of the user exit.

## Note

> User exits are user written functions, which are used to manipulate buffers and perform tasks beyond the scope of the standard jCL commands.
>
> See the Time and Date topic and the TR command for more examples of "standard" user exits.

### Example 1

```
012 U31AD
```

Returns the current port number.

### Example 2

```
012 U307A
013 300
```

Causes the process to "sleep" for 300 seconds.

### Example 3

```
003 U407A
004 12:0
```

Causes the process to "sleep" until 12:10.

Back to [jCL.](./../README.md)
