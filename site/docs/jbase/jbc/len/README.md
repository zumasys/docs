# LEN

**Created At:** 9/14/2017 1:49:02 PM  
**Updated At:** 11/27/2018 8:40:08 AM  
**Original Doc:** [276817-len](https://docs.jbase.com/36868-jbase-basic/276817-len)  
**Original ID:** 276817  
**Internal:** No  

**Tags:**
<badge text='string handling' vertical='middle' />

## Description

The **LEN** function returns the character length of the supplied expression. It takes the general form:

```
LEN(expression)
```

Where **expression** can evaluate to any type and the function will convert it to a string automatically.

The **LEN()**function when used in International Mode will return the number of characters in the specified expression rather than the number of bytes. If the expression consists entirely of UTF-8 characters in the ASCII range 0 – 127 then the character length of the expression will equate to the byte length. However, when the expression contains characters outside the ASCII range 0 – 127 then byte length and character length will differ.

## Note

> If the byte is specifically required then it is recommended that the [BYTELEN](./../bytelen) function be used in place of the **LEN** function. It is also not recommended to use programs manipulating byte counts in International Mode.

An example of use may be as:

```
VAL = "qwerty"
CRT LEN(VAL)
```

to display **6**.

Go back to [jBASE BASIC](./../README.md)
