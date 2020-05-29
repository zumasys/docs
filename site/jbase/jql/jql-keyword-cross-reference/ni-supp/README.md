# NI-SUPP, NI.SUP, COUNT-SUPP, COUNT.SUPP, COUNT.SUP

<PageHeader />

The **NI-SUPP** keyword is used to suppress the record count normally displayed at the end of the query.

## Syntax

```
NI-SUPP
```

## Example

```
LIST ORDERS CUST.NAME VALUE DATE CONV "D4/" SAMPLE 20 NI-SUPP
```

would result in the "20 Records Listed" string not being displayed at the end of the query.

Back to [Cross Reference](./../README.md)

<PageFooter />
