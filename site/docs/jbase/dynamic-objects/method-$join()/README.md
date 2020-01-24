# Method: $join()

**Created At:** 1/10/2020 1:50:38 PM  
**Updated At:** 1/10/2020 2:16:12 PM  
**Original Doc:** [method-join](https://docs.jbase.com/42948-dynamic-objects/method-join)  
**Original ID:** 515582  
**Internal:** No  


## Description

The **$join()** method is the opposite of **$split()**. It takes a Dynamic Objects array and re-assembles each value into a single string. A delimiter, if specified, will be placed between each value that is joined.

## Syntax

```
arr->$join(delimiter) 
```



## Arguments




| <!----> | <!----> |
| --- | --- |
| Argument<br> | Description<br> |
| delimiter<br> | The character(s) used to join the values of the array to a string<br> |


## Return value

A string



Below is an example using the **$split()**method on a string to create an array, and then using the **$join()**method to re-assemble the array into a single string. The example also shows how similar functionality to **$split()**can be achieved using the **for ... in ...** construct, but of course the new $split() is easier to use and supports multiple delimiters.

## Examples

```
    source = "Mary,Had,A,Little,Lamb"
    arr = source->$split(",")
    print arr->$tojson(1)
*
* Re-assemble the dynamic array using $join()
*
    source2 = arr->$join(",")
*
* Display the original source, then the re-assembled source.
*
    print "source  = ":source
    print "source2 = ":source2
*
* Now to split the original string, not using $split(), but using the for ... in ... construct
* This is simply an exercise in showing how this construct can be used.
*
    arr2 = new array
    for value.next in source using ","
        arr2->$append(value.next)
    next value.next
    print arr2->$tojson(1)
```



Results:

```
[
        "Mary",
        "Had",
        "A",
        "Little",
        "Lamb"
]
source  = Mary,Had,A,Little,Lamb
source2 = Mary,Had,A,Little,Lamb
[
        "Mary",
        "Had",
        "A",
        "Little",
        "Lamb"
]
```



## Notes


