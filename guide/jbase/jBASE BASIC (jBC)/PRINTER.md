# PRINTER

**Created At:** 9/22/2017 2:02:17 PM  
**Updated At:** 1/5/2018 5:57:02 PM  


# Description

Use the **PRINTER** statement to control the destination of output from the [PRINT](277631-print) statement. It takes the general form:

```
PRINTER ON|OFF|CLOSE
```

Where:

**PRINTER ON** redirects all subsequent output from the [PRINT](277631-print) statement to the print spooler.

**PRINTER OFF** redirects all subsequent output from the [PRINT](277631-print) statement to the terminal device.

**PRINTER CLOSE** will act as**PRINTER OFF** but in addition closes the currently active spool job created by the active **PRINTER ON** statement.

The following code sample demonstrates the use of the statement.

```
PRINTER ON;* Open a spool job

FOR I =1 TO 60
    PRINT "Line ":I ;* Send to printer
    PRINTER OFF
    PRINT "+": ;* Send to terminal
    PRINTER ON ;* Back to printer
NEXT I

PRINTER CLOSE ;* Allow spooler to print it
```



Go back to [jBASE BASIC](263498-jbase-basic).
