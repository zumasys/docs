# DOWNCASE / UPCASE

**Created At:** 8/23/2017 2:14:41 PM  
**Updated At:** 10/25/2018 7:48:17 AM  
**Original Doc:** [268490-downcase-upcase](https://docs.jbase.com/36868-jbase-basic/268490-downcase-upcase)  

**Tags:**
<badge text='string casing' vertical='middle' />

# Description

**DOWNCASE** converts all uppercase characters in an expression to lowercase characters.

**UPCASE** converts all lowercase characters in an expression to uppercase characters. It takes the general form:

```
DOWNCASE|LOWCASE(expression)
```

Or

```
UPCASE(expression)
```

Where **expression** in a string containing some alphabetic characters. It ignores Non-alphabetic characters.

When used in International Mode, the conversion from upper case to lower case or vice versa will be determined for each character in the expression by the Unicode standard, which describes the up or down case properties for the character.



Go back to [jBASE BASIC](263498-jbase-basic).


