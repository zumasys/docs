# Method: $keys()

**Created At:** 5/10/2018 11:37:16 AM  
**Updated At:** 5/10/2018 11:50:20 AM  
**Original Doc:** [method-keys](https://docs.jbase.com/42948-dynamic-objects/method-keys)  


## Description

The **$keys()** method will return an array of all the key values from an object.

This method is intended to be compatible with the JavaScript **keys()** method, but with a small syntax enhancement. The functionality created with **$keys()** can easily be replicated using iterators and the **$iterate()** class, but this provides some compatibility for those more familiar with JavaScript.



## Syntax

```
arr = obj->$keys()
```

```
arr = anything->$keys(obj)
```



## Return value

An array of keys from the supplied object.



## Examples



### Example 1:

```
json_string = \{"part":"Widgit","price":9.99,"instock":true }\
obj = json_string->$fromjson()
crt obj->$tojson(5)
keyz = obj->$keys()
crt keyz->$tojson()
for i = 0 to keyz->$size()-1
    crt "key ":i:": ":keyz[i]
next i
```

Result:

```
{
    "part":"Widgit",
    "price":9.99,
    "instock":true
}
["part","price","instock"]
key 0: part
key 1: price
key 2: instock
```



### Example 2:

```
json_string = \{"name":"Widgit","price":9.99,"instock":true }\
part = json_string->$fromjson()
jbase = ""      ;* this variable can be anything
crt part->$tojson()
ray = jbase->$keys(part)
crt ray
```

Result:

```
{"name":"Widgit","price":9.99,"instock":true}
["name","price","instock"]
```



## Notes

This method is most useful when used with objects to return a list of keys. However, for JavaScript compatibility, it also works with arrays and will return an array of the array, not really useful, but compatible.
