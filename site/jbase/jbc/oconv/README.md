# OCONV

**Created At:** 9/20/2017 2:50:33 PM  
**Updated At:** 5/17/2019 9:51:14 AM  
**Original Doc:** [277483-oconv](https://docs.jbase.com/36868-jbase-basic/277483-oconv)  
**Original ID:** 277483  
**Internal:** No  

**Tags:**
<badge text='case' vertical='middle' />
<badge text='lower' vertical='middle' />
<badge text='upper' vertical='middle' />
<badge text='lower case to upper case' vertical='middle' />
<badge text='upper case to lower case' vertical='middle' />
<badge text='output formatting' vertical='middle' />

## Description

Use the **OCONV** statement to convert internal representations of data to their external form. The statement takes the general form:

```
OCONV(expression1, expression2)
```

Where **expression1** may evaluate to any data type but must be relevant to the conversion code. **expression2** should evaluate to a conversion code from the list below.

Alternatively, **expression2** may evaluate to a user exit known to the jBASE BASIC language or supplied by the user.

## International Mode

Description of date, time, number and currency conversions same as when used in [ICONV](./../iconv) and International Mode

### Note

**OCONV** will return the result of the conversion of **expression1** by **expression2**.

Shown below are valid conversion codes:

 | Conversion | Action |
 | --- | --- |
 | D{n{c}} | Converts an internal date to an external date format. The numeric argument n specifies the field width allowed for the year and can be 0 to 4 (default 4). The character c causes the date to be return in the form ddcmmcyyyy. If it is not specified the month name is return in abbreviated form. |
 | DI | Allow the conversion of an external date to the internal format even though an output conversion is expected. |
 | DD |  Returns the day in the current month. |
 | DM | Returns the number of the month in the year. |
 | DMA |  Returns the name of the current month. |
 | DJ | Returns the number of the day in the year (0-366). |
 | DQ | Returns the quarter of the year as a number 1 to 4 |
 | DW | Returns the day of the week as a number 1 to 7 (Monday is 1). |
 | DWA | Returns the name of the day of the week. |
 | DY{n} | Returns the year in a field of n characters. |
 | F | Given a prospective filename for a command such as [CREATE-FILE](./../create) this conversion will return a filename that is acceptable to the version of UNIX jBASE is running on. |
 | MCA | Removes all but the alphabetic characters from the input string. |
 | MC/A | Removes all but the non-alphabetic characters in the input string. |
 | MCB | Returns just the alphabetic and numeric characters from the input string |
 | MCN | Removes all but the numeric characters from the input string |
 | MC/N | Removes all but the non-numeric characters from the input string |
 | MC/B |  Remove all alphabetic and numeric characters from their input string. |
 | MCC;s1;s2 | Replaces all occurrences of string s1 with string s2 |
 | MCL | Converts all upper case characters in the string to lower case characters |
 | MCU | Converts all lower case characters in the string to upper case characters. |
 | MCT | Capitalizes each word in the input string; e.g. JIM converts to Jim |
 | MCP{c} | Converts all non-printable characters to a period character "." in the input string. When supplied use the character "c" in place of the period. |
 | MCPN{n} |  In the same manner as the MCP conversion, it replaces all non-printable characters. The ASCII hexadecimal value follows the replacing character. |
 | MCNP{n} | Performs the opposite conversion to MCPN. The ASCII hexadecimal value following the tilde character converts to its original binary character value. |
 | MCDX | Converts the decimal value in the input string to its hexadecimal equivalent. |
 | MCXD | Converts the hexadecimal value in the input string to its decimal equivalent. |
 | Gncx |  Extracts x groups separated by character c skipping n groups, from the input string. |
 | MT{HS} |  Performs time conversions. |
 | MD | Converts the supplied integer value to a decimal value. |
 | MP | Converts a packed decimal number to an integer value. |
 | MX | Converts ASCII input to hexadecimal characters. |
 | T | Performs file translations given a cross-reference table in a record in a file. |

Go back to [jBASE BASIC](./../README.md)
