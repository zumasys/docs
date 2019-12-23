# LOCK

**Created At:** 9/15/2017 9:43:13 AM  
**Updated At:** 10/4/2019 2:50:08 PM  
**Original Doc:** [276940-lock](https://docs.jbase.com/36868-jbase-basic/276940-lock)  

**Tags:**
<badge text='program execution' vertical='middle' />

# Description 

The **LOCK**statement will attempt to set an execution lock thus preventing any other program that respects that lock to wait until this program has released it. It takes the general form:

```
LOCK expression {THEN|ELSE statements}
```

Where :

- **expression** should evaluate to a numeric value between 0 and 255 (63 in R83, AP or D3 emulations),
- **statements** will execute the THEN clause (if defined) providing the lock could be taken. If another program holds the **LOCK**and an **ELSE**clause is provided then the **statements** defined by the ELSE clause are executed. If no ELSE clause was provided with the **statements** then it will block (hang) until the other program has released the lock.


If the environment variable **JBCEMULATE** is set to R83, AP or D3, to compile the program the number of execution locks is limited to 64. If an execution lock greater than this number is specified, the actual lock taken is the specified number modulo 64.

```
LOCK 32 ELSE 
    CRT "This program is already executing!"
    STOP
END
```



Locks are in memory only and will not persist if the server or jBASE service is restarted.

See also: [UNLOCK.](./../unlock)

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
