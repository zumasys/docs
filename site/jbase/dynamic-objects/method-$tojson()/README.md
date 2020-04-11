# Method: $tojson()

<PageHeader />

## Description

The **\$tojson()** method converts an object to a JSON string and optionally formats the string in a number of ways. This is the complement to the **$fromjson()** method.

## Syntax

```
obj->$tojson({format type})
```

The **format type** is optional and, if used, is specified as a bit mask; different behaviors can be combined by adding them together.

## Arguments

| Format Type | Description |
| --- | --- |
| 1 | Formatted output using @TAB for indentation |
| 2 | Use @AM instead of a new-line when formatting |
| 4 | Use 4 spaces instead of @TAB when formatting |

## Return values

The un-formatted or formatted JSON string.

## Examples

```
calendar = new object
months = new array
calendar->year = 2018
month_names = "jan" : @am : "feb" : @am : "mar" : @am : "apr" : @am : "may" : @am : "jun" : @am : "jul" : @am : "aug" : @am : "sep" : @am : "oct" : @am : "nov" : @am : "dec"
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

  
<PageFooter />
