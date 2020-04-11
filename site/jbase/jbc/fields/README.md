# FIELDS

**Created At:** 11/6/2017 1:34:29 PM  
**Updated At:** 1/5/2018 6:55:17 PM  
**Original Doc:** [284337-fields](https://docs.jbase.com/36868-jbase-basic/284337-fields)  
**Original ID:** 284337  
**Internal:** No  

## Description

The **FIELDS** function is an extension of the [FIELD](./../field) function. It returns a dynamic array of multicharacter delimited fields from a dynamic array of strings. It takes the general form:

```
FIELDS(DynArr, Delimiter, Occurrence{, ExtractCount})
```

Where:

**DynArr** should evaluate to a dynamic array.

**Delimiter** specifies the character or characters that delimit the fields within the dynamic array.

**Occurrence** should evaluate to an integer of value 1 or higher. It specifies the delimiter used as the starting point for the extraction.

**ExtractCount** is an integer that specifies the number of fields to extract. If omitted, assumes one.

If the emulation option, "jbase\_field", is set then the field delimiter may consist of more than a single character, allowing fields to be delimited by complex codes.

An example of use would be a program that shows how each element of a dynamic array can be changed with the **FIELDS** function, as:

```
    dyn_t = ""
    dyn_t<1> = "a:b:c:d:e:f"
    dyn_t<2> = "aa:bb:cc:dd:ee:ff" : @VM : "1:2:3:4" : @SVM : ":W:X:Y:Z"
    dyn_t<3> = "aaa:bbb:ccc:ddd:eee:fff": @VM : @SVM
    dyn_t<4> = "aaaa:bbbb:cccc:dddd:eeee:ffff"
    dyn_r1 = FIELDS(dyn_t, ":" , 2)
    dyn_r2 = FIELDS(dyn_t, ":" ,2 ,3)
    dyn_r3 = FIELDS(dyn_t, "bb" , 1, 1)
*
    CRT "dyn_r1 = " : OCONV(dyn_r1, "MCP")
    CRT "dyn_r2 = " : OCONV(dyn_r2, "MCP")
    CRT "dyn_r3 = " : OCONV(dyn_r3, "MCP")
```

to create three dynamic arrays, which are populated as follows:

```
dyn_r1 = b^bb]2\W^bbb]\^bbbb
dyn_r2 = b:c:d^bb:cc:dd]2:3:4\W:X:Y^bbb:ccc:ddd]\^bbbb:cccc:dddd
dyn_r3 = a:b:c:d:e:f^aa:]1:2:3:4\:W:X:Y:Z^aaa:]\^aaaa:
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
