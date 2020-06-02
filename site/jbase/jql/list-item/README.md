# LIST-ITEM, SORT-ITEM  

<PageHeader />

**Tags:**
<badge text='jql' vertical='middle' />

## Description

Displays the contents of items. It takes the general form:

```
LIST-ITEM file-specifier {record-list} {selection-criteria} {sort-criteria} {USING file-specifier} {(options}

SORT-ITEM file-specifier {record-list} {selection-criteria} {sort-criteria} {USING file-specifier} {(options}
```

where options specific to LIST-ITEM / SORT-ITEM are:

| <!----> | <!----> |
| --- | --- |
| F | start the display of each item on a new page |
| S | suppress line numbers |
| N | non-paged output |
| P | output is sent to the assigned printer |
| X | data is displayed in hexadecimal |

## Note

> When not displaying in hexadecimal, unprintable characters are displayed as periods.
> **SORT-ITEM** can be used to output a sorted list of items.

### Example

```
LIST-ITEM BP WITH *A1 = "[SUBROUTINE]" (SNP
```

Lists all jBC program from the BP file that are designated as subroutines on line 1 of each program. Line numbers are suppressed. Non-paged output is directed to the assigned printer.

Back to [jQL](./../jbase-query-language/README.md)

Back to [jQL Cross Reference](./../jql-keyword-cross-reference/README.md)

<PageFooter />
