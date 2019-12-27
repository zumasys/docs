# P Conversion

**Created At:** 6/8/2018 1:46:42 PM  
**Updated At:** 7/13/2018 1:19:27 PM  
**Original Doc:** [p-conversion](https://docs.jbase.com/46351-conversion-processing/p-conversion)  
**Original ID:** 321305  
**Internal:** No  


## Description 

The P code returns a value if it matches one of the specified patterns. Patterns can be combinations of numeric and alphabetic characters and literal strings. It takes the general form:

```
P{#}(element){;(element)}...
```

where:

- # returns null if the source matches the pattern, or the source if it does not.
- element is one or more of the following:



| nA<br> | tests for n alphabetic characters<br> |
| --- | --- |
| nC<br> | tests for n alphabetic or numeric characters<br> |
| nN<br> | tests for n numeric characters<br> |
| nP<br> | tests for n printable characters<br> |
| nX<br> | tests for n characters<br> |
| "literal"<br> | tests for the presence of the literal<br> |




## Note: 


> If the value does not match any of the patterns, a null will be returned.




## Input Conversion 

Input conversion does not invert. It simply applies the pattern matching to the input data.



### EXAMPLE 1

```
P(2A"*"3N"/"2A)
```

Will match and return AA\*123/BB or xy\*999/zz. Will fail to match AAA\*123/BB or A1\*123/BB, and will return null.



### EXAMPLE 2

```
P(2A"*"3N"/"2A);(2N"-"2A)
```

Will match and return AA\*123/BB, xy\*999/zz, 99-AA or 10-xx. Will fail to match AA&123/BB, A1\*123/BB, 9A-AA or 101-xx, and will return null.



Back to [Conversion Processing](./../conversion-processing)
