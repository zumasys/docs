# Connectives  

<PageHeader />

## CONV  

The CONV connective allows the query to override the default conversion as supplied in the dictionary with another conversion, or to define the conversion to be applied to a virtual field.  

### CONV Example  

```
LIST CUSTOMER *A1

CUST..... *A1......
1         FRED BLOGGS
2         TOM JONES
```

```
LIST CUSTOMER *A1 CONV “MCT”

CUST..... *A1......
1         Fred Bloggs
2         Tom Jones
```

### Note

>**CNV** is a synonym for **CONV**

## COL.HDG  

The COL.HDG connective allows the query to override the default column header as supplied in the dictionary with another textual description.

```
LIST CUSTOMER *A1

CUST..... *A1......
1         FRED BLOGGS
2         TOM JONES
```

```
LIST CUSTOMER *A1 COL.HDG “Customer name”

CUST..... Customer name
1         FRED BLOGGS
2         TOM JONES
```

## EVAL

The EVAL connective allows an expression to be evaluated and used as though it were an I-type defined in a dictionary, i.e. to define a temporary virtual field.

### EVAL Example

Here is a rather esoteric example using a TIMESHEET file which contains a multivalued list of start and stop times.

This example is also a partial demonstration of controlling/dependent attribute definitions:

TIMESHEET dictionary items:

START.TIME

```
dict = ''
dict<1> = 'A'
dict<2> = '2'
dict<4> = 'C;1;3;4;5;6;7'
dict<7> = 'MT'
dict<9> = 'R'
dict<10>= '10'
```

STOP.TIME

```
dict<2> = '3'
dict<4> = 'D;2'
```

Anonymised TIMESHEET data:

employee1

```
item = ''
item<2> = '41400' : @VM : '37800'
item<3> = '42000' : @VM : '44100'
```

employee2

```
item<2> = '28800' : @VM : '29700' : @VM : '30300' : @VM : '39600' : @VM : '40500' : @VM : '50880' : @VM : '54780'
item<3> = '29700' : @VM : '30120' : @VM : '39600' : @VM : '40500' : @VM : '50880' : @VM : '57600' : @VM : '55140'
```

```
LIST TIMESHEET EVAL "STOP.TIME - START.TIME"

PAGE    1

TIMESHEET.....    STOP.TIME - START.TIME

employee1                            600
                                    6300
employee2                            900
                                     420
                                    9300
                                     900
                                   10380
                                    6720
                                     360
```

## FMT

The FMT connective allows the query to override the formatting used to display the corresponding data with a different format mask  

### FMT Example  

```
LIST CUSTOMER *A1

CUST..... *A1...
1         FRED B
2         TOM JO
```

```
LIST CUSTOMER *A1 FMT “25L”
CUST..... *A1......................
1         FRED BLOGGS
2         TOM JONES
```

## Total Connectives

The TOTAL connective specifies that a running total of the field be maintained and to output the total at each control break and at the end of the report.  
Also, use TOTAL in conjunction with the BREAK-ON connective to display intermediate totals at the control breaks.  
Use the GRAND-TOTAL modifier in the format specification clause to display any specified text on the last total line.  

## BREAK-ON  

The BREAK-ON connective causes monitoring of the following fields for change permitting up to fifteen breaks within one sentence treated in hierarchical left to right order.  
The first BREAKON in the sentence is the highest level.  
When detected, the change in the value of the field outputs a blank line, followed by a line with three asterisks, and then another blank line.  
If the BREAK-ON clause specifies text, it outputs the text in place of asterisks.  
If the text is wider than the column width, the processor applies the same justification as the named field.  
You can suppress the BREAK-ON output by setting the column width of the field to zero.  
You can use BREAK-ON in conjunction with the TOTAL connective to generate subtotals.  
If using the modifier DET-SUPP with TOTAL and BREAK-ON, it displays only the subtotal and grand total lines.  

### BREAK-ON Options  

| <!----> | <!----> |
| --- | --- |
| B   | Break. Works in conjunction with the B option of the heading and footing modifiers to put the break values in the heading or footing |  
| D   | Data. Suppresses the break line if there is only one detail since the last BREAK. This is the line with the asterisks, any text that is specified, or totals |  
| L   | Line. Suppresses the blank line preceding the break data lie. Overrides the 'U' option if both are specified |  
| P   | Page. Causes each break item to be output on a separate page |  
| R   | Rollover. Inhibits a page break until all the data associated with the current break is output |  
| U   | Underlines. Places underlines on the line above the accumulated totals if the TOTAL modifier was specified. Ignored if used with the ‘L’ option |  
| V   | Value. Causes the values of the control Break attribute to be inserted at this point in the BREAK-ON label |  

## Controlling and Dependent Fields  

### To be supplied

## Formatting Reports with Report Qualifiers  

Using report qualifiers, you can tailor the layout of the entire report by setting up headers and footers on each page, adjusting margins and spacing, and determining output orientation (horizontal or vertical).  
In addition, there are two jQL commands, LIST-LABEL and SORT-LABEL, which enable you to format and sort mailing labels.  

Back to [jQL Keywords and Connectives : @VM :  (./../README.md)  

<PageFooter />
