# Method: $ismethod() / $hasmethod()

<PageHeader />

## Description

The **$ismethod()** method, and its synonym **\$hasmethod()**, determine if one or more methods, including inherited methods, can be called from the object.

## Syntax

```
obj->$ismethod("{Classname::}methodname1", {"{Classname::}methodname2", "{Classname::}methodname3",...})
arr->$ismethod("{Classname::}methodname1", {"{Classname::}methodname2", "{Classname::}methodname3",...})
```

## Arguments

| Argument | Description |
| --- | --- |
| methodname | the name of a class or inherited method |
| Classname::methodname | the fully qualified name of a method; this form can be applied to any object or array but is recommended to use the [**$jbase**](./../class-$jbase) class, e.g. **$jbase-&gt;Classname::methodname** |


## Return values

```
0 = At least 1 method does not exist
1 = All methods exist
```

If two or more methods are passed to **$ismethod()**, it looks for each method in turn. If at any point one of the methods cannot be found, then 0 is returned. If all methods can be found, then 1 is returned.

## Examples

```
obj = new object("Math")
if obj->$ismethod("sum") then
    s = obj->sum(1,2,3,4,5)
    crt "The sum of the first 5 positive integers is: ":s
end else
    crt "Error! The Math class is missing the sum() method"
    stop
end
```

You can also apply the fully qualified name of the method to **any** object. The following examples produce the exact same result:

```
any_obj = new object
if any_obj->$hasmethod("Math::sum") then
    crt "The sum of the first 5 positive integers is: ":Math::sum(1,2,3,4,5)
end else
    crt "Error! The Math class is missing the sum() method"
    stop
end
```

```
if $jbase::$ismethod("Math::sum") then
    crt "The sum of the first 5 positive integers is: ":Math::sum(1,2,3,4,5)
end else
    crt "Error! The Math class is missing the sum() method"
    stop
end
```

Here's the method used with the above examples:

```
method Math::sum()
    total = 0
    addends = new object("$vararg")
    loop while addends->size() do
        total += addends->next()
    repeat
    return total
end method
```

This example illustrates testing for the existence of more than one method:

```
* First make sure we can access the Circle class.
* Then test for the existence of the methods we intend to use.
if $jbase::$ismethod("Circle::Circle") then
    radius = 32 ;* inches
    toy = new object("Circle", radius)
    if toy->$ismethod("area", "fill", "print") then
        toy->shapename = "hoolahoop"
        toy->area()->fill("red")
        toy->print()
    end
end
```

Here are the methods we use with the above code:

```
method Circle::Circle(radius)
    self->$inherit("Shape")
    self->radius = radius
    self->color = "black" ;* default
end method

method Circle::area()
    self->area = 3.1415 * pwr(self->radius,2)
    return self
end method

method Circle::fill(color)
    self->color = color
    return self
end method

method Circle::print()
    crt "The area of our ":self->color:" ":self->shapename:" is ":int(self->area):" units."
end method
```

## Notes
