# T Conversion

**Created At:** 6/8/2018 1:47:55 PM  
**Updated At:** 7/13/2018 1:29:18 PM  
**Original Doc:** [t-conversion](https://docs.jbase.com/46351-conversion-processing/t-conversion)  
**Original ID:** 321308  
**Internal:** No  

## Description

The T code extracts a character substring from a field value. It takes the form:

```
T{m,}n
```

where:

- **m** specifies the starting column number.
- **n** is the number of characters to be extracted.

If **m** is specified, the content of field 9 of the data definition record has no effect - characters are counted and extracted from left to right, for **n** characters.

If **m** is not specified, the content of field 9 of the data definition record will control whether n characters are extracted from the left or the right-hand end of the value. If field 9 does not contain an R, the first **n** characters will be extracted from the value. If field 9 does contain an R (right justify), the last **n** characters will be extracted from the value.

## Input Conversion

Input conversion does not invert. It simply applies the text extraction to the input data.

### Examples


| Code | Source Value | Field 9 | Result |
| --- | --- | --- | --- |
| T3,4 | ABCDEFG | L | CDEF |
| T3,4 | ABCDEFG | R | CDEF |
| T2 | ABCDEFG | L | AB |
| T3 | ABCDEFG | R | EFG |
| T3 | ABCDEFG | T | ABC |

Back to [Conversion Processing](./../conversion-processing)
