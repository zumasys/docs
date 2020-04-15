# XMLTOXML

<PageHeader />

## Description

This function transforms XML using a given XSL. It takes the general form:

```
XMLTOXML(xml,xsl,result)
```

Where:

**xml** is to be transformed using **xsl**.

Given:

## XSL  Contents

``` xsl
<?xml version="1.0" ?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="person">
<p><xsl:value-of select="name" /></p>
</xsl:template>
</xsl:stylesheet>
```

## XML  Contents

``` xml
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

``` html
<p>Bob</p><p>Amy</p>
```

If **result** = 0, XML\_VAR will contain a transformed version of **xml** using **xsl**.

If **result** = 1, XML\_VAR will hold an error message.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
