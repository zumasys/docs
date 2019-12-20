# Method: $delete()

**Created At:** 2/15/2018 3:40:49 PM  
**Updated At:** 4/23/2018 10:18:59 AM  
**Original Doc:** [method-delete](https://docs.jbase.com/42948-dynamic-objects/method-delete)  


## Description

The **$delete()** method deletes a property from an object or array.



## Syntax

```
obj->$delete(property name) 
```



## Arguments




| Argument<br> | Description<br> |
| --- | --- |
| property name<br> | the name of the property to be deleted from the object<br> |




## Return values

None



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
calendar->$delete("months")
crt calendar->$tojson()
year_property = "year"
calendar->$delete(year_property)
crt calendar->$tojson()
```

Results:

```
{"year":2018,"months":["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]}
{"year":2018}
{}
```



## Notes

See also [$insert()](method-insert)
