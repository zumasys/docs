# MD Conversion

**Created At:** 6/8/2018 1:40:09 PM  
**Updated At:** 6/20/2019 12:31:36 PM  
**Original Doc:** [md-conversion](https://docs.jbase.com/46351-conversion-processing/md-conversion)  
**Original ID:** 321298  
**Internal:** No  

**Tags:**
<badge text='jql' vertical='middle' />
<badge text='conversion' vertical='middle' />

## Description

The MD code transforms integers by scaling them and inserting symbols, such as a currency sign, thousands separators, and a decimal point. The ML and MR codes are similar to MD but have greater functionality. It's general from is as:

```
MDn{m}{Z}{,}{$}{ix}{c}
```

where:

- **n**is a number from 0 to 9 that specifies how many digits are to be output after the decimal point. Trailing zeros are inserted as necessary. If n is omitted or 0, the decimal point is not output.
- **m**is a number from 0 to 9 which represents the number of digits that the source value contains to the right of the implied decimal point. m is used as a scaling factor and the source value is descaled (divided) by that power of 10. For example, if m=1, the value is divided by 10; if m=2, the value is divided by 100, and so on. If m is omitted, it is assumed to be equal to n (the decimal precision). If m is greater than n, the source value is rounded up or down to n digits. The m option must be present if the ix option is used and both the Z and $ options are omitted. This to remove ambiguity with the ix option.
- **Z**suppresses leading zeros. Note that fractional values which have no integer will have a zero before the decimal point. If the value is zero, a null will be output.
- **,** specifies insertion of the thousands separator symbol every three digits to the left of the decimal point. The type of separator (comma or period) is specified through the SET-THOU command. (Use the SET-DEC command to specify the decimal separator.)
- **$**appends an appropriate currency symbol to the number. The currency symbol is specified through the SET-MONEY command.
- **ix**aligns the currency symbol by creating a blank field of "i" number of columns. The value to be output overwrites the blanks. The "x" parameter specifies a filler character that can be any non-numeric character, including a space.
- **c**appends a credit character or encloses the value in angle brackets (&lt;&gt;). Can be any one of the following:
- - Appends a minus sign to negative values. Positive or zero values are followed by a blank.
- **+** Appends a plus sign to positive values or a minus sign to negative values.
- **C**Appends the characters **CR** to negative values. Positive or zero values are followed by two blanks.
- **D**Appends the characters **DB** to positive values. Negative values are followed by two blanks. -0 is the same as 0.




### Input Conversion 

Input conversion works with a number that has only thousands separators and a decimal point.

### EXAMPLES


| MD Code<br> | Source Value<br> | Returned Value<br> |
| --- | --- | --- |
| MD2<br> | 1234567<br> | 12345.67<br> |
| MD2,<br> | 1234567<br> | 12,345.67<br> |
| MD2,$<br> | 1234567<br> | $12,345.67<br> |
| MD2,$12\*<br> | 1234567<br> | $\*\*12,345.67<br> |
| MD2,$12-<br> | -1234567<br> | $12,345.67-<br> |
| MD42Z,$<br> | 001234567<br> | $12,345.6700<br> |
| MD42Z,$15 &lt;<br> | -001234567<br> | &lt;$ 12,345.6700&gt;<br> |




Back to [Conversion Processing](./../conversion-processing)
