# XLATE

**Created At:** 10/4/2017 12:36:19 PM  
**Updated At:** 1/5/2018 6:40:28 PM  


# Description

The**XLATE**function will return the data value of a field, given the name of the file, the record key, the field number, and an action code. It takes the general form:

```
XLATE ([DICT] filename, key, field#, action.code)
```

Where:

DICT is the literal string to be placed before the file name in the event it is desired to open the dictionary portion of the file, rather than the data portion.

filename is a string containing the name of the file to be accessed. Note that it is the actual name of the file, and not a file unit variable. This function requires the file name, regardless of whether or not the file has been opened to a file unit variable.

key is an expression that evaluates to the record key, or item ID, of the record from which data is to be accessed.

field# is the field number to be retrieved from the record.

action.code indicates the procedure if the field is null, or cannot find the if record. This is a literal, which may be:


| X<br> | Returns a null string. This is the default action<br> |
| --- | --- |
| V<br> | Prints an error message.<br> |
| C<br> | Returns the value of key<br> |




If the field being accessed is a dynamic array, **XLATE**will return the array with the delimiter characters lowered by 1. For example, multivalue marks (ASCII-253) are returned as subvalue marks (ASCII-252), and subvalue marks are returned as text marks (ASCII-251). If supplied -1 for field#, it returns the entire record.

Examples of use include:

**1**. Retrieval of a simple field: Given a file called "VENDORS" containing a record with the record key of "12345" and which contains the value of "ABC Company" in field 1,

```
VENDOR.ID = "12345"
VENDOR.NAME = XLATE("VENDORS",VENDOR.ID,1,"X")
CRT VENDOR.NAME
```

to display: ABC Company

**2**. Retrieval of an array: Suppose field 6 of the VENDORS file contains a multivalued list of purchase order numbers, such as

10011]10062]10079 use the **XLATE** function to retrieve as :

```
PO.LIST = XLATE("VENDORS",VENDOR.ID,6,"X")
CRT PO.LIST
```

to display: 10011\10062\10079

Notice that the backslashes (\) were substituted for brackets (]), indicating that the delimiter is now CHAR(252).

**3**. Retrieval of an entire dictionary item: Given a dictionary item called "VENDOR.NAME" with the following content:

```
001 A
002 1
003 Vendor Name
004
005
006
007
008
009 L
010 30
```

using the statements:

```
DICT.ID = "VENDOR.NAME"
DICT.REC = XLATE("DICT VENDORS",VENDOR.ID,-1,"C")
PRINT DICT.RECwill display
```

to display: A]1]Vendor Name]]]]]L]30



See also: [TRANS](278970-trans).

Go back to [jBASE BASIC](263498-jbase-basic).
