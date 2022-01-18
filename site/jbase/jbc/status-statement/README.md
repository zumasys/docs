# STATUS statement

<PageHeader />

## Description

The **STATUS** statement is used to determine the status of an open file. The **STATUS** statement returns the file status as a dynamic array and assigns it to an array. It takes the general form:

```
STATUS array FROM variable THEN statements ELSE statements•ELSE statements
```

Where:

**variable** specifies an open file. If variable evaluates to the null value, the **STATUS** statement fails and the program terminates with a run-time error message.

If the **STATUS** **array** is assigned to an array, the **THEN** statements are executed and the **ELSE** statements are ignored. If no **THEN** statements are present, program execution continues with the next statement. If the attempt to assign the array fails, the **ELSE** statements are executed; any **THEN** statements are ignored.

| STATUS Statement Values | Attribute Description |
| --- | --- |
| 1 | Current position in the file Offset in bytes from beginning of file |
| 2 | End of file reached 1 if EOF, 0 if not. |
| 3 | Error accessing file 1 if error, 0 if not. |
| 4 | Number of bytes available to read |
| 5 | File mode Permissions (in octal) 6 File size in bytes. |
| 6 | File size |
| 7 | Number of hard links 0 if no links. Where applicable else 0 |
| 8 | O/S User ID. ID based on the user name and domain of the user a jBASE pseudo user. |
| 9 | O/S Group ID. |
| 10 | I-node number; Unique ID of file on file system |
| 11 | Device on which i-node resides Number of device. The value is an internally calculated value on Windows. |
| 12 | Device for special character or block Number of device. |
| 13 |  Time of last access in internal format |
| 14 | Date of last access in internal format. |
| 15 | Time of last modification in internal format |
| 16 | Date of last modification in internal format. |
| 17 | Time and date of last status change in internal format. |
| 18 | Date of last status change in internal format. |
| 19 | Number of bytes left in output queue (applicable to terminals only) |
| 20 | File name |
| 21 | jBASE File types j3, j4, jPLUS |
| 22 | jBASE File Modulo
| 23 | jBASE File Seperation
| 24 | Part numbers of part files belonging to a distributed file multivalued list |


An example of use may be as:

```
OPENSEQ '/Fred' TO test THEN CRT "File Opened" ELSE STOP
STATUS info FROM filevar
```

Go back to[jBASE BASIC](./../jbase-basic-programmers-reference-guide).

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
