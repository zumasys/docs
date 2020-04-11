# Method: $clear()

<PageHeader />

## Description

The **$clear()** method clears (deletes) all the members (properties) from an object or array leaving the object/array void.

## Syntax

```
obj->$clear()
arr->$clear()
```

## Arguments

None

## Return values

The current object

## Examples

```
obj = new object
fruit = new array
obj->name = "Mr Healthy"
obj->diet = "mediterranean"
fruit->$append("apples")->$append("oranges")->$append("grapes")
obj->fruit = fruit
crt obj->$tojson()
fruit->$clear()       ;* clears the array
crt obj->$tojson()
crt fruit->$tojson()
crt obj->$clear()->$tojson()   ;* clears and displays the object in JSON format
```

Results:

```
{"name":"Mr Healthy","diet":"mediterranean","fruit":["apples","oranges","grapes"]}
{"name":"Mr Healthy","diet":"mediterranean","fruit":[]}
[]
{}
```

  
<PageFooter />
