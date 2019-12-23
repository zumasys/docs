# Method: $tojson()

**Created At:** 2/15/2018 3:11:18 PM  
**Updated At:** 4/23/2018 10:18:24 AM  
**Original Doc:** [method-tojson](https://docs.jbase.com/42948-dynamic-objects/method-tojson)  


## Description

The **$tojson()** method converts an object to a JSON string and optionally formats the string in a number of ways. This is the complement of the **$fromjson()** method.



## Syntax

```
obj->$tojson({format type}) 
```

The **format type** is optional and, if used, is specified as a bit mask; different behaviors can be combined by adding them together.



## Arguments




| Format Type<br> | Description<br> |
| --- | --- |
| 1<br> | Formatted output using @TAB for indentation<br> |
| 2<br> | Use @AM instead of a new-line when formatting<br> |
| 4<br> | Use 4 spaces instead of @TAB when formatting<br> |




## Return values

The un-formatted or formatted JSON string.



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
crt calendar->$tojson()   ;* No formatting
crt calendar->$tojson(1)  ;* Default formatted output
crt calendar->$tojson(3)  ;* Use attribute marks instead of new-lines
crt calendar->$tojson(5)  ;* Formatted output using 4 spaces for indentation levels
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

{^      "year":2018,^   "months":[^             "jan",^         "feb",^         "mar",^         "apr",^         "may",^         "jun",^"jul",^         "aug",^         "sep",^         "oct",^         "nov",^         "dec"^  ]^}

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

See also [$fromjson()](./../method-$fromjson%28%29) and [$setserialize()](./../method-$setserialize%28%29)
