# OFF

**Created At:** 9/7/2018 12:54:20 PM  
**Updated At:** 10/24/2018 10:50:17 AM  
**Original Doc:** [off](https://docs.jbase.com/46963-utilities/off)  
**Original ID:** 338162  
**Internal:** No  


## Description 

The **OFF**command will close down all current jBASE programs, but will stop if encounters a non-jBASE program. Thus to be fully effective, only jBASE programs should be running.

On Unix for example, the .profile might have:

```
exec MAIN.PROG
```

or

```
exec jsh
```



If the .profile looks like this:

```
MAIN.PROG
```

or

```
jsh
```

The UNIX shell will be kept active and the effect of the **OFF**command will be to return to the UNIX shell.
