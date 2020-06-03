# TOTAL

<PageHeader />

The **TOTAL** keyword causes a the query processor caluclate and display a total value for the selected field.

## Syntax

```
TOTAL field field.qualifiers
```

where:

**field** is the field or EVAL expression to be displayed.  
**field.qualifiers** are other field qualifying keywords.  

## Example

```
LIST ORDERS PART.NO PART.PRICE QTY TOTAL EVAL "PART.PRICE * QTY" AS Value
```

Back to [Cross Reference](./../README.md)

<PageFooter />
