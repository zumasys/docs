# Method: $setboolean()

<PageHeader />

## Description

The **$setboolean()** method allows you to create boolean values in JSON output that wouldn't normally be supported by native jBASE data types.

## Syntax

```
obj->$setboolean(property name, boolean expression)
arr->$setboolean(value number, boolean expression)
```

## Arguments

| Argument | Description |
| --- | --- |
| property name | the name of the property to assign a boolean value |
| value number | the value number of the array to set to a boolean value |
| boolean expression | any expression that evaluates to a logical "true" or "false" |

## Return values

None

## Examples

```
* construct an array
arr = new array
open "MD" to md else stop 201, "MD"
xyz = "i_am_lying"
arr->$setboolean(0,@true)
arr->$setboolean(1,@false)
arr->$setboolean(2,md->$isfile())
arr->$setboolean(3,xyz->$isfile())
arr->$append("xyz")
crt arr->$tojson()
* construct an object with an embedded array
obj = new object
obj->array = arr
obj->$setboolean("sky is clear",@false)
obj->$setboolean(xyz,@true)
crt obj->$tojson()
```

Result:

```
[true,false,true,false,"xyz"]
{"array":[true,false,true,false,"xyz"],"sky is clear":false,"i_am_lying":true}
```

## Notes

  
<PageFooter />
