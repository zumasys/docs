# IOCTL

**Created At:** 9/14/2017 8:31:56 AM  
**Updated At:** 6/6/2019 7:36:44 AM  


# Description

This is an intrinsic function of the jBASE BASIC language, that behaves in a similar manner to the C function ioctl(). Its purpose is to allow commands to be sent to the database driver for a particular file, and then to receive a reply from the database driver. It takes the general form:

```
IOCTL(filevar, command, parameter)
```

Where:

- **filevar**Is a variable that has had a file opened against it using the [OPEN](277537-open) statement. However, if the default file variable is preferred for use, **-1** should be placed in this position. For example:


```
OPEN "MD" ELSE STOP
filevar = -1
IF IOCTL(filevar, JIOCTL_COMMAND_xxx, status) ...
```

- **command** can be any numeric value (or variable containing a numeric). However, it is up to the database driver to support that particular command number.
- **parameter**will be different for each command that is used.


As with the C function, the use of **IOCTL()** is highly dependent upon the database driver being communicated to. Each database driver may choose to provide certain common functionality, or may add its own commands and so on. This is especially true of user-written database drivers.

First, an example of a program that opens a file and finds the type of file:

```
001     INCLUDE JBC.h
002     OPEN "MD" TO DSCB ELSE STOP 201,"MD"
003     status=""
004     IF IOCTL(DSCB,JIOCTL_COMMAND_FILESTATUS,status) THEN
005         PRINT "Type of file = ":DQUOTE(status<1>)
006     END ELSE
007         PRINT "IOCTL FAILED !! unknown file type"
008     END
```

If the **ELSE**clause is taken, it does not necessarily mean there is an error, it only means that the database driver for file "MD" does not support the command that was requested from it. The JBC.h file is supplied with jBASE in $JBCRELEASEDIR/include directory. If the source is compiled with the **jcompile** or **BASIC**command, this directory is automatically included in the search path and no special action is needed by the programmer for the **INCLUDE JBC.h** statement.

The use of this function differs depending on the command.While the **JBC\_COMMAND\_GETFILENAME**command is supported for all database drivers, some common **IOCTL** command numbers also supported by the jBASE database drivers are:

## **1. JBC\_COMMAND\_GETFILENAME COMMAND**

Using this command to the **IOCTL()** function, you can determine the exact file name that was used to open the file. This is helpful because jEDI uses Q-pointers, F-pointers and the **JEDIFILEPATH**environment variable to actually open the file, and the application can never be totally sure where the resultant file was really opened. Normally of course, this is of no concern to the application.

An example of use would be to open the file CUSTOMERS and find out the exact path that was used to open the file ,as follows:

```
001     INCLUDE JBC.h
002     filename = ""
003     OPEN "CUSTOMERS" TO DSCB ELSE STOP 201,"CUSTOMERS"
004     IF IOCTL(DSCB,JBC_COMMAND_GETFILENAME,filename) ELSE
005         CRT "IOCTL failed !!"
006         EXIT(2)
007     END
008     PRINT "Full file path = ":DQUOTE(filename)
```

This command is executed by the jBASE BASIC library code rather than the jEDI library code or the database drivers, so it can be run against a file descriptor for any file type.



## **2. JIOCTL\_COMMAND\_CONVERT COMMAND**

Some of the jBASE BASIC database drivers will perform an automatic conversion of the input and output record when performing reads and writes.

An example of this is when writing to a directory. In this case, the attribute marks will be converted to new-line characters and a trailing new-line character added. Similarly for reading from a directory the new-line characters will be replaced with attribute marks, and the trailing new-line character will be deleted.

The above example is what happens for the database driver for directories. It assumes by default that the record being read or written is a text file and that the conversion is necessary. It tries to apply some intelligence to reading files, as text files always have a trailing new-line character. Therefore, if a file is read without a trailing new-line character, the database driver assumes the file must be a binary file rather than a text file, and no conversion takes place.

