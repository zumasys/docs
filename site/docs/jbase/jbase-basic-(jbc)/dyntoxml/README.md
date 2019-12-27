# DYNTOXML

**Created At:** 9/6/2017 8:19:23 AM  
**Updated At:** 4/19/2019 8:00:45 AM  
**Original Doc:** [276029-dyntoxml](https://docs.jbase.com/36868-jbase-basic/276029-dyntoxml)  
**Original ID:** 276029  
**Internal:** No  

**Tags:**
<badge text='xmlto' vertical='middle' />
<badge text='toxml' vertical='middle' />

# Description

This function converts an array to an xml representation of the array. An optional transform may be included as a second argument. It takes the general form:

```
DYNTOXML(array,xsl,result)
```

Where:

Array is the variable to be converted.

The function takes the contents of the dynamic array, and returns a generic XML representation of that array or an error (result=0 OK; result&lt;&gt;0 Bad);

An example of use is as:

```
      a = "Tom" : @AM : "Dick" : @AM : "Harry"
      xml = DYNTOXML(a,"",result)
      CRT xml
```

to display the following to the screen.

```
 <?xml version="1.0" encoding ="ISO-8859-1"?>
<array>
<data attribute="1" value="1" subvalue="1">Tom</data>
<data attribute="2" value="1" subvalue="1">Dick</data>
<data attribute="3" value="1" subvalue="1">Harry</data>
</array>
```



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
