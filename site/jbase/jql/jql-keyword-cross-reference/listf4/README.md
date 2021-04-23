# LISTF4

<PageHeader />

The **LISTF4** statement lists the file names for an account in four columns.  

## Syntax

```
LISTF4 {directory}
```

## Example

```
jsh AccuTerm ~ -->LISTF4

PATH :/dbms/AccuTerm                                      12:00:24  24 MAR 2021

ACCUTERMCTRL       CUST.SAMPLE        CUST.SAMPLE.CTRL   CUST.SAMPLE.XREF
FTBP               FTBP               GUIAPPS            GUIBP
GUIBP              INV.SAMPLE         INV.SAMPLE.CTRL    MD
OBJBP              OBJBP              PROD.SAMPLE        SUIBP
SUIBP              bin                lib

  19 Files Listed
```

## Note

>If **directory** is specified then only the files in that path will be displayed.

Back to [Cross Reference](./../README.md)

<PageFooter />
