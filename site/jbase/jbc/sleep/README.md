# SLEEP

**Created At:** 9/28/2017 9:32:19 AM  
**Updated At:** 1/5/2018 6:17:40 PM  
**Original Doc:** [278809-sleep](https://docs.jbase.com/36868-jbase-basic/278809-sleep)  
**Original ID:** 278809  
**Internal:** No  

## Description

**Sleep** allows the program to pause execution for a specified period. It takes the general form:

```
SLEEP {expression}
```

Where:

**expression** may evaluate to either a numeric, in which case the program will sleep for the specified number of seconds, or fractions of a second "nn:nn{:nn}", in which case the program will sleep until the time specified.

If **expression** is not supplied then a default period of 1 second is assumed.

## Note

> Sleeping until a specified time works by calculating the time between the current time and the time supplied and sleeping for that many seconds. If in the meantime the host clock is changed the program will not wake up at the desired time;
>
> If invoking the debugger while a program is sleeping and the execution continued, the user will be prompted:
>
> Continue with SLEEP (Y/N)?
>
> If "N" is the response, the program will continue at the next statement after the **SLEEP**.

Examples of use would be as:

```
*Sleep until the end of the working day
SLEEP "17:30”

* 40 winks...
SLEEP 40

* Sleep for two and a half seconds...
SLEEP 2.5
```

See also: [MSLEEP](./../msleep).

Go back to [jBASE BASIC](./../README.md)
