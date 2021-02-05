# IOCTL

<PageHeader />  

## Description

This is an intrinsic function of the jBASE BASIC language, that behaves in a similar manner to the C function ioctl(). Its purpose is to allow commands to be sent to the database driver for a particular file, and then to receive a reply from the database driver. It takes the general form:

```
IOCTL(filevar, command, parameter)
```

Where:

- **filevar** Is a variable that has had a file opened against it using the [OPEN](./../open) statement. However, if the default file variable is preferred for use, **-1** should be placed in this position. For example:

```
OPEN "MD" ELSE STOP
filevar = -1
IF IOCTL(filevar, JIOCTL_COMMAND_xxx, status) ...
```

- **command** can be any numeric value (or variable containing a numeric). However, it is up to the database driver to support that particular command number.
- **parameter** will be different for each command that is used.

As with the C function, the use of **IOCTL()** is highly dependent upon the database driver being communicated to. Each database driver may choose to provide certain common functionality, or may add its own commands and so on. This is especially true of user-written database drivers.

First, an example of a program that opens a file and finds the type of file:

```
    INCLUDE JBC.h
    OPEN "MD" TO DSCB ELSE STOP 201,"MD"
    fileType = ""
    IF IOCTL(DSCB,JIOCTL_COMMAND_FILESTATUS, fileType) THEN
        CRT "Type of file = " : DQUOTE(fileType<1>)
    END ELSE
        CRT "IOCTL Failed !! Unknown file type"
    END
```

If the **ELSE** clause is taken, it does not necessarily mean there is an error, it only means that the database driver for file "MD" does not support the command that was requested from it. The JBC.h file is supplied with jBASE in $JBCRELEASEDIR/include directory. If the source is compiled with the **jcompile** or **BASIC** command, this directory is automatically included in the search path and no special action is needed by the programmer for the **INCLUDE JBC.h** statement.

The use of this function differs depending on the command.While the **JBC\_COMMAND\_GETFILENAME** command is supported for all database drivers, some common **IOCTL** command numbers also supported by the jBASE database drivers are:

## 1. JBC\_COMMAND\_GETFILENAME COMMAND

Using this command to the **IOCTL()** function, you can determine the exact file name that was used to open the file. This is helpful because jEDI uses Q-pointers, F-pointers and the **JEDIFILEPATH** environment variable to actually open the file, and the application can never be totally sure where the resultant file was really opened. Normally of course, this is of no concern to the application.

An example of use would be to open the file CUSTOMERS and find out the exact path that was used to open the file ,as follows:

```
INCLUDE JBC.h
filename = ""
OPEN "CUSTOMERS" TO DSCB ELSE STOP 201,"CUSTOMERS"
IF IOCTL(DSCB,JBC_COMMAND_GETFILENAME,filename) ELSE
    CRT "IOCTL failed !!"
    EXIT(2)
END
CRT "Full file path = " : DQUOTE(filename)
```

This command is executed by the jBASE BASIC library code rather than the jEDI library code or the database drivers, so it can be run against a file descriptor for any file type.

## 2. JIOCTL\_COMMAND\_CONVERT COMMAND

Some of the jBASE BASIC database drivers will perform an automatic conversion of the input and output record when performing reads and writes.

An example of this is when writing to a directory. In this case, the attribute marks will be converted to new-line characters and a trailing new-line character added. Similarly for reading from a directory the new-line characters will be replaced with attribute marks, and the trailing new-line character will be deleted.

The above example is what happens for the database driver for directories. It assumes by default that the record being read or written is a text file and that the conversion is necessary. It tries to apply some intelligence to reading files, as text files always have a trailing new-line character. Therefore, if a file is read without a trailing new-line character, the database driver assumes the file must be a binary file rather than a text file, and no conversion takes place.

This conversion of data works in most cases and usually requires no special intervention from the programmer.

There are cases however, when this conversion needs to be controlled and interrogated, and the **IOCTL()** function call with the **JIOCTL\_COMMAND\_CONVERT** command provides the jBASE database drivers that support this conversion with commands to control it.

The call to **IOCTL()**, if successful, will only affect file operations that use the same file descriptor.

Consider the following code:

```
INCLUDE JBC.h
OPEN "MD" TO fileVar1 ELSE ...
OPEN "MD" TO fileVar2 ELSE ...
IF IOCTL(fileVar1,JIOCTL_COMMAND_CONVERT, "RB") ...
```

In the above example, any future file operations using variable **fileVar1** will be controlled by the change forced in the **IOCTL()** request. Any file operations using variable **fileVar2** will not be affected and will use the default file operation.

Input to the **IOCTL()** is a string of controls delimited by a comma that tell the database driver what to do.

The output from the **IOCTL()** can optionally be a string to show the last conversion that the driver performed on the file.

