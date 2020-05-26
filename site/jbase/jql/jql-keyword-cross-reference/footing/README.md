# FOOTING, FOOTER

<PageHeader />

The **FOOTING** keyword specifies a string of text comprising literal values and special options to be displayed/printed at the bottom of each report page.  

## Syntax

```
FOOTING "text.string { options } {text.string} "
```

where:

**text.string** describes the text of the footing to appear at the bottom of each page.  
**options** - see [Report Qualifiers](./../../jql-keywords-connectives/report-qualifier-keywords/README.md) for a list of options to be used (in single quotes) as part of the **FOOTING** definition.

## Example  

The following query:

```
LIST BOOK_SALES FOOTING "'C'Book Sales Report 'D'          Page 'P'"
```

will produce a report with centered footing in the format:

```
                                                               Book Sales Report 26 MAY 2020          Page    1
```

Back to [Cross Reference](./../README.md)

<PageFooter />
