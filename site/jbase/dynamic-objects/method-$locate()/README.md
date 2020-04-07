# Method: $locate()

<PageHeader />

## Description

The **$locate()** method is used to find a value in a Dynamic Objects array, optionally specifying a case insensitive search.

## Syntax

```
position = array->$locate(value, {1})
```

If the optional second argument is "1" (or any positive integer) then a case insensitive search is done.

## Return value

The relative index position of the value or -1 if the value was not found.

## Examples

```
    philosophers = new array
    philosophers->$append("Theaetetus")
    philosophers->$append("Charmides")
    philosophers->$append("Parmenides")
    philosophers->$append("Protagoras")
    case_insensitive = @false
    value = "Socrates"
    gosub find_philosopher
    value = "Theaetetus"
    gosub find_philosopher
    case_insensitive = @true
    value = "parmenides"
    gosub find_philosopher
    crt philosophers->$tojson()
    stop

find_philosopher:

    pos = philosophers->$locate(value, case_insensitive)
    if pos ge 0 then
        crt "Found ":dquote(value):" at position ":pos:"."
    end else
        crt dquote(value):" does not exist in the philosopher's array so we are adding it."
        philosophers->$append(value)
    end
    return
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
