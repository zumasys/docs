# A Correlatives

**Created At:** 6/8/2018 1:11:34 PM  
**Updated At:** 7/11/2018 3:24:56 PM  


## Description 

A codes provide many powerful features. These include arithmetic, relational, logical, and concatenation operators, the ability to reference fields by name or FMC, the capability to use other data definition records as functions that return a value, and the ability to modify report data by using[format codes](321566-format-codes).

The A code also allows for handling data recursively, or "nest" one A code expression inside another.

The A code function uses an algebraic format. There are two forms of the A code:

- A uses only the integer parts of stored numbers unless a scaling factor is included.
- AE handles extended numbers. Uses both integer and fractional parts of stored numbers.


```
A{n}{;expression}
```

```
AE;expression
```

where:

- n is a number from 1 to 6 that specifies the required scaling factor.
- expression comprises operands, operators, conditional statements, and special functions.




### Note: 

The A code replaces and enhances the functionality of the F code. You will find A codes much easier to work with than F codes. Valid code formats are:

- A;expression - evaluates the expression.
- Aexpression - evaluates expression.
- An - converts to a scaled integer.
- An;expression - converts to a scaled integer.
- AE;expression - evaluates the expression.




**A;Expression / Aexpression Formats**

Performs the functions specified in expression on values stored without an embedded decimal point.



**AN Format: Embedded Decimals**

The An format converts a value stored with an embedded decimal point to a scaled integer. The stored value's explicit or implied decimal point is moved n digits to the right with zeros added if necessary. Only the integer portion is returned.

Field 2 of the data definition record must contain the FMC of the field that contains the data to be processed.



**AN; Expression Format**

The An;expression format performs the functions specified in expression on values stored with an embedded decimal point. The resulting value is then converted to a scaled integer.



**AE;Expression Format**

The AE format uses both the integer and fractional parts of stored numbers. Scaling of output must be done with format codes. The following are examples of numeric results:


| Data Record<br> | A Code<br> | <br> |
| --- | --- | --- |



| **Field 1**<br> | **Field 2**<br> | **A;1 + 2**<br> | **A3;1 + 2**<br> | **AE;1 + 2**<br> |
| 4<br> | 012<br> | 16<br> | 16000<br> | 16<br> |
| -77<br> | -22<br> | -99<br> | -99000<br> | -99<br> |
| 0.12<br> | 22.09<br> | 22<br> | 22210<br> | 22.21<br> |
| -1.234<br> | -12.34<br> | -13<br> | -13574<br> | -13.574<br> |
| -1.234<br> | 123.45<br> | 122<br> | 122216<br> | 122.216<br> |




## Input Conversion 

Input conversion is not allowed.



## [Format Codes](321566-format-codes) 

It is possible to format the result of any A code operation by following the expression with a value mark, and then the required format code, like this:

```
An;expression]format
```

Format codes can also be included within the expression.



## Summary of Operands 

Operands for use with A code expressions include: FMCs (field numbers), field names, literals, operands that return system parameters, and special functions.

Any operand can be formatted by following it with one or more format codes enclosed in parentheses, and separated by value marks, (ctrl ]), like this:

```
operand(format-code{]format-code}...)
```

See Format Codes for more information.



[**Field Number (FMC) Operand**](321523-field-number-fmc-operand)

The field number operand returns the content of a specified field in the data record:

```
field-number{R{R}}
```

The first R specifies that any non-existent multivalues should use the previous non-null multivalue. When the second R is specified, this means that any non-existent subvalues should use the previous non-null subvalue.



[**Field Name Operand**](321522-n-field-name-operand)

The field name operand returns the content of a specified field in the data record:

```
N(field-name){R{R}}
```



[**Literal operand**](321521-literal-operand)

The literal operand supplies a literal text string or numeric value:

"literal"



[**System Parameter Operands**](321556-system-parameter-operands)

Several A code operands return the value of system parameters. They are:


| Operand<br> | Return Value<br> |
| --- | --- |
| D<br> | Returns the system date in internal format.<br> |
| LPV<br> | Returns the previous value transformed by a format code.<br> |
| NA<br> | Returns the number of fields in the record.<br> |
| NB<br> | Returns the current break level counter. 1 is the lowest break level, 255 is the GRAND TOTAL line.<br> |
| ND<br> | Returns the number of records (detail lines) since the last control break.<br> |
| NI<br> | Returns the record counter.<br> |
| NL<br> | Returns the record length in bytes<br> |
| NS<br> | Returns the subvalue counter<br> |
| NU<br> | Returns the date of last update<br> |
| NV<br> | Returns the value counter<br> |
| T<br> | Returns the system time in internal format.<br> |
| V<br> | Returns the previous value transformed by a format code<br> |




**Special Operands**

