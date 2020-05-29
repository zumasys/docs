# MULTI.VALUE, MULTIVALUE

<PageHeader />

The **MULTI.VALUE** keyword specifies the a field or EVAL expression is to be treated as multi-valued.

## Syntax

```
field MULTI.VALUE
```

where:

**field** is the field or EVAL expression that is to be treated as multi-valued.

## Example

```
LIST ORDERS PART.NO QTY EVAL "PART.PRICE * QTY" AS Value MULTI.VALUE
```

Back to [Cross Reference](./../README.md)

<PageFooter />
