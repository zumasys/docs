# AND, &

<PageHeader />

Logical operator which links two selection clauses which must both evaluate to True for an item to be selected.

## Syntax  

```
WITH condition1 AND {WITH} condition2
```

where **condition1** and **condition2** are selection criteria.

## Example

```
LIST PARTS WITH STOCK GT "99" AND WITH REORDER LT "250"
```

Back to [Cross Reference](./../README.md)

<PageFooter />
