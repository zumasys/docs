# MAX

<PageHeader />

Use the **MAX** keyword to report the maximum value of a field at the end of the report as well as the individual values.

## Syntax

```
MAX field {field.qualifiers}
```

where:

**field** is the field or EVAL expression to be printed/displayed.
**field.qualifiers** are other qulifying keywords.

## Example

```
LIST PARTS PRICE MAX STOCK WITH REORDER < 10
```

Back to [Cross Reference](./../README.md)

<PageFooter />
