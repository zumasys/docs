# NO.NULLS

<PageHeader />

The **NO.NULLS** keyword indicates to the query processor that null items are to be ignored for the preceding field.

## Note

>The "NO.NULLS" keyword is only relevant when issed in conjunction with the [AVERAGE](./../average/README.md), [ENUM](./../enum/README.md), [MAX](./../max/README.md) and [MIN](./../min/README.md) qualifier keywords.

## Syntax

```
NO.NULLS
```

## Example

```
LIST ORDERS AVERAGE VALUE NO.NULLS CUST.NAME  
```

Back to [Cross Reference](./../README.md)
