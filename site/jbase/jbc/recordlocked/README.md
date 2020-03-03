# RECORDLOCKED

**Created At:** 9/28/2017 7:25:09 AM  
**Updated At:** 1/5/2018 6:05:12 PM  
**Original Doc:** [278781-recordlocked](https://docs.jbase.com/36868-jbase-basic/278781-recordlocked)  
**Original ID:** 278781  
**Internal:** No  

## Description

This function is used to ascertain the status of a record lock. It takes the general form:

```
RECORDLOCKED(filevar, recordkey)
```

Where:

**filevar** is a file variable from a previously executed [OPEN](./../open) statement.

**recordkey** is an expression for the record id that will be checked.

The function returns an integer value to indicate the record lock status of the specified record id.

| Return Value | Definition |
| --- | --- |
| 3 | Locked by this process by a [FILELOCK](./../filelock) |
| 2 | Locked by this process by a [READU](./../readu)|
| 1 | Locked by this process by a [READL](./../readl) |
| 0<| Not locked |
| -1 | Locked by another process by a [READL](./../readl) |
| -2 | Locked by another process by a [READU](./../readu)|
| -3 | Locked by another process by a [FILELOCK](./../filelock) |

If the return value is negative, then the [SYSTEM(43)](./../system-functions) and [STATUS](./../status-function) function calls can be used to determine the port number of the program that holds the lock. If -1 is returned, more than 1 port could hold the lock and so the port number returned will be the first port number found.

An example of use is as:

```
OPEN "records" TO FILE_VAR ELSE ABORT "Cannot open records"
IF(RECORDLOCKED(FILE_VAR, rec_key) = 0) THEN
    CRT "Record not locked"
END
```

or

```
OPEN "INVENTORY" TO invFvar ELSE ABORT 201,"Cannot open the INVENTORY file"
IF RECORDLOCKED (invFvar,invId) = -2 THEN
    CRT "Inventory record ":invId:" is locked by port ":SYSTEM(43)
END
```

Go back to [jBASE BASIC](./../README.md)