This conversion of data works in most cases and usually requires no special intervention from the programmer.

There are cases however, when this conversion needs to be controlled and interrogated, and the**IOCTL()** function call with the J**IOCTL\_COMMAND\_CONVERT** command provides the jBASE database drivers that support this conversion with commands to control it.

The call to**IOCTL()**, if successful, will only affect file operations that use the same file descriptor.

Consider the following code:

```
001     INCLUDE JBC.h
002     OPEN "MD" TO FILEVAR1 ELSE ...
003     OPEN "MD" TO FILEVAR2 ELSE ...
004     IF IOCTL(FILEVAR1,JIOCTL_COMMAND_CONVERT,"RB") ...
```

In the above example, any future file operations using variable **FILEVAR1**will be controlled by the change forced in the **IOCTL()** request. Any file operations using variable **FILEVAR2**will not be affected and will use the default file operation.

Input to the **IOCTL()** is a string of controls delimited by a comma that tell the database driver what to do.

The output from the **IOCTL()** can optionally be a string to show the last conversion that the driver performed on the file.

The descriptions of the available controls that can be passed as input to this **IOCTL()** function are:


| Code<br> | Description<br> |
| --- | --- |
| RB<br><br> | All future reads to be in binary (no conversion)<br> |
| RT<br> | All future reads to be in text format (always do a conversion)<br> |
| RI<br> | All future reads to decide themselves whether binary or text<br> |
| RS<br> | Return to caller the status of the last read ("B" = binary, "T" = text )<br> |
| WB<br> | All future writes to be in binary (no conversion)<br> |
| WT<br> | All future writes to be in text format (always do a conversion)<br> |
| WI<br> | All future writes to decide themselves whether binary or text<br> |
| WS<br> | Return to caller the status of the last write ("B" = binary, "T" = text )<br> |
| KB<br> | All future reads/writes have the record key unaltered<br> |
| KT<br> | All future reads/writes have the record key modified<br> |
| KI<br> | All future reads/writes to decide if to do a conversion<br> |
| KS<br> | Return to caller the status of the last record key ("B" = binary, "T" = text )<br> |




In the example below, the application wants to open a file, and to ensure that all reads and writes to that file are in binary, and that no translation such as new-lines to attribute marks is performed.

```
001     INCLUDE JBC.h
002     OPEN "FILE" TO DSCB ELSE STOP 201,"FILE"
003     IF IOCTL(DSCB,JIOCTL_COMMAND_CONVERT,"RB,WB") ELSE
004         CRT "UNABLE TO IOCTL FILE 'FILE'" ; EXIT(2)
005     END
```



The sample code below reads a record from a file, and finds out if the last record read was in text format (were new-lines converted to attribute marks and the trailing new-line deleted), or in binary format (with no conversion at all).

```
001     INCLUDE JBC.h
002     OPEN "." TO DSCB ELSE STOP 201,"."
003     READ rec FROM DSCB,"prog.o" ELSE STOP 202,"prog.o"
004     status = "RS"
005     IF IOCTL(DSCB,JIOCTL_COMMAND_CONVERT,status) THEN
006         IF status EQ "T" THEN CRT "TEXT" ELSE CRT "BINARY"
007     END ELSE
008         CRT "The IOCTL failed !!"
009     END
```



# **3. JIOCTL\_COMMAND\_FILESTATUS COMMAND**

The **JIOCTL\_COMMAND\_FILESTATUS** command will return an attribute delimited list of the status of the file to the caller.




