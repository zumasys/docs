# Method: $sort() objects

<PageHeader />

## Description

The **$sort()** method sorts the properties in an object, optionally specifying sort sequence.

## Syntax

```
obj->$sort({sequence})
```

## Arguments

| Sequence | Description |
| --- | --- |
| "al" | sort ascending left-justified (default) |
| "ar" | sort ascending right-justified |
| "dl" | sort descending left-justified |
| "dr" | sort decending right-justified |

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

If JSON is used correctly, it cannot be expected that the properties are returned in any particular order – the order is undefined.

Back to [Built-in Methods](./../dynamic-objects-built-in-methods/README.md)  

<PageFooter />
