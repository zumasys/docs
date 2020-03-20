# ML/MR Conversions

**Created At:** 6/8/2018 1:43:31 PM  
**Updated At:** 7/13/2018 12:57:18 PM  
**Original Doc:** [ml-mr-conversions](https://docs.jbase.com/46351-conversion-processing/ml-mr-conversions)  
**Original ID:** 321301  
**Internal:** No  

## Description

ML and MR codes format numbers and justify the result to the left or right respectively. The codes provide the following capabilities:

- Decimal precision and scaling
- Zero suppression
- Thousands separator
- Credit codes
- Currency symbol
- Inclusion of literal character strings.

```
ML{n{m}}{Z}{,}{c}{$}{fm}
```

```
MR{n{m}}{Z}{,}{c}{$}{fm}
```

where:

- **ML** provides left justification of the result.
- **MR** provides right justification of the result.
- **n** is a number from 0 to 9 that defines the decimal precision. It specifies the number of digits to be output following the decimal point. The processor inserts trailing zeros if necessary. If **n** is omitted or is 0, a decimal point will not be output.
- **m** is a number that defines the scaling factor. The source value is descaled (divided) by that power of 10. For example, if **m**=1, the value is divided by 10; if **m**=2, the value is divided by 100, and so on. If **m** is omitted, it is assumed to be equal to n (the decimal precision).
- **Z** suppresses leading zeros. Note that fractional values which have no integer will have a zero before the decimal point. If the value is zero, a null will be output.
- **,** is the thousands separator symbol. It specifies insertion of thousands separators every three digits to the left of the decimal point. You can change the display separator symbol by invoking the **SET-THOU** command. Use the **SET-DEC** command to specify the decimal separator.
- **c** appends a credit character or encloses the value in angle brackets (&lt; &gt;), and can be any of:  

| Code | Function |
| --- | --- |
| C | Print the literal CR after negative values. |
| D | Print the literal DB after positive values. |
| E | Enclose negative values in angle brackets &lt; &gt; |
| M | Print a minus sign **after** negative values. |
| N | Suppresses embedded minus sign. |

If a value is negative and you have not specified one of these indicators, the value will be displayed with a leading minus sign. If you specify a credit indicator, the data will be output with either the credit characters or an equivalent number of spaces, depending on its value.

- **$** specifies that a currency symbol is to be included. A floating currency symbol is placed in front of the value. The currency symbol is specified through the SET-MONEY command.
- **fm** specifies a format mask. A format mask can include literal characters as well as format codes. The format codes are as follows:

| Code | Function |
| --- | --- |
| #{n} | Spaces. Repeat space n times. Output value is overlaid on the spaces created. |
| \*{n} | Asterisk. Repeat asterisk n times. Output value is overlaid on the asterisks created. |
| %{n} | Zero. Repeat zeros n times. Output value is overlaid on the zeros created. |
| &x | Format. x can be any of the above format codes, a currency symbol, a space, or literal text. The first character following & is used as the default fill character to replace #n fields without data. Format strings may be enclosed in parentheses "( )". |

## Note

> The justification specified by the ML or MR code is applied at a different stage from that specified in field 9 of the data definition record. The sequence of events starts with the data being formatted with the symbols, filler characters and justification (left or right) specified by the ML or MR code. The formatted data is then justified according to field 9 of the definition record and overlaid on the output field - which initially comprises the number of spaces specified in field 10 of the data definition record.

## Input Conversion

Input conversion works with a number that has only thousands separators and a decimal point.

### Examples

| Conversion Code | Source Value | Dict Fields 9 and 10 | Returned Value (columns)12345678901234567890 |
| --- | --- | --- | --- |
| MR2#10 | 1234 | L 15 | 12.34 |
| MR2#10 | 1234 | R 15 | 12.34 |
| ML2%10 | 1234 | L 15 | 12.3400000 |
| MR2%10 | 1234 | R 15 | 0000012.34 |
| ML2\*10 | 1234 | L 15 | 12.34\*\*\*\*\* |
| MR2\*10 | 1234 | R 15 | \*\*\*\*\*12.34 |
| MR2,$#15 | 12345678 | L 20 |  #123,456.78 |
| MR2,&$#15 | 12345678 | L 20 | #####123,456.78 |
| ML2,&\*$#15 | 12345678 | L 20 | #123,456.78\*\*\*\*\* |
| MR2,& $#15 | 12345678 | L 20 | #     123,456.78 |
| MR2,C&\*$#15 | -12345678 | L 20 | #\*\*\*123,456.78CR |
| ML& ###-##-### | 123456789 | L 12 | 123-45-6789 |
| ML& #3-#2-#4 | 123456789 | L 12 | 123-45-6789 |
| ML& Text #2-#3 | 12345 |  | Text 12-345 |
| ML& ((Text#2) #3) | 12345 |  | `(Text12) 345` |

In the last example, the leading and trailing parenthesis are ignored.

Back to [Conversion Processing](./../conversion-processing)
