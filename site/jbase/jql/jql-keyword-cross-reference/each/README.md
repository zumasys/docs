# EACH

<PageHeader />

The **EACH** keyword indicates that each value or sub-value of a fields must match the specified condition

## Syntax

```
WITH EACH field.name operator value

WHERE EACH field.name operator value
```

where

**field.name** is the field against which the condition is to be compared.  
**operator** is any of the jQL operators (EQ, NE, LT, GT, LIKE etc.).
**value** is the literal value for **field.name** to be compared against.

## Example

```
LIST BOOK_SALES WITH EACH FORENAME AFTER "ROBERT" FORENAME SURNAME

LIST BOOK_SALES WHERE EACH FORENAME EQ "ROBERT" FORENAME SURNAME

LIST BOOK_SALES WITH EACH FORENAME BETWEEN "ADAM" AND "DAVID" FORENAME SURNAME

LIST BOOK_SALES WITH EACH TITLE_NAME LIKE "The Hobbit..."
```

In the last example, even though the list of book titles in multi-valued, only the items matching the specified criteria are displayed, i.e.:

```
PAGE    1                                                                                                                         14:42:18  20 MAY 2020

BOOK_SALES_JBASE   Sale Date..   SURNAME.............   FORENAME............   TITLE_ID   QTY   PRICE   GIFT   Title...............   Author Name.........

13731*59400*1      04 AUG 2005   STOTT                  CHRIS                       163     1   19.99      0   The Hobbit: Abridged   J. R. R. Tolkien
                                                                                                               (Modern Classics on
                                                                                                               CD S.)
13648*56700*1      13 MAY 2005   TIBBS                  BEVERLEY                    158     1   15.99      0   The Hobbit: Abridged   J. R. R. Tolkien
                                                                                                               (Modern Classics on
                                                                                                               Tape S.)
13469*46800*5      15 NOV 2004   MURDOCK                MALCOLM                     163     1   19.99      0   The Hobbit: Abridged   J. R. R. Tolkien
                                                                                                               (Modern Classics on
                                                                                                               CD S.)
13554*62100*3      08 FEB 2005   RINGROSE               STEWART                     158     1   15.99      1   The Hobbit: Abridged   J. R. R. Tolkien
                                                                                                               (Modern Classics on
                                                                                                               Tape S.)
13714*47700*1      18 JUL 2005   MCKENNA                CLARE                       158     1   15.99      0   The Hobbit: Abridged   J. R. R. Tolkien
                                                                                                               (Modern Classics on
                                                                                                               Tape S.)
13458*41400*3      04 NOV 2004   FALCONER               CLARE                       163     1   19.99      0   The Hobbit: Abridged   J. R. R. Tolkien
                                                                                                               (Modern Classics on
                                                                                                               CD S.)
 6 Records Listed

```

Back to [Cross Reference](./../README.md)

<PageFooter />
