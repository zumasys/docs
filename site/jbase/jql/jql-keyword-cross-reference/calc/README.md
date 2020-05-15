# CALC, CALCULATE

<PageHeader />

The **CALC** keyword is used to specify that total calculations are to be performed on an I-type field or EVAL expression.

## Syntax

```
CALC field
```

where:

**field** is the I-type or EVAL expression for which the calculation is to be performed.

## Note  

>The I-type or EVAL expression must include the TOTAL function.

## Example  

```
LIST ORDERS AVG PRICE QTY CALC ILINE_TOTAL
```

where ILINE_TOTAL is defined as follows:

```
I
TOTAL(PRICE * QTY)
MD2
Line Total
10R
M
```

Back to [Cross Reference](./../README.md)

<PageFooter />
