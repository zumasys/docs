# D Conversion

**Created At:** 6/8/2018 1:24:40 PM  
**Updated At:** 7/12/2018 1:41:49 PM  
**Original Doc:** [321289-d-conversion](https://docs.jbase.com/46351-conversion-processing/321289-d-conversion)  
**Original ID:** 321289  
**Internal:** No  

**Tags:**
<badge text='date conversion' vertical='middle' />

## Description

Converts dates between internal and external format. It takes the general form:

```
D{p}{n}{s}
```

where:

- **p** is the special processing operator. Can be any one of the following:

| Operator |  Description |
| --- | --- |
| D | Returns only the day of the month as a numeric value. |
| I | Returns only dates stored in the external format in internal format. You can use this in field 7 or 8. |
| J | Returns the Julian day (1 - 365, or 1 - 366 for a leap year). |
| M | Returns the number of the month (1 - 12). |
| MA | Returns the name of the month in uppercase letters. |
| Q | Returns the number of the quarter (1 - 4) |
| W | Returns the day of the week as a numeric value (Monday is 1). |
| WA | Returns the day of the week in uppercase letters (MONDAY - SUNDAY). |
| Y | Returns the year (up to four digits). |

- **n** is a number from 0 to 4 that specifies the how many digits to use for the year field. If omitted, the year will have four-digits. If **n** is 0, the year will be suppressed.
- **s** is a non-numeric character to be used as a separator between month, date, and year. Must not be one of the special processing operators.

## Note

> Dates are stored internally as integers which represent the number of days (plus or minus) from the base date of December 31, 1967. For example:

| Date | Stored Value |
| --- | --- |
| 22 September 1967 | -100 |
| 30 December 1967 | -1 |
| 31 December 1967 | 0 |
| 01 January 1968 | 1 |
| 09 April 1968 | 100 |
| 26 September 1967 | 1000 |
| 14 January 1995 | 9876 |
| 29 February 2000 | 11748 |
| 07 January 2020 | 19000 |

If a special processing operator, or an output separator , the default output format is two-digit day, a space, a three-character month, a space, and a four-digit year. If just an output separator is specified, the date format defaults either to the US numeric format "mm/dd/yyyy" or to the international numeric format "dd/mm/yyyy" (where / is the separator). The numeric format can be changed for the duration of a logon session with the DATE-FORMAT command.

### Pre-processor Conversion

Field 8 codes are valid but, generally, it is easier to specify the D code in field 7 for input conversion. Dates in output format are difficult to use in selection processing.

If you are going to use selection processing and you want to use a code which reduces the date to one of its parts, such as DD (day of month), the D code must be specified in field 8.

### Input/output Conversion

Field 7 input and output conversions are both valid.

Generally, for selection processing, you should specify D codes in field 7. An exception is when you use a formatting code, such as DM, that reduces the date to one of its parts.

If no year is specified in the sentence, the system assumes the current year on input conversion. If only the last two digits of the year are specified, the system assumes the following years:

00-29: 2000 - 2029

30-99: 1930 -1999

### Examples

| D Code | Internal Value | Value Returned |
| --- | --- | --- |
| D | 9904 | 11 FEB 1995 |
| D2/ | 9904 | 11/02/95 |
| D- | 9904 | 11-02-1995 |
| D0 | 9904 | 11 FEB |
| DD | 9904 | 11 |
| DI | 11 FEB 1995 | 9904 |
| DJ | 9904 | 41 |
| DM | 9904 | 2 |
| DMA | 9904 | FEB |
| DQ | 9904 | 1 |
| DW | 9904 | 6 |
| DWA | 9904 | SATURDAY |
| DY | 9904 | 1995 |
| DY2 | 9904 | 95 |

Back to [Conversion Processing](./../conversion-processing)
