# XMLTODYN

**Created At:** 10/4/2017 12:40:13 PM  
**Updated At:** 5/3/2018 5:39:17 PM  
**Original Doc:** [279578-xmltodyn](https://docs.jbase.com/36868-jbase-basic/279578-xmltodyn)  


# Description 

This function converts XML to a dynamic array. Optionally, a transform may be used to convert the XML content. The function takes the general form:

```
XMLTODYN(XML,XSL,result)
```

Where:

XML is the content to be converted,

XSL is the optional transform

If result = 0,  Array will contain a dynamic array built from the xml / xsl

If result != 0, Array will contain an error message

There is no requirement for xsl if generic xml is being reconverted to dynarray. An example of use is as:

```
ARR_VAR = "Tom" : @AM : "Dick" : @AM : "Harry"
XML_VAR = DYNTOXML(ARR_VAR,"",result)
DYN_ARR = XMLTODYN(XML_VAR,"",result)
CRT CHANGE(DYN_ARR ,@AM," ")
```

to output:

```
Tom Dick Harry
```

If passing a stylesheet in the second parameter, it performs a transform to give a different format of the array.

An example of use would be as :

```
a = XMLTODYN(xml,xsl,rc)
CRT CHANGE(a,@AM," ")
```

given:

**XML CONTENTS**

```
<?xml version="1.0" encoding="UTF-8"?>
<mycustomer>
<firstname>Tom</firstname>
<lastname>Dick</lastname>
<address>Harry</address>
</mycustomer>
```

and

**XSL CONTENTS**

```
<xsl:template match="mycustomer">
<array>
<xsl:apply-templates/>
</array>
</xsl:template>
<xsl:template match="firstname">
<data>
<xsl:attribute name="attribute">1</xsl:attribute>
<xsl:attribute name="value">
<xsl:number level="single"/>
</xsl:attribute>
<xsl:attribute name="subvalue">1</xsl:attribute>
<xsl:value-of select="."/>
</data>
</xsl:template>
```



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
