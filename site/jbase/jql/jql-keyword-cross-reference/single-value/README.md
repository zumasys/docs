# SINGLE.VALUE, SINGLEVALUED  

<PageHeader />

The **SINGLE.VALUE** keyword specifies that a field or EVAL expression is to be treated as single-valued.

## Syntax

```
field SINGLE.VALUE
```

where:

**field** is the field or EVAL expression that is to be treated as single-valued.

## Example

```
LIST ORDERS PART.NO QTY EVAL "PART.PRICE * QTY" AS Value SINGLE.VALUE
```

Back to [Cross Reference](./../README.md)

<PageFooter />