Some operands allow for the use of special functions. They are:


| Operand<br> | Return Value<br> |
| --- | --- |
| I(expression)<br> | Returns the integer part of expression.<br> |
| R(exp1, exp2)<br> | Returns the remainder of exp1 divided by exp2.<br> |
| S(expression)<br> | Returns the sum of all values generated by expression.<br> |
| string[start-char-no, len]<br> | Returns the substring starting at character start-char-no for length len.<br> |




## Summary of Operators 

Operators used in A code expressions include arithmetic, relational and logical operators, the concatenation operator, and the IF statement.

**Arithmetic Operators**

Arithmetic operators are:


| Operator<br> | Description<br> |
| --- | --- |
| +<br> | Sum of operands<br> |
| -<br> | Difference of operands<br> |
| \*<br> | product of operands<br> |
| /<br> | Quotient (an integer value) of operands<br> |




**Relational Operators**

Relational operators specify relational operations so that any two expressions can treated as operands and evaluated as returning true (1) or false (0). Relational operators are:


| Operator<br> | Description<br> |
| --- | --- |
| = or EQ<br> | Equal to<br> |
| &lt; or LT<br> | Less than<br> |
| &gt; or GT<br> | Greater than<br> |
| &lt;= or LE<br> | Less than or equal to<br> |
| &gt;= or GE<br> | greater than or equal to<br> |
| # or NE<br> | Not equal<br> |




**Logical Operators**

The logical operators test two expressions for true(1) or false(0) and return a value of true or false. Logical operators are:

- AND - Returns true if both expressions are true
- OR - Returns true if any of the expressions is true


The words AND and OR must be followed by at least one space. The AND operator takes precedence over the OR unless you specify a different order by means of parentheses. OR is the default operation.



**Concatenation Operator**

The concatenation operator is a colon (:). It may be used to concatenate the results of two expressions. For example, the following expression concatenates the character "Z" with the result of adding together fields 2 and 3 as:

```
A;"Z":2 + 3
```



**If Statement**

The IF operator gives the A code its conditional capabilities. An IF statement looks like this:

```
IF expression THEN statement ELSE statement
```

where:

- expression must evaluate to true or false. If true, executes the THEN statement. If false, executes the ELSE statement.
- statement is a string or numeric value.


Each IF statement must have a THEN clause and a corresponding ELSE clause. IF statements can be nested but the result of the statement must evaluate to a single value.

The words IF, THEN and ELSE must be followed by at least one space. Examples of use are as:

```
A;IF N(QTY) < 100 THEN N(QTY) ELSE ERROR!
```

Tests the QTY value to see if it is less than 100. If it is, output the QTY field. Otherwise, output the text "ERROR!".

```
A;IF N(QTY) < 100 AND N(COST) < 1000 THEN N(QTY) ELSE ERROR!
```

Same as example 1 except that QTY will only be output if it is less than 100 and the cost value is less than 1000.

```
A;IF 1 THEN IF 2 THEN 3 ELSE 4 ELSE 5
```

If field 1 is zero or null, follow else and use field 5. Otherwise test field 2. If field 2 is zero or null, follow else and use field 4. Otherwise use field 3. Field 3 is only used if both fields 1 and 2 contain a value.



## Special Operands 

**Integer Function**

The Integer Function I(expression) returns the integer portion of expression. For instance:

```
AE;I(N(COST) * N(QTY))
```

Returns the integer portion of the result of the calculation.



**Remainder Function**

The Remainder Function R(exp1, exp2) takes two expressions as operands and returns the remainder when the first expression is divided by the second. For instance:

```
A;R(N(HOURS) / "24")
```

Returns the remainder when HOURS is divided by 24.



**Summation Function**

The Summation Function S(expression) evaluates an expression and then adds together all the values. For instance:

```
A;S(N(HOURS) * N(RATE)R)
```

Each value in the HOURS field is multiplied by the value of RATE. The multivalued list of results is then totalled.



**Substring Function**

The substring function

```
[start-char-no, len] 
```

extracts the specified number of characters from a string, starting at a specified character.

where:

- start-char-no is an expression that evaluates to the position of the first character of the substring.
- len is an expression that evaluates to the number of characters required in the substring. Use - len (minus prefix) to specify the end point of the substring. For example, [1, -2] will return all but the last character and [-3, 3] will return the last three characters.


For Example:

```
A;N(S.CODE)["2", "3"]
```

Extracts a sub-string from the S.CODE field, starting at character position 2 and continuing for 3 characters.

```
A;N(S.CODE)[2, N(SUB.CODE.LEN)]
```

Extracts a sub-string from the S.CODE field, starting at the character position defined by field 2 and continuing for the number of characters defined by SUB.CODE.LEN.



Back to [Conversion Processing](321577-conversion-processing)