The descriptions of the available controls that can be passed as input to this **IOCTL()** function are:

| Code | Description |
| --- | --- |
| RB | All future reads to be in binary (no conversion) |
| RT | All future reads to be in text format (always do a conversion) |
| RI | All future reads to decide themselves whether binary or text |
| RS | Return to caller the status of the last read ("B" = binary, "T" = text ) |
| WB | All future writes to be in binary (no conversion) |
| WT | All future writes to be in text format (always do a conversion) |
| WI | All future writes to decide themselves whether binary or text |
| WS | Return to caller the status of the last write ("B" = binary, "T" = text ) |
| KB | All future reads/writes have the record key unaltered |
| KT | All future reads/writes have the record key modified |
| KI | All future reads/writes to decide if to do a conversion |
| KS | Return to caller the status of the last record key ("B" = binary, "T" = text ) |

In the example below, the application wants to open a file, and to ensure that all reads and writes to that file are in binary, and that no translation such as new-lines to attribute marks is performed.

```
INCLUDE JBC.h
OPEN "FILE" TO DSCB ELSE STOP 201,"FILE"
IF IOCTL(DSCB,JIOCTL_COMMAND_CONVERT,"RB,WB") ELSE
    CRT "Unable to IOCTL file 'FILE'" ; EXIT(2)
END
```

The sample code below reads a record from a file, and finds out if the last record read was in text format (were new-lines converted to attribute marks and the trailing new-line deleted), or in binary format (with no conversion at all).

```
INCLUDE JBC.h
OPEN "." TO DSCB ELSE STOP 201,"."
READ rec FROM DSCB,"prog.o" ELSE STOP 202,"prog.o"
status = "RS"
IF IOCTL(DSCB,JIOCTL_COMMAND_CONVERT,status) THEN
    IF status EQ "T" THEN CRT "Text" ELSE CRT "Binary"
END ELSE
    CRT "The IOCTL failed !!"
END
```

## 3. JIOCTL\_COMMAND\_FILESTATUS COMMAND

The **JIOCTL\_COMMAND\_FILESTATUS** command will return an attribute delimited list of the status of the file to the caller.

| Attribute | Description |
| --- | --- |
| &lt;1&gt; | File type, as a string |
| &lt;2&gt; |  FileFlags, as decimal number, show LOG, BACKUP and TRANS |
| &lt;3&gt; | BucketQty, as decimal number, number of buckets in the file |
| &lt;4&gt; | BucketSize, as decimal number, size of each bucket in bytes |
| &lt;5&gt; | SecSize, as decimal number, size of secondary data space |
| &lt;6&gt; | Restore Spec, a string showing any restore re-size specification |
| &lt;7&gt; | Locking identifiers, separated by multi-values |
| &lt;8&gt; | FileFlags showing LOG, BACKUP and TRANSACTION permissions |
| &lt;8,1&gt; | Set to non-zero to suppress logging on this file |
| &lt;8,2&gt; | Set to non-zero to suppress transaction boundaries on this file |
| &lt;8,3&gt; | Set to no-zero to suppress backup of the file using jbackup |
| &lt;9&gt; | Hashing algorithm used |

Open a file and see if the file type is a directory.

```
INCLUDE JBC.h
OPEN ".." TO DSCB ELSE STOP 201,".."
status = ""
IF IOCTL(DSCB,JIOCTL_COMMAND_FILESTATUS,status) ELSE
    CRT "IOCTL failed!" ; EXIT(2)
END
IF status<1> EQ "UD" THEN
    CRT "File is a directory"
END ELSE
    CRT "File type is ":DQUOTE(status<1>)
    CRT "This is not expected for .."
END
```

Open a file ready to perform file operations in a transaction against it. Make sure the file has not been removed as a transaction type file by a previous invocation of the command **jchmod -T CUSTOMERS**.

```
INCLUDE JBC.h
OPEN "CUSTOMERS" TO DSCB ELSE STOP 201,"CUSTOMERS"
IF IOCTL(DSCB,JIOCTL_COMMAND_FILESTATUS,status) ELSE
    CRT "IOCTL failed !!" ; EXIT(2)
END
IF status<8,2> THEN
    CRT "Error ! File CUSTOMERS is not"
    CRT "part of transaction boundaries !!"
    CRT "Use "jchmod +T CUSTOMERS" !!"
    EXIT(2)
END
```

This code tests whether or not a file is encrypted:

```
 * Determine if a file is encrypted
 *
 * Syntax: encrypted filename
 *
INCLUDE JBC.h
filename = SENTENCE(1)
OPEN filename TO filevar ELSE STOP 201, filename
file_status = ""          ;* keeps the compiler from complaining
ok = IOCTL(filevar, JIOCTL_COMMAND_FILESTATUS, file_status)
CLOSE filevar
CRT DQUOTE(filename):
IF file_status<8,5> THEN
    CRT " is encrypted."
END ELSE
    CRT " is not encrypted."
END
```

