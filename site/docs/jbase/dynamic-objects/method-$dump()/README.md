# Method: $dump()

**Created At:** 2/15/2018 2:22:25 PM  
**Updated At:** 4/23/2018 10:09:41 AM  
**Original Doc:** [method-dump](https://docs.jbase.com/42948-dynamic-objects/method-dump)  


## Description

The **$dump()** method displays the internal contents of an object.



## Syntax

```
obj->$dump() 
obj->$dump(1) - Verbose mode; also displays the properties of the object
obj->$dump(2) - Return an object containing the header information
```



## Examples

```
equ verbose to 1
calendar = new object("Calendar")
months = new array("Months")
calendar->year = 2018
calendar->type = "wall"
month_names = "jan":@am:"feb":@am:"mar":@am:"apr":@am:"may":@am:"jun":@am:"jul":@am:"aug":@am:"sep":@am:"oct":@am:"nov":@am:"dec"
for i = 1 to 12
    months->$append(month_names<i>)
next i
crt "Dump the object:"
calendar->$dump()
crt
crt "Dump the object and its properties:"
calendar->$dump(verbose)
calendar->months = months
crt
crt "Dump the object and its properties with the embedded array:"
calendar->$dump(verbose)
crt
crt "Dump the array:"
months->$dump()
crt
crt "Dump the array and it's contents:"
months->$dump(verbose)
```

Results:

```
Dump the object:
Object dump: Class "Calendar", refcount 1, type = OBJECT
             Number of values 2, object address 0x1e476bd0

Dump the object and its properties:
Object dump: Class "Calendar", refcount 1, type = OBJECT
             Number of values 2, object address 0x1e476bd0
"year" : INTEGER value 2018
"type" : SHORT STRING string 'wall'

Dump the object and its properties with the embedded array:
Object dump: Class "Calendar", refcount 1, type = OBJECT
             Number of values 3, object address 0x1e476bd0
"year" : INTEGER value 2018
"type" : SHORT STRING string 'wall'
"months" : OBJECT at address 0x1e481960

Dump the array:
Object dump: Class "Months", refcount 2, type = ARRAY
             Number of values 12, object address 0x1e481960

Dump the array and it's contents:
Object dump: Class "Months", refcount 2, type = ARRAY
             Number of values 12, object address 0x1e481960
"       0" : SHORT STRING string 'jan'
"       1" : SHORT STRING string 'feb'
"       2" : SHORT STRING string 'mar'
"       3" : SHORT STRING string 'apr'
"       4" : SHORT STRING string 'may'
"       5" : SHORT STRING string 'jun'
"       6" : SHORT STRING string 'jul'
"       7" : SHORT STRING string 'aug'
"       8" : SHORT STRING string 'sep'
"       9" : SHORT STRING string 'oct'
"      10" : SHORT STRING string 'nov'
"      11" : SHORT STRING string 'dec'
```



## Notes

One use of  $dump(2) is to determine if two variables are pointing to the same object. The following example illustrates the difference between identity vs equality:

```
0001     equ beautify to 5
0002     equ details to 2
0003
0004     vacation1 = new object("Vacation", "Zion National Park")
0005     vacation1->hikes = new array
0006     vacation1->hikes->$append("East Rim Trail")
0007     vacation1->hikes->$append("Angel's Landing")
0008     vacation1->hikes->$append("East Temple Loop")
0009     vacation1->hikes->$append("Observation Point")
0010     vacation1->hikes->$append("Hidden Canyon")
0011
0012 * Assign a variable that points to the same object
0013
0014     vacation2 = vacation1
0015
0016 * Make a copy of one of the identical objects
0017
0018     vacation3 = vacation1->$clone()
0019
0020 * Display the header details of our objects
0021
0022     print vacation1->$dump(details)->$tojson(beautify)
0023     print
0024     print vacation2->$dump(details)->$tojson(beautify)
0025     print
0026     print vacation3->$dump(details)->$tojson(beautify)
0027     print
0028
0029 * Do some comparisons
0030
0031     print "Does Vacation 1 point to the same object as Vacation 2? ":
0032     print (if vacation1->isidentical(vacation2) then "yes" else "no")
0033     print
0034     print "Does Vacation 1 point to the same object as Vacation 3? ":
0035     print (if vacation1->isidentical(vacation3) then "yes" else "no")
0036     print
0037
0038 * Even though Vacation 1 is not identical to Vacation 3, they are equal
0039
0040     if vacation1->$equals(vacation3) then
0041         print "Vacations 1 and 3 are equal."
0042     end else
0043         print "Vacations 1 and 3 are not equal."
0044     end
```



Methods used with the above code:

```
0001     equ details to 2
0002
0003     method Vacation::Vacation(destination)
0004         this->destination = destination
0005     end method
0006
0007     method Vacation::isidentical(obj)
0008         return (this->$dump(details)->address eq obj->$dump(details)->address)
0009     end method
```



Results:

```
{
    "classname":"Vacation",
    "refcount":2,
    "type":"OBJECT",
    "valuecount":2,
    "address":"0000000000EC23A0"
}

{
    "classname":"Vacation",
    "refcount":2,
    "type":"OBJECT",
    "valuecount":2,
    "address":"0000000000EC23A0"
}

{
    "classname":"Vacation",
    "refcount":1,
    "type":"OBJECT",
    "valuecount":2,
    "address":"0000000000EC2160"
}

Does Vacation 1 point to the same object as Vacation 2? yes

Does Vacation 1 point to the same object as Vacation 3? no

Vacations 1 and 3 are equal.
```



Take note of the addresses and reference counts of the objects. It's the address that indicates whether or not the objects are identical.
