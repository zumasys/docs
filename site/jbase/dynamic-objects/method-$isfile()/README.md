# Method: $isfile()

<PageHeader />

## Description

The **$isfile()** method is used to determine if a variable is a file variable.

## Syntax

```
var->$isfile()
```

## Arguments

None

## Return values

```
0 = the variable is not a file variable
1 = the variable is a file variable
```

## Examples

```
obj = new object()
filename = "MD"
open filename to md else stop
bool = obj->$isfile()       ;* bool = 1
crt filename->$isfile()     ;* Displays 0 (zero)
```

## Notes

Back to [Built-in Methods](./../dynamic-objects-built-in-methods/README.md)  
  
<PageFooter />
