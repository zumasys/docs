# BITLOAD

**Created At:** 11/3/2017 2:08:40 PM  
**Updated At:** 1/5/2018 6:46:03 PM  
**Original Doc:** [284134-bitload](https://docs.jbase.com/36868-jbase-basic/284134-bitload)  
**Original ID:** 284134  
**Internal:** No  

## Description

**BITLOAD** assigns all values in the local bit table, or retrieves all the values. It takes the general form:

```
BITLOAD({bit-string})
```

Where:

**bit-string** is an ASCII string of characters, which represent a hexadecimal value. It is interpreted as a bit pattern and used to assign values to the table from left to right. Assignment stops at the end of the string or when a non-hexadecimal character is found.
If the string represents less than 128 bits, the remaining bits in the table are reset to 0 (zero).
If **bit-string** is omitted or evaluates to null, an ASCII hex character string is returned, which defines the value of the table. Trailing zeroes in the string are truncated.

A unique table of 128 bits (numbered 1 to 128) is maintained for each process. Each bit in the table is treated as a two-state flag - the value will always be 0 (zero) or 1.

An example of use would be as:

```
NEW.VALUE = "0123456789ABCDEF"
OLD.VALUE = BITLOAD(X)
```

to load the bit table with the value of ASCII hex string NEW.VALUE
After assignment, the contents of the bit table are as:

```
0000 0001 0010 0011
0100 0101 0110 0111
1000 1001 1010 1011
1100 1101 1110 1111
0000 0000 0000 0000
0000 0000 0000 0000
0000 0000 0000 0000
0000 0000 0000 0000
```

Note that all values beyond the 64th bit have been reset to 0 (zero).

Another example would be as:

```
TABLE.VALUE = BITLOAD()
```

to load the variable TABLE.VALUE with the hexadecimal values of the bit table.

Go back to [jBASE BASIC](./../README.md)
