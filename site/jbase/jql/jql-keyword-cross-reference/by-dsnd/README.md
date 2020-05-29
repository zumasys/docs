# BY-DSND, BY.DSND

<PageHeader />

The **BY-DSND** sort keyword causes jQL to sort records in descending order prior to output or when building a select list.

## Syntax

```
BY-DSND field
```

where:

**field** is the file name or EVAL expression on which to sort.

The BY-DSND keyword designates the following field as a sort key.

## Note

>If **BY-DSND** is used with a query verb such as "LIST" or "SELECT", the verb is changed to its "sorting" equivalent, i.e. "SORT" or "SSELECT".  
>Comparisons are performed before conversion of the data to its display format.  

## Example

```
LIST PARTS DESCRIPTION STOCK PRICE VALUE BY-DSND VALUE
```

Back to [Cross Reference](./../README.md)

<PageFooter />
