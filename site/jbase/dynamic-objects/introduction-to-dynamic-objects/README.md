# Introduction to Dynamic Objects

**Created At:** 2/7/2018 3:42:15 PM  
**Updated At:** 2/11/2019 7:51:16 AM  
**Original Doc:** [dynamic-objects-tour](https://docs.jbase.com/42948-dynamic-objects/dynamic-objects-tour)  
**Original ID:** 298072  
**Internal:** No  

**Tags:**
<badge text='method' vertical='middle' />
<badge text='class' vertical='middle' />

When going through this introduction, it is helpful to have an understanding of Object Oriented Programming, or OOP. In general, OOP is a type of programming that allows you to define state and behavior of objects. The **state** of an object are called **properties** and the **behavior** are defined as **methods**. The methods operate on the properties of the object. OOP differs from traditional structured top-down programming such that objects interact with each other by sending messages.

Dynamic Objects functionality is activated by using a file extension of **.jabba** or with this line at the top of the program:

```
$option jabba
```

or with a compiler directive:

```
#option jabba
```

Alternatively:

a) You can enable all JabbaScript syntax by setting the **JBC\_JPP2** environment variable to **jabba**:

```
set JBC_JPP2=jabba       [Windows]
export JBC_JPP2=jabba    [Linux/Aix]
```

b) jBASE can auto-detect *existing*Dynamic Objects source code by setting the **JBC\_JPP2** environment variable to **auto**:

```
set JBC_JPP2=auto        [Windows]
export JBC_JPP2=auto     [Linux/Aix]
```

Objects and arrays are created using the **new** keyword:

```
* Create an instance of the class "Classname" and assign
* the instance to the variable "obj"
obj = new object("Classname")
* Create an instance of "Arrayname" and assign
* the instance to the variable "myarray".
myarray = new array("Arrayname")
```

Instances of objects and arrays are initially void unless properties have been assigned by a [constructor](./../dynamic-objects-object-creation).

Class names are only necessary if you intend to create methods for the Class or Array, e.g.

```
object_with_no_methods = new object
```

Other ways to create an object:

- by calling a method of the class that creates and returns an object or an array
- with one of the Dynamic Objects built-in methods.


For example, here we create an object from a JSON string using the built-in [**$fromjson()**](./../method-$fromjson%28%29) method:

```
json = \{"Firstname":"Daniel","Lastname":"Klein"}\
obj = json->$fromjson()
```

Under the covers, the **$fromjson()** built-in method uses the **new** keyword.

An object has access to any properties that have been created by the class's constructor method. Additionally, you can:

- Dynamically assign properties to the instance.
- Send messages to instances of the class using the pre-defined methods defined for the Class.


Let's create an object and a couple of properties:

```
obj1 = new object("Tour")   ;* We will be adding a few methods to this class shortly
obj1->name = "Socrates"
obj1->city = "Athens"
```

To access those properties:

```
crt obj1->name : " lived in " : obj1->city : "."
```

There are a number of methods that are built into Dynamic Objects. These methods all begin with "$".

For example, to convert our object to a JSON string we can do this:

```
equ beautify to 1
json = obj1->$tojson()
crt "Our object in JSON representation is: ":json
crt "Our object, when formatted, is:"
crt obj1->$tojson(beautify)
```

This will display:

```
Our object in JSON representation is: {"name":"Socrates","city":"Athens"}
Our object, when formatted, is:
{
        "name":"Socrates",
        "city":"Athens"
}
```

If we want to know how many properties are in the object:

```
crt "Our object has ":obj1->$size():" properties."
```

Let's create a method for our Class. This method will simply add 2 numbers and assign the result to the "sum" property of the object. Note that the "sum" property is created dynamically; there is no template for the class, hence no need to declare it in advance.


> **Note:**
> 
> At the present time, the source code for methods must be stored in a separate record because they are compiled to shared objects in the same way as subroutines and functions. A near-future enhancement will allow programs and methods to coexist.


```
method Tour::sum1(addend1, addend2)
    this->sum = addend1 + addend2
end method
```

To use our method we do this:

```
* Assign the property "sum" to the object with a value from running the "sum1" method
obj1->sum1(2,4)
crt "The result of calling our sum1 method is: ":obj1->sum
```

A second way to do this is to **return** the result from the method. We will create a second method called "sum2":

```
method Tour::sum2(value1, value2)
    return value1 + value2
end method
```

If we want to use this method to add the result of "sum1" and some other number:

```
result = obj1->sum2(obj1->sum, 6) ;* The variable "result" is assigned the sum of "12"
```

Yet another way is to pass a variable number of arguments and let the method sum them up:

```
method Tour::sum3()
    result = 0
* Create an object that can handle each parameter, 1 at a time
    varg = new object("$vararg")
    crt "Method Tour::sum3() was passed ":varg->size():" parameters"
    loop while varg->size() do
        result += varg->next() ;* Get the next parameter and decrement varg->size()
    repeat
    return result
end method
```

We can now do things like this:

```
total = obj1->sum3(1001,2002,345,999,876,555)
crt "After calling sum3() the result is: ":oconv(total, "md0,")
```

Use the built-in **$dump()** method to see the internal contents of the object:

```
equ verbose to 1  ;* show all properties of the object
crt obj1->$dump(verbose)
```

Putting it all together (call this file **tour.jabba** \*\*\*):