| Attribute<br> | Description<br> |
| --- | --- |
| &lt;1&gt;<br> | File type, as a string<br> |
| &lt;2&gt;<br> |  FileFlags, as decimal number, show LOG, BACKUP and TRANS<br> |
| &lt;3&gt;<br> | BucketQty, as decimal number, number of buckets in the file<br> |
| &lt;4&gt;<br> | BucketSize, as decimal number, size of each bucket in bytes<br> |
| &lt;5&gt;<br> | SecSize, as decimal number, size of secondary data space<br> |
| &lt;6&gt;<br> | Restore Spec, a string showing any restore re-size specification<br> |
| &lt;7&gt;<br> | Locking identifiers, separated by multi-values<br> |
| &lt;8&gt;<br> | FileFlags showing LOG, BACKUP and TRANSACTION permissions<br> |
| &lt;8,1&gt;<br><br> | Set to non-zero to suppress logging on this file<br> |
| &lt;8,2&gt;<br><br> | Set to non-zero to suppress transaction boundaries on this file<br> |
| &lt;8,3&gt;<br> | Set to no-zero to suppress backup of the file using jbackup<br> |
| &lt;9&gt;<br> | Hashing algorithm used<br> |




Open a file and see if the file type is a directory.

```
001     INCLUDE JBC.h
002     OPEN ".." TO DSCB ELSE STOP 201,".."
003     status = ""
004     IF IOCTL(DSCB,JIOCTL_COMMAND_FILESTATUS,status) ELSE
005         CRT "IOCTL failed!" ; EXIT(2)
006     END
007     IF status<1> EQ "UD" THEN
008         PRINT "File is a directory"
009     END
010     ELSE
011         PRINT "File type is ":DQUOTE(status<1>)
012         PRINT "This is not expected for .."
013     END
```



Open a file ready to perform file operations in a transaction against it. Make sure the file has not been removed as a transaction type file by a previous invocation of the command **jchmod -T CUSTOMERS**.

```
001     INCLUDE JBC.h
002     OPEN "CUSTOMERS" TO DSCB ELSE STOP 201,"CUSTOMERS"
003     IF IOCTL(DSCB,JIOCTL_COMMAND_FILESTATUS,status) ELSE
004         CRT "IOCTL failed !!" ; EXIT(2)
005     END
006     IF status<8,2> THEN
007         CRT "Error ! File CUSTOMERS is not"
008         CRT "part of transaction boundaries !!"
009         CRT "Use "jchmod +T CUSTOMERS" !!"
010         EXIT(2)
011     END
```



This code tests whether or not a file is encrypted:

```
001 * Determine if a file is encrypted
002 *
003 * Syntax: encrypted filename
004 *
005     INCLUDE JBC.h
006     filename = SENTENCE(1)
007     OPEN filename TO filevar ELSE STOP 201, filename
008     file_status = ""          ;* keeps the compiler from complaining
009     ok = IOCTL(filevar, JIOCTL_COMMAND_FILESTATUS, file_status)
010     CLOSE filevar
011     CRT DQUOTE(filename):
012     IF file_status<8,5> THEN
013         CRT " is encrypted."
014     END ELSE
015         CRT " is not encrypted."
016     END
```

## 
**4. JIOCTL\_COMMAND\_FINDRECORD COMMAND**

This command will find out if a record exists on a file without the need to actually read in the record.

This can provide large performance gains in certain circumstances.

Before writing out a control record, make sure it doesn't already exist. As the control record is quite large, it will provide performance gains to simply test if the output record already exists, rather than reading it in using the [READ](277646-read) statement to see if it exists

```
001     INCLUDE JBC.h
002     OPEN "outputfile" TO DSCB ELSE STOP 201,"outputfile"
003 * Make up the output record to write out in "output"
004     key = "output.out"
005     rc = IOCTL(DSCB, JIOCTL_COMMAND_FINDRECORD, key)
006     BEGIN CASE
007     CASE rc EQ 0
008         WRITE output ON DSCB,key
009         CRT "Data written to key " : key
010     CASE rc GT 0
011         CRT "No further action, record already exists"
012     CASE 1
013         CRT "IOCTL not supported for file type"
014     END CASE
```



## **5. JIOCTL\_COMMAND\_FINDRECORD\_EXTENDED COMMAND**

