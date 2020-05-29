# ASSOC.WITH, ASSOCIATION  

<PageHeader />

**ASSOC.WITH** is a field qualifier used to indicate that a field is to be associated with another named field.  

## Syntax

```
field.name ASSOC.WITH name
```

where:

**field.name** is the name of an field ("A", "S", "D" or "I-type") to be associated.  
**name** is the name of the field with which **field.name** is to be associated.  

## Example  

```
LIST ORDERS PART.NO QTY EVAL "PART.PRICE * QTY" ASSOC.WITH PART.NO
```

Back to [Cross Reference](./../README.md)

<PageFooter />
