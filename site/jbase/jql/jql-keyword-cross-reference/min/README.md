# MIN

<PageHeader />

Use the **MIN** keyword to report the minimum value of a field at the end of the report as well as the individual values.

## Syntax

```
MIN field {field.qualifiers}
```

where:

**field** is the field or EVAL expression to be printed/displayed.
**field.qualifiers** are other qulifying keywords.

## Example

```
LIST PARTS PRICE MIN STOCK WITH REORDER < 10
```

Back to [Cross Reference](./../README.md)

<PageFooter />
