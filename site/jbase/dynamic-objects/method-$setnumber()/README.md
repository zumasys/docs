# Method: $setnumber() / $setnumeric()

<PageHeader />

## Description

The **$setnumber()** method (and its synonym **setnumeric()**) will force an expression, and therefore the value type, of the property (or array element number) to be a number.

## Syntax

```text
obj->$setnumber(property name, expression)
arr->$setnumber(value number, expression)
```

## Arguments

| Argument | Description |
| --- | --- |
| property name | the name of the property to assign a numeric value |
| value number | the value number of the array to set to a number value |
| expression | any valid expression that evaluates to either a string or a number |

## Return values

None

## Example

```code
obj = new object
obj->$setnumber("example", "1":"2":"3":"4")
print obj->$tojson()
crt obj->$tojson()    ;* Displays {"example":1234}
```

## Notes

It is not necessary to use this method with an array as the expression is automatically evaluated to the correct type. For example,

```code
arr = new array
arr->$append("42")
arr->$append(42)
crt arr->$tojson()   ;* Displays ["42",42]
```

See also [$setstring()](../method-$setstring()/README.md)

Back to [Built-in Methods](./../dynamic-objects-built-in-methods/README.md)  
  
<PageFooter />
