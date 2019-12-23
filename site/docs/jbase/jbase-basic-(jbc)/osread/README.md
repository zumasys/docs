# OSREAD

**Created At:** 9/22/2017 12:00:12 PM  
**Updated At:** 11/27/2018 9:45:29 AM  
**Original Doc:** [277624-osread](https://docs.jbase.com/36868-jbase-basic/277624-osread)  

**Tags:**
<badge text='file handling' vertical='middle' />

# Description

Reads an OS file. It takes the general form:

```
OSREAD Variable FROM expression {ON ERROR Statements} {THEN | ELSE} Statements {END}
```

Where:

- **Variable**specifies the variable to contain the data from the read.
- **Expression** specifies the full file path. If the file resides in the JEDIFILEPATH then just the file name is required.
- ON ERROR **s****tatements** conditional jBASE BASIC statements to execute if the**OSREAD** statement fails with a fatal error because the file is not open, an I/O error occurs, or jBASE cannot find the file. If you do not specify the ON ERROR clause and a fatal error occurs, the program terminates.


THEN | ELSE If the **OSREAD** statement fails it will execute any statements associated with an ELSE clause. If the **OSREAD** is successful, it will execute any statements associated with a THEN clause.

## Note:


> ## 
> Syntax requires either one or both of the THEN and ELSE clauses.
> 
> **OSREAD** should not be used on large files. The jBASE BASIC **OSREAD**command reads an entire sequential file and assigns the contents of the file to a variable. If the file is too large for the program memory, the program aborts and generates a runtime error message. On large files, use [OSBREAD](./../osbread) or [READSEQ](./../readseq).
> 
> jBASE uses the ASCII 0 character (CHAR (0)) as a string-end delimiter. ASCII 0 is not usable within string variable in jBASE BASIC. This command converts CHAR(0) to CHAR(128) when reading a block of data.


An example of use is as:

```
OSREAD MyFile FROM "C:\MyDirectory\MyFile" ELSE PRINT "FILE NOT FOUND"
```

to open a file located in the file-path.



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
