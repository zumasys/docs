# EVAL  

<PageHeader />

The **EVAL** keyword defines a new virtual field to be used as if it were an [I-type](./../../../conversion-processing/i-types/README.md) defined in the dictionary of the file.

## Syntax

```
EVAL expression
```

where:

**expression** is an I-type string which must be enclosed in single or double quotes.  

## Example

```
LIST BOOK_SALES EVAL "FORENAME : ' ' : SURNAME" AS FullName
```

Back to [Cross Reference](./../README.md)

<PageFooter />
