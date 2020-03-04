# LIST

**Created At:** 6/8/2018 1:58:55 PM  
**Updated At:** 7/13/2018 10:10:33 AM  
**Original Doc:** [list](https://docs.jbase.com/46350-jql/list)  
**Original ID:** 321317  
**Internal:** No  

**Tags:**
<badge text='jql' vertical='middle' />

## Description

Generates a formatted report of records and fields from a specified file. It takes the general form:

```
LIST file-specifier {record-list} {selection-criteria} {sort-criteria} {USING file-specifier} {output-specification} {format-specification} {(options}
```

## Note

> If an output specification clause is not provided, the system will search for default data definition records (named 1, 2, 3 and so on) in the file's dictionary and then in the file specified in the JEDIFILENAME\_MD environment variable. If default data definition records cannot be found then only the record keys will be listed.

The records will not be sorted unless sort criteria clause is specified.

### Example 1

```
LIST SALES
```

List all the records in the SALES file and use the default data definition records (if found) for the output.

### Example 2

```
LIST SALES "ABC" "DEF" "GHI"
```

List the records from the SALES file with key values of ABC, DEF or GHI. Use the default data definition records (if found) for the output.

### Example 3

```
GET-LIST SALES.Q4
>LIST SALES GT "DEF"
```

Get the previously saved list called SALES.Q4 and, using the list, report on the records in the SALES file which have a key greater than DEF. Use the default data definition records (if found) for the output.

### Example 4

```
LIST SALES WITH S.CODE = "ABC]" OR "[DEF"
```

List the records in the SALES file in which the S.CODE field contains values which start with ABC or end with DEF. Use the default data definition records (if found) to format the output.

### Example 5

```
LIST SALES WITH NO S.CODE = "ABC]" OR "[DEF" (P
```

List the records in the SALES file in which the S.CODE field does not contain values which start with ABC or end with DEF. Output the report to the printer. Use the default data definition records (if found) for the output.

### Example 6

```
LIST SALES BY S.CODE BREAK-ON S.CODE ""BL" P.CODE TOTAL VALUE GRAND-TOTAL "Total" HEADING "Sales Code : "B" "DL" FOOTING " Page "CPP" LPTR
```

Sort the SALES file by S.CODE. Output the S.CODE, P.CODE and VALUE fields.

Control break on a change in S.CODE and suppress the LINE FEED before the break. Reserve the break value for use in the heading ("B").

Maintain a running total of the VALUE field and output it at each control break.

Put the word "Total" on the grand-total line.

Set up a heading for each page which comprises the words "Sales Code : ", the sales code (from the break), a date and a LINE FEED. Set up a footing which contains the text "Page " and a page number, centered on the line.

Produce the report on the currently assigned printer.

Back to [jQL](jbase-query-language-jql-)