```
    program tour
    equ beautify to 1

    obj1 = new object("Tour")
    obj1->name = "Socrates"
    obj1->city = "Athens"

    crt obj1->name : " lived in " : obj1->city : "."

    json = obj1->$tojson()
    crt
    crt "Our object in JSON representation is: ":json
    crt "Our object, when formatted, is:"
    crt obj1->$tojson(beautify)

    crt
    crt "Our object has ":obj1->$size():" properties."

    obj1->sum1(2,4)

    result = obj1->sum2(obj1->sum, 6)

    total = obj1->sum3(1001,2002,345,999,876,555)
    crt "After calling sum3() the result is: ":oconv(total, "md0,")

    crt
    crt obj1->$dump(1)
    crt obj1->$tojson(beautify)
```

...and the method code which, for now, must be a separate source code file (call this file **tour\_methods.jabba** \*\*\*:):

```
    method Tour::sum1(addend1, addend2)
        this->sum = addend1 + addend2
    end method

    method Tour::sum2(value1, value2)
        return value1 + value2
    end method

    method Tour::sum3()
        result = 0
* Create an object that can handle each parameter, 1 at a time
        varg = new object("$vararg")
        print "Method Tour::sum3() was passed ":varg->size():" parameters"
       loop while varg->size() do
            result += varg->next() ;* Get next argument and decrement varg->size()
        repeat
        return result
    end method
```

Compile and catalog both programs (**tour.jabba** and **tour\_methods.jabba**).

*\*\*\* When compiled and cataloged, the **.jabba** extension is dropped from the name, resulting in the names of the programs becoming **tour** and **tour\_methods**.*

You can now run the **tour** program, you should see results like this:

```
Socrates lived in Athens.

Our object in JSON representation is: {"name":"Socrates","city":"Athens"}
Our object, when formatted, is:
{
        "name":"Socrates",
        "city":"Athens"
}

Our object has 2 properties.
Method Tour::sum3() was passed 6 parameters
After calling sum3() the result is: 5,778

Object dump: Class "Tour", refcount 1, type = OBJECT
             Number of values 3, object address 0000000000E51150
"name" : SHORT STRING string 'Socrates'
"city" : SHORT STRING string 'Athens'
"sum" : INTEGER value 6

{
        "name":"Socrates",
        "city":"Athens",
        "sum":6
}
```

Note that the JSON representation of the object now has the "sum" property.

This next example creates an object from a JSON string and then displays the object in JSON format:

```
$option jabba
equ beautify to 1
json_string = \{"int":42,"string":"forty-two","jarray":[1,2,3,4],"jbase":{"jbase":"Is Great!"}}\
json_obj = json_string->$fromjson()
crt json_obj->$tojson(beautify)
```

Our JSON string contains an embedded array and an embedded JSON object.

Running that code displays:

``` json
{
        "int":42,
        "string":"forty-two",
        "jarray":[
                1,
                2,
                3,
                4
        ],
        "jbase":{
                "jbase":"Is Great!"
        }
}
```

Let's create an array with 10 elements and then delete one of them:

```
ray = new array      ;* Arrays can also have methods, in which case we would need to specify a name for the array
for x = 0 to 9       ;* arrays are zero-based
    ray->@x = x + 1  ;* The "@" signifies an indirect reference to a variable, used in the same manner as @subroutine calls
next x
crt ray->$tojson()   ;* show the JSON representation
crt ray->$size()     ;* how many elements do we have
ray->$delete(5)      ;* delete the 6th element
crt ray->$tojson()
crt ray->$size()     ;* we now have 9 elements
```

Dynamic Objects can also interact with the database. Dynamic Files, type **JD**, are the only file type that support this interaction.

```
    program startest
    star = new object
    star->id = "1"
    star->actor = "Mark Hamill"
    star->name = "Luke Skywalker"
    star->father = "Darth Vader"
    star->$setboolean("isjedi", @true)
    open "starwars" to filevar else
        execute "create-file starwars" ;* create a Dynamic File
        open "starwars" to filevar else stop 201, "starwars"
    end
    write star on filevar, star->id
    read rec from filevar, star->id else stop 202, star->id
    crt "Actor: ":rec->actor
    if rec->father eq "Darth Vader" and rec->isjedi eq @true then
        crt "The Force is strong with you, ":rec->name:"!"
    end
```

```
jsh ~ -->startest
[ 417 ] File starwars]D created , type = JD
[ 417 ] File starwars created , type = JD
Actor: Mark Hamill
The Force is strong with you, Luke Skywalker!
jsh ~ -->
```

The JED and ED editors will convert the object to JSON to be edited and, when written back, will be re-converted to an object:

```
jsh ~ -->jed starwars 1

File starwars , Record '1' (JSON Object)
Command->
{
    "id":1,
    "actor":"Mark Hamill",
    "name":"Luke Skywalker",
    "father":"Darth Vader",
    "isjedi":true
}.
```

Neither editor will allow the record to be written if the JSON format is invalid and will produce an error similar to this:

```
Error: Parsing error at line 2 , offset 11
Record is not properly formatted JSON. Cannot WRITE record.

Edit record again ?
```

This is the end of our introduction. All current Dynamic Objects documentation can be found [here](./../dynamic-objects).

Back to [Dynamic Objects - Overview](./../dynamic-objects/README.md)
