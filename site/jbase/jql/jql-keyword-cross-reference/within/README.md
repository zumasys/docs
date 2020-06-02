# WITHIN

<PageHeader />

## Syntax

```
WITHIN file.name 'item.name'
```

where:

**file.name** is the name of the file to be queried.  
**item.name** is the item Id of the record whose sub-records are to be retrieved.

## Example

The following query:

```
LIST WITHIN BOOK_SALES '13471*46800*1' TITLE_ID TITLE_NAME GENRE
```

generates the following result:  

```
LEVEL  BOOK_SALES      TITLE_ID Title............... Genre.....

1      13471*46800*1         52 James and the Giant  Fiction
                                Peach
                            107 The Six Wives of     History
                                Henry VIII
                             15 The Lord of the      Fantasy
                                Rings: Complete &
                                Unabridged
                            221 Hard Times: Complete Classic
                                & Unabridged
                             30 Harry Potter and the Fantasy
                                Prisoner of Azkaban
                                (Book 3 - Unabridged
                                8 Audio Cassette Set
                                - Adult Edition)
                            192 Soul Music           Fantasy
                                (Discworld S.)
                             19 Harry Potter and the Fantasy
                                Chamber of Secrets
                                (Book 2 - Unabridged
                                6 Audio Cassette Set
                                - Adult Edition)
                            226 Anne of Green Gables Fiction
                                (Puffin Classics)
                             77 Esio Trot (Puffin    Fiction
                                Audiobooks)

1 records listed.
```

Back to [Cross Reference](./../README.md)

<PageFooter />
