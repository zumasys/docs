# STATUS statement

**Created At:** 9/28/2017 1:44:38 PM  
**Updated At:** 9/23/2019 9:36:52 AM  
**Original Doc:** [278835-status-statement](https://docs.jbase.com/36868-jbase-basic/278835-status-statement)  


# Description

The **STATUS** statement is used to determine the status of an open file. The **STATUS** statement returns the file status as a dynamic array and assigns it to an array. It takes the general form:

```
STATUS array FROM variable THEN statements ELSE statements•ELSE statements
```

Where:

variable specifies an open file. If variable evaluates to the null value, the **STATUS** statement fails and the program terminates with a run-time error message.

If the**STATUS** array is assigned to an array, the THEN statements are executed and the ELSE statements are ignored. If no THEN statements are present, program execution continues with the next statement. If the attempt to assign the array fails, the ELSE statements are executed; any THEN statements are ignored.


| STATUS<br>Statement Values<br> | Attribute Description<br><br> |
| --- | --- |
| 1<br> | Current position in the file Offset in bytes from beginning of file<br> |
| 2<br> | End of file reached 1 if EOF, 0 if not.<br> |
| 3<br> | Error accessing file 1 if error, 0 if not.<br> |
| 4<br> | Number of bytes available to read<br> |
| 5<br> | File mode Permissions (in octal) 6 File size in bytes.<br> |
| 6 | File size |
| 7<br> | Number of hard links 0 if no links. Where applicable else 0<br> |
| 8<br> | O/S User ID. ID based on the user name and domain of the user a jBASE pseudo user.<br> |
| 9<br> | O/S Group ID.<br> |
| 10<br> | I-node number; Unique ID of file on file system<br> |
| 11<br> | Device on which i-node resides Number of device. The value is an internally calculated value on Windows NT.<br> |
| 12<br> | Device for special character or block Number of device.<br> |
| 13<br> |  Time of last access in internal format<br> |
| 14<br> | Date of last access in internal format.<br> |
| 15<br> | Time of last modification in internal format<br> |
| 16<br> | Date of last modification in internal format.<br> |
| 17<br> | Time and date of last status change in internal format.<br> |
| 18<br> | Date of last status change in internal format.<br> |
| 19<br> | Number of bytes left in output queue (applicable to terminals only)<br> |
| 20<br> | File name |
| 21<br> | jBASE File types j3, j4, jPLUS<br> |
| 22<br> | jBASE File types j3, j4, jPLUS<br> |
| 23<br> | jBASE File types j3, j4, jPLUS<br> |
| 24<br> | Part numbers of part files belonging to a distributed file multivalued list<br> |




An example of use may be as:

```
OPENSEQ '/Fred' TO test THEN PRINT "File Opened" ELSE STOP
STATUS info FROM filevar
```



Go back to[jBASE BASIC](263498-jbase-basic).
