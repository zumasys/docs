# OSBREAD

**Created At:** 9/21/2017 2:05:45 PM  
**Updated At:** 11/27/2018 9:46:16 AM  
**Original Doc:** [277546-osbread](https://docs.jbase.com/36868-jbase-basic/277546-osbread)  

**Tags:**
<badge text='file handling' vertical='middle' />

# Description

The **OSBREAD** command reads data from a file starting at a specified byte location for a certain length of bytes, and assigns the data to a variable. It takes the general form:

```
OSBREAD var FROM file.var [AT byte.expr] LENGTH length.expr [ON ERROR statements]
```

Where:

- **var**specifies a variable to which to assign the data read,
- FROM **file.var** specifies a file from which to read the data,
- AT **byte.expr** specifies a location in the file from which to begin reading data. If byte.expr is 0, the read begins at the beginning of the file,
- LENGTH **length.expr** specifies a length of data to read from the file, starting at byte.expr. length.expr cannot be longer than the maximum string length determined by system configuration,
- ON ERROR **statements** specifies statements to execute if a fatal error occurs (if the file is not open, or if the file is a read-only file). If the ON ERROR clause is not specified, the program terminates under such fatal error conditions.


## Note: 


> - Before using **OSBREAD**, a file must be opened using the [OSOPEN](277623-osopen) or [OPENSEQ](277543-openseq) command.
> - The ASCII 0 character [CHAR (0)] is used as a string-end delimiter. Therefore, ASCII 0 cannot be used in any string variable within jBASE. **OSBREAD** converts CHAR(0) to CHAR(128) when reading a block of data.
> - After execution of **OSBREAD**, the [STATUS](278661-status-function) function returns either 0 or a failure code.
> - **OSBREAD** performs an operating system block read on a UNIX or Windows file.


An example of use is a program statement that reads 10,000 bytes of the file MYPIPE starting from the beginning of the file. The program assigns the data it reads to the variable Data.

```
OSBREAD Data FROM MYPIPE AT 0 LENGTH 10000
```



Go back to [jBASE BASIC](263498-jbase-basic).