This command to the **IOCTL()** function returns the record size and the time and date the record was last updated. If the record does not exist, null is returned. The time/date stamp is returned in UTC format.

**EXAMPLE**

Print the time and data of last update for each record in filename.

```
001     INCLUDE JBC.h
002     OPEN "filename" TO DSCB ELSE STOP 201,"filename"
003 *
004 * Select each record in the newly opened file
005 *
006     SELECT DSCB
007     LOOP WHILE READNEXT record.key DO
008 *
009 * Get the details on the record and look for errors.
010 *
011         record.info = record.key
012         IF IOCTL(DSCB,JIOCTL_COMMAND_FINDRECORD_EXTENDED,record.info) ELSE
013             CRT "Error! File driver does not support this"
014             STOP
015         END
016 *
017 * Extract and convert the returned data
018 *
019         record.size = record.info<1>
020         record.utc = record.info<2>
021         record.time = OCONV(record.utc,"U0ff0")
022         record.date = OCONV(record.utc,"U0ff1")
023 *
024 * Print the information.
025 *
026         PRINT "Record key ":record.key:" last updated at ":
027         PRINT OCONV(record.time,"MTS"):" ":
028         PRINT OCONV(record.date,"D4")
029     REPEAT
```



## **6.**JIOCT**L\_COMMAND\_HASH\_RECORD COMMAND**

For jBASE hashed files, j4 and jPlus, each record is pseudo-randomly written to one of the buckets (or groups) of the hashed file. The actual bucket it is written to depends upon two factors:

- The actual record key (or item-id)
- The number of buckets in the file (or modulo)


This **IOCTL()** function shows which bucket number the record would be found in, given the input record key. The bucket number is in the range 0 to (b-1) where b is the number of buckets in the file specified when the file was created (probably using [CREATE-FILE](267387-create)).

The command only returns the expected bucket number, as is no indication that the record actually exists in the file.

Two attributes are returned by this command. The first is the hash value that the record key has hashed to, and the second attribute is the bucket number.

This command will always return "0" (zero) for type JD (Dynamic) files.

**EXAMPLE**

Open a file, and find out what bucket number the record "PIPE&SLIPPER" would be found in.

```
001     INCLUDE JBC.h
002     OPEN "WEDDING-PRESENTS" TO DSCB ELSE STOP
003     key = "PIPE&SLIPPER"
004     parm = key
005     IF IOCTL(DSCB,JIOCTL_COMMAND_HASH_RECORD,parm) THEN
006         PRINT "key ":key:" would be in bucket ":parm<2>
007     END ELSE
008         CRT "IOCTL failed, command not supported"
009     END
```



## **7. JIOCTL\_COMMAND\_HASH\_LOCK COMMAND**

The jEDI locking mechanism for records in jEDI provided database drivers is not strictly a 100% record locking mechanism. Instead, it uses the hashed value of the record key to give a value from 0 to 230-1 to describe the record key. The **IOCTL()** function can be used to determine how a record key would be converted into a hashed value for use by the locking mechanism.

**EXAMPLE**

Lock a record in a file and find out what the lock id of the record key is. The example then calls the jRLA locking demon and the display of locks taken should include the lock taken by this program.

```
001     INCLUDE JBC.h
002     DEFCE getpid()
003     OPEN "WEDDING-PRESENTS" TO DSCB ELSE STOP
004     key = "PIPE&SLIPPER"
005     parm = key
006     IF IOCTL(DSCB,JIOCTL_COMMAND_HASH_LOCK,parm) ELSE
007         CRT "IOCTL failed, command not supported"
008         EXIT(2)
009     END
010     PRINT "The lock ID for the key is ":parm
011     PRINT "Our process id is " : getpid()
```



## Note: 


> The status return value is 0 for failure, or 1 for success. A value of -1 generally shows the command has not been recognized.




Go back to [jBASE BASIC](263498-jbase-basic).




