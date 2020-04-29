# OR

<PageHeader />

The OR operator is used to link two selection criteria to determine whether either may be True in order for an item to be selected.

## Syntax

```
WITH condition1 OR {WITH} condition2
```

where:

**condition1** and **condition2** are selection criteria.

## Example

```
LIST PARTS WITH STOCK GT "99" OR WITH REORDER LT "250"
```

Back to [Cross Reference](./../README.md)

<PageFooter />
