# PROCREAD

**Created At:** 9/22/2017 2:16:52 PM  
**Updated At:** 11/27/2018 10:04:58 AM  
**Original Doc:** [277635-procread](https://docs.jbase.com/36868-jbase-basic/277635-procread)  
**Original ID:** 277635  
**Internal:** No  

**Tags:**
<badge text='jbc' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description

**PROCREAD** is used to retrieve data passed to programs from a jCL program. It takes the general form:

```
PROCREAD variable THEN|ELSE statements
```

Where **variable** is a valid jBASE BASIC identifier, which will be used to store the contents of the primary input buffer of the last jCL program called.

If a jCL program did not initiate the program the **PROCREAD** will fail and executes any statements associated with an **ELSE** clause. If the program was initiated by a jCL program then the **PROCREAD** will succeed, the jCL primary input buffer will be assigned to variable and any statements associated with a **THEN** clause will be executed.

## Note

> It is recommended that the use of jCL and therefore the **PROCREAD** statement should be not be expanded within your application and gradually replaced with more sophisticated methods such as UNIX scripts or jBASE BASIC programs.

An example of use is as:

```
PROCREAD Primary ELSE
    CRT "Unable to read the jCL buffer"
    STOP
END
```

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
