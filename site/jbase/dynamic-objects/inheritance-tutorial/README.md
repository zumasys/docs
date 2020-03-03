# Inheritance Tutorial

**Created At:** 12/6/2019 1:38:59 PM  
**Updated At:** 12/6/2019 1:46:02 PM  
**Original Doc:** [inheritance-tutorial](https://docs.jbase.com/42948-dynamic-objects/inheritance-tutorial)  
**Original ID:** 502408  
**Internal:** No  

The **$inherit** method allows a class to inherit all the properties and methods of the passed object type. You can pass one or more object like this:

```
customer = new object("Customer")
sales = new object("Sales")
transaction = new object("Transaction")
transaction->$inherit(customer, sales)
```

In the above example, the **Transaction** object will inherit all the methods and properties available to the **customer** and **sales** objects. Not only are the classes inherited, but all their own inherited classes will be inherited too.

This inheritance is usually performed in the constructor, as shown below, but can be called outside the constructor, as shown above.

In the above example, 2 parameters were passed to $inherit. There can be any number of parameters passed, and they can be objects (in which case the properties and classes are inherited) or can be simple names of classes to inherit, like this:

```
transaction = new object("Transaction")
transaction->$inherit("Customer", "Sales")
```

In the example below, we create a simple class called **Customer** with 2 properties, **name** and **town**. We then create a second object whose class-name is **Sales** and we *inherit* the properties from the **Customer**.

```
customer = new object("Customer")   ;* Allocate an object whose class name is 'customer'
customer->name = "DS supplies"      ;* Create a 'name' property
customer->town = "Hucknall"         ;* Create a 'town' property

sales = new object("Sales", customer)         ;* Create a new object whose class name is Sales
sales->order = 12345                          ;* Create an 'order' property
sales->dothis()                               ;* There isn't a sales method called dothis(), but there IS one on customer

print sales->$tojson(1)   ;* Display the 'sales' object which will have 3 properties
```

We now need a constructor for **Sales**, one that allows us to inherit the properties and methods of the passed object.

```
method Sales::Sales()

* This is the constructor for the Sales class.
* You can optionally pass one or more objects to inherit their properties.

    varg = new object("$vararg")    ;* Allocate a system object of class $vararg

* The $vararg class allows you to process each argument passed to the method, one at a time.

    loop while varg->size() do      ;* For each argument that was passed
        nextvar = varg->next()      ;* Get the next argument
        this->$inherit(nextvar)     ;* Inherit the properties and methods.
    repeat
end method
```

Finally, we need a method in **Customer** called **dothis()**:

```
method Customer::dothis()
    this->sometext = "This was called from sales::dothis()"
    return
end method
```

When we run the program, we create a new object called **sales** of class type **Sales** and call **sales-&gt;dothis()**. The **Sales** class doesn't have a method called **dothis()**, but we do in the inherited **Customer** class, so that is called.

The screen output would be:

```
{
    "name":"DS supplies",
    "town":"Hucknall",
    "order":12345,
    "sometext":"This was called from sales::dothis()"
}
```
