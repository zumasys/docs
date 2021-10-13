# Method: $valuetype()

<PageHeader />  

## Description

The **$valuetype()** method returns type of an object's property.

## Syntax

```
obj->$valuetype("property name")
```

## Arguments

| Argument | Description |
| --- | --- |
| property name | the name of the property belonging to the object or array |

## Return Value

| Type |
| --- |
| object |
| array |
| string |
| numeric |
| boolean |
| null |
| jbasevar \*\*\* |

\*\*\* JSON doesn't support this property type.

## Examples

```
equ beautify to 5
*
valuetypes = new object
embedded_object = new object
embedded_array = new array
valuetypes->integer = 42
valuetypes->short_numeric = 123.45
valuetypes->long_numeric = 123.456789
valuetypes->short_string = "Don't panic!"
valuetypes->long_string = \"We demand ridgidly defined areas of doubt and uncertainty!" -- Vroomfondel\
valuetypes->myobject = embedded_object
valuetypes->myarray = embedded_array
valuetypes->$setboolean("boolean", @true)
valuetypes->$setnull("nothing")
open "C:\home" to home else stop 201, "C:\home"
valuetypes->file_variable = home
*
crt
crt valuetypes->$tojson(beautify)
*
crt \Property "short_string" has value:  \:valuetypes->$valuetype("short_string")
crt \Property "long_string" has value:   \:valuetypes->$valuetype("long_string")
crt \Property "short_numeric" has value: \:valuetypes->$valuetype("short_numeric")
crt \Property "boolean" has value:       \:valuetypes->$valuetype("boolean")
crt \Property "nothing" has value:       \:valuetypes->$valuetype("nothing")
crt \Property "myobject" has value:      \:valuetypes->$valuetype("myobject")
crt \Property "myarray" has value:       \:valuetypes->$valuetype("myarray")
crt \Property "file_variable" has value: \:valuetypes->$valuetype("file_variable")
```

Results:

```
{
    "integer":42,
    "short_numeric":123.45,
    "long_numeric":"123.456789",
    "short_string":"Don't panic!",
    "long_string":"\"We demand ridgidly defined areas of doubt and uncertainty!\" -- Vroomfondel",
    "myobject":{

    },
    "myarray":[

    ],
    "boolean":true,
    "nothing":null,
    "file_variable":"file://C:\home"
}
Property "short_string" has value:  string
Property "long_string" has value:   string
Property "short_numeric" has value: numeric
Property "boolean" has value:       boolean
Property "nothing" has value:       null
Property "myobject" has value:      object
Property "myarray" has value:       array
Property "file_variable" has value: jbasevar
```

## Notes

Back to [Built-in Methods](./../dynamic-objects-built-in-methods/README.md)  

<PageFooter />
