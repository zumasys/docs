# D Conversion

**Created At:** 6/8/2018 1:24:40 PM  
**Updated At:** 7/12/2018 1:41:49 PM  

**Tags:**
<badge text='date conversion' vertical='middle' />

# Description 

Converts dates between internal and external format. It takes the general form:

```
D{p}{n}{s}
```

where:

- p is the special processing operator. Can be any one of the following:

| Operator<br> |  Description<br> |
| --- | --- |
| D<br> | Returns only the day of the month as a numeric value.<br> |
| I<br> | Returns only dates stored in the external format in internal format. You can use this in field 7 or 8.<br> |
| J<br> | Returns the Julian day (1 - 365, or 1 - 366 for a leap year).<br> |
| M<br> | Returns the number of the month (1 - 12).<br> |
| MA<br> | Returns the name of the month in uppercase letters.<br> |
| Q<br> | Returns the number of the quarter (1 - 4)<br> |
| W<br> | Returns the day of the week as a numeric value (Monday is 1).<br> |
| WA<br> | Returns the day of the week in uppercase letters (MONDAY - SUNDAY).<br> |
| Y<br> | Returns the year (up to four digits).<br> |
- n is a number from 0 to 4 that specifies the how many digits to use for the year field. If omitted, the year will have four-digits. If n is 0, the year will be suppressed.
- s is a non-numeric character to be used as a separator between month, date, and year. Must not be one of the special processing operators.




## Note: 


> Dates are stored internally as integers which represent the number of days (plus or minus) from the base date of December 31, 1967. For example:



| <br><br>| Date<br> | Stored Value<br> |<br>| --- | --- |<br>| 22 September 1967<br> | -100<br> |<br>| 30 December 1967<br> | -1<br> |<br>| 31 December 1967<br> | 0<br> |<br>| 01 January 1968<br> | 1<br> |<br>| 09 April 1968<br> | 100<br> |<br>| 26 September 1967<br> | 1000<br> |<br>| 14 January 1995<br> | 9876<br> |<br>| 29 February 2000<br> | 11748<br> |<br><br> |
| --- |


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



### EXAMPLES


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




Back to [Conversion Processing](321577-conversion-processing)
