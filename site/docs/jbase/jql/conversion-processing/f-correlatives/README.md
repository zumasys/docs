# F Correlatives

**Created At:** 6/8/2018 1:26:08 PM  
**Updated At:** 7/13/2018 11:41:22 AM  
**Original Doc:** [f-correlatives](https://docs.jbase.com/46351-conversion-processing/f-correlatives)  
**Original ID:** 321291  
**Internal:** No  

**Tags:**
<badge text='conversion processing' vertical='middle' />
<badge text='jql' vertical='middle' />

## Description

F codes provide many facilities for arithmetic, relational, logical, and concatenation operations. All operations are expressed in Reverse Polish notation and involve the use of a "stack" to manipulate the data.

There are three forms of the F code:

- F Uses only the integer parts of stored numbers unless a scaling factor is included. If the JBCEMULATE environment variable is set to "ROS", the operands for "-", "/" and concatenate are used in the reverse order.

```
F{n};elem{;elem}...
```

- FS Uses only the integer parts of stored numbers.

```
FS;elem{;elem}...
```

- FE Uses both the integer and fraction parts of stored numbers.

```
FE;elem{;elem}
```

where

- **n** is a number from 1 to 9 used to convert a stored value to a scaled integer. The stored value's explicit or implied decimal point is moved n digits to the right with zeros added if necessary. Only the integer portion of this operation is returned.
- **elem** is any valid operator.

## Note 1

> F codes use the Reverse Polish notation system. Reverse Polish is a postfix notation system where the operator follows the operands. The expression for adding two elements is "a b + ". (The usual algebraic system is an infix notation where the operator is placed between the operands, for example, "a + b").

The F code has operators to push operands on the stack. Other operators perform arithmetic, relational, and logical operations on stack elements. There are also concatenation and string operators.

Operands that are pushed on the stack may be constants, field values, system parameters (such as data and time), or counters (such as record counters).

## The Stack

F codes work with a pushdown stack.

## Note 2

> All possible F correlative operators push values onto the stack, perform arithmetic and other operations on the stack entries, and pop values off the stack.

The term "push" is used to indicate the placing of an entry (a value) onto the top of the stack so that existing entries are pushed down one level. "Pop" means to remove an entry from the top of the stack so that existing entries pop up by one level. Arithmetic functions typically begin by pushing two or more entries onto the stack. Each operation then pops the top two entries, and pushes the result back onto the top of the stack. After any operation is complete, the result will always be contained in entry 1.

## Order of Operation

F code operations are typically expressed as "F;stack2;stack1;operation". Under most emulations, this will be
evaluated as "stack2 operation stack1". If JBCEMULATE is set to "ROS", this example is evaluated as "stack1 operation stack2", effectively reversing the order of operations.

Note that the FE and FS codes are evaluated in the same way for all emulations.

### Input Conversion

Input conversion is not allowed.

### Example 1

```
F;C3;C5;-
```

Push a value of 3 onto the stack. Push a value of 5 onto the stack.

Take entry 1 from entry 2 (3 - 5) and push the result (-2) back onto the stack as entry 1. ROS emulations will subtract 3 from 5 and return a result of 2.

### Example 2

```
FS;C3;C5;-
```

Push a value of 3 onto the stack. Push a value of 5 onto the stack. Take entry 2 from entry 1 (3 - 5) and push the result (-2) back onto the stack. This works in the same way for all emulations.

### Example 3

```
F;C2;C11;C3;-;/
```

Push a value of 2 onto the stack. Push a value of 11 onto the stack. Push a value of 3 onto the stack. Subtract entry 1 from entry 2 (11 - 3) and push the result (8) back onto the stack. Now divide entry 2 by entry 1 (2 divided by 8) and push the result (0) back onto the stack.

Under ROS emulation, this would evaluate as 3 - 11 = -8, followed by -8 / 2 = -4.

### Push Operators

A push operator always pushes a single entry onto the stack. Existing entries are pushed down one position. Push operators are: "literal"Literal. Any text string enclosed in double or single quotes.

```
field-number{R{R}}{(format-code)}
```

where:

field-number is the value of the field from the current record.

- **R** specifies that the last non-null value obtained from this field is to be applied repeatedly for each multivalue that does not exist in a corresponding part of the calculation.
- **RR** specifies that the last non-null value obtained from this field is to be applied repeatedly for each subvalue that does not exist in a corresponding part of the calculation.
- (**format-code**)** is one or more format codes (separated by value marks) enclosed in parentheses. Applied to the value before it is pushed onto the stack.

| <!----> | <!----> |
| --- | --- |
| Cn | Constant. Where n is a constant (text or number) of any length up to the next semicolon or system delimiter. |
| D | Current system date. |
| NA | Number of fields in the record. |
| NB | Current break level number: -1 = during SORT or SELECT processing 0 = detail line 1 = lowest break level 255 = GRAND-TOTAL line |
| ND | Number of records since the last BREAK on a BREAK data line. Equal to the record counter on a GRAND-TOTAL line. Used to compute averages. |
| NI | Record counter. The ordinal position of the current record in the report. |
| NL | Length of the record, in bytes. Includes all field marks but not the key. |
| NS | Subvalue counter. The ordinal position of the current subvalue within the field. |
| NV | Value Counter. The ordinal position of the current multivalue within the field. |
| P | or "Duplicate of entry 1 is pushed onto the stack. |
| T | System time in internal format. |
| V or LPV | Previous Value. The value from the previous format code is to be used. |

### Arithmetic Operators

The arithmetic F code operators work on just the top stack entry or the top two stack entries. They are:

| <!----> | <!----> |
| --- | --- |
| +<br> | Add the top two stack entries together and push result into entry 1.<br> |
| -<br> | Subtract stack entries and push result into entry 1:<br><br>| <!----> | <!----> |<br>| --- | --- |<br>| F | subtract entry 1 from entry 2 |<br>| FS, FE | subtract entry 1 from entry 2 |<br>| F | subtract entry 2 from entry 1 (ROS emulation) |<br><br> |
| \*{n}<br> | Multiply the top two stack entries and push result into entry 1. If n is specified, the result is divided by 10 raised to the power of n.<br> |
| **/**<br> | Divide stack entries and push quotient into entry 1:<br><br>| <!----> | <!----> |<br>| --- | --- |<br>| F | divide entry 2 by entry 1 |<br>| FS, FE | divide entry 2 by entry 1 |<br>| F | divide entry 1 by entry 2 (ROS emulation) |<br><br> |
| **R**<br> | Compute remainder from the top two stack entries and push result into entry 1:<br><br>| <!----> | <!----> |<br>| --- | --- |<br>| F | remainder of entry 2 / entry 1 |<br>| FS, FE | remainder of entry 2 / entry 1 |<br>| F | remainder of entry 1 / entry 2 |<br><br> |
| **I**<br> | Return the integer part of entry 1 to the top of the stack.<br> |
| **S**<br> | Replace the multivalued entry 1 with the sum of the multivalues and subvalues.<br> |

### Miscellaneous Operators

Miscellaneous operators control formatting, exchanging stack entries, popping the top entry, concatenation, and string extraction. They are:

| <!----> | <!----> |
| --- | --- |
| \_<br> | Exchange the top two entries.<br> |
| ^<br> | Pop last entry from the stack and discard. All other entries are pushed up.<br> |
| (format-code)<br> | Perform the specified format code on last entry and replace last entry with the result.<br> |
| :<br> | Concatenate stack entries:<br><br>| <!----> | <!----> |<br>| --- | --- |<br>| F | Concatenates Entry 1 to the end of Entry 2 |<br>| FS, FE | Concatenates Entry 1 to the end of Entry 2 |<br>| F | Concatenates Entry 2 to the end of Entry 1(ROS emulation) |<br><br> |
| [ ]<br> | Extract a substring from stack entry 3. The starting column is specified in stack entry 2 and the number of characters is specified in entry 1<br> |

### Relational Operators

Relational operators compare stack entries. The result is pushed onto stack entry 1 and is either 1 (true) or 0 (false). Relational operators are:

| <!----> | <!----> |
| --- | --- |
| =<br> | equal to<br> |
| &lt;<br> | less than:<br><br>| <!----> | <!----> |<br>| --- | --- |<br>| F | entry 2 &lt; entry 1 |<br>| FS,FE | entry2 &lt; entry 1 |<br>| F | entry 1 &lt; entry 2  (ROS emulation) |<br><br> |
| &gt;<br> | Greater than:<br><br>| <!----> | <!----> |<br>| --- | --- |<br>| F | entry 2 &gt; entry 1 |<br>| FS,FE | entry2 &gt; entry 1 |<br>| F | entry 1 &gt; entry 2  (ROS emulation) |<br><br> |
| [<br> | Less than or equal to:<br><br>| <!----> | <!----> |<br>| --- | --- |<br>| F | entry 2 [ entry 1 |<br>| FS,FE | entry2 [ entry 1 |<br>| F | entry 1 [ entry 2  (ROS emulation) |<br><br> |
| ]<br> | Great than or equal to:<br><br>| <!----> | <!----> |<br>| --- | --- |<br>| F | entry 2 [ entry 1 |<br>| FS,FE | entry 2 [ entry 1 |<br>| F | entry 1 [ entry 2  (ROS emulation) |<br><br> |
| #<br> | Not equal.<br> |

### Logical Operators

Logical operators include a logical AND test and a logical inclusive-OR test. Logical operators are:

- & AND stack entries 1 and 2. If both entries contain non zero, a 1 is pushed onto stack entry 1, otherwise, a 0 is pushed.
- ! OR stack entries 1 and 2. If either of the entries contains non zero, a 1 is pushed onto stack entry 1; otherwise, a 0 is pushed.

### Multivalues

A powerful feature of F and FS code operations is their ability to manipulate multivalues. Individual multivalues can be processed, one by one, or you can use the R (or RR) modifier after a field number, to repeat a value and thus combine it with each of a series of multivalues. Field operands may be valued and subvalued. When mathematical operations are performed on two multivalued lists (vectors), the result is also multivalued. The result has an many values as the longer of the two lists. Zeros are substituted for the null values in the shorter list if the R option is not specified.

### Repeat Operators

To repeat a value for combination with multivalues, follow the field number with the R operator. To repeat a value for combination with multiple subvalues, follow the FMC with the RR operator.

## Format Codes

Format codes can be used in three ways. One transforms the final result of the F code, another transforms the content of a field before it is pushed on the stack, and the third transforms the top entry on the stack. The general form is as:

```
f-code{]format-code...}
field-number(format-code{]format-code}...)
(format-code{]format-code}...)
```

where:

- f-code is a complete F Code expression.
- field-number is the field number in the record from which the data is to be retrieved.
- format-code is any valid format codes.
- ] represents a value mark (ctrl ]) that must be used to separate each format-code.

To process a field before it is pushed on the stack, follow the FMC with the format codes enclosed in parentheses.

To process the top entry on the stack, specify the format codes within parentheses as an operation by itself.

To specify more than one format code in one operation, separate the codes with the value mark, (ctrl ]).

All format codes will convert values from an internal format to an output format.

### Example

```
F;2(MD2]G0.1);100;-
```

Obtain the value of field 2. Apply an MD2 format code. Then apply a group extract to acquire the integer portion of the formatted value, and push the result onto the stack. Subtract 100 from the field 2 formatted, group-extracted value. Return this value. Note that under ROS emulation, the value returned would be the result of subtracting the integer value from the group extract, from 100. In other words:

100 - OCONV(OCONV(Field2, "MD2"), "G0.1" ).

Back to [Conversion Processing](./../conversion-processing)
