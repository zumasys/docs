# Method: $objecttype()

**Created At:** 2/15/2018 2:48:43 PM  
**Updated At:** 4/23/2018 10:12:45 AM  
**Original Doc:** [method-objecttype](https://docs.jbase.com/42948-dynamic-objects/method-objecttype)  
**Original ID:** 299337  
**Internal:** No  

## Description

The **$objecttype()** method returns the type of the object.

## Syntax

```
var->$objecttype()
```

## Arguments

None

## Return values

```
"object"
"array"
```

A return value of "" (null) signifies that "var" is not an object.

## Examples

```
obj = new object()
x = 42
arr = new array()
object_type = obj->$objecttype() ;* object_type = "object"
crt dquote(x->$objecttype())     ;* Displays "" because the variable x is not an object
crt dquote(arr->$objecttype())   ;* Displays "array"
```

## Notes

See also **$isobject()**
