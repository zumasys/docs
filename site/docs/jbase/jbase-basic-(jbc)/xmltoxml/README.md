# XMLTOXML

**Created At:** 10/4/2017 12:48:37 PM  
**Updated At:** 5/3/2018 5:42:28 PM  
**Original Doc:** [279579-xmltoxml](https://docs.jbase.com/36868-jbase-basic/279579-xmltoxml)  


# Description

This function transforms XML using a given XSL. It takes the general form:

```
XMLTOXML(xml,xsl,result)
```

Where:

XML is to be transformed using XSL.

Given:

**XSL CONTENTS**

```
<?xml version="1.0" ?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="person">
<p><xsl:value-of select="name" /></p>
</xsl:template>
</xsl:stylesheet>
```

**XML CONTENTS**

```
<list>
<person>
<name>Bob</name>
</person>
<person>
<name>Amy</name>
</person>
<list>
```

An example of use is as:

```
XML_VAR = XMLTOXML(xml, xsl, rc)
CRT XML_VAR
```

to display:

&lt;p&gt;Bob&lt;/p&gt;&lt;p&gt;Amy&lt;/p&gt;



If result=0, XML\_VAR will contain a transformed version of xml using xsl.

If result=1, XML\_VAR will hold an error message.



Go back to [jBASE BASIC](263498-jbase-basic).
