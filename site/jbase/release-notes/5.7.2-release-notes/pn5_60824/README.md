# PN5_60824

**Created At:** 3/8/2019 10:04:59 AM  
**Updated At:** 3/8/2019 10:09:28 AM  
**Original Doc:** [pn5_60824](https://docs.jbase.com/5-7-2-release-notes/pn5_60824)  
**Original ID:** 370719  
**Internal:** No  

## Description

Add **\$merge()** and **\$locate()** as internal methods to dynamic objects

### Previous Release Behavior

Methods did not exist. You had to do an iterator in your code to support the equivalent of **\$merge()** and **\$locate()**

### Current Release Behavior

You can use **\$merge()** to merge one object into another. The objects types must match, either both must be object or both must be arrays -- you can't merge an array into an object.

You can use **\$locate()** to find a string in a dynamic array (not in an object). The result is -1 for the string not found, or a positive value showing the relative index value in the array if the string was found.

This is an example of merging object 'source' into 'destination'

```
debian-~/tmp1: cat test4.jabba
    source = new object
    destination = new object
    source->name = "greg"
    source->weight = 112
    source->shame = @true
    destination->postcode = "AL1 4JU"
    destination->town = "Hucknall"
*
* Merge 'source' into 'destination'
*
    destination->$merge(source)
*
* Display the results. 'destination' will now have all the combined properties.
*
    print destination->$tojson(1)
debian-~/tmp1: jcompile test4.jabba -o test4
debian-~/tmp1: ./test4
{
        "postcode":"AL1 4JU",
        "town":"Hucknall",
        "name":"greg",
        "weight":112,
        "shame":1
}
debian-~/tmp1:
```

This is an example of using $locate() with and without case sensitivity.

```
debian-~/src/International/development/jbase: cat test7.jabba
    arr = new array
    arr->$append("Greg")
    arr->$append("Ian")
    arr->$append("Daniel")
*
* Look for Ian
*
    rc = arr->$locate("Ian")
    if rc lt 0 then print "Ian is not in array" ; stop
    print arr[rc]:" is in array at element ":rc
*
* Do a case insensitive test
*
    rc = arr->$locate("IAN",1)
    if rc lt 0 then print "Ian is not in array" ; stop
    print arr[rc]:" is in array at element ":rc
debian-~/src/International/development/jbase: jcompile test7.jabba -o test7
debian-~/src/International/development/jbase: test7
Ian is in array at element 1
Ian is in array at element 1
```

Back to [5.7.2 Release Notes](./../README.md)
