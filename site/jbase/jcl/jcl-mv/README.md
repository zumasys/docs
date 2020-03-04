# jCL MV

**Created At:** 5/28/2018 11:13:58 AM  
**Updated At:** 6/1/2018 5:34:40 PM  
**Original Doc:** [318730-jcl-mv](https://docs.jbase.com/45792-jcl/318730-jcl-mv)  
**Original ID:** 318730  
**Internal:** No

**Tags:**
<badge text='registers' vertical='middle' />
<badge text='select' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description

This command copies data between buffers or between buffers and select registers. It takes the general form:

```
MV destination source{,source}...{,*{n}}{,_}
```

or

```
MV destination source{*source}...
```

where :

- **destination** is a direct or indirect reference to the destination buffer or select registers which is to receive that data.
- **source** is the data you want to copy. Can be a direct or indirect reference to a buffer or select register, or a literal string enclosed in single or double quotes.
- **,\***  copies all source parameters starting with the specified parameter. If \* is the last operand in the source field, the destination buffer or select register will be truncated after the last copied parameter.
- **,\*n**  copies the number of source parameters specified by n starting with the specified parameter. The destination buffer or select register will not be truncated.
- **,-**  specifies that the destination is to be truncated after the source is copied.
- **\*source** specifies the source values are to be concatenated into one field in the destination buffer or select register.

## Note

> If the source is a literal string containing just two double quotes, the destination will be nulled. If the input buffer (%n) is specified as the destination, it will be selected as the active input buffer and the buffer pointer will left at the beginning of any copied data.

If the field or parameter number in destination is larger than the current number of fields or parameters, intervening null values will be created automatically.

Specify an asterisk (\*) as the last character in the source element if it is desired to copy all the following source buffer parameters. For instance:

```
MV &2.2 %1,*
```

will copy the 1st parameter of the PIB to field 2 of file buffer 2. Parameter 2 of the PIB will be copied to field 3 and so on.

If it is desired to copy a series of parameters, specify the number of additional parameters to be copied after the asterisk. For instance:

```
MV &2.2 %1,*3
```

will copy the 1st, 2nd, 3rd and 4th parameters of the PIB into fields 2, 3, 4 and 5 of file buffer 2. The remainder of file buffer 2 will not be changed.

If a series of values is specified as the source, each value will copied to successive locations in the destination. For instance:

```
MV %2 "ABC"*&2.1*!1
```

will copy ABC into PIB parameter 2, field 1 of file buffer 2 into PIB parameter 3, and the next value from select register 1 into PIB parameter 4.

Two or more source values separated with an asterisk (\*), will be concatenated into a single parameter in the destination. For instance:

```
MV %2 "ABC",&2.1,!1
```

will concatenate ABC, field 1 of file buffer 2 and the next value from select register 1, and place the result into PIB parameter 2.

Using commas as placeholders in the source can preserve intervening parameters in the destination. For example:

```
MV %1 "ABC",,,"DEF"
```

would copy ABC into PIB parameter 1 and DEF into PIB parameter 4. PIB parameters 2 and 3 would not be affected.

### Example 1

```
|   Command   | PIB Before | PIB After  |
|   -------   | ---------- | ---------  |
| MV %5 "XXX" | ABC        | ABC^^^^XXX |
|             | ^          |       ^    |
```

### Example 2

```
|   Command   | PIB Before  |   PIB After     |
|   -------   | ----------  |   ---------     |
| MV %4 %1    | ABC^DEF^GHI | ABC^DEF^GHI^ABC |
|             | ^           |            ^    |
```

### Example 3

PIB contains: QTR^ABC^DEF

```
|   Command   |  POB Before   |  POB After      |
|   -------   |  ----------   |  ---------      |
| MV #3 %1    | SORT ^SALES^ | SORT ^SALES^QTR^ |
|             |            ^ |                 ^|
```

### Example 4

```
|      Command     |  PIB Before |  PIB After  |
|      -------     |  ---------- |  ---------  |
| MV %1 "AA",,"CC" | XX^BB^YY^ZZ | AA^BB^CC^ZZ |
|                  | ^           | ^           |
```

### Example 5

File buffer 2 contains:

```
000 Key
001 111
002 AAA
003 BBB
```

```
| Command         | File Buffer 1 Before  | File Buffer 1 After  |
| ---             | --------------------  | -------------------  |
| MV &1.1 &2.2,*  | 000 KEY1              | 000 KEY1             |
|                 | 001 WWW               | 001 AAA              |
|                 | 003 XXX               | 002 BBB              |
|                 | 002 YYY               | 003 YYY              |
|                 | 004 ZZZ               | 004 ZZZ              |
```

### Example 6

PIB contains: **ABC^DEF^GHI^JKL^MNO**

```
|   Command     | File Buffer 1 Before | File Buffer 1 After |
|   -------     | -------------------- | ------------------- |
| MV &2.1 %3,_  | 000 Key              | 000 Key             |
|               | 001 XXX              | 001 GHI             |
|               | 002 YYY              |                     |
```

Back to [jCL.](./../README.md)
