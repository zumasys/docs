# SAVING {UNIQUE}  

<PageHeader />

The **SAVING** clause can be used with a [SELECT](./../../select/README.md) or [SSELECT](./../../sselect/README.md) command to save the contents of a specified field or EVAL expression instead of the item ID.

## Syntax

```
SAVING {UNIQUE} field.name
```

where:

**UNIQUE** specifies that duplicate values are not to be included in the saved list.  
**field.name** is the field or EVAL expression to be saved.

## Example

```
SELECT BOOK_SALES SAVING UNIQUE TITLE_ID
```

Back to [Cross Reference](./../README.md)

<PageFooter />
