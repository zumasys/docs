# Method: $setnull()

<PageHeader />

## Description

The **$setnull()** method sets a value to **null** in an object or an array. These null values can only be used in JSON output that wouldn't normally be supported by native jBASE data types.

## Syntax

```
obj->$setnull(property name)
arr->$setnull(value number)
```

## Arguments

| Argument | Description |
| --- | --- |
| property name | the name of the property to set the value to null |
| value number | the value number of the array to set to null ("-1" can be used to append the null value) |

## Return values

The current object

## Examples

```
* construct an array
arr = new array
arr->$append("first")
arr->$setnull("-1")       ;* append a null value
arr->$append("")          ;* append a null string
arr->$append("last")
* construct an object with an embedded array
obj = new object
obj->"null string" = ""
obj->$setnull("this is null")
obj->array = arr
crt obj->$tojson(5)
```

Result:

```
{
    "null string":"",
    "this is null":null,
    "array":[
        "first",
        null,
        "",
        "last"
    ]
}
```

## Notes

There is a difference between **undefined** and **null**. Undefined simple means the variable has not been assigned a value, i.e. the absence of data, whereas null is a value that means **no value at all**.

  
<PageFooter />
