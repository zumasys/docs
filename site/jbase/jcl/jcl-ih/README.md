# jCL IH

**Created At:** 5/29/2018 2:32:54 PM  
**Updated At:** 6/11/2018 4:26:30 AM  
**Original Doc:** [318945-jcl-ih](https://docs.jbase.com/45792-jcl/318945-jcl-ih)  
**Original ID:** 318945  
**Internal:** No  

**Tags:**
<badge text='buffer' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description

This command places a text string in the active input buffer, clears an existing parameter, or creates new null parameters. It takes the general form:

```
IHtext
```

or

```
IHreference;input-conversion;
```

or

```
IHreference:output-conversion:
```

or

```
IH\
```

or

```
IH \
```

where:

- **text** is the text to be placed in the active input buffer. Can be a literal (not enclosed in quotes), or a direct or indirect reference to a buffer or select register. The text must not contain subvalue marks.
- **reference** is a direct or indirect reference to a buffer or select register.
- **input-conversion** is a jQL input conversion to be applied to the string before putting it in the buffer.
- **output-conversion** is a jQL output conversion to be applied to the string before putting it in the buffer.
- **\** (backslash). If there is no preceding space, the current parameter in the active input buffer will be nulled. If there is a preceding space, a new null parameter will be created at the current buffer pointer position. A backslash in any other position will be treated as part of the literal text.

## Note

> Each group of one or more spaces in the text will be replaced with a single field mark, thereby creating new, separate parameters to replace the current single parameter. Leading and trailing spaces within text are ignored. Use the [IBH](./../jcl-ibh) command if you want to insert text into the active input buffer as a single parameter with all blanks intact.

If the buffer pointer is at the beginning of an existing parameter, that parameter will be replaced by the new text.

If the buffer pointer is in the middle of a parameter, that parameter will be truncated from the current location and the new parameter (without a leading field mark) will be concatenated.

If the buffer pointer is at the end of the input buffer, one or more new parameters will be created.

The position of the buffer pointer will not be changed.

## Creating Null Parameters

If the buffer pointer is at the start of a parameter, IH\ will null the parameter. The characters between the field marks are deleted but the field marks are retained.

If the buffer pointer is in the middle of a parameter, IH\ removes the remaining characters, from that point to the end of the parameter.

If the buffer pointer is at the end of the buffer, IH\ creates a new null parameter.

IH \ creates a new null parameter at the position pointed to by the input buffer pointer. Note the space between the H and the backslash character.

### Example 1

```
|  Command  |  PIB Before | PIB After    |
|  -------  |  ---------- | ----------   |
| IHXXX     | AB^CD^YY^ZZ | AB^CD^XXX^ZZ |
|           |       ^     |       ^      |
```

### Example 2

```
| Command  | PIB Before  |   PIB After    |
| -------  | ----------- |   ---------    |
| IH GH IJ | AB^CD^EF    | AB^CD^EF^GH^IJ |
|          |         ^   |       ^        |
```

### Example 3

%3 contains 9873

```
|  Command |   PIB Before  |     PIB After        |
|  ------- |   ----------  |     ---------        |
| IH%3:D2: | AB^CD^9873^GH | AB^11^JAN^95^9873^GH |
|          |    ^          |    ^                 |
```

### Example 4

```
|  Command |   PIB Before    |    PIB After    |
|  ------- |   -----------   |    ---------    |
| IH%4     | AB^CD^EF^GH IJ^ | AB^CD^EF^GH^IJ^ |
|          |          ^      |          ^      |
```

This example demonstrates how, in effect, you can replace a space with a field mark within a parameter. The 4th parameter of the PIB is copied back into the same location but the space is replaced by a field mark.

### Example 5

```
| Command  |  PIB Before | PIB After |
| -------- |  ---------- | --------- |
| IH\      | AB^CD^EF^GH | AB^CD^^GH |
|          |      ^      |      ^    |
```

### Example 6

```
| Command  |   PIB Before  |  PIB After |
| -------  |   ----------  |  --------- |
| S(7)     |               |            |
| IH\      | AB^CDEFGH^IJK | AB^CDE^IJK |
|          |       ^       |       ^    |
```

This Example demonstrates how to truncate a parameter.

### Example 7

```
| Command |  PIB Before |   PIB After  |
| ------- |  ---------- |   ---------  |
| IH \    | AB^CD^EF^GH | AB^CD^^EF^GH |
|         |      ^      |      ^       |
```

### Example 8

```
| Command |   PIB Before  |    PIB After    |
| ------- |   ----------  |    ---------    |
| IH \    | AB^CDEFGH^IJK | AB^CDE^^FGH^IJK |
|         |       ^       |       ^ |
```

Back to [JCL Commands](./../jcl-commands)
