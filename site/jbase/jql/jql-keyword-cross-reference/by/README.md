# BY

<PageHeader />

The **BY** sort keyword causes jQL to sort records prior to output or when building a select list.

## Syntax

```
BY field
```

where:

**field** is the file name or EVAL expression on which to sort.

The BY keyword designates the following field as a sort key.

## Note

>If **BY** is used with a query verb such as "LIST" or "SELECT", the verb is changed to its "sorting" equivalent, i.e. "SORT" or "SSELECT".  
>Comparisons are performed before conversion of the data to its display format.  

## Example

```
LIST PARTS DESCRIPTION STOCK PRICE BY VALUE VALUE
```

Back to [Cross Reference](./../README.md)

<PageFooter />
