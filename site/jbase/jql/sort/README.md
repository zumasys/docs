# SORT

**Created At:** 6/8/2018 2:03:51 PM  
**Updated At:** 7/13/2018 10:12:46 AM  
**Original Doc:** [sort](https://docs.jbase.com/46350-jql/sort)  
**Original ID:** 321324  
**Internal:** No  

**Tags:**
<badge text='jql' vertical='middle' />

## Description

Generates a sorted and formatted report of records and fields from a specified file.

```
SORT file-specifier {record-list} {selection-criteria} {sort-criteria} {USING file-specifier} {output-specification} {format-specification} {(options}
```

## Note

> Unless a different sort order is specified in the sort criteria, the records will be presented in an ascending order based on the record key.

The data definition record (or the file definition record in the case of keys) determines whether a left or right sort will be applied to the data.

If the field is left-justified, the data will be compared on a character-by-character basis from left to right, using ASCII values. For example:

```
01
100
21
A
ABC
BA
```

If the field is right-justified and the data is numeric, a numeric comparison will be performed and the values ordered by magnitude.

If the field is right-justified and the data is alphanumeric, the data will be collated into an alphanumeric sequence. For example:

```
A
01
123
ABCD
```

If a descending sequence is required, the BY-DSND modifier should be used in the sort criteria. A descending sequence of record keys can be obtained by using the BY-DSND modifier with a data definition record that points to field 0 ( the key). See "Sort Criteria Clause" earlier for a full explanation of the sorting process.

### Example 1

```
SORT SALES
```

Sort all the records in the SALES file into key order and use the default data definition records (if found) to format the output.

### Example 2

```
SORT SALES WITH S.CODE = "ABC" "DEF" "GHI"
```

Select the records in the SALES file in which the S.CODE field contains the values ABC, DEF or GHI. Sort the records into key order.

### Example 3

```
GET-LIST SALES.Q4
>SORT SALES GT "DEF" BY S.CODE
```

Get the implicit list called SALES.Q4 and, using the list, report on the records in the SALES file which have a key greater than DEF. Sort the report by S.CODE.

### Example 4

```
SORT SALES WITH S.CODE = "ABC]" OR "[DEF" BY-DSND S.KEY LPTR
```

Select the records in the SALES file in which the S.CODE field contains values which start with ABC or end with DEF. Sort the report in descending order of S.KEY (a data definition record which points to field 0 - the key) and output the report to the printer

### Example 5

```
SORT SALES BY S.CODE BREAK-ON S.CODE "'BL'" P.CODE TOTAL VALUE GRAND-TOTAL "Total" HEADING "Sales Code: 'B' 'DL' FOOTING "Page 'CPP'" LPTR
```

Sort the SALES file by S.CODE. Output the S.CODE, P.CODE and VALUE fields.

Control break on a change in S.CODE and suppress the LINE FEED before the break. Reserve the break value for use in the heading ("B"). Maintain a running total of the VALUE field and output it at each control break. Put the word "Total" on the grand-total line.

Set up a heading for each page which comprises the words "Sales Code: ", the sales code (from the break), a date and a LINE FEED. Set up a footing which contains the text "Page " and a page number, centered on the line.

Produce the report on the currently assigned printer.

Back to [jQL](jbase-query-language-jql-)

  
<PageFooter />
