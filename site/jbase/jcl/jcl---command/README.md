# jCL - command

**Created At:** 5/28/2018 9:55:18 AM  
**Updated At:** 6/11/2018 4:30:00 AM  
**Original Doc:** [318587-jcl-command](https://docs.jbase.com/45792-jcl/318587-jcl-command)  
**Original ID:** 318587  
**Internal:** No  

**Tags:**
<badge text='buffer' vertical='middle' />
<badge text='input' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description

The - command subtracts an integer from the current parameter in the active input buffer. It takes the general form:

```
-n
```

Where n is the integer to be subtracted.

## Note

> If the number of characters within a parameter decreases with a - command, the result is prefixed with zeros to maintain the same number of characters as the original value. Parameters within the input buffer can be preceded by a minus sign. If the buffer pointer is at the end of the buffer, a new parameter will be created. If the referenced parameter is non-numeric, a zero is used.

### Example 1

Command PIB Before PIB After

```
-300 AAA^345^666 AAA^045^666
a a
```

### Example 2

Command PIB Before PIB After

```
-20 AAA^ABC^666 AAA^-20^666
a a
```

### Example 3

Command PIB Before PIB After

```
-50 AAA^-50^666 AAA^-100^666
a a
```

### Example 4

```
001 PQN
002 OEnter a number+
003 S5
004 IBP
005 +7
006 T %5
007 -3
008 T %5
009 RTN
```

This example receives input from the terminal and places it in the 5th parameter of the primary input buffer. It adds 7 to the value stored in the 5th parameter and displays the result. It then subtracts 3 from the result and displays the new value.

Back to [jCL Commands](./../README.md)
