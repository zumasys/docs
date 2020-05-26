# Output Formatting

<PageHeader />

Performs formatting of output data values for use with  [PRINT](./../print/README.md) and  [CRT](./../crt/README.md) commands.

## Command Syntax

Variable MaskExpression

Also see: [FMT](./../fmt/README.md)

## Syntax Elements

```
MaskExpression Numeric Mask Codes: [j][n][m][Z][,][c][$][Fill Character][Length]
```

| Mask Code | Description | Notes |
| --- | --- | --- |
| j | Justification | |
|   | R   | Right Justified |
|   | L   | Left Justified |
|   | T   | Left Justified, Break on space.<br>**Note:** This justification will format the output into blocks of data in the variable and it is up to the programmer to actually separate the blocks. |
|   | D    | Date (see [OCONV](./../oconv/README.md)) |  
| n |      | Decimal Precision:<br>A number from 0 to 9 that defines the decimal precision.<br>It specifies the number of digits to be output following the decimal point. The processor inserts trailing zeros if necessary. If **n** is omitted or is 0, a decimal point will not be output. |
| m |      | Scaling Factor:<br>A number that defines the scaling factor.<br>The source value is descaled (divided) by that power of 10. For example, if m=1, the value is divided by 10; if m=2, the value is divided by 100, and so on. If **m** is omitted, it is assumed to be equal to **n** (the decimal precision). |  
| Z |      | Suppress leading zeros.<br>**Note:** that fractional values which have no integer will have a zero before the decimal point. If the value is zero, a null will be output. |
| , |      | The thousands separator symbol. It specifies insertion of thousands separators every three digits to the left of the decimal point.<br>You can change the display separator symbol by invoking the SET-THOU command.<br>Use the SET-DEC command to specify the decimal separator.<br>If [JBASE_LOCALE](./../../environment-variables/jbase_locale/README.md) is set correctly, then the thousand and decimal separators will be defined automatically. |  
| c  |     |Credit Indicator.<br>**Note:** If a value is negative and you have not specified one of these indicators, the value will be displayed with a leading minus sign.<br>If you specify a credit indicator, the data will be output with either the credit characters or an equivalent number of spaces, depending on its value. |  
|    | C   | Print the literal CR after negative values. |  
|    | D   | Print the literal DB after positive values. |
|    | E   | Enclose negative values in angle brackets < > |
|    | M   | Print a minus sign **after** negative values. |
|    | N   | Suppresses embedded minus sign. |
| $  |     | Appends a Dollar sign to value. |  
| Fill Character and Length | #n | Spaces. Repeat space n times. Output value is overlaid on the spaces created. |
|                           | *n | Asterisk. Repeat asterisk n times. Output value is overlaid on the asterisks created. |
|                           | %n | Zero. Repeat zeros n times. Output value is overlaid on the zeros created. |
|                           | &x | Format. x can be any of the above format codes, a currency symbol, a space, or literal text.<br>The first character following & is used as the default fill character to replace #n fields without data. Format strings may be enclosed in parentheses "( )". |

## Examples

```
Mask                    Source                                                  Returned Value (columns)
Expression              Value  
----------              -------                                                 123456789012345678901234567890123456789012345678901234567890
R2#10                   1234.56                                                    1234.56  
L2%10                   1234.56                                                 1234.56000  
R2%10                   1234.56                                                 0001234.56  
L2*10                   1234.56                                                 12.34*****  
R2*10                   1234.56                                                 *****12.34  
R2,$#15                 123456.78                                                   $123,456.78  
R2,&$#15                123456.78                                               $$$$$123,456.78  
R2,& $#15               123456.78                                               $     123,456.78  
R2,C&*$#15              -123456.78                                              $***123,456.78CR  
R((###) ###-###)        1234567890                                              (123) 456-7890  
R((#3) #2-#4)           1234567890                                              (123) 456-7890  
L& Text #2-#3           12345                                                   Text 12-345  
L& ((Text#2) #3)        12345                                                   (Text12) 345  
T#20                    This is a test of the American Broadcasting System      This is a test of   the American        Broadcasting System  
D4/                     12260                                                   07/25/2001  
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
