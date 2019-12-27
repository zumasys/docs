# C conversion 

**Created At:** 6/8/2018 1:24:10 PM  
**Updated At:** 7/11/2018 3:27:00 PM  
**Original Doc:** [321288-c-conversion](https://docs.jbase.com/46351-conversion-processing/321288-c-conversion)  
**Original ID:** 321288  
**Internal:** No  


## Description 

Concatenates fields, literals, and the results of a previous operation. It takes the general form:

```
C{;}n{xn}...
```

where:

- ; is optional. It has no function other than to provide compatibility.
- n can be one of the following:
    - a field number (FMC)
    - a literal enclosed in single quotes, double quotes, or backslashes
    - an asterisk (\*) to specify the last generated value of a previous operation.
- x is the character to be inserted between the concatenated elements. If you specify a semicolon (;), no separator will be used. Any non-numeric character except a system delimiters (value, subvalue, field, start buffer, and segment marks) is valid.




### Input Conversion 

Input conversion does not invert. The concatenation is applied to the input data.



### EXAMPLES

```
C1;2
```

Concatenates the contents of field 1 with field 2, with no intervening separator character.



```
C1*2
```

Concatenates the contents of field 1 with an asterisk (\*) and then the content of field 2.



```
C1*"ABC" 2/3
```

Concatenates the contents of field 1 with an asterisk (\*), the string ABC, a space, field 2 a forward slash (/) and then field 3.



See the descriptions of the function codes (A, F, FS and their variants) for other concatenation methods.

Back to [Correlative Processing](./../conversion-processing)
