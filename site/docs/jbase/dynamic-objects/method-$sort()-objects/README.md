# Method: $sort() objects

**Created At:** 2/15/2018 3:09:58 PM  
**Updated At:** 11/13/2019 11:29:04 AM  
**Original Doc:** [method-sort-objects](https://docs.jbase.com/42948-dynamic-objects/method-sort-objects)  
**Original ID:** 299344  
**Internal:** No  


## Description

The **$sort()** method sorts the properties in an object, optionally specifying sort sequence.



## Syntax

```
obj->$sort({sequence}) 
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
equ beautify to 5
obj = new object
obj->name = "daniel"
obj->age = "0x42"
obj->month = "March"
obj->"zodiac sign" = "Aries"        ;* properties with spaces require quotes
obj->city = "Cuyahoga Falls"
crt obj->$tojson(beautify)          ;* unsorted
crt obj->$sort()->$tojson(beautify) ;* uses the default of "al"
crt obj->$sort("dl")->$tojson(beautify)       ;* sort descending left-justified
```



Results:

```
{
    "name":"daniel",
    "age":"0x42",
    "month":"March",
    "zodiac sign":"Aries",
    "city":"Cuyahoga Falls"
}

{
    "age":"0x42",
    "city":"Cuyahoga Falls",
    "month":"March",
    "name":"daniel",
    "zodiac sign":"Aries"
}

{
    "zodiac sign":"Aries",
    "name":"daniel",
    "month":"March",
    "city":"Cuyahoga Falls",
    "age":"0x42"
}
```



## Notes

If you use JSON correctly, you should never ever expect the properties to be in any particular order – the order is undefined.
