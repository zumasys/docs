# Class Method: $vararg::size()

**Created At:** 3/13/2018 1:03:50 PM  
**Updated At:** 2/12/2019 11:33:53 AM  


## Description

The **size()** method initially returns the number of arguments from an instance of the **$vararg** class. It is decremented each time a call is made to [**$varargs::next()**](static-method-vararg-next).



## Examples

```
method Math::sum()
    total = 0
    addends = new object("$vararg")
    crt "Method sum() was initially passed ":addends->size():" arguments."
    loop while addends->size() do
        total += addends->next()
        crt "We now have ":addends->size():" arguments left."
    repeat
    return total
end method
```



Create this 1-line program which calls **sum()** as a static method:

```
crt "Total = " : Math::sum(1,2,3,4,5)
```



Results:

```
Method sum() was initially passed 5 arguments.
We now have 4 arguments left.
We now have 3 arguments left.
We now have 2 arguments left.
We now have 1 arguments left.
We now have 0 arguments left.
Total = 15
```



## Notes

Alternatively, the program could create an instance of the **Math** class and call **sum()** this way:

```
homework = new object("Math")
total = homework->sum(1,2,3,4,5)
crt "Total = " : total
```




