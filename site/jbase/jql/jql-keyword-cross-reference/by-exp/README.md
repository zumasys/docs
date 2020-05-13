# BY-EXP, BY.EXP

<PageHeader />

The **BY-EXP** sort clause is used to sort fields that may contain more than one value and causes the query processor to explode each value and treat it as if it were a seperate item.

## Syntax  

```
BY-EXP field {explosion.limiter}
```

where:

**field** is the file name or EVAL expression on which to sort.
**explosion.limited** specifies that the output only occurs for items which meet the display/print limiting criteria.

## Example

```
SORT ORDERS PART.NO QTY LINE_TOTAL BY-EXP PART.NO

SORT ORDERS PART.NO QTY LINE_TOTAL BY-EXP PART.NO <= "20"
```

Back to [Cross Reference](./../README.md)

<PageFooter />
