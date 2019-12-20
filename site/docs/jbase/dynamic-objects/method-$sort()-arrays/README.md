# Method: $sort() arrays

**Created At:** 11/13/2019 11:15:18 AM  
**Updated At:** 11/13/2019 11:28:31 AM  
**Original Doc:** [method-sort-arrays](https://docs.jbase.com/42948-dynamic-objects/method-sort-arrays)  


## Description

The **$sort()** method sorts the values in an array, optionally specifying sort sequence.



## Syntax

```
arr->$sort({sequence}) 
```



## Arguments




| Sequence<br> | Description<br> |
| --- | --- |
| "al"<br> | sort ascending left-justified (default)<br> |
| "ar"<br> | sort ascending right-justified<br> |
| "dl"<br> | sort descending left-justified<br> |
| "dr"<br> | sort decending right-justified<br> |


**"al"** is the default if no sequence is specified.



## Return values

The current object after it is sorted.



## Example

```
colors = new array
colors->$append("gray")
colors->$append("red")
colors->$append("green")
colors->$append("red")
colors->$append("blue")
colors->$append("white")
colors->$append("black")
colors->$append("yellow")
colors->$append("gray")
crt colors->$sort("dl")->$tojson()   ;* sort descending left-justified
```

Results:

```
["yellow","white","red","red","green","gray","gray","blue","black"]
```



## Notes

Arrays are permitted to have duplicate values, objects are not.
