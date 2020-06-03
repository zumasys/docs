# USING

<PageHeader />

The **USING** keyword directs the query processor to use the dictionary of another file for this query.

## Syntax

```
USING {DICT} filename
```

where:

**DICT** specifies that the dictionary of the named file is to be used.
**filename** is the name of the file to be used as the dictionary for this query.

## Example

```
LIST SALES_2005 USING DICT BOOK_SALES
```

Back to [Cross Reference](./../README.md)

<PageFooter />
