# WRITEXML

**Created At:** 10/4/2017 12:25:07 PM  
**Updated At:** 1/5/2018 6:39:50 PM  
**Original Doc:** [279575-writexml](https://docs.jbase.com/36868-jbase-basic/279575-writexml)  
**Original ID:** 279575  
**Internal:** No  


# Description

This writes a dynamic array in XML format to a hash file. It first transforms the XML into a dynamic array before being written to the file. The transform takes place using the style sheet in DICT-&gt;@WRITEXML. An XML record is thus written to a hash file. It may take the general form:

```
WRITEXML rec ON file,id ELSE STOP 210,id
```

An example of use would be as:

```
WRITEXML rec ON file,id ON ERROR CRT "Broken! " : rec
```



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
