# ASSOC, ASSOCIATION

<PageHeader />

The **ASSOC** keyword indicates that the field is to be treated as part of a existing association of mult-values.

## Syntax

```
field.name ASSOC "assoc.name"
```

where:

**field.name** is the name of an field ("A", "S", "D" or "I-type")
**assoc.name** is the name of the associaton in which **field.name** is to be included.

## Example

```
LIST ORDERS PART.PRICE QTY EVAL "PART.PRICE * QTY" ASSOC "LINE.COST"
```

Back to [Cross Reference](./../README.md)

<PageFooter />
