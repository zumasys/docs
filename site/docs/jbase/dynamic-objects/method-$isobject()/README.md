# Method: $isobject()

**Created At:** 2/15/2018 2:30:22 PM  
**Updated At:** 4/23/2018 10:11:38 AM  


## Description

The **$isobject()** method is used to determine if a variable is an object or array.



## Syntax

```
var->$isobject() 
```



## Arguments

None



## Return values

```
0 = the variable is an object or array
1 = the variable is not an object or array
```



## Examples

```
obj = new object
x = 42
arr = new array
bool = obj->$isobject()       ;* bool = 1
crt x->$isobject()            ;* Displays 0 (zero)
isobject = arr->$isobject() ;* isobject = 1
if isobject then crt \"arr" is an object of type \:dquote(arr->$objecttype())
```



## Notes
