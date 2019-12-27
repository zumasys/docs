# MC  Conversion 

**Created At:** 6/8/2018 1:39:16 PM  
**Updated At:** 7/13/2018 12:54:58 PM  
**Original Doc:** [mc-conversion](https://docs.jbase.com/46351-conversion-processing/mc-conversion)  
**Original ID:** 321297  
**Internal:** No  


## Description

MC codes include facilities for:

- changing characters to upper or lower case
- extracting a class of characters
- replacing characters
- converting ASCII character codes to their hexadecimal or binary representations and vice versa
- converting a hexadecimal values to their decimal or binary equivalents and vice versa
- converting a decimal value to its equivalent in Roman numerals and vice versa


One source of confusion when using MC codes is that input conversion does not always invert the code. For most MC codes, if they are used in field 7 of the data definition record, the code will be applied in its original (un-inverted) form to the input data. For this reason you should always try to put MC codes into field 8 of the data definition record. The exceptions to this, where input conversion is effective, are clearly indicated in the following sections.



## MC Codes Summary 

MC codes are:


| MCA<br> | Extract only alphabetic characters<br> |
| --- | --- |
| MC/A<br> | Extract only non-alphabetic characters.<br> |
| MCAB{S}<br> | Convert ASCII character codes to binary representation. Use S to suppress spaces.<br> |
| MCAX or MX<br> | Convert ASCII character codes to hexadecimal representation.<br> |
| MCB<br> | Extract only alphabetic and numeric characters.<br> |
| MC/B<br> | Extract only special characters that are neither alphabetic nor numeric.<br> |
| MCBA<br> | Convert binary representation to ASCII characters.<br> |
| MCBX<br> | Convert a binary value to its hexadecimal equivalent.<br> |
| MCC;x;y<br> | Change all occurrences of character string x to character string y.<br> |
| MCDR<br> | Convert a decimal value to its equivalent Roman numerals. Input conversion is effective.<br> |
| MCDX or MCD<br> | Convert a decimal value to its hexadecimal equivalent. Input conversion is effective.<br> |
| MCL<br> | Convert all upper case letters (A-Z) to lower case.<br> |
| MCN<br> | Extract only numeric characters (0-9).<br> |
| MC/N<br> | Extract only non-numeric characters.<br> |
| MCNP{c}<br> | Convert paired hexadecimal digits preceded by a period or character c to ASCII code.<br> |
| MCP{c}<br> | Convert each non-printable character (X"00" - X"IF", X"80" - X"FB") to a period (.) or to character c.<br>System delimiters (X"FC" - X"FF") are always converted to their 7-bit ASCII character equivalents, i.e. "\", "]", "^", "\_" respectively.<br> |
| MCPN{c}<br> | Same as MCP but insert the two-character hexadecimal representation of the character immediately after the period or character c.<br> |
| MCRD or MCR<br> | Convert Roman numerals to the decimal equivalent. Input conversion is effective.<br> |
| MCT<br> | Convert all upper case letters (A-Z) in the text to lower case, starting with the second character in each word. Change the first character of each word to upper case if it is a letter.<br> |
| MCU<br> | Convert all lower case letters (a-z) to upper case.<br> |
| MCXA or MY<br> | Convert hexadecimal representation to ASCII characters.<br> |
| MCXB{S}<br> | Convert a hexadecimal value to its binary equivalent. Use S to suppress spaces between each block of 8 bytes.<br> |
| MCXD or MCX<br> | Convert a hexadecimal value to its decimal equivalent. Input conversion is effective.<br> |


### 


## Changing Case 

The MC codes that can be used to transform text from upper to lower case and vice versa are:


| MCL<br> | Convert all upper case letters (A-Z) to lower case<br> |
| MCT<br> | Convert all upper case letters (A-Z) in the text to lower case, starting with the second character in each word. Change the first character of each word to upper case.<br> |
| MCU<br> | Convert all lower case letters (a-z) to upper case.<br> |




