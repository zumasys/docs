# HEADING, HEADER  

<PageHeader />

The **HEADING** keyword specifies a string of text comprising literal values and special options to be displayed/printed at the top of each report page.  

## Syntax

```
HEADING "text.string { options } {text.string} "
```

where:

**text.string** describes the text of the heading to appear at the top of each page.  
**options** - see [Report Qualifiers](./../../jql-keywords-connectives/report-qualifier-keywords/README.md) for a list of options to be used (in single quotes) as part of the **HEADING** definition.

## Example

```
LIST BOOK_SALES HEADING "'C'Book Sales Report 'D'          Page 'PL'"
```

will produce a report with centered heading in the format:

```
                                                              Book Sales Report 26 MAY 2020          Page    1

BOOK_SALES   Sale Date..   SURNAME.............   FORENAME............   TITLE_ID   QTY   PRICE   GIFT   Title...............   Author Name.........

```

Back to [Cross Reference](./../README.md)

<PageFooter />
