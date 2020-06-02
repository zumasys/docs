# STAT

<PageHeader />

The **STAT** keyword is used to produce statistics for a given file or on particular fields in that file.

## Syntax

```
STAT file.name {field.name}
```

where:

**file.name** is the name of the file for which statistics are to be obtained.  
**field.name** is the field for which statistics are to be obtained.

## Examples

The following query:

```
STAT BOOK_SALES
```

provides this output:

```
Statistics of record length :
total = 590512 average = 118.1024 count = 5000
```

Queries on specific fields:  

```
STAT BOOK_SALES PRICE
Statistics of PRICE :
total = 422235.08 average = 84.45 count = 5000

STAT BOOK_SALES QTY
Statistics of QTY :
total = 24888 average = 4.9776 count = 5000
```

Back to [Cross Reference](./../README.md)

<PageFooter />
