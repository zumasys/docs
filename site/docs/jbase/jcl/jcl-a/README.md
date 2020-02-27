# jCL A

**Created At:** 5/28/2018 10:18:40 AM  
**Updated At:** 6/1/2018 5:34:29 PM  
**Original Doc:** [318615-jcl-a](https://docs.jbase.com/45792-jcl/318615-jcl-a)  
**Original ID:** 318615  
**Internal:** No

## Description

The command copies a parameter from the active input buffer to the active output buffer. It takes the general form :

```
A{c|\}{p}
```

or

```
A{c|\}{p}({n},m)
```



where:


| Option | Description |
| --- | --- |
| c | specifies a character to surround the string being copied. Can be any non-numeric character except left parenthesis "(" or backslash "\". |
| \ | specifies that the value is to be concatenated with the current parameter in the active output buffer. |
| p | specifies the number of the parameter to be copied. If p is not specified, the current parameter will be copied. |
| n | specifies the starting column in the PIB. Copying continues until the end of the parameter is reached or the number of characters specified by m has been copied.<br> |

## Note

> Used on its own, the A command will copy the parameter pointed to from the active input buffer to the active output buffer.
>
> The A command can also be used with the IF command.
>
> If the active input buffer pointer is at the end of the buffer, the A command will have no effect.
>
> The c option is often used when you need to surround keys with single quotes, or values with double quotes.
>
> If you include an n or m specification, the PIB will be selected. If the destination is the SOB (stack is "on"), c will be ignored.
>
> If the stack is "off" (the POB is active), the A command will put the data in the output buffer as a separate parameter. The buffer pointers in the primary output buffer will be positioned at the field mark at the end of the copied parameter.
>
> If the stack is "on" (the SOB is active), the A command will concatenate the value to the previous parameter in the output buffer. It will continue to copy until a field mark is encountered. When complete, the buffer pointers will be positioned at the end of the secondary output buffer.

## Example 1

```
| Command |   PIB Before   |   PIB After   |
| ------- |   ----------   |   ---------   |
| A       | AAA^SALES^JAN  | AAA^SALES^JAN |
|         |    ^           |          ^    |
|         | **POB Before** | **POB After** |
|         | LIST^          | LIST^SALES^   |
|         |     ^          |           ^   |

```

Note the position of the buffer pointer after you issue the A command.

## Example 2

```
| Command |   PIB Before   |   PIB After    |
| ------- |   ----------   |   ---------    |
| A       | AAA^SALES^JAN  | AAA^SALES^JAN  |
|         |          ^     |              ^ |
|         | **POB Before** | **POB After**  |
|         | LIST^SALES^    | LIST^SALES^JAN |
|         |           ^    |               ^|
```

Issuing an A"3 command would have achieved the same result, except that the starting position of the PIB pointer would have been immaterial.

## Example 3

```
| Command |   PIB Before   |   PIB After   |
| ------- |   ----------   |   ---------   |
| A\      | ABC^DEF^GHI    | ABC^DEF^GHI   |
|         | ^              |             ^ |
|         | **POB Before** | **POB After** |
|         | XXX^           | XXXABC^       |
|         |    ^           |       ^       |
```

## Example 4

```
|  Command  |   PIB Before   |   PIB After      |
|  -------  |   ----------   |   ---------      |
| A2 (2,-2) | ABC^MYLIST^JKL | ABC^MYLIST^JKL   |
|           |           ^    |              ^   |
|           | **POB Before** | **POB After**    |
|           | SAVE-LIST^     | SAVE-LIST MYLIST |
|           |           ^    |                 ^|
```

The command attempts to copy the second parameter from the PIB, starting with the second character, up to and including, the penultimate character, to the current output buffer.

Back to [jCL.](./../README.md)
