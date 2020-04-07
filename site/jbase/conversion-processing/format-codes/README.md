# Format Codes

<PageHeader />

**Tags:**
<badge text='format' vertical='middle' />
<badge text='jql' vertical='middle' />

## Description

Specifies a format code to be applied to the result of the A code or an operand.  May be as :

```
a-code{]format-code...}
```

or

```
a-operand(format-code{]format-code}...)
```

where:

- **a-code** is a complete A Code expression.
- **a-operand** is one of the A Code operands.
- **format-code** is one of the codes described later - G(roup), D(ate) or M(ask).
- **]** represents a value mark that must be used to separate each format-code.

Format codes can also be included within A code expressions. In this case, they must be enclosed in parentheses, and separated with a value mark if more than one format code is used.All format codes will convert values from an internal format to an output format.

## Note

> It is possible to format the result of the complete A code operation by following the expression with a value mark and then the required format code(s). (This is actually a standard feature of the data definition records.)

### Example 1

```
A;N(COST)(MD2]G0.1) * ...
```

Shows two format code applied within an expression. Obtains the COST value and applies an MD2 format code. Then applies a group extract to acquire the integer portion of the formatted value. The integer portion can then be used in the rest of the calculation. Could also have been achieved like this:

```
A;I(N(COST)(MD2)) * ...
```

### Example 2

```
A;N(COST) * N(QTY)]MD2
```

Shows the MD2 format code applied outside the A code expression. COST is multiplied by QTY and the result formatted by the MD2 format code.

Back to [A-Corelatives](./../a-correlatives)
