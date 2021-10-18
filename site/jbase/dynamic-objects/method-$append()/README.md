# Method: $append()

<PageHeader />

## Description

The **$append()** method allows you to add (append) a value to the end of an array.

## Syntax

```
arr->$append(value(,reject_duplicates{,case_insensitive}})
arr[-1] = value
```

## Arguments

| Argument | Description |
| --- | --- |
| value | the value to append |
| reject\_duplicates | 0 = Duplicates are allowed (default),<br>  1 = Duplicates are rejected |
| case\_insensitive | 0 = The duplicate check is case sensitive (default), <br> 1 = The duplicate check is case insensitive (any non-zero number is valid) |

## Return value

The current array

## Examples

```
equ beautify to 5
json = \["one","two","three"]\
crt "Initial array: ":json
jarray = json->$fromjson()
jarray->$append("four  - append with $append()")
jarray[-1] = "five  - append with [-1]"
x = "six"
jarray->$append(x:" - append a variable")
crt jarray->$tojson(beautify)
```

Result:

```
Initial array: ["one","two","three"]
[
    "one",
    "two",
    "three",
    "four  - append with $append()",
    "five  - append with [-1]",
    "six   - append a variable"
]
```

In this next example, we create an array with the first two values, "first" and "second", the third value "SECOND" is rejected because we have passed a flag to say to reject duplicates and a second flag to show that the value is compared case insensitively. This example also illustrates method chaining.

```
arr = new array
arr->$append("first")->$append("second")->$append("SECOND",1,1)
crt arr->$tojson()
```

Result:

```
["first","second"]
```

See also [$prepend()](./../method-$prepend())

  
Back to [Built-in Methods](./../dynamic-objects-built-in-methods/README.md)  

<PageFooter />
