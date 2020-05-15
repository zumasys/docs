# COUNT-SUPP, COUNT.SUPP, COUNT.SUP

<PageHeader />

Use of the **COUNT-SUPP** keyword suppresses the record count at the end of the query.

## Syntax

```
COUNT-SUPP
```

## Example

```
LIST ORDERS CUST.NAME VALUE DATE CONV "D4/" SAMPLE 20 COUNT-SUPP
```

would result in the "20 Records Listed" string not being displayed at the end of the query.

Back to [Cross Reference](./../README.md)

<PageFooter />
