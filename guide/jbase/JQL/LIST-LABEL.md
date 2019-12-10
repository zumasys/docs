# LIST-LABEL

**Created At:** 6/8/2018 1:59:55 PM  
**Updated At:** 7/13/2018 10:11:22 AM  

**Tags:**
<badge text='jql' vertical='middle' />

## Description

Outputs data in a format suitable for producing labels. It takes the general form:

```
LIST-LABEL file-specifier {record-list} {selection-criteria} {sort-criteria} {USING file-specifier}{output-specification} {format-specification} {(options} 
```

The user will be prompted to supply formatting criteria as:

```
COL,ROW,SKIP,INDENT,SIZE,SPACE{,"C"}:
```

where:


| COL<br> | Number of columns required to list the data across the page.<br> |
| --- | --- |
| ROW<br> | Number of lines for each record. Each element of the output specification will be output on a separate line, if more elements exist in the output specification than there are rows specified, the extra elements will be ignored. If more rows are specified than elements, the output specification for these rows will be blank.<br> |
| SKIP<br> | Number of blank lines between each record.<br> |
| INDENT<br> | Number of spaces for left margin.<br> |
| SIZE<br> | Number of spaces required for the data under each column.<br> |
| SPACE<br> | Number of horizontal spaces to skip between columns.<br> |
| C<br> | Optional. Suppresses null or missing data. If absent, null or missing values are output as blanks. If present the C must be upper case and not in quotes.<br> |




## Note: 


> The total number of columns specified must not exceed the page width, based on the calculation:
> 
> COLs \* (SIZE + SPACE) + INDENT &lt;= page width
> 
> ROW must be a minimum of one for each field, plus one for the record key (if not suppressed). If record keys are not suppressed, the first row of each label will contain the record key.
> 
> If INDENT is not zero, you will be prompted to supply a series of HEADERs that will appear in the left margin for each field. If a heading is not required for a particular line, press RETURN.
> 
> Multivalued fields appear as separate labels.
> 
> If COL-HDR-SUPP or HDR-SUPP, or the C or H options are specified, the page number, date, and time will not be output and the report will be generated without page breaks. The records will not be sorted unless you specify a sort criteria clause.




### EXAMPLE

```
LIST-LABEL SALES NAME ADDRESS STREET TOWN POSTCODE ID-SUPP (C
```

prompt:

```
COL,ROW,SKIP,INDENT,SIZE,SPACE(,C): 2,5,2,0,25,4,C
```


| NAME1<br> | NAME2<br> |
| ADDRESS1<br> | ADDRESS2<br> |
| STREET1<br> | STREET2<br> |
| TOWN1<br> | TOWN2<br> |
| POSTCODE1<br> | POSTCODE2<br> |


` `


| NAME3<br> | NAME4<br> |
| ADDRESS3<br> | ADDRESS4<br> |
| STREET3<br> | STREET4<br> |
| TOWN3<br> | TOWN4<br> |
| POSTCODE3<br> | POSTCODE4<br> |




Back to [JQL](jbase-query-language-jql-)


