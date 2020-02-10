# Method: $delete()

**Created At:** 2/15/2018 3:40:49 PM  
**Updated At:** 1/6/2020 1:02:41 PM  
**Original Doc:** [method-delete](https://docs.jbase.com/42948-dynamic-objects/method-delete)  
**Original ID:** 299349  
**Internal:** No  

## Description

The **$delete()** method deletes a property from an object or array.

## Syntax

```
obj->$delete(property name)
```

## Arguments

| Argument | Description |
| --- | --- |
| property name | the name of the property to be deleted from the object |

## Return values

The current object

## Examples

```
calendar = new object
months = new array
calendar->year = 2018
month_names = "jan":@am:"feb":@am:"mar":@am:"apr":@am:"may":@am:"jun":@am:"jul":@am:"aug":@am:"sep":@am:"oct":@am:"nov":@am:"dec"
for i = 1 to 12
    months->$append(month_names<i>)
next i
calendar->months = months
crt calendar->$tojson()
crt calendar->$delete("months")->$tojson()
year_property = "year"
crt calendar->$delete(year_property)->$tojson()
```

Results:

```
{"year":2018,"months":["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]}
{"year":2018}
{}
```

## Notes

See also [$insert()](./../method-$insert%28%29)
