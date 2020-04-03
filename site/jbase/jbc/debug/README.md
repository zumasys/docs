# DEBUG

**Created At:** 8/14/2017 10:30:46 AM  
**Updated At:** 10/25/2018 7:10:20 AM  
**Original Doc:** [266873-debug](https://docs.jbase.com/36868-jbase-basic/266873-debug)  
**Original ID:** 266873  
**Internal:** No  

**Tags:**
<badge text='jbase debugger' vertical='middle' />

The **DEBUG** statement causes the executing program to enter the jBASE BASIC debugger. The statement takes the form

```
DEBUG
```

As can be observed below:

```
IF FatalError = TRUE THEN
    DEBUG ;*enter the debugger
END
```

## Note  

> It is also possible to start a program in DEBUG mode using the "-Jd" runtime option, see [here](./../../debugger/invoking-the-jbc-debugger/README.md) for more details of debugging options.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