## Input Conversion 

Input conversion does not invert. The conversion code will be applied to the input data.



### EXAMPLE 1

```
MCL
```

Assuming a source value of AbCdEf, MCL will return abcdef.



### EXAMPLE 2

```
MCT
```

Assuming a source value of AbC dEf "ghi, MCT will return Abc Def "ghi.



### EXAMPLE 3

```
MCU
```

Assuming a source value of AbCdEf, MCU will return ABCDEF.



## Extracting Values 

The MC codes that can be used to extract characters from a string are:


| MCA<br> | Extract only alphabetic characters.<br> |
| MC/A<br> | Extract only non-alphabetic characters.<br> |
| MCB<br> | Extract only alphanumeric characters.<br> |
| MC/B<br> | Extract only special characters that are neither alphabetic nor numeric.<br> |
| MCN<br> | Extract only numeric characters (0-9).<br> |
| MC/N<br> | Extract only non-numeric characters.<br> |




## Input Conversion 

Input conversion does not invert. The original code will be applied to input data.



### EXAMPLE 1

```
MCA
```

Assuming a source value of ABC\*123!DEF, MCA will return ABCDEF.



### EXAMPLE 2

```
MC/A
```

Assuming a source value of ABC\*123!DEF, MC/A will return \*123!.



### EXAMPLE 3

```
MCB
```

Assuming a source value of ABC\*123!DEF, MCB will return ABC123DEF.



### EXAMPLE 4

```
MC/B
```

Assuming a source value of ABC\*123!DEF, MC/B will return \*!.



### EXAMPLE 5

```
MCN
```

Assuming a source value of ABC\*123!DEF, MCN will return 123.



### EXAMPLE 6

```
MC/N
```

Assuming a source value of ABC\*123!DEF, MC/N will return ABC\*!DEF.



## Replacing Characters 

Some MC codes replace one set of characters with other characters. These codes can:

- exchange one character string for another
- replace non-printable characters with a marker character
- replace non-printable characters with a marker character and the character"s hexadecimal representation
- replace the marker and hexadecimal representation with the ASCII code



| MCC;x;y<br> | Change all occurrences of character string x to character string y.<br> |
| MCP{c}<br> | Convert each non-printable character (X"00" - X"IF", X"80" - X"FE") to character c, or period (.) if c is not specified.<br> |
| MCPN{c}<br> | Same as MCP but insert the two-character hexadecimal representation of the character immediately after character c, or tilde (~) if c is not specified.<br> |
| MCNP{c}<br> | Convert paired hexadecimal digits preceded by a tilde or character c to ASCII code. The opposite of the MCPN code.<br> |




### Input Conversion 

Input conversion does not invert. The original code will be applied to input data.



### EXAMPLE 1

```
MCC;X5X;YYY
```

Assuming a source value of ABC\*X5X!DEF, MCC will return ABC\*YYY!DEF.



### EXAMPLE 2

```
MCPN.
```

Assuming a source value of ABC]]DEF where ] represents a value mark, MCPN will return ABC.FC.FCDEF.



## Converting Characters 

The MC codes that convert ASCII character codes to their binary or hexadecimal representations or vice versa are:


| MCAB{S}<br> | Convert ASCII character codes to binary representation (Use S to suppress spaces).<br> |
| MCAX or MY<br> | Convert ASCII character codes to hexadecimal representation<br> |
| MCBA<br> | Convert binary representation to ASCII characters.<br> |
| MCXA or MX<br> | Convert hexadecimal representation to ASCII characters.<br> |




## Note: 


> The MCAB and MCABS codes convert each ASCII character to its binary equivalent as an eight-digit number. If there is more than one character, MCAB puts a blank space between each pair of eight-digit numbers. MCABS suppresses the spaces.


