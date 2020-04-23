# COUNT

<PageHeader />

**Tags:**
<badge text='jql' vertical='middle' />

## Description

Reports the total number of records found in a file that match the selection criteria specified. It takes the general form:

```
COUNT file-specifier {record-list} {selection-criteria} {USING file- specifier} {(options}
```

where options can be one or more of the following:

| Option | Description |
| --- | --- |
| B | Suppress initial line-feed. |
| C{n} | Display running c ounters of the number of records selected and records processed. Unless modified by n, the counter increments after every 500 records processed or the total number of records if less than 500. The n specifies a number other than 500 by which to increment. For example, (C25) increments the counter after every 25 records processed. |
| P | Send the report to the printer. |

### Examples

```
:COUNT SALES WITH VALUE > "1000"
91 Records counted
```

Count the number of records in the SALES file which have a value greater than 1000.

```
:COUNT SALES WITH VALUE > "1000" (C50
91 Records selected 240 Records processed
91 Records counted
```

Count the number of records in the SALES file which have a VALUE greater than 1000, and display a running total of selected and processed records after each group of 50 records are processed.

Back to [jQL](./../jbase-query-language/README.md)

<PageFooter />
