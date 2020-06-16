# Dynamic Objects: Object Creation

<PageHeader />

There are 2 special methods, otherwise known as magic methods in other languages. These special methods function as interceptors that are automatically called when and object is created or its reference count goes to zero.

- Constructors
- Destructors

A **Constructor** is a special method that runs when an instance of a Class is created.

A **Destructor** is a special method that runs when the lifetime of an object ends. This event happens automagically:

- when the program terminates
- if the variable that is assigned to the object is re-assigned and there are no other references (variables assigned) to that object

Contructors and Destructors are optional however there can be only 1 Constructor and 1 Destructor for each Class.

Destructors are useful for releasing resources that are not under jBASE control.

An object's destructor can be called explicitly by setting the variable to null or zero.

Objects and Arrays are created using the **new** keyword:

## Example

```
* Create a class called "Classname" and pass 1 argument to the constructor of the class
my_object = new object("Classname", arg1)

* Initalize an empty array, unless there is a constructor that assigns properties
my_array = new array("Arrayname")

* This is a special kind of object used to pass a variable number of arguments
* to a method
args = new object("$vararg")
```

When an object is created, it automatically calls its [Constructor](./../dynamic-objects-instance-methods) method.

If an object will not have any methods then it is not necessary to give the object a name, or use the built-in [**\$jbase**](./../class-$jbase) class, in which case it can be created in any of these ways:

```
obj = new object
obj = new object()
obj = new object("")
obj = mew object("$jbase")
```

Similarly, arrays with no methods can be created as:

```
arr = new array
arr = new array()
arr = new array("")
arr = new array("$jbase")
```

Objects can also be created from built-in methods. For example,

```
json = \{"AnswerToLifeTheUniversAndEverything":42}\
the_answer = json->$fromjson() ;* Create an object with the built-in $fromjson() method
crt the_answer->$objecttype()  ;* Displays "object"
crt the_answer->$tojson()      ;* Displays the original json string
```

Under the covers, the built-in **\$fromjson()** method uses **new object()**.

Refer to the [Instance Methods](./../dynamic-objects-instance-methods) documentation for additional examples.

Back to [Dynamic Objects - Overview](./../README.md)

<PageFooter />
