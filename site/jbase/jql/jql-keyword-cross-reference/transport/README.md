# TRANSPORT

<PageHeader />

The **TRANSPORT** keyword is used to display the last value of a specified field in a set of items.

## Syntax

```
TRANSPORT field.name
```

where:

**field.name** is the field or EVAL expression for which the value of the last field is to be displayed.

## Example

```
LIST BOOK_SALES WITH EACH TITLE_NAME LIKE "The Hobbit..." TRANSPORT PRICE
```

Back to [Cross Reference](./../README.md)

<PageFooter />