When converting from binary to ASCII characters, MCBA uses blank spaces as dividers, if they are present. MCBA scans from the right-hand end of the data searching for elements of "eight-bit" binary strings. If it encounters a space and the element is not eight binary digits long, it prepends zeros to the front of the number until it contains eight digits. This continues until the leftmost digit is reached. Zeros are again prepended, if necessary. Each eight-digit element is then converted to its ASCII character equivalent.



### INPUT CONVERSION

Input conversion does not invert. The original code will be applied to input data.



### EXAMPLE 1

```
MCAX
```

Assuming a source value of ABC, MCAX will return 414243.



### EXAMPLE 2

```
MCXA
```

Assuming a source value of 414243, MCXA will return ABC.



### EXAMPLE 3

```
MCAB
```

Assuming a source value of AB, MCAB will return 01000001 01000010.



### EXAMPLE 4

```
MCABS
```

Assuming a source value of AB, MCABS will return 0100000101000010.



### EXAMPLE 5

```
MCBA
```

Assuming a source value of 01000001 1000010, MCBA will return AB. Note the missing binary digit at the start of the second element of the source value.



### EXAMPLE 6

```
MCBA
```

Assuming a source value of 0100000101000010, MCBA will return AB.



### CONVERTING NUMERIC VALUES

The MC codes that convert numeric values (as opposed to characters), to equivalent values in other number schemes are:


| MCBX{S}<br> | Convert a binary value to its hexadecimal equivalent. Use S to suppress spaces.<br> |
| MCDR<br> | Convert a decimal value to its equivalent Roman numerals. Input conversion is effective.<br> |
| MCDX or MCD<br> | Convert a decimal value to its hexadecimal equivalent. Input conversion is effective.<br> |
| MCRD or MCR<br> | Convert Roman numerals to the decimal equivalent. Input conversion is effective.<br> |
| MCXB{S}<br> | Convert a hexadecimal value to its binary equivalent. Use S to suppress spaces.<br> |
| MCXD or MCX<br> | Convert a hexadecimal value to its decimal equivalent. Input conversion is effective.<br> |




## Note: 


> These codes convert numeric values rather than individual characters. For example, a decimal value of 60 would be converted to X"3C" in hexadecimal, or LX in Roman numerals. The value 60 is converted, not the characters "6" and "0".


With the exception of MCBX{S} which will handle spaces, all these codes will stop if they encounter a character that is not a digit of the source number system. The value up to the invalid character will be converted.With the exception of MCDR, if the conversion fails to find any valid digits, a zero will be returned. MCDR will return null.

If you submit an odd number of hexadecimal digits to the MCXB code, it will add a leading zero (to arrive at an even number of characters) before converting the value.

The MCXB and MCXBS codes convert each pair of hexadecimal digits to its binary equivalent as a eight-digit number. If there is more than one pair of hexadecimal digit, MCXB puts a blank space between each paid of eight-digit numbers. MCXBS suppresses the spaces.

When converting from binary to hexadecimal digits, MCBX uses blank spaces as dividers if they are present. MCBX effectively scans from the right-hand end of the data searching for elements of eight-bit binary digits. If it encounters a space and the element is not a multiple of eight binary digits, it prepends zeros to the front of the number until contains eight digits. This continues until the leftmost digit is reached. Zeros are again prepended, if necessary. Each eight-digit element is then converted to a hexadecimal character pair.



### INPUT CONVERSION

Input conversion is effective for MCDR, MCDX, MCRD and MCXD. Input conversion is not inverted for the other codes. The original code will be applied to input data.



### EXAMPLE 1

```
MCBX
```

Assuming a source value of 01000001 1000010, MCBX will return 4142. Would return the same value if there was no space between the binary source elements.



### EXAMPLE 2

```
MCRD
```

Assuming a source value of MLXVI, MCRD will return 1066.



### EXAMPLE 3

```
MCDX
```

Assuming a source value of 1066, MCDX will return 42A.



Back to [Conversion Processing](./../conversion-processing)
