# Dynamic Objects: Instance Methods

<PageHeader />

Other than the Dynamic Objects Built-in methods, you can create your own methods which are used by your own classes. These methods are similar to external subroutines or functions in that they perform some task and optionally return a result. However, methods differ from functions and subroutines in that they can only be used by a specific class, thus satisfying the Object Oriented (OO) concept of encapsulation.

If you are new to Dynamic Objects, we recommend you read through the [Introduction](./../introduction-to-dynamic-objects) as that provides preliminary information that will make this topic easier to digest.

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

Please refer to the [Object Creation](./../dynamic-objects-object-creation) section for additional information.

## Examples

The following examples are intentionally simple, so that we can focus on the language without getting diverted by complicated algorithms and data structures.

To start out, let's create a simple Math class with 2 methods:

```
    method Math::Math()  ;* constructor
        this->pi = 3.14159
    end method

    method Math::circumference(radius)
        return (this->pi * 2) * radius
    end method
```

The constructor of the class creates one property, **pi** which is referenced within the class with the **this** keyword (explained next). The **circumference()**method uses the property to do its calculation. If we ever wanted to change the precision of **pi** then we would only have to change it in one place and the rest of the class that uses it would be unaffected.

The keyword **this**is used in methods to reference properties and other methods within the class. It is also possible to use **self** instead of **this**.  This is an option, by default we always use **this** but setting an option in the usual way will change from using **this** to **self**.

For example,

```
export JBC_JPP2=self   [UNIX]
set JBC_JPP2=self      [Windows]
```

Or add this on line 1 of your source:

```
$option self
```

Here's a program that uses the methods of this class:

```
    precision 6
    circle = new object("Math")
    radius = 5
    crt "The circumference of our circle with a radius of ":radius:" is ":circle->circumference(radius):" units."
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
    $option jabba

* Owner methods

    method Owner::Owner(name) ;* Constructor for the Owner class
        this->name = name
    end method

    method Owner::feed(pets)
        return pets
    end method

    method Owner::~Owner()    ;* Destructor
        crt
        crt "I've been destroyed!"
    end method

* Pets methods

    method Pets::Pets()       ;* Constructor
        args = new object("$vararg")
        pets = new array
        crt args->size()
        loop while args->size() do
            pets->$append(args->next()) ;* alternatively: pets[-1] = args->next()
        repeat
        this = pets
    end method
```

The constructor for the **Pets** class is an example of a **Variadic Method**, a method that accepts a variable number of arguments by creating an object using the built-in **\$vararg** class.

Again, the reservered word **this** refers to the particular instance of the object, which is how properties are assigned to the object and how other properties and methods of that object are referenced.

And now for the mainline code:

```
    $option jabba
    equ beautify to 5

* Create an instance of the Owner class, passing it the name of the owner

    owner = new object("Owner", "Daniel")
    crt "The name of our class is: ":owner->$classname()
    crt

* Create an instance of the Pets class, passing it a variable number of arguments, 3 in this case

    parrots = new array("Pets", "Shadow", "Kory", "Nikki")

* Attach one object to the other and show its JSON representation

    owner->parrots = parrots

* Display the owner object in JSON format

    crt owner->$tojson(beautify)

* Let's feed our pets by sending a message to the owner to feed the parrots

    pets_fed = owner->feed(parrots)

* We can now display all of our hungry parrots :-)

    crt owner->name:" fed:"
    array_size = pets_fed->$size()      ;* call the built-in $size() method
    for i = 0 to array_size-1 ;* arrays are zero-based
        crt @tab:pets_fed[i]  ;* array elements can be accessed by their index
    next i

    stop  ;* this sends a message to the Destructors of classes that have them
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
    dog_owner = new object("Owner", "Pavlov")
    dogs = new array("Pets", "Rin Tin Tin", "Lassie", "Rocky", "Duke", "Fido")
    dog_owner->dogs = dogs
    crt dog_owner->$tojson(5)
    hungry_dogs = dog_owner->feed(dogs)
    crt hungry_dogs->$tojson(5)
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
    method Shopping::shop(store)
        arguments = new object("$vararg")
        this->storename = store
        shopping_cart = new array
        loop while arguments->size() do
            shopping_cart[-1] = arguments->next()
        repeat
        this->cart = shopping_cart
    end method
```

This method has 1 static argument and any number of arguments can follow it, so it can be called like this:

```
    equ formatted to 5
    todo = new object("Shopping")
    todo->shop("Walmart", "cereal", "milk", "juice", "yogurt", "carrots", "dark chocolate")
    crt todo->$tojson(formatted)
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
    equ formatted to 5
    equ verbose to 1
    classname = "Shopping"

    todo = new object(classname)
    todo->shop("Walmart", "cereal", "milk", "juice", "yogurt", "carrots", "dark chocolate")
    crt todo->$tojson(formatted)
    crt
    another_todo = new object(classname)
    another_todo->shop("BestBuy", "wireless keyboard", "wireless mouse", "headphones")
    crt another_todo->$tojson(formatted)
    another_todo->$dump(verbose)
```

Note that we are calling the built-in **\$dump()** method to show the internal representation of the **another_todo** object.

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
    method Shopping::shop(store)
        arguments = new object("$vararg")
        this->storename = store
        shopping_cart = new array
        loop while arguments->size() do
            shopping_cart[-1] = arguments->next()
        repeat
        this->cart = shopping_cart
    end method

    method Shopping::travel(destination, directions)
        this->destination = destination
        directions_list = new array
        directions_count = dcount(directions, @am)
        for x = 1 to directions_count
            directions_list[-1] = directions<x>
        next x
        this->directions = directions_list
    end method
```

Our main code is now:

```
    equ formatted to 5

    todo = new object("Shopping")
    todo->shop("Walmart", "cereal", "milk", "juice", "yogurt", "carrots", "dark chocolate")
    destination = "Walmart"   ;* this is the "destination" argument
    directions = ""      ;* build a dynamic array with travel directions
    directions<-1> = "go here first"
    directions<-1> = "go there second"
    directions<-1> = "make illegal u-turn"
    directions<-1> = "turn left at 2nd traffic light"
    directions<-1> = "stay in right lane"
    directions<-1> = "destination is third building on the right"
    todo->travel(destination, directions)
    crt todo->$tojson(formatted)
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

Dynamic Objects also supports [static methods](./../dynamic-objects-static-methods).

Back to [Dynamic Objects - Overview](./../README.md)
