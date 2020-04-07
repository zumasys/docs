# Method: $split() / $slice()

<PageHeader />

## Description

The **\$split()** method, and its synonym **$slice()** will create an array object where each value in the array is created from a source string, split by one or more delimiters.

If the delimiter is "" (null), then the array is returned with one value. If the delimiter is two or more characters, then each character is a delimiter. If no delimiter is specified then the source string is split on spaces.

Delimiters do not have to exist in the source string.

## Syntax

```
source->$split(delimiter(s))
source->$splice(delimiter(s)) 
```

## Arguments

| Argument | Description |
| --- | --- |
| delimiter(s) | The character(s) used to split the source string |

## Return value

A dynamic array object

## Examples

```
source = "Space,the-final:frontier"
delimiters = "-,:"
arr = source->$split(delimiters)
crt arr->$tojson()   ;* the characters dash, comma, colon are used as delimiters
source = "Space the final frontier"
crt source->$slice()->$tojson()     ;* delimiter defaults to a space
crt source->$split("")->$tojson()   ;* display an array with 1 value
invoice_numbers = "1234":@vm:"9876":@vm:"9999"
invoice_array = invoice_numbers->$slice(@vm)
crt invoice_array->$tojson()
```

Results:

```
["Space","the","final","frontier"]
["Space","the","final","frontier"]
["Space the final frontier"]
["1234","9876","9999"]
```

## Notes

Once the array has been created, the values in the array can be accessed in a number of ways. The following is an example of how you can then display each value in the array. This example is a reminder of the different ways to access values in an array, rather than being an example of the new functionality.

```
include jabba.h
*
source = "Space,the-final-frontier"
arr = source->$split(",-")
crt arr->$tojson(jabba_tojson_verbose + jabba_tojson_use_space)
*
* Display each value using the 'for ... in ... ' construct (available in jBASE 5.8)
*
crt
crt "Display each value using the for .... in .... construct"
for value in arr
    crt value
next
*
* Display each value by referencing each value individually
*
crt
crt "Display each value by referencing each value individually with arr[x]"
for x = 0 to arr->$size()-1
    crt arr[x]
next x
*
* Display each value using the $iterator class
*
crt
crt "Display each value by using the $iterator class"
nextkey = ""; nextvalue = ""
iter = new object("$iterator", arr)
loop while iter->next(nextkey, nextvalue) do
    crt nextvalue
repeat
```

Results:

```
[
    "Space",
    "the",
    "final",
    "frontier"
]

Display each value using the for .... in .... construct
Space
the
final
frontier

Display each value by referencing each value individually with arr[x]
Space
the
final
frontier

Display each value by using the $iterator class
Space
the
final
frontier
```
