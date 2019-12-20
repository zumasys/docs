# LIST-ITEM 

**Created At:** 6/8/2018 1:59:28 PM  
**Updated At:** 7/13/2018 10:10:56 AM  
**Original Doc:** [list-item](https://docs.jbase.com/46350-jql/list-item)  

**Tags:**
<badge text='jql' vertical='middle' />

## Description

Displays the contents of items. It takes the general form:

```
LIST-ITEM file-specifier {record-list} {selection-criteria} {sort-criteria} {USING file-specifier} {(options}
```

where options specific to LIST-ITEM are:


| F<br> | start the display of each item on a new page<br> |
| --- | --- |
| S<br> | suppress line numbers<br> |
| N<br> | non-paged output<br> |
| P<br> | output is sent to the assigned printer<br> |
| X<br> | data is displayed in hexadecimal<br> |




## Note: 


> When not displaying in hexadecimal, unprintable characters are displayed as periods.




### EXAMPLE

```
LIST-ITEM BP WITH *A1 = "[SUBROUTINE]" (SNP
```

Lists all jBC program from the BP file that are designated as subroutines on line 1 of each program. Line numbers are suppressed. Non-paged output is directed to the assigned printer.



Back to [JQL](jbase-query-language-jql-)
