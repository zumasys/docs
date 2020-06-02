# SUM

<PageHeader />

## Syntax

```
SUM  file.name field.name
```

where:

**file.name** is the file on which the summation is to be performed.
**field.name** is the field name or EVAL expression for which the sum is to be derived.

## Example

```
SUM BOOK_SALES EVAL "(QTY * PRICE) / 100"
```

Back to [Cross Reference](./../README.md)

<PageFooter />
