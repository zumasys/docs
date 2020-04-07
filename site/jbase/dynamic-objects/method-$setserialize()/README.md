# Method: $setserialize()

<PageHeader />

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
crt obj
```

is the same as:

```
crt obj
```

## Arguments

| Format Type | Description |
| --- | --- |
| 1 | Formatted output using @TAB for indentation |
| 2 | Use @AM instead of a new-line when formatting |
| 4 | Use 4 spaces instead of @TAB when formatting |

## Return values

An un-formatted or formatted JSON string.

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
crt calendar               ;* No formatting
calendar->$setserialize(1)   ;* Default formatted output
crt calendar
calendar->$setserialize(3)   ;* Use attribute marks instead of new-lines
crt calendar
calendar->$setserialize(5)   ;* Formatted output using 4 spaces for indentation levels
crt calendar
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

See also [$tojson()](./../method-$tojson%28%29)
