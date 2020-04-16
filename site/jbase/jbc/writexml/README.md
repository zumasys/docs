# WRITEXML

<PageHeader />  

## Description

This writes a dynamic array in XML format to a hash file. It first transforms the XML into a dynamic array before being written to the file. The transform takes place using the style sheet in DICT-&gt;@WRITEXML. An XML record is thus written to a hash file. It may take the general form:

```
WRITEXML rec ON file,id ELSE STOP 210,id
```

An example of use would be as:

```
WRITEXML rec ON file,id ON ERROR CRT "Broken! " : rec
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
