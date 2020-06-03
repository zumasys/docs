# WITHOUTEACH

<PageHeader />

The **WITHOUTEACH** keyword indicates that each value or sub-value of a field must not match the specified condition

## Syntax

```
WITHOUTEACH field.name operator value
```

where

**field.name** is the field against which the condition is to be compared.  
**operator** is any of the jQL operators (EQ, NE, LT, GT, LIKE etc.).  
**value** is the literal value for **field.name** to be compared against.  

## Example

```
LIST BOOK_SALES WITHOUTEACH TITLE_NAME LIKE "The Hobbit..."
```

Back to [Cross Reference](./../README.md)

<PageFooter />
