# Method: $fromjson()

**Created At:** 2/15/2018 2:25:30 PM  
**Updated At:** 4/23/2018 10:10:08 AM  
**Original Doc:** [method-fromjson](https://docs.jbase.com/42948-dynamic-objects/method-fromjson)  


## Description

The **$fromjson()** method converts a valid JSON string to an object. This is the complement of the **$tojson()** method.



## Syntax

```
json_string->$fromjson() 
```



## Arguments

None



## Return values

An object from a JSON string.



## Examples

```
json = \{"year":2018,"type":"wall","months":["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]}\
crt "Before: ":json
calendar = json->$fromjson()
crt "After:  "calendar->$tojson()
```

Results:

```
Before: {"year":2018,"type":"wall","months":["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]}
After:  {"year":2018,"type":"wall","months":["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]}
```



## Notes

See also [$tojson()](method-tojson)
