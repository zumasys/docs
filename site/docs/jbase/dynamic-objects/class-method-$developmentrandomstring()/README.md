# Class Method: $development::randomstring()

**Created At:** 3/19/2018 9:10:39 AM  
**Updated At:** 5/31/2018 10:11:47 AM  
**Original Doc:** [class-method-development-randomstring](https://docs.jbase.com/42948-dynamic-objects/class-method-development-randomstring)  


## Description

The **randomstring()** method creates a random string of lowercase alphabetic characters.



## Syntax

```
$development::randomstring(nn)
$development->randomstring(nn)
```



## Arguments




| Argument<br> | Description<br> |
| --- | --- |
| nn<br> | Number of random characters<br> |




## Return value

A random string of a specified number of lowercase alphabetic characters.



## Example

```
rstring = $development::randomstring(42)
crt rstring
crt "Length = ":len(rstring)
```



Result:

```
omsdeomfxwuqgkkkuiixlgelkyxwawllkvcwldrbyr
Length = 42
```



## Notes
