# DYNTOXML

<PageHeader />

**Tags:**
<badge text='xmlto' vertical='middle' />
<badge text='toxml' vertical='middle' />

## Description

This function converts an array to an xml representation of the array. An optional transform may be included as a second argument. It takes the general form:

```
DYNTOXML(array,xsl,result)
```

Where:

**array** is the variable to be converted.

The function takes the contents of the dynamic array, and returns a generic XML representation of that array or an error (result=0 OK; result&lt;&gt;0 Bad);

An example of use is as:

```
nameArray = "Tom" : @AM : "Dick" : @AM : "Harry"
xml = DYNTOXML(nameArray, "", result)
CRT xml
```

to display the following to the screen.

``` xml
 <?xml version="1.0" encoding ="ISO-8859-1"?>
<array>
<data attribute="1" value="1" subvalue="1">Tom</data>
<data attribute="2" value="1" subvalue="1">Dick</data>
<data attribute="3" value="1" subvalue="1">Harry</data>
</array>
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
