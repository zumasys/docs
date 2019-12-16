# Method: $setserialize()

**Created At:** 3/15/2018 1:49:08 PM  
**Updated At:** 4/23/2018 10:22:36 AM  


## Description

The **$setserialize()** method provides a limited amount of control over a serialized object when a character string is required and a dynamic object is the source. The object is serialized to a JSON string.



## Syntax

```
obj->$setserialize({format type})
obj->$setserialise({format type})
```

The **format type** is optional and, if used, is specified as a bit mask; different behaviors can be combined by adding them together.

If format type is omitted then it is the same as not using the method at all. In other words:

```
obj->$setserialize()
print obj
```

is the same as:

```
print obj
```



## Arguments




| Format Type<br> | Description<br> |
| --- | --- |
| 1<br> | Formatted output using @TAB for indentation<br> |
| 2<br> | Use @AM instead of a new-line when formatting<br> |
| 4<br> | Use 4 spaces instead of @TAB when formatting<br> |




## Return values

An un-formatted or formatted JSON string.



## Examples

```
calendar = new object
months = new array
calendar->year = 2018
month_names = "jan":@am:"feb":@am:"mar":@am:"apr":@am:"may":@am:"jun":@am:"jul":@am:"aug":@am:"sep":@am:"oct":@am:"nov":@am:"dec"
for i = 1 to 12
    months->$append(month_names<i>)
next i
calendar->months = months
print calendar               ;* No formatting
calendar->$setserialize(1)   ;* Default formatted output
print calendar
calendar->$setserialize(3)   ;* Use attribute marks instead of new-lines
print calendar
calendar->$setserialize(5)   ;* Formatted output using 4 spaces for indentation levels
print calendar
```

Results:

```
{"year":2018,"months":["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]}
{
        "year":2018,
        "months":[
                "jan",
                "feb",
                "mar",
                "apr",
                "may",
                "jun",
                "jul",
                "aug",
                "sep",
                "oct",
                "nov",
                "dec"
        ]
}

{^      "year":2018,^   "months":[^             "jan",^         "feb",^         "mar",^         "apr",^         "may",^         "jun",^
"jul",^         "aug",^         "sep",^         "oct",^         "nov",^         "dec"^  ]^}

{
    "year":2018,
    "months":[
        "jan",
        "feb",
        "mar",
        "apr",
        "may",
        "jun",
        "jul",
        "aug",
        "sep",
        "oct",
        "nov",
        "dec"
    ]
}
```



## Notes

See also [$tojson()](method-tojson)