## 4. JIOCTL\_COMMAND\_FINDRECORD COMMAND

This command will find out if a record exists on a file without the need to actually read in the record.

This can provide large performance gains in certain circumstances.

Before writing out a control record, make sure it doesn't already exist. As the control record is quite large, it will provide performance gains to simply test if the output record already exists, rather than reading it in using the [READ](./../read) statement to see if it exists

```
INCLUDE JBC.h
OPEN "outputfile" TO DSCB ELSE STOP 201,"outputfile"
 * Make up the output record to write out in "output"
key = "output.out"
rc = IOCTL(DSCB, JIOCTL_COMMAND_FINDRECORD, key)
BEGIN CASE
    CASE rc EQ 0
        WRITE output ON DSCB,key
        CRT "Data written to key " : key
    CASE rc GT 0
        CRT "No further action, record already exists"
    CASE 1
        CRT "IOCTL not supported for file type"
END CASE
```

## 5. JIOCTL\_COMMAND\_FINDRECORD\_EXTENDED COMMAND

This command to the **IOCTL()** function returns the record size and the time and date the record was last updated. If the record does not exist, null is returned. The time/date stamp is returned in UTC format.

## Example #1

Display the time and data of last update for each record in filename.

```
INCLUDE JBC.h
OPEN "filename" TO DSCB ELSE STOP 201,"filename"
*
* Select each record in the newly opened file
*
SELECT DSCB
LOOP WHILE READNEXT record.key DO
*
* Get the details on the record and look for errors.
*
    record.info = record.key
    IF IOCTL(DSCB,JIOCTL_COMMAND_FINDRECORD_EXTENDED,record.info) ELSE
        CRT "Error! File driver does not support this"
        STOP
    END
*
* Extract and convert the returned data
*
    record.size = record.info<1>
    record.utc = record.info<2>
    record.time = OCONV(record.utc,"U0ff0")
    record.date = OCONV(record.utc,"U0ff1")
*
* Display the information.
*
    CRT "Record key " : record.key : " last updated at " :
    CRT OCONV(record.time,"MTS") : " " :
    CRT OCONV(record.date,"D4")
REPEAT
```

## 6. JIOCTL\_COMMAND\_HASH\_RECORD COMMAND

For jBASE hashed files, j4, jPlus, each record is pseudo-randomly written to one of the buckets (or groups) of the hashed file. The actual bucket it is written to depends upon two factors:

- The actual record key (or item-id)
- The number of buckets in the file (or modulo)

This **IOCTL()** function shows which bucket number the record would be found in, given the input record key. The bucket number is in the range 0 to (b-1) where b is the number of buckets in the file specified when the file was created (probably using [CREATE-FILE](./../create)).

The command only returns the expected bucket number, as is no indication that the record actually exists in the file.

Two attributes are returned by this command. The first is the hash value that the record key has hashed to, and the second attribute is the bucket number.

This command will always return "0" (zero) for type JD (Dynamic) files.

## Example #2

Open a file, and find out what bucket number the record "PIPE&SLIPPER" would be found in.

```
INCLUDE JBC.h
OPEN "WEDDING-PRESENTS" TO DSCB ELSE STOP
key = "PIPE&SLIPPER"
parm = key
IF IOCTL(DSCB,JIOCTL_COMMAND_HASH_RECORD,parm) THEN
    CRT "key " : key : " would be in bucket " : parm<2>
END ELSE
    CRT "IOCTL failed, command not supported"
END
```

## 7. JIOCTL\_COMMAND\_HASH\_LOCK COMMAND

The jEDI locking mechanism for records in jEDI provided database drivers is not strictly a 100% record locking mechanism. Instead, it uses the hashed value of the record key to give a value from 0 to 230-1 to describe the record key. The **IOCTL()** function can be used to determine how a record key would be converted into a hashed value for use by the locking mechanism.

## Example #3

Lock a record in a file and find out what the lock id of the record key is. The example then calls the jRLA locking demon and the display of locks taken should include the lock taken by this program.

```
INCLUDE JBC.h
DEFCE getpid()
OPEN "WEDDING-PRESENTS" TO DSCB ELSE STOP
key = "PIPE&SLIPPER"
parm = key
IF IOCTL(DSCB,JIOCTL_COMMAND_HASH_LOCK,parm) ELSE
    CRT "IOCTL failed, command not supported"
    EXIT(2)
END
CRT "The lock ID for the key is ":parm
CRT "Our process id is " : getpid()
```

## Note

> The status return value is 0 for failure, or 1 for success. A value of -1 generally shows the command has not been recognized.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
