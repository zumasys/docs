# Method: $equals()

**Created At:** 3/28/2018 11:11:36 AM  
**Updated At:** 4/23/2018 10:26:09 AM  
**Original Doc:** [method-equals](https://docs.jbase.com/42948-dynamic-objects/method-equals)  


## Description

The **$equals()**, or **$equal()**, method tests if two objects or arrays are equal.

For objects, the properties can be in any order but the properties and their values must be the same in both objects.

For arrays, they must be absolutely equal. If you have the same values in both arrays, but in different positions, they will not be considered equal.

All nested objects and arrays are compared.



## Syntax

```
obj1->$equals(obj2)
array1->$equals(array2) 
```



## Arguments




| Argument<br> | Description<br> |
| --- | --- |
| obj2<br> | the object to compare with obj1 for equality<br> |
| array2<br> | the array to compare with array1 for equality<br> |




## Return values




| Value<br> | Description<br> |
| 0<br> | the objects or arrays being compared are not equal<br> |
| 1<br> | the objects or arrays being compared are equal<br> |




## Examples

```
equ beautify to 5

obj1 = new object
obj1->composer = "Wolfgang Amadeus Mozart"
obj1->city = "Vienna"
obj1->category = "Classical"

obj2 = new object
obj2->category = "Classical"
obj2->composer = "Wolfgang Amadeus Mozart"
obj2->city = "Vienna"

crt (if obj1->$equals(obj2) then "Objects are equal:" else "Objects are not equal:")
crt

crt "obj1 = "
crt obj1->$tojson(beautify)
crt
crt "obj2 = "
crt obj2->$tojson(beautify)
```

This will output:

```
Objects are equal:

obj1 =
{
    "composer":"Wolfgang Amadeus Mozart",
    "city":"Vienna",
    "category":"Classical"
}

obj2 =
{
    "category":"Classical",
    "composer":"Wolfgang Amadeus Mozart",
    "city":"Vienna"
}
```

So even though the properties are in a different order, the objects are considered equal.

If either of the objects change in any way, for example add a new property, delete a property, amend a property, they will not be considered equal.



For arrays, the values must be in the same order. By modifying the above objects to be arrays of values, we can see the **$equals()** fails because the values are in a different order.

```
equ beautify to 5

obj1 = new array
obj1->composer = "Wolfgang Amadeus Mozart"
obj1->city = "Vienna"
obj1->category = "Classical"

obj2 = new array
obj2->$append("Classical")
obj2->$append("Wolfgang Amadeus Mozart")
obj2->$append("Vienna")

crt (if obj1->$equals(obj2) then "Arrays are equal:" else "Arrays are not equal:")
crt

crt "obj1 = "
crt obj1->$tojson(beautify)
crt
crt "obj2 = "
crt obj2->$tojson(beautify)
```

This will output:

```
Arrays are not equal:

obj1 =
{
    "composer":"Wolfgang Amadeus Mozart",
    "city":"Vienna",
    "category":"Classical"
}

obj2 =
[
    "Classical",
    "Wolfgang Amadeus Mozart",
    "Vienna"
]
```



## Notes

Identity is not the same as equality. Two identical objects or arrays are always equal but two equal objects may or may not be identical. The only way to determine this is:

```
crt (if obj1 = obj2 then "Objects are identical." else "Objects may be equal but they are not identical.")
```
