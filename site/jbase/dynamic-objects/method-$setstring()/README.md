# Method: $setstring()

## Description

The **$setstring()** method forces the value, and therefore the value type, of the property (or array element number) to be a string.

## Syntax

```nolinenumbers
obj->$setstring(property name, expression)
arr->$setstring(value number, expression)
```

## Arguments

| Argument | Description |
| --- | --- |
| property name | the name of the property to assign a string value |
| value number | the value number of the array to set to a string value |
| expression | any valid expression that evaluates to either a string or a number |

## Return values

None

## Examples

```text
obj = new object
credit_card_number = 9999888877776666
obj->$setstring("cc", credit_card_number)
obj->$setstring("string1", 2+2)
crt obj->$tojson()    ;* Displays {"cc":"9999888877776666","four":"4"}
```

## Notes

It is not necessary to use this method with an array as the expression is automatically evaluated to the correct type. For example,

```text
arr = new array
arr->$append("42")
arr->$append(42)
crt arr->$tojson()   ;* Displays ["42",42]
```
