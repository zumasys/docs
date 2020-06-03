# WHEN

<PageHeader />

The **WHEN** keyword introduces a selection clause for a multi-value field

## Syntax

```
WHEN field1 operator field2
```

where:

**field1**  is the first field or EVAL expression to be compared.
**field2**  is the second field, EVAL epression or literal value to be compared.
**operator** is any valid query proessor operator.

## Example

```
LIST BOOK_SALES WHEN TITLE_NAME LIKE "The Hobbit..."
```

Back to [Cross Reference](./../README.md)

<PageFooter />
