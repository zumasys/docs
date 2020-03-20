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

| <!----> | <!----> |
| --- | --- |
| MCA | Extract only alphabetic characters |
| MC/A | Extract only non-alphabetic characters. |
| MCAB{S} | Convert ASCII character codes to binary representation. Use S to suppress spaces. |
| MCAX or MX | Convert ASCII character codes to hexadecimal representation. |
| MCB | Extract only alphabetic and numeric characters. |
| MC/B | Extract only special characters that are neither alphabetic nor numeric. |
| MCBA | Convert binary representation to ASCII characters. |
| MCBX | Convert a binary value to its hexadecimal equivalent. |
| MCC;x;y | Change all occurrences of character string x to character string y. |
| MCDR | Convert a decimal value to its equivalent Roman numerals. Input conversion is effective. |
| MCDX or MCD | Convert a decimal value to its hexadecimal equivalent. Input conversion is effective. |
| MCL | Convert all upper case letters (A-Z) to lower case. |
| MCN | Extract only numeric characters (0-9). |
| MC/N | Extract only non-numeric characters. |
| MCNP{c} | Convert paired hexadecimal digits preceded by a period or character c to ASCII code. |
| MCP{c} | Convert each non-printable character (X"00" - X"IF", X"80" - X"FB") to a period (.) or to character c.<br>System delimiters (X"FC" - X"FF") are always converted to their 7-bit ASCII character equivalents, i.e. "\", "]", "^", "\_" respectively. |
| MCPN{c} | Same as MCP but insert the two-character hexadecimal representation of the character immediately after the period or character c. |
| MCRD or MCR | Convert Roman numerals to the decimal equivalent. Input conversion is effective. |
| MCT | Convert all upper case letters (A-Z) in the text to lower case, starting with the second character in each word. Change the first character of each word to upper case if it is a letter. |
| MCU | Convert all lower case letters (a-z) to upper case. |
| MCXA or MY | Convert hexadecimal representation to ASCII characters. |
| MCXB{S} | Convert a hexadecimal value to its binary equivalent. Use S to suppress spaces between each block of 8 bytes. |
| MCXD or MCX | Convert a hexadecimal value to its decimal equivalent. Input conversion is effective. |

## Changing Case

The MC codes that can be used to transform text from upper to lower case and vice versa are:

| <!----> | <!----> |
| --- | --- |
| MCL | Convert all upper case letters (A-Z) to lower case |
| MCT | Convert all upper case letters (A-Z) in the text to lower case, starting with the second character in each word. Change the first character of each word to upper case. |
| MCU | Convert all lower case letters (a-z) to upper case. |

## Input Conversion #1

Input conversion does not invert. The conversion code will be applied to the input data.

### Example 1a

```
MCL
```

Assuming a source value of AbCdEf, MCL will return abcdef.

### Example 2a

```
MCT
```

Assuming a source value of AbC dEf "ghi, MCT will return Abc Def "ghi.

### Example 3a

```
MCU
```

Assuming a source value of AbCdEf, MCU will return ABCDEF.

## Extracting Values

The MC codes that can be used to extract characters from a string are:

| <!----> | <!----> |
| --- | --- |
| MCA | Extract only alphabetic characters. |
| MC/A | Extract only non-alphabetic characters. |
| MCB | Extract only alphanumeric characters. |
| MC/B | Extract only special characters that are neither alphabetic nor numeric. |
| MCN | Extract only numeric characters (0-9). |
| MC/N | Extract only non-numeric characters. |

## Input Conversion #2

Input conversion does not invert. The original code will be applied to input data.

### Example 1b

```
MCA
```

Assuming a source value of ABC\*123!DEF, MCA will return ABCDEF.

### Example 2b

```
MC/A
```

Assuming a source value of ABC\*123!DEF, MC/A will return \*123!.

### Example 3b

```
MCB
```

Assuming a source value of ABC\*123!DEF, MCB will return ABC123DEF.

### Example 4b

```
MC/B
```

Assuming a source value of ABC\*123!DEF, MC/B will return \*!.

### Example 5b

```
MCN
```

Assuming a source value of ABC\*123!DEF, MCN will return 123.

### Example 6b

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

| <!----> | <!----> |
| --- | --- |
| MCC;x;y | Change all occurrences of character string x to character string y. |
| MCP{c} | Convert each non-printable character (X"00" - X"IF", X"80" - X"FE") to character c, or period (.) if c is not specified. |
| MCPN{c} | Same as MCP but insert the two-character hexadecimal representation of the character immediately after character c, or tilde (~) if c is not specified. |
| MCNP{c} | Convert paired hexadecimal digits preceded by a tilde or character c to ASCII code. The opposite of the MCPN code. |

### Input Conversion #3

Input conversion does not invert. The original code will be applied to input data.

### Example 1c

