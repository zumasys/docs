# WRITET

**Created At:** 10/4/2017 12:14:18 PM  
**Updated At:** 1/5/2018 6:32:52 PM  
**Original Doc:** [279572-writet](https://docs.jbase.com/36868-jbase-basic/279572-writet)  
**Original ID:** 279572  
**Internal:** No  

## Description

The **WRITET** statement enables data to be written to a range of tape devices between 0-9.

```
WRITET variable {ON|TO expression} THEN|ELSE statements
```

Where:

**variable** is the variable that holds the data to be written to the tape device.

**expression** should evaluate to an integer value in the range 0-9 and specifies from which tape channel to read the data. If the **ON** clause is not specified the **WRITET** will assume channel 0.

If the **WRITET** fails then the statements associated with any **ELSE** clause will be executed.

[SYSTEM(0)](./../system-functions) will return the reason for the failure as follows:

| <!----> | <!----> |
| --- | --- |
| 1 | There is no media attached to the channel |
| 2 | End of media found |

## Note

> - A "tape" not only refers to magnetic tape devices but akso to any device that has been described to jBASE.
> - Writing device descriptors for jBASE is beyond the scope of this documentation.
> - If no tape device has been assigned to the specified channel the jBASE debugger is entered with an appropriate message.

Where possible the record size is not limited to a single tape block and the entire record will be written blocked to whatever block size has been allocated by the T-ATT command. However, certain devices do not allow jBASE to accomplish this (SCSI tape devices for instance).

An example of use is as:

```
LOOP
    WRITET TapeRec ON 5 ELSE
        Reason = SYSTEM(0)
    IF Reason = 2 THEN BREAK ;* done
        CRT "Error"; STOP
    END
REPEAT
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
