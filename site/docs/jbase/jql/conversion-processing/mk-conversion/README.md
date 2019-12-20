# MK Conversion

**Created At:** 6/8/2018 1:40:44 PM  
**Updated At:** 7/12/2018 1:42:58 PM  
**Original Doc:** [321300-mk-conversion](https://docs.jbase.com/46351-conversion-processing/321300-mk-conversion)  


## Description 

The MK code allows you to display large numbers in a minimum of columns by automatically descaling the numbers and appending a letter to represent the power of 10 used. The letters and their meanings are:

K 10 /3 (Kilo)
M 10 /6(Mega)
G 10 /9 (Giga)

It's general form is as:

```
MKn
```

where n  is a number that represents the field width. This will include the letter and a minus sign, if present.



## Note: 


> If a number will fit into the specified field width, it will not be changed.
> 
> If the number is too long but includes a decimal fraction, the MK code first attempts to round the fractional part so that the number will fit the field. If the number is still too long, the code rounds off the three low-order integer digits, replacing them with a K. If the number is still too long, the code rounds off the next three digits, replacing them with an M. If that is still too long, the code rounds off three more digits, replacing them with a G. If the number still does not fit the specified field, the code displays an asterisk.
> 
> If the field size is not specified or is zero, the code outputs null.




## Input Conversion 

Input conversion does not invert. It simply applies the metric processing to the input data.



### EXAMPLES


| Source Data<br> | MK3<br> | MK4<br> | MK5<br> | MK7<br> |
| --- | --- | --- | --- | --- |
| 1234<br> | 1K<br> | 1234<br> | 1234<br> | 1234<br> |
| 123456789<br> | \*<br> | 123M<br> | 123M<br> | 123457K<br> |
| 123456789012345<br> | \*<br> | \*<br> | \*<br> | 123457G<br> |
| 999.9<br> | 1K<br> | 1000<br> | 999.9<br> | 999.9<br> |
| -12.343567<br> | -12<br> | -12<br> | -12.3<br> | -12.344<br> |
| -1234.5678<br> | -1K<br> | -1K<br> | -1235<br> | -1234.6<br> |
| -0.1234<br> | -.1<br> | -.12<br> | -.123<br> | -0.1234<br> |




Back to [Conversion Processing](321577-conversion-processing)
