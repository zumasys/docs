# Method: $locate()

**Created At:** 1/10/2019 10:33:18 AM  
**Updated At:** 11/26/2019 9:28:18 AM  
**Original Doc:** [method-locate](https://docs.jbase.com/42948-dynamic-objects/method-locate)  


## Description

The **$locate()** method is used to find a value in a Dynamic Objects array, optionally specifying a case insensitive search.



## Syntax

```
position = array->$locate(value, {1})
```

If the optional second argument is "1" (or any positive integer) then a case insensitive search is done.

## 
Return value

The relative index position of the value or -1 if the value was not found.

## Examples

```
001     philosophers = new array
002     philosophers->$append("Theaetetus")
003     philosophers->$append("Charmides")
004     philosophers->$append("Parmenides")
005     philosophers->$append("Protagoras")
006     case_insensitive = @false
007     value = "Socrates"
008     gosub find_philosopher
009     value = "Theaetetus"
010     gosub find_philosopher
011     case_insensitive = @true
012     value = "parmenides"
013     gosub find_philosopher
014     crt philosophers->$tojson()
015     stop
016
017 find_philosopher:
018
019     pos = philosophers->$locate(value, case_insensitive)
020     if pos ge 0 then
021         crt "Found ":dquote(value):" at position ":pos:"."
022     end else
023         crt dquote(value):" does not exist in the philosopher's array so we are adding it."
024         philosophers->$append(value)
025     end
026     return
```

Result:

```
"Socrates" does not exist in the philosopher's array so we are adding it.
Found "Theaetetus" at position 0.
Found "parmenides" at position 2.
["Theaetetus","Charmides","Parmenides","Protagoras","Socrates"]
```



## Notes

Remember, arrays are zero-based so if the first element in the array is located then the position returned will be 0 (zero).
