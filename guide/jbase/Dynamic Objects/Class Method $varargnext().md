# Class Method: $vararg::next()

**Created At:** 3/13/2018 11:10:44 AM  
**Updated At:** 7/5/2019 9:52:53 AM  


## Description

The **next()** method points to the next *optional* argument in an object returned from an instance of the **$vararg** class.



## Examples

```
method Math::sum()
    total = 0
    addends = new object("$vararg")
    loop while addends->size() do
        addend = addends->next()
        total += addend
    repeat
    return total
end method
```



The method can be used like this:

```
crt Math::sum(1,2,3,4,5) ;* displays 15
crt Math::sum(1,-1)      ;* displays 0 (zero)
```



This next example creates a random string and counts the number of vowels in it:

```
program count_vowels
r = $development::randomstring(100)
crt r
crt "Number of vowels = " : Math::sum(count(r, "a"), count(r, "e"), count(r,"i"), count(r,"o"), count(r,"u"))
```

Result:

```
jsh ~ -->count_vowels
jugdczepdivrovgqxiuafsftqiyqkqmtywckxqrldnfxowaiefnybtnydzpyrqocymopuawmtqbnnyolztahluwaaxwjdyozaict
crt "Number of vowels = " : 24
```



## Notes


