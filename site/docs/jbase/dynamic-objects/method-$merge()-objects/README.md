# Method: $merge() objects

**Created At:** 1/8/2019 1:25:10 PM  
**Updated At:** 2/6/2019 7:40:12 AM  
**Original Doc:** [method-merge-objects](https://docs.jbase.com/42948-dynamic-objects/method-merge-objects)  
**Original ID:** 356464  
**Internal:** No  


## Description

The **$merge()** method combines (merges) one object into another object, optionally specifying which object takes precedence if both objects contain  the same properties.

## Syntax

```
destination->$merge(source{,1})
destination->$merge(source,0)
```

## 
Arguments


| <!----> | <!----> |
| --- | --- |
| Argument<br> | Description<br> |
| 1<br> | The **source** object's properties takes precedence (default)<br> |
| 0<br> | The **destination** object's properties takes precedence<br> |


If no argument is specified and the **source**and **destination**contain the same property then the **source**takes precedence. These 2 statements are the same:

```
destination->$merge(source)
destination->$merge(source,1)
```

## 
Return value

The merged object.

## Examples

```
equ format to 5
philosopher = new object
philosopher->name = "Protagoras"
philosopher->is_sophist = @true
philosopher->fee_in_drachma = 50
quotes = new object
quotes->quote1 = "Man is the measure of all things."
quotes->quote2 = "As to gods, I have no way of knowing either that they exist or do not exist, or what they are like."
crt philosopher->$merge(quotes)->$tojson(format)
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

This next example simply illustrates what happens when the same property exists in both the source and destination objects:

```
equ formatted to 5
source = new object
source->name = "Zumasys"
source->location = "Left Coast"
destination = new object
destination->name = "jBASE"
destination->timezone = "Pacific"
crt destination->$merge(source)->$tojson(formatted)
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
crt destination->$merge(source,0)->$tojson(formatted)
```

or:

```
crt source->$merge(destination)->$tojson(formatted)
```

## 
Notes

Objects can only be merged into other objects, you cannot merge an object with an array (and vice versa). Attempting to do so will produce unpredictable results.
