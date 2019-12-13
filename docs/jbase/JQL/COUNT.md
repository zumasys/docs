# COUNT 

**Created At:** 6/8/2018 1:55:18 PM  
**Updated At:** 7/13/2018 10:08:58 AM  

**Tags:**
<badge text='jql' vertical='middle' />

## Description

Reports the total number of records found in a file that match the selection criteria specified. It takes the general form:

```
COUNT file-specifier {record-list} {selection-criteria} {USING file- specifier} {(options}
```

where options can be one or more of the following:


| Option<br> | Description<br> |
| --- | --- |
| B<br> | Suppress initial line-feed.<br> |
| C{n}<br> | Display running c ounters of the number of records selected and records processed. Unless modified by n, the counter increments after every 500 records processed or the total number of records if less than 500. The n specifies a number other than 500 by which to increment. For example, (C25) increments the counter after every 25 records processed.<br> |
| P<br> | Send the report to the printer.<br> |




### EXAMPLES

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



Back to [JQL](jbase-query-language-jql-)


