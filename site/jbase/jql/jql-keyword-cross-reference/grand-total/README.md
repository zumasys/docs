# GRAND-TOTAL, GRAND.TOTAL, CAPTION

<PageHeader />

The **GRAND-TOTAL** keyword specifies the text string to appear on the grand total line of a report.  

## Syntax

```
GRAND-TOTAL "text"
```

where:

**text** is the text string to appear on the grand total line.  

## Example

```
LIST BOOK_SALES TOTAL EVAL "QTY * PRICE" AS Value FMT 'R2#10' GRAND-TOTAL "Total Value"
```

Back to [Cross Reference](./../README.md)

<PageFooter />
