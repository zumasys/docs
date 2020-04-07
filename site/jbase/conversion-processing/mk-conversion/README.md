# MK Conversion

<PageHeader />

## Description

The MK code allows you to display large numbers in a minimum of columns by automatically descaling the numbers and appending a letter to represent the power of 10 used. The letters and their meanings are:

K 10 /3 (Kilo)
M 10 /6(Mega)
G 10 /9 (Giga)

It's general form is as:

```
MKn
```

where **n** is a number that represents the field width. This will include the letter and a minus sign, if present.

## Note

> If a number will fit into the specified field width, it will not be changed.
>
> If the number is too long but includes a decimal fraction, the MK code first attempts to round the fractional part so that the number will fit the field. If the number is still too long, the code rounds off the three low-order integer digits, replacing them with a K. If the number is still too long, the code rounds off the next three digits, replacing them with an M. If that is still too long, the code rounds off three more digits, replacing them with a G. If the number still does not fit the specified field, the code displays an asterisk.
>
> If the field size is not specified or is zero, the code outputs null.

## Input Conversion

Input conversion does not invert. It simply applies the metric processing to the input data.

### Examples

| Source Data | MK3 | MK4 | MK5 | MK7 |
| --- | --- | --- | --- | --- |
| 1234 | 1K | 1234 | 1234 | 1234 |
| 123456789 | \* | 123M | 123M | 123457K |
| 123456789012345 | \* | \* | \* | 123457G |
| 999.9 | 1K | 1000 | 999.9 | 999.9 |
| -12.343567 | -12 | -12 | -12.3 | -12.344 |
| -1234.5678 | -1K | -1K | -1235 | -1234.6 |
| -0.1234 | -.1 | -.12 | -.123 | -0.1234 |

Back to [Conversion Processing](./../conversion-processing)
