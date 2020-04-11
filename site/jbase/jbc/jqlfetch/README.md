# JQLFETCH

**Created At:** 9/14/2017 1:18:39 PM  
**Updated At:** 1/5/2018 5:09:13 PM  
**Original Doc:** [276790-jqlfetch](https://docs.jbase.com/36868-jbase-basic/276790-jqlfetch)  
**Original ID:** 276790  
**Internal:** No  

## Description

**JQLFETCH** fetches the next result in a compiled jQL statement. It takes the general form:

```
JQLFETCH (Statement, ControlVar, DataVar)
```

Where:

- **Statement** is the result of a valid call to [JQLCOMPILE](./../jqlcompile), followed by a valid call to [JQLEXECUTE](./../jqlexecute).
- **ControlVar** will receive the ‘control break’ elements of any query. For example, if there are BREAK values in the statement, described here is the format of **ControlVar**:

| Attribute| Description|
| --- | --- |
| Attr 1 | Level: 0 means detail line 1 – 25 for the control breaks, the same as the A correlative NB.|
| Attr 2| Item ID|
| Attr 3|  Break control Value is 1 if a blank line should be output first.|
| Attr 4| Pre-break value for 'B' option in header |
| Attr 5| Post-break value for 'B' option in header|

- **DataVar** will receive the actual screen data on a LIST statement, for instance. The format is one attribute per column.

Applies Attribute 7 Conversions (or attribute 3 in Prime-style DICTS) to the data

If the property STMT\_PROPERTY\_FORMAT is set then each attribute is also formatted according to the width and justification of the attribute definition and any override caused by the use of [FMT](./../fmt), or DISPLAY.LIKE on the command line.

## Note

> Column headers may also affect the formatting for that column. This function is called until there is no more output (multiple).

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
