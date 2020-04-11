# Method: $dump()

<PageHeader />

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
month_names = "jan" : @am : "feb" : @am : "mar" : @am : "apr" : @am : "may" : @am : "jun" : @am : "jul" : @am : "aug" : @am : "sep" : @am : "oct" : @am : "nov" : @am : "dec"
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
    equ beautify to 5
    equ details to 2

    vacation1 = new object("Vacation", "Zion National Park")
    vacation1->hikes = new array
    vacation1->hikes->$append("East Rim Trail")
    vacation1->hikes->$append("Angel's Landing")
    vacation1->hikes->$append("East Temple Loop")
    vacation1->hikes->$append("Observation Point")
    vacation1->hikes->$append("Hidden Canyon")

* Assign a variable that points to the same object

    vacation2 = vacation1

* Make a copy of one of the identical objects

    vacation3 = vacation1->$clone()

* Display the header details of our objects

    crt vacation1->$dump(details)->$tojson(beautify)
    crt
    crt vacation2->$dump(details)->$tojson(beautify)
    crt
    crt vacation3->$dump(details)->$tojson(beautify)
    crt

* Do some comparisons

    crt "Does Vacation 1 point to the same object as Vacation 2? ":
    crt (if vacation1->isidentical(vacation2) then "yes" else "no")
    crt
    crt "Does Vacation 1 point to the same object as Vacation 3? ":
    crt (if vacation1->isidentical(vacation3) then "yes" else "no")
    crt

* Even though Vacation 1 is not identical to Vacation 3, they are equal

    if vacation1->$equals(vacation3) then
        crt "Vacations 1 and 3 are equal."
    end else
        crt "Vacations 1 and 3 are not equal."
    end
```

Methods used with the above code:

```
    equ details to 2

    method Vacation::Vacation(destination)
        this->destination = destination
    end method

    method Vacation::isidentical(obj)
         return (this->$dump(details)->address eq obj->$dump(details)->address)
    end method
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

  
<PageFooter />
