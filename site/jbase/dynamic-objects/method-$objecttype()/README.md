# Method: $objecttype()

<PageHeader />

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

Back to [Built-in Methods](./../dynamic-objects-built-in-methods/README.md)  
  
<PageFooter />
