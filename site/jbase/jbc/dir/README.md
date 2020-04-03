# DIR

**Created At:** 9/5/2017 3:02:03 PM  
**Updated At:** 11/27/2018 8:13:44 AM  
**Original Doc:** [275994-dir](https://docs.jbase.com/36868-jbase-basic/275994-dir)  
**Original ID:** 275994  
**Internal:** No  

**Tags:**
<badge text='file information' vertical='middle' />

## Description

The **DIR()** function is used to return information about a file. It takes the general form:

```
DIR(filename)
```

Where **filename** is a string argument representing the relative or absolute path of a file or directory. This function returns a dynamic array with four attributes.

| Attribute |  Description |
| --- | --- |
| 1 | File size in bytes |
| 2 | last modified date (in internal format) |
| 3 | last modified time (in internal format) |
| 4 | **D** if the filename is a directory, **null** otherwise |

An example of use is as follows:

```
    info = DIR(".")

    CRT "DIR info returned is : " : OCONV(info, "MCP")
```

to assign file information to variable **info**, which can then be interrogated.

An example of the results provided is as follows:

```
DIR info returned is : 4096^19087^60171^D
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
