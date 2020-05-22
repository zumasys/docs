# ENUM, ENUMERATE  

<PageHeader />

The **ENUM** keyword cuases the specified field to be reported along with a count of the values.

## Syntax

```
ENUM field {field.qualifiers} {NO.NULLS}
```

where:

**field**  is the field or EVAL expressions to be displayed.
**field.qualifiers**  are other qualifying keywords.
**NO.NULLS** causes null values to be ignored.  

## Example  

```
LIST BOOK_SALES WITH EACH TITLE_NAME LIKE "The Hobbit..." ENUM TITLE_ID
```

will produce a result in which the number of items in the TITLE_ID field will be shown at the end of the report.

Back to [Cross Reference](./../README.md)

<PageFooter />
