# Method: $merge() objects

<PageHeader />

## Description

The **$merge()** method merges (combines) one object into another object, optionally specifying which object takes precedence if both objects contain the same properties.

The default behavior is such that when merging objects, if both objects contain properties with the same key and both properties are embedded objects then those embedded objects are merged. This *merging* occurs at all levels.

The merging behavior can be changed with a **flags** argument described below in the **Arguments** section.

## Syntax

```
destination->$merge(source{, flag})
```

## Arguments

The optional second parameter is a **flags** value with is a bit mask as follows: 

| Argument | Description |
| --- | --- |
| 0x00 | When merging objects, if there is a duplicate key, the **destination** object will replace the value in the **source** object. In other words, the **destination** object's properties unconditionally take precedence. |
| 0x01 | When merging objects, if there is a duplicate key, the **source** object will be merged into the destination object. The **source** object's properties takes precedence and embedded objects are merged. This is the default behavior. |
| 0x02 | When merging objects, if there is a duplicate key, the **source** object will replace the value in the **destination** object. In other words, the **source** object's properties unconditionally take precedence. This option is only valid when **0x01** is also set, hence if you wish to overwrite then the flag value would be **0x03**, i.e. the sum of 0x01 and 0x02. |

If the second parameter is not specified, a default flag value of **0x01** is assumed, meaning we overwrite properties and merge embedded objects.

## Return value

The merged object.

## Examples

This code illustrates merging two objects with distinct properties:

```
include jabba.h
philosopher = new object
philosopher->name = "Protagoras"
philosopher->is_sophist = @true
philosopher->fee_in_drachma = 50

quotes = new object
quotes->quote1 = "Man is the measure of all things."
quotes->quote2 = "As to gods, I have no way of knowing either that they exist or do not exist, or what they are like."

crt philosopher->$merge(quotes)->$tojson(jabba_tojson_verbose + jabba_tojson_use_space)
```

Result:

```
{
    "name":"Protagoras",
    "is_sophist":1,
    "fee_in_drachma":50,
    "quote1":"Man is the measure of all things.",
    "quote2":"As to gods, I have no way of knowing either that they exist or do not exist, or what they are like."
}
```

---

This code illustrates what happens when the same property exists in both the source and destination objects:

```
include jabba.h
source = new object
source->name = "Zumasys"
source->location = "Left Coast"

destination = new object
destination->name = "jBASE"
destination->timezone = "Pacific"

crt destination->$merge(source)->$tojson(jabba_tojson_verbose + jabba_tojson_use_space)
```

Result:

```
{
    "name":"Zumasys",
    "timezone":"Pacific",
    "location":"Left Coast"
}
```

To force the destination to take precedence then change the last line to:

```
crt destination->$merge(source, 0)->$tojson(jabba_tojson_verbose + jabba_tojson_use_space)
```

or:

```
crt source->$merge(destination)->$tojson(jabba_tojson_verbose + jabba_tojson_use_space)
```

---

This next example illustrates the default behavior when two objects are merged and each object has properties that are themselves objects:

```
equ beautify to 5
pet = new object
pet->name = "Shadow"
traits = new object
traits->born = 1983
traits->type = "African grey"
pet->traits = traits

attributes = new object
attributes->origin = "Congo"
traits = new object
traits->talks = "yes"
colors = new array
colors->$append("gray")
colors->$append("red")
traits->colors = colors
traits->weight_in_grams = 450
traits->sex = "f"
attributes->traits = traits

crt "Initial value of 'pet':"
crt pet->$tojson(beautify)
crt
crt "Initial value of 'attributes':"
crt attributes->$tojson(beautify)
crt
crt "Merged object:"
pet->$merge(attributes)
crt pet->$tojson(beautify)
```

Result:

```
Initial value of 'pet':
{
    "name":"Shadow",
    "traits":{
        "born":1983,
        "type":"African grey"
    }
}

Initial value of 'attributes':
{
    "origin":"Congo",
    "traits":{
        "talks":"yes",
        "colors":[
            "gray",
            "red"
        ],
        "weight_in_grams":450,
        "sex":"f"
    }
}

Merged object:
{
    "name":"Shadow",
    "traits":{
        "born":1983,
        "type":"African grey",
        "talks":"yes",
        "colors":[
            "gray",
            "red"
        ],
        "weight_in_grams":450,
        "sex":"f"
    },
    "origin":"Congo"
}
```

---

This last example shows the various ways the argument affects the outcome when there are embedded objects as properties:

```
obj1 = new object
obj1->bicycle = new object
obj1->bicycle->make = "klein"
crt "Initial obj1: " : obj1->$tojson()

obj2 = new object
obj2->bicycle = new object
obj2->bicycle->model = "pulse comp"
crt "Initial obj2: " : obj2->$tojson()

for n in 4
    crt
    arg = n-1
    crt "Argument = ":arg
    crt obj2->$merge(obj1, arg)->$tojson(5)
    crt
next
```

Result:

```
Initial obj1: {"bicycle":{"make":"klein"}}
Initial obj2: {"bicycle":{"model":"pulse comp"}}

Argument = 0
{
    "bicycle":{
        "model":"pulse comp"
    }
}

Argument = 1
{
    "bicycle":{
        "model":"pulse comp",
        "make":"klein"
    }
}

Argument = 2
{
    "bicycle":{
        "model":"pulse comp",
        "make":"klein"
    }
}

Argument = 3
{
    "bicycle":{
        "make":"klein"
    }
}
```

Note that an argument of **2** is ignored so the default behavior is taken.

## Notes

Objects can only be merged into other objects, you cannot merge an object with an array (and vice versa). Attempting to do so will produce unpredictable results.

Back to [Built-in Methods](./../dynamic-objects-built-in-methods/README.md)  

<PageFooter />
