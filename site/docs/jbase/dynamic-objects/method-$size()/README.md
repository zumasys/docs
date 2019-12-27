# Method: $size()

**Created At:** 2/15/2018 3:07:25 PM  
**Updated At:** 2/16/2018 11:00:51 AM  
**Original Doc:** [method-size](https://docs.jbase.com/42948-dynamic-objects/method-size)  
**Original ID:** 299343  
**Internal:** No  


## Description

The **$size()** method returns the number of properties in an object or the number of values in an array.



## Syntax

obj-&gt;$size()



## Arguments

None



## Return values

The number of properties in an object or the number of values in an array.



## Examples

```
obj = new object("Integers")
obj->one = 1
obj->two = 2
obj->three = 3
crt "My object has ":obj->$size():" properties."
jarray = new array("Integers")
for x = 0 to 99
    jarray->@x = x + 1
next x
crt "My array has ":jarray->$size():" entries (values)."
obj->myarray = jarray
crt "My object, called ":dquote(obj->$classname()):", now has ":obj->$size():" properties."
crt "The array, also called ":dquote(jarray->$classname()):", only increased in size by 1"
```



## Notes
