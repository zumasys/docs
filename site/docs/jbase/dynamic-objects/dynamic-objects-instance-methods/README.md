# Dynamic Objects: Instance Methods

**Created At:** 2/22/2018 2:24:56 PM  
**Updated At:** 8/27/2018 12:28:15 PM  
**Original Doc:** [dynamic-objects-instance-methods](https://docs.jbase.com/42948-dynamic-objects/dynamic-objects-instance-methods)  


Other than the Dynamic Objects Built-in methods, you can create your own methods which are used by your own classes. These methods are similar to external subroutines or functions in that they perform some task and optionally return a result. However, methods differ from functions and subroutines in that they can only be used by a specific class, thus satisfying the Object Oriented (OO) concept of encapsulation.

If you are new to Dynamic Objects, we recommend you read through the [Introduction](dynamic-objects-tour) as that provides preliminary information that will make this topic easier to digest.



## General Rules

**At the present time, methods must be kept separate from the programs that use them,** **however this may change in a future release.**

The general form of a method is:

```
method Classname::{~}methodname({arguments})
    ...method body...
    {return {value}}
end method
```

If **methodname** is the same as **Classname** then this is the **Constructor** for the Class.

If **methodname** = **~Classname** then this is the **Destructor** for the Class.

If no **value** is to be returned then the **return** statement is optional.

Methods that return a value can call other methods in a chain-like fashion.

A program's local variable names will not conflict with the names of properties of an object.

Please refer to the [Object Creation](dynamic-objects-object-creation) section for additional information.



## Examples

The following examples are intentionally simple, so that we can focus on the language without getting diverted by complicated algorithms and data structures.

To start out, let's create a simple Math class with 2 methods:

```
0001     method Math::Math()  ;* constructor
0002         this->pi = 3.14159
0003     end method
0004
0005     method Math::circumference(radius)
0006         return (this->pi * 2) * radius
0007     end method
```

The constructor of the class creates one property, **pi** which is referenced within the class with the **this** keyword (explained next). The **circumference()**method uses the property to do its calculation. If we ever wanted to change the precision of **pi** then we would only have to change it in one place and the rest of the class that uses it would be unaffected.

The keyword **this**is used in methods to reference properties and other methods within the class. It is also possible to use **self** instead of **this**.  This is an option, by default we always use **this** but setting an option in the usual way will change from using **this** to **self**.

For example,

```
export JBC_JPP2=self   [Unix]
set JBC_JPP2=self      [Windows]
```

Or add this on line 1 of your source:

```
$option self
```



Here's a program that uses the methods of this class:

```
0001     precision 6
0002     circle = new object("Math")
0003     radius = 5
0004     crt "The circumference of our circle with a radius of ":radius:" is ":circle->circumference(radius):" units."
```

The result of running this program:

```
The circumference of our circle with a radius of 5 is 31.416 units.
```

We could also have accessed the **pi** property with:

```
crt circle->pi
```

For this next example we have 2 classes, an Owner and a Pets class, in which the owner will feed the pets.

Let's first show the methods that are involved as this is where most of the action takes place:

```
0001     $option jabba
0002 
0003 * Owner methods
0004 
0005     method Owner::Owner(name) ;* Constructor for the Owner class
0006         this->name = name
0007     end method
0008 
0009     method Owner::feed(pets)
0010         return pets
0011     end method
0012 
0013     method Owner::~Owner()    ;* Destructor
0014         crt
0015         crt "I've been destroyed!"
0016     end method
0017 
0018 * Pets methods
0019 
0020     method Pets::Pets()       ;* Constructor
0021         args = new object("$vararg")
0022         pets = new array
0023         crt args->size()
0024         loop while args->size() do
0025             pets->$append(args->next()) ;* alternatively: pets[-1] = args->next()
0026         repeat
0027         this = pets
0028     end method
```

The constructor for the **Pets** class is an example of a **Variadic Method**, a method that accepts a variable number of arguments by creating an object using the built-in **$vararg** class.

Again, the reservered word **this** refers to the particular instance of the object, which is how properties are assigned to the object and how other properties and methods of that object are referenced.

And now for the mainline code:

```
0001     $option jabba
0002     equ beautify to 5
0003
0004 * Create an instance of the Owner class, passing it the name of the owner
0005
0006     owner = new object("Owner", "Daniel")
0007     crt "The name of our class is: ":owner->$classname()
0008     crt
0009
0010 * Create an instance of the Pets class, passing it a variable number of arguments, 3 in this case
0011
0012     parrots = new array("Pets", "Shadow", "Kory", "Nikki")
0013
0014 * Attach one object to the other and show its JSON representation
0015
0016     owner->parrots = parrots
0017
0018 * Display the owner object in JSON format
0019
0020     crt owner->$tojson(beautify)
0021
0022 * Let's feed our pets by sending a message to the owner to feed the parrots
0023
0024     pets_fed = owner->feed(parrots)
0025
0026 * We can now display all of our hungry parrots :-)
0027
0028     crt owner->name:" fed:"
0029     array_size = pets_fed->$size()      ;* call the built-in $size() method
0030     for i = 0 to array_size-1 ;* arrays are zero-based
0031         crt @tab:pets_fed[i]  ;* array elements can be accessed by their index
0032     next i
0033
0034     stop  ;* this sends a message to the Destructors of classes that have them
```

Running this code produces the following result:

```
The name of our class is: Owner

{
    "name":"Daniel",
    "parrots":[
        "Shadow",
        "Kory",
        "Nikki"
    ]
}

Daniel fed:
        Shadow
        Kory
        Nikki

I've been destroyed!
```

As another example, let's create new instances of our objects using the same methods (abbreviated code):

```
0001     dog_owner = new object("Owner", "Pavlov")
0002     dogs = new array("Pets", "Rin Tin Tin", "Lassie", "Rocky", "Duke", "Fido")
0003     dog_owner->dogs = dogs
0004     crt dog_owner->$tojson(5)
0005     hungry_dogs = dog_owner->feed(dogs)
0006     crt hungry_dogs->$tojson(5)
```

Result:

```
{
    "name":"Pavlov",
    "dogs":[
        "Rin Tin Tin",
        "Lassie",
        "Rocky",
        "Duke",
        "Fido"
    ]
}

[
    "Rin Tin Tin",
    "Lassie",
    "Rocky",
    "Duke",
    "Fido"
]

I've been destroyed!
```

Methods can also accept a combination of arguments that are static and variable. The variable arguments must always come after the static arguments.

```
0001     method Shopping::shop(store)
0002         arguments = new object("$vararg")
0003         this->storename = store
0004         shopping_cart = new array
0005         loop while arguments->size() do
0006             shopping_cart[-1] = arguments->next()
0007         repeat
0008         this->cart = shopping_cart
0009     end method
```

This method has 1 static argument and any number of arguments can follow it, so it can be called like this:

```
0001     equ formatted to 5
0002     todo = new object("Shopping")
0003     todo->shop("Walmart", "cereal", "milk", "juice", "yogurt", "carrots", "dark chocolate")
0004     crt todo->$tojson(formatted)
```

"Walmart" is assigned to the **store** argument and the rest are the arguments that get built into an array.

Running this code displays the object in JSON format:

```
{
    "storename":"Walmart",
    "cart":[
        "cereal",
        "milk",
        "juice",
        "yogurt",
        "carrots",
        "dark chocolate"
    ]
}
```

Let's extend that code to shop at more than one place:

```
0001     equ formatted to 5
0002     equ verbose to 1
0003     classname = "Shopping"
0004
0005     todo = new object(classname)
0006     todo->shop("Walmart", "cereal", "milk", "juice", "yogurt", "carrots", "dark chocolate")
0007     crt todo->$tojson(formatted)
0008     crt
0009     another_todo = new object(classname)
0010     another_todo->shop("BestBuy", "wireless keyboard", "wireless mouse", "headphones")
0011     crt another_todo->$tojson(formatted)
0012     another_todo->$dump(verbose)
```

Note that we are calling the built-in **$dump()** method to show the internal representation of the **another\_todo** object.

Running that code displays:

```
{
    "storename":"Walmart",
    "cart":[
        "cereal",
        "milk",
        "juice",
        "yogurt",
        "carrots",
        "dark chocolate"
    ]
}

{
    "storename":"BestBuy",
    "cart":[
        "wireless keyboard",
        "wireless mouse",
        "headphones"
    ]
}

Object dump: Class "Shopping", refcount 1, type = OBJECT
             Number of values 2, object address 0000000000E95C80
"storename" : SHORT STRING string 'BestBuy'
"cart" : OBJECT at address 0000000000E95960
```

The **address** of the object will, of course, be different on your system.

We can also pass a variable number of arguments with a dynamic array. Add a new method **Shopping::travel()**to the same file so that we now have:

```
0001     method Shopping::shop(store)
0002         arguments = new object("$vararg")
0003         this->storename = store
0004         shopping_cart = new array
0005         loop while arguments->size() do
0006             shopping_cart[-1] = arguments->next()
0007         repeat
0008         this->cart = shopping_cart
0009     end method
0010
0011     method Shopping::travel(destination, directions)
0012         this->destination = destination
0013         directions_list = new array
0014         directions_count = dcount(directions, @am)
0015         for x = 1 to directions_count
0016             directions_list[-1] = directions<x>
0017         next x
0018         this->directions = directions_list
0019     end method
```

Our main code is now:

```
0001     equ formatted to 5
0002
0003     todo = new object("Shopping")
0004     todo->shop("Walmart", "cereal", "milk", "juice", "yogurt", "carrots", "dark chocolate")
0005     destination = "Walmart"   ;* this is the "destination" argument
0006     directions = ""      ;* build a dynamic array with travel directions
0007     directions<-1> = "go here first"
0008     directions<-1> = "go there second"
0009     directions<-1> = "make illegal u-turn"
0010     directions<-1> = "turn left at 2nd traffic light"
0011     directions<-1> = "stay in right lane"
0012     directions<-1> = "destination is third building on the right"
0013     todo->travel(destination, directions)
0014     crt todo->$tojson(formatted)
```

The JSON output is now:

```
{
    "storename":"Walmart",
    "cart":[
        "cereal",
        "milk",
        "juice",
        "yogurt",
        "carrots",
        "dark chocolate"
    ],
    "destination":"Walmart",
    "directions":[
        "go here first",
        "go there second",
        "make illegal u-turn",
        "turn left at 2nd traffic light",
        "stay in right lane",
        "destination is third building on the right"
    ]
}
```



Dynamic Objects also supports [static methods](dynamic-objects-static-methods).


