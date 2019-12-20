# DIR

**Created At:** 9/5/2017 3:02:03 PM  
**Updated At:** 11/27/2018 8:13:44 AM  
**Original Doc:** [275994-dir](https://docs.jbase.com/36868-jbase-basic/275994-dir)  

**Tags:**
<badge text='file information' vertical='middle' />

# Description

The **DIR()** function is used to return information about a file. It takes the general form:

```
DIR(filename)
```

Where **filename** is a string argument representing the relative or absolute path of a file or directory. This function returns a dynamic array with four attributes.


| Attribute<br> |  Description<br> |
| --- | --- |
| 1 | File size in bytes<br> |
| 2 | last modified date (in internal format)<br> |
| 3 | last modified time (in internal format)<br> |
| 4 | **D** if the filename is a directory, **null** otherwise<br> |




An example of use is as follows:

```
     info = DIR("MD")
```

to assign file information to variable **info**.

Go back to [jBASE BASIC](263498-jbase-basic).


