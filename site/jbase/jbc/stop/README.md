# STOP

**Created At:** 9/28/2017 1:58:14 PM  
**Updated At:** 1/5/2018 6:23:02 PM  
**Original Doc:** [278838-stop](https://docs.jbase.com/36868-jbase-basic/278838-stop)  
**Original ID:** 278838  
**Internal:** No  

The **STOP** statement is virtually identical in function to the [ABORT](./../abort) statement, except that it does not terminate a calling jCL program.

## Note
>
> As of jBASE 5.7.1, the following UniVerse syntax is also supported when running in "universe" emulation:

```
STOPM {Expression { , Expression { , Expression ...}}  
```

   or  

```
STOPE {Expression { , Expression { , Expression ...}}  
```

The **STOPM** statement uses the STOPM item in the jBASE error message file, jbcmessages.  

The **STOPE** statement simply uses a message in the jbcmessages file whose item id is the first 'Expression', so in fact operates is the same manner as **STOP**.  

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
