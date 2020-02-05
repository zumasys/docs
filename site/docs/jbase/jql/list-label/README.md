# LIST-LABEL

**Created At:** 6/8/2018 1:59:55 PM  
**Updated At:** 7/13/2018 10:11:22 AM  
**Original Doc:** [list-label](https://docs.jbase.com/46350-jql/list-label)  
**Original ID:** 321319  
**Internal:** No  

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

| <!----> | <!----> |
| --- | --- |
| COL | Number of columns required to list the data across the page. |
| ROW | Number of lines for each record. Each element of the output specification will be output on a separate line, if more elements exist in the output specification than there are rows specified, the extra elements will be ignored. If more rows are specified than elements, the output specification for these rows will be blank. |
| SKIP | Number of blank lines between each record. |
| INDENT | Number of spaces for left margin. |
| SIZE | Number of spaces required for the data under each column. |
| SPACE | Number of horizontal spaces to skip between columns. |
| C | Optional. Suppresses null or missing data. If absent, null or missing values are output as blanks. If present, the C must be upper case and not in quotes. |

## Note

> The total number of columns specified must not exceed the page width, based on the calculation:  
>
> COLs \* (SIZE + SPACE) + INDENT &lt;= page width  
>
> **ROW** must be a minimum of one for each field, plus one for the record key (if not suppressed). If record keys are not suppressed, the first row of each label will contain the record key.
>
> If **INDENT** is not zero, you will be prompted to supply a series of HEADERs that will appear in the left margin for each field. If a heading is not required for a particular line, press RETURN.
>
> Multivalued fields appear as separate labels.
>
> If **COL-HDR-SUPP** or **HDR-SUPP**, or the **C** or **H** options are specified, the page number, date, and time will not be output and the report will be generated without page breaks. The records will not be sorted unless you specify a sort criteria clause.

### Example

```
LIST-LABEL SALES NAME ADDRESS STREET TOWN POSTCODE ID-SUPP (C
```

prompt:

```
COL,ROW,SKIP,INDENT,SIZE,SPACE(,C): 2,5,2,0,25,4,C
```

| <!----> | <!----> |
| --- | --- |
| NAME1 | NAME2 |
| ADDRESS1 | ADDRESS2 |
| STREET1 | STREET2 |
| TOWN1 | TOWN2 |
| POSTCODE1 | POSTCODE2 |

` `

| <!----> | <!----> |
| --- | --- |
| NAME3 | NAME4 |
| ADDRESS3 | ADDRESS4 |
| STREET3 | STREET4 |
| TOWN3 | TOWN4 |
| POSTCODE3 | POSTCODE4 |

Back to [jQL](jbase-query-language-jql-)
