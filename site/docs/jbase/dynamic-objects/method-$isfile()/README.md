# Method: $isfile()

**Created At:** 2/15/2018 2:29:11 PM  
**Updated At:** 4/23/2018 10:11:19 AM  
**Original Doc:** [method-isfile](https://docs.jbase.com/42948-dynamic-objects/method-isfile)  
**Original ID:** 299332  
**Internal:** No  


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
