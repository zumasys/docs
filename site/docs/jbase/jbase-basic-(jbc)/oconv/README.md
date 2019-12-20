# OCONV

**Created At:** 9/20/2017 2:50:33 PM  
**Updated At:** 5/17/2019 9:51:14 AM  
**Original Doc:** [277483-oconv](https://docs.jbase.com/36868-jbase-basic/277483-oconv)  

**Tags:**
<badge text='case' vertical='middle' />
<badge text='lower' vertical='middle' />
<badge text='upper' vertical='middle' />
<badge text='lower case to upper case' vertical='middle' />
<badge text='upper case to lower case' vertical='middle' />
<badge text='output formatting' vertical='middle' />

# Description

Use the **OCONV** statement to convert internal representations of data to their external form. The statement takes the general form:

```
OCONV(expression1, expression2)
```

Where **expression1** may evaluate to any data type but must be relevant to the conversion code. **expression2**should evaluate to a conversion code from the list below. Alternatively, **expression2** may evaluate to a user exit known to the jBASE BASIC language or supplied by the user.

# **INTERNATIONAL MODE**

Description of date, time, number and currency conversions same as when used in [ICONV](276153-iconv) and International Mode

## Note: 


> **OCONV**will return the result of the conversion of expression1 by expression2. Shown below are valid conversion codes:
> 
> 
> | Conversion<br> | Action<br> |
> | --- | --- |
> | D{n{c}}<br> | Converts an internal date to an external date format. The numeric argument n specifies the field width allowed for the year and can be 0 to 4 (default 4). The character c causes the date to be return in the form ddcmmcyyyy. If it is not specified the month name is return in abbreviated form.<br><br> |
> | DI<br> | Allow the conversion of an external date to the internal format even though an output conversion is expected.<br><br> |
> | DD<br> |  Returns the day in the current month.<br><br> |
> | DM<br> | Returns the number of the month in the year.<br><br> |
> | DMA<br> |  Returns the name of the current month.<br><br> |
> | DJ<br> | Returns the number of the day in the year (0-366).<br><br> |
> | DQ<br> | Returns the quarter of the year as a number 1 to 4<br><br> |
> | DW<br> | Returns the day of the week as a number 1 to 7 (Monday is 1).<br><br> |
> | DWA<br> | Returns the name of the day of the week.<br><br> |
> | DY{n}<br> | Returns the year in a field of n characters.<br><br> |
> | F<br> | Given a prospective filename for a command such as [CREATE-FILE](267387-create) this conversion will return a filename that is acceptable to the version of UNIX jBASE is running on.<br> |
> | MCA<br> | Removes all but the alphabetic characters from the input string.<br><br> |
> | MC/A<br> | Removes all but the non-alphabetic characters in the input string.<br><br> |
> | MCB<br> | Returns just the alphabetic and numeric characters from the input string<br><br> |
> | MCN<br> | Removes all but the numeric characters from the input string<br><br> |
> | MC/N<br> | Removes all but the non-numeric characters from the input string<br><br> |
> | MC/B<br> |  Remove all alphabetic and numeric characters from their input string.<br><br> |
> | MCC;s1;s2<br> | Replaces all occurrences of string s1 with string s2<br><br> |
> | MCL<br> | Converts all upper case characters in the string to lower case characters<br><br> |
> | MCU<br> | Converts all lower case characters in the string to upper case characters.<br><br> |
> | MCT<br> | Capitalizes each word in the input string; e.g. JIM converts to Jim<br><br> |
> | MCP{c}<br> | Converts all non-printable characters to a period character "." in the input string. When supplied use the character "c" in place of the period.<br><br> |
> | MCPN{n}<br> |  In the same manner as the MCP conversion, it replaces all non-printable characters. The ASCII hexadecimal value follows the replacing character.<br><br> |
> | MCNP{n}<br> | Performs the opposite conversion to MCPN. The ASCII hexadecimal value following the tilde character converts to its original binary character value.<br><br> |
> | MCDX<br> | Converts the decimal value in the input string to its hexadecimal equivalent.<br><br> |
> | MCXD<br> | Converts the hexadecimal value in the input string to its decimal equivalent.<br><br> |
> | Gncx<br> |  Extracts x groups separated by character c skipping n groups, from the input string.<br> |
> | MT{HS}<br> |  Performs time conversions.<br><br> |
> | MD<br> | Converts the supplied integer value to a decimal value.<br> |
> | MP<br> | Converts a packed decimal number to an integer value.<br> |
> | MX<br> | Converts ASCII input to hexadecimal characters.<br><br> |
> | T<br> | Performs file translations given a cross-reference table in a record in a file.<br> |




Go back to [jBASE BASIC](263498-jbase-basic).
