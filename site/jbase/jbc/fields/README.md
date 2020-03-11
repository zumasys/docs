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
t = ""
t<1> = "a:b:c:d:e:f"
t<2> = "aa:bb:cc:dd:ee:ff" : @VM : "1:2:3:4" : @SVM : ":W:X:Y:Z"
t<3> = "aaa:bbb:ccc:ddd:eee:fff": @VM : @SVM
t<4> = "aaaa:bbbb:cccc:dddd:eeee:ffff"
r1 = FIELDS(t, ":" , 2)
r2 = FIELDS(t, ":" ,2 ,3)
r3 = FIELDS(t, "bb" , 1, 1)
```

to create three dynamic arrays.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