```
MCC;X5X;YYY
```

Assuming a source value of ABC\*X5X!DEF, MCC will return ABC\*YYY!DEF.

### Example 2c

```
MCPN.
```

Assuming a source value of ABC]]DEF where ] represents a value mark, MCPN will return ABC.FC.FCDEF.

## Converting Characters

The MC codes that convert ASCII character codes to their binary or hexadecimal representations or vice versa are:

| <!----> | <!----> |
| --- | --- |
| MCAB{S} | Convert ASCII character codes to binary representation (Use S to suppress spaces). |
| MCAX or MY | Convert ASCII character codes to hexadecimal representation |
| MCBA | Convert binary representation to ASCII characters. |
| MCXA or MX | Convert hexadecimal representation to ASCII characters. |

## Note #1

> The MCAB and MCABS codes convert each ASCII character to its binary equivalent as an eight-digit number. If there is more than one character, MCAB puts a blank space between each pair of eight-digit numbers. MCABS suppresses the spaces.

When converting from binary to ASCII characters, MCBA uses blank spaces as dividers, if they are present. MCBA scans from the right-hand end of the data searching for elements of "eight-bit" binary strings. If it encounters a space and the element is not eight binary digits long, it prepends zeros to the front of the number until it contains eight digits. This continues until the leftmost digit is reached. Zeros are again prepended, if necessary. Each eight-digit element is then converted to its ASCII character equivalent.

### Input Conversion #4

Input conversion does not invert. The original code will be applied to input data.

### Example 1d

```
MCAX
```

Assuming a source value of ABC, MCAX will return 414243.

### Example 2d

```
MCXA
```

Assuming a source value of 414243, MCXA will return ABC.

### Example 3d

```
MCAB
```

Assuming a source value of AB, MCAB will return 01000001 01000010.

### Example 4d

```
MCABS
```

Assuming a source value of AB, MCABS will return 0100000101000010.

### Example 5d

```
MCBA
```

Assuming a source value of 01000001 1000010, MCBA will return AB. Note the missing binary digit at the start of the second element of the source value.

### Example 6d

```
MCBA
```

Assuming a source value of 0100000101000010, MCBA will return AB.

### Converting numeric values

The MC codes that convert numeric values (as opposed to characters), to equivalent values in other number schemes are:

| <!----> | <!----> |
| --- | --- |
| MCBX{S} | Convert a binary value to its hexadecimal equivalent. Use S to suppress spaces. |
| MCDR | Convert a decimal value to its equivalent Roman numerals. Input conversion is effective. |
| MCDX or MCD | Convert a decimal value to its hexadecimal equivalent. Input conversion is effective. |
| MCRD or MCR | Convert Roman numerals to the decimal equivalent. Input conversion is effective. |
| MCXB{S} | Convert a hexadecimal value to its binary equivalent. Use S to suppress spaces. |
| MCXD or MCX | Convert a hexadecimal value to its decimal equivalent. Input conversion is effective. |

## Note #2

> These codes convert numeric values rather than individual characters. For Example, a decimal value of 60 would be converted to X"3C" in hexadecimal, or LX in Roman numerals. The value 60 is converted, not the characters "6" and "0".

With the exception of MCBX{S} which will handle spaces, all these codes will stop if they encounter a character that is not a digit of the source number system. The value up to the invalid character will be converted.With the exception of MCDR, if the conversion fails to find any valid digits, a zero will be returned. MCDR will return null.

If you submit an odd number of hexadecimal digits to the MCXB code, it will add a leading zero (to arrive at an even number of characters) before converting the value.

The MCXB and MCXBS codes convert each pair of hexadecimal digits to its binary equivalent as a eight-digit number. If there is more than one pair of hexadecimal digit, MCXB puts a blank space between each paid of eight-digit numbers. MCXBS suppresses the spaces.

When converting from binary to hexadecimal digits, MCBX uses blank spaces as dividers if they are present. MCBX effectively scans from the right-hand end of the data searching for elements of eight-bit binary digits. If it encounters a space and the element is not a multiple of eight binary digits, it prepends zeros to the front of the number until contains eight digits. This continues until the leftmost digit is reached. Zeros are again prepended, if necessary. Each eight-digit element is then converted to a hexadecimal character pair.

### Input Conversion #5

Input conversion is effective for MCDR, MCDX, MCRD and MCXD. Input conversion is not inverted for the other codes. The original code will be applied to input data.

### Example 1e

```
MCBX
```

Assuming a source value of 01000001 1000010, MCBX will return 4142. Would return the same value if there was no space between the binary source elements.

### Example 2e

```
MCRD
```

Assuming a source value of MLXVI, MCRD will return 1066.

### Example 3e

```
MCDX
```

Assuming a source value of 1066, MCDX will return 42A.

Back to [Conversion Processing](./../conversion-processing)
