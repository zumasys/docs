# Class Method: $vararg::reset()

**Created At:** 3/13/2018 2:06:04 PM  
**Updated At:** 7/5/2019 9:50:47 AM  
**Original Doc:** [class-method-vararg-reset](https://docs.jbase.com/42948-dynamic-objects/class-method-vararg-reset)  
**Original ID:** 304002  
**Internal:** No  


## Description

The purpose of the **reset()**method is to allow reprocessing a list of arguments within the same method.

The **reset()** method performs the following actions to a **$vararg** object:

- the argument list pointer is set to the beginning of the list
- the size property of the $vararg object is reset to the original size of the argument list




## Example

Create this method, which calculates the Standard Deviation:

```
0001     method Math::standard_deviation()
0002 * Credit: http://www.mathsisfun.com/data/standard-deviation-formulas.html
0003
0004 * First, find the mean of the set of numbers
0005         addends = new object("$vararg")
0006         sum = 0
0007         loop while addends->size() do
0008             sum += addends->next()
0009         repeat
0010         addends->reset()
0011         mean = sum/addends->size()
0012
0013 * Subract the mean and square the result
0014         squared_differences = 0
0015         loop while addends->size() do
0016             squared_differences += pwr((addends->next() - mean), 2)
0017         repeat
0018
0019 * Get the mean of the squared differences
0020         addends->reset()
0021         variance = (1/(addends->size()-1)) * squared_differences
0022
0023 * Take the square root of the variance
0024         standard_deviation = sqrt(variance)
0025         return standard_deviation
0026     end method
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
0001 * Calculate the Standard Deviation of High Temperatures over a period of 10 days
0002
0003     sd = Math::standard_deviation(56,66,68,59,71,49,52,73,75,65)
0004     crt "Standard Deviation = ":sd
```

Note that we are doing a [static method call](./../dynamic-objects-static-methods).

Result:

```
Standard Deviation = 8.9835
```

## Notes
