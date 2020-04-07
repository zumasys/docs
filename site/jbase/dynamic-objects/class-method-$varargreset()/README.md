# Class Method: $vararg::reset()

<PageHeader />

## Description

The purpose of the **reset()** method is to allow reprocessing a list of arguments within the same method.

The **reset()** method performs the following actions to a **$vararg** object:

- the argument list pointer is set to the beginning of the list
- the size property of the **$vararg** object is reset to the original size of the argument list

## Example

Create this method, which calculates the Standard Deviation:

```
    method Math::standard_deviation()
* Credit: http://www.mathsisfun.com/data/standard-deviation-formulas.html

* First, find the mean of the set of numbers
        addends = new object("$vararg")
        sum = 0
        loop while addends->size() do
            sum += addends->next()
        repeat
        addends->reset()
        mean = sum/addends->size()

* Subract the mean and square the result
        squared_differences = 0
        loop while addends->size() do
            squared_differences += pwr((addends->next() - mean), 2)
        repeat

* Get the mean of the squared differences
        addends->reset()
        variance = (1/(addends->size()-1)) * squared_differences

* Take the square root of the variance
        standard_deviation = sqrt(variance)
        return standard_deviation
    end method
```

Line 10 resets the **addends** object for both the calculation on line 11 and the subsequent loop on lines 15-17.

Line 20 resets the **addends** object for the calculation on line 21.

Note that, for the calculations on lines 11 and 21, we could have done this after line 5:

```
addends_size = addends->size()
```

and used **addends\_size**, but we still would have had to reset the object for the loop on lines 15-17.

Create a program to use the method:

```
* Calculate the Standard Deviation of High Temperatures over a period of 10 days

    sd = Math::standard_deviation(56,66,68,59,71,49,52,73,75,65)
    crt "Standard Deviation = ":sd
```

Note that we are doing a [static method call](./../dynamic-objects-static-methods).

Result:

```
Standard Deviation = 8.9835
```

## Notes
