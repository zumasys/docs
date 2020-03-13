# OSBWRITE

**Created At:** 9/21/2017 12:37:18 PM  
**Updated At:** 4/19/2019 8:16:44 AM  
**Original Doc:** [277539-osbwrite](https://docs.jbase.com/36868-jbase-basic/277539-osbwrite)  
**Original ID:** 277539  
**Internal:** No  

**Tags:**
<badge text='oswrite' vertical='middle' />
<badge text='resords handling' vertical='middle' />
<badge text='file handling' vertical='middle' />

## Description

The **OSBWRITE** command writes an expression to a sequential file starting at a specified byte location. The command takes the general form:

```
OSBWRITE expression {ON | TO} filevar [AT byte.expr] [NODELAY] [ON ERROR statements]
```

Where:

- **expression** specifies the expression to write to the file,
- ON | TO **filevar** specifies the file on which to write the **expression,**
- If **byte.expr** is 0, the write begins at the beginning of the file,
- **NODELAY** forces an immediate write.

**ON ERROR** statements specifies statements to execute if the **OSBWRITE** statement fails with a fatal error because the file is not open, an I/O error occurs, or jBASE cannot find the file. If **ON ERROR** clause is unspecified, and a fatal error occurs, the program terminates.

## Note

> - **OSBWRITE** immediately writes a file segment out to the UNIX, Windows NT, or Windows 2000 file.
> - It is not necessary to specify a length expression because the number of bytes in expr is written to the file.
> - Before **OSBWRITE** is used, the file of interest must be open first using either the [OSOPEN](./../osopen) or [OPENSEQ](./../openseq) command.
> - jBASE uses the ASCII 0 character [CHAR (0)] as a string-end delimiter. Therefore, ASCII 0 cannot be used in any string variable within jBASE. If jBASE reads a string that contains CHAR(0) characters by using [OSBREAD](./../osbread), those characters are converted to CHAR(128).
> - **OSBWRITE** converts CHAR (128) back to CHAR(0) when writing a block of characters.
> - After execution of **OSBWRITE**, the [STATUS](./../status-function) function returns either 0 or a failure code:
>
>
>
> | Status | Description |
> | --- | --- |
> | 0 | The write was successful |
> | 1 | The write failed. |

An example of use would be a program statement that writes the data in MYPIPE to the opened file starting from the beginning of the file:

```
OSBWRITE Data ON MYPIPE AT 0
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
