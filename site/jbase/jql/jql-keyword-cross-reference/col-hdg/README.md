# COL.HDG, DISPLAY.NAME, DISPLAYNAME

<PageHeader />

The **COL.HDG** keyword defines an alternative column heading for fields and EVAL expressions.  

## Syntax  

```
field COL.HDG text
```

where:

**field** is the field or EVAL expression for which an alternative coulimn heading is to be defined.  
**text** is the alterntive column heading, enclosed in single or double quotes.  

## Example  

The following query:

```
LIST ORDERS AVG PRICE COL.HDG 'Avg. Price' QTY CALC ILINE_TOTAL
```

will result in a heading of "Avg. Price" rather than "PRICE" for the "PRICE" column.

Back to [Cross Reference](./../README.md)

<PageFooter />
