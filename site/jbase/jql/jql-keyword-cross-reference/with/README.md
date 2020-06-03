# WITH

<PageHeader />

The **WITH** keyword introduces a selection clause.

## Syntax

```
WITH {EVERY} field1 operator field2  {AND | OR} {EVERY} field1 operator field2
```

where:

**field1**  is the first field or EVAL expression to be compared.
**field2**  is the second field, EVAL epression or literal value to be compared.
**operator** is any valid query proessor operator.
The **EVERY** keyword indicates that every value or sub-value of **field1** must match **field2** as defined by the **operator**.  

## Example

```
LIST BOOK_SALES WITH EVERY TITLE_NAME LIKE "The Hobbit..."
```

Back to [Cross Reference](./../README.md)

<PageFooter />
