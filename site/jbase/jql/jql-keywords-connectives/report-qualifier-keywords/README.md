# Using Report Qualifier Keywords  

<PageHeader />

Report qualifiers provide a variety of ways to control and refine the overall format of a report.  
COL-HDG, ID-SUP, DET-SUP, LPTR, SAMPLE, and SAMPLED are report qualifiers you saw in previous examples. The following list summarizes the most commonly used report qualifiers:  

| Keyword         | Synonym        | Description  |
| --- | --- | --- |
| COL-HDR-SUPP    | COL.HDR.SUPP   | Suppresses the default report and column headings. |  
| COL-SPCS        | COL.SPCS       | Changes the default spacing between columns. |  
| COL-SPACES      | COL.SPACES     | Specifies the spacing between the columns of a report |  
| COL-SUP         | COL.SUP        | Suppresses the column heading. |  
| COUNT-SUPP      | COUNT.SUPP     | Suppresses the count displayed at the bottom of a report. |  
| DBL-SPC         | DBL.SPC        | Double-spaces the report. |  
| DET-SUPP        | DET.SUP        | Displays only the breakpoint lines. |  
| DET-SUPP        | DET.SUPP       | Use with BREAK.ON. |  
| FOOTING         | FOOTER         | Sets the report footing. |  
| GRAND-TOTAL     | GRAND.TOTAL    | Sets the text for a grand total line. |  
| HDR-SUP         | HDR-SUPP, SUPP | Suppresses the default report heading. |  
| HEADING         | HEADER         | Uses the report header you specify in the query rather than the default heading. |  
| HEADING DEFAULT | HEADER DEFAULT | Displays the default heading. |  
| ONLY            | ID-ONLY        | Displays record IDs only. |  
| ID-SUP          | ID.SUPP        | Suppresses the display of record |  
| LPTR            | (P             | Sends the output to the printer. |  
| NOPAGE          | (N             | Specifies that the report is automatically scrolled on the terminal |  
| SAMPLE          | FIRST          | Displays the first n records |  
| SAMPLED         |                | DISPLAYS even nth record |  
| VERTICALLY      | VERT           | Displays the report in vertical format with one field on each line. |  

| <!----> |  <!----> |  
| ---  | --- |  
| B    | Functions only if a BREAK-ON modifier with a **B** option is also included in the sentence. You can use the **B** option in either the header or footer. When the **B** Option is in the HEADING the value of the first BREAK-ON field on the page replaces the **B** in the header. When the **B** is in the FOOTING, the last BREAK-ON value on the page replaces the **B** in the footer. |  
| C{n} | Centralizes the heading or footing text and centres the text according to the predefined number of the columns specified for the printer or terminal. To change the centering of the text, specify the number of columns (n) for the heading line on which to base the center. For example: ‘C80’ positions the text centered at character position 40. You should allow the printer or terminal set-up to determine the centering. |  
| D     | Inserts the current date using the format: dd mmm yyyy. |  
| F     | Inserts the file name |  
| I     | Inserts the current record key. The last record key listed on thepage is inserted in the footing; the first key on the page is inserted in the heading |  
| L     | Specifies that a new line is to start where the **L** appears |  
| N     | Specifies suppression of automatic paging. |  
| P     | Inserts the current page number right justified, expanding to the right as the number increases. |  
| PP    | Inserts the current page number right justified in a field of four spaces |  
| T     | Inserts the current system time and date in the format: hh:mm:ss dd mmm yyyy |  

## GRAND-TOTAL  

Specifies the text to replace the default asterisks in the cumulative total line at the end of the report; CAPTION is a synonym for GRAND-TOTAL.

| <!----> |  <!----> |  
| ---  | --- |
| L    | Line: suppresses the blank line preceding the GRANDTOTAL line. Overrides the **U** option if both are specified  |  
| P    | Page: outputs the GRAND-TOTAL on a separate page. |  
| U    | Underline: places underlines on the line above the accumulated totals. Ignored if used with the **L** option. |  
| LPTR | Specifies that a report go to the printer queue (spooler) instead of displaying at the terminal. You could use the ‘P’ option at the end of the sentence in place of this modifier. |  

### Note

>Enter a heading or footing option, which specify a value in the order in which they appear.
> Text spaces are not normally required between option codes. However, you can present options that represent values such as pages or dates without spaces.  
> For example: ’”PD”’ may print on the first page as:

```
111/11/00
```

>In this case, enter the options with a space between them like this “‘P’ ‘D’”

### Example

```
SORT ORDER BY ORD.ID. BREAK-ON ORD.ID ‘BL’ ORD.QTY GRAND-TOTAL “Total “ HEADING "ORD.QTY : ‘B’ ‘DL’” FOOTING “PAGE ‘CPP’" LPTR
```

Control Break on a change in ORD.ID and suppress the LINE FEED before the break.  
Reserve the break value for use in the heading (‘B’).  
Maintain a running total of the VALUE field and output it at each control break.  
Put the word Total on the GRAND-TOTAL line.  
Set up a heading for each page, which comprises the words ‘ORD.QTY:’, the ORDER code (from the break), a date and a line feed.  
Set up a footing, this contains the text ‘PAGE’, and a page number, centered on the line.  
Produce the report on the currently assigned printer.  

## Throwaway Connectives  

Throwaway connectives are keywords which make queries more readable.  
You can use them in any query to make the sentence read more like English and they can be used anywhere in a sentence as throwaway connectives do not affect the query.  

The following query uses the words THE, FOR, and FILE without affecting the meaning of the command:  

```
LIST THE ORDER BY ORD.UNIT.PRICE FOR THE ORD.STATUS
```

The throwaway keywords are:

| Throwaways |
| ---        |
| A          |  
| ARE        |  
| FILE       |  
| FOR        |  
| INVISIBLE  |  
| OF         |  
| PRINT      |  
| THAN       |  
| THE        |  

As another example, entering the following command would be incorrect:

```
LIST ORDER AND ORD.CUS.PRICE FOR THE ORD.STATUS
```

Back to [jQL Keywords and Connectives](./../README.md)  

<PageFooter />
