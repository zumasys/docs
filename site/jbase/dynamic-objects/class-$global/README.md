# Method: $global()

<PageHeader />

## Description

 **\$global()** is a system-wide class that allows you to define methods that are inherited by all classes. This means you can add a catch-all for any and all objects. In fact the methods for **\$global** can even be called from non-objects.

## Examples

In this first example we create a file with a single global method:

```
method $global::pi()
    return 3.14159265
end method
```

Call this file `class_global.jabba`.

Let's create a simple `Circle` class that, given a radius, calculates circumference and area:

```
$option jabba,self

method Circle::Circle(radius)       ;* constructor
    self->radius = radius
end method

method Circle::area()
    return self->pi() * pwr(self->radius, 2)
end method

method Circle::circumference()
    return (2 * self->pi()) * self->radius
end method
```

Call this file `class_circle.jabba`.

>Note that we have not defined `pi()` in the class as it's an automatically inherited global method.
>Also note that we are using `self` as the object pointer rather than the default `this`.

Now create a program called `circle.jabba` that calls the `area()` and `circumference()` methods:

```
radius = sentence(1)     ;* Grab the radius from the command line
if not(num(radius)) or radius lt 1 then radius = 1
*
* Create a Circle object
*
mycircle = new object("Circle", radius)      ;* Create a circle object, then call the methods on it
crt "The area of a circle with radius of ":radius:" is ":mycircle->area():" units."
crt "The circumference of a circle with radius of ":radius:" is ":mycircle->circumference():" units."
```

We run the program like this:

```
jsh ~ -->circle 3
The area of a circle with radius of 3 is 28.2735 units.
The circumference of a circle with radius of 3 is 18.849 units.
jsh ~ -->circle 42
The area of a circle with radius of 42 is 5541.606 units.
The circumference of a circle with radius of 42 is 263.886 units.
jsh ~ -->
```

For this next example, let's add a new global method to our `class_global.jabba` class:

```
method $global::pi()
    return 3.1415
end method

method $global::length()
*
* Create a system $vararg object. This is used to determine how many parameters were passed.
*
    varg = new object("$vararg")
    if varg->size() eq 0 then
*
* This means we were called in one of two ways
* (1) From a non-object like this:
*        mystring = "Hello World"
*        len1 = mystring.length
* (2) From an actual object as a method call like this:
*        obj = new object
*        len1 = obj.length()
*
        if this->$isobject() then
* This is option (2). Return the number of values in the object.        
            return this->$size()
        end else
* This is option (1). Return the length of the non-object.        
            return len(this)
        end
    end else
*
* We have one or more parameters passed, so it must be a method call from an object.
* We return a multi-value array of lengths of each argument.
*    
        all_lengths = ""
        loop while varg->size() do
            param = varg->next()
            all_lengths<1,-1> = len(param)
        repeat
        return all_lengths
    end
end method
```

It can be used like this:

```
stringvalue = "Hello World"
obj = new object
obj->name = "arthur dent" ; obj->age = 42     ;* Add a couple of properties to the object
print stringvalue->length ;* Print the length of "Hello World" == 11
print obj->length()       ;* Print the number of properties in the object == 2
print oconv(obj->length("This is a much longer string", stringvalue), "mcp")   ;* Print the lengths of each passed string == 28]11
```

## Notes

This method is akin to the BASIC `COMMON` statement.
  
<PageFooter />
