## Define File Dictionaries (FDICT.E)
<PageHeader />

## Lookups

![](./FDICT-E-3.jpg)

| **Lookup Name**|  Enter a name to define the lookup. This entry is not
displayed in the actual lookup dialog box or the pull down menu.

-  
**Menu Caption**|  Enter the text that is to appear on the pull down menu.

**List Caption**|  Enter the test that is to appear in the title bar of the
selection list box.

**Program Name**|  If this lookup is to be executed by a program then enter
the name of the program that is to perform the lookup in this field. If a
program name is entered, the lookup definitions in the subsequent prompts will
be ignored. The program must be a subroutine with one argument which will be
loaded with the existing data value contained in the field from which the
lookup has been activated. The calling program should return the data value to
be loaded into the field in the same argument.

**Enabled**|  You may specify that the lookup is to be included by checking
this box. If not checked the lookup will not appear as one of the options in
the right-click menu. This flag is useful in cases where you want to disable a
lookup, such as a standard product lookup, without deleting the information.

**Std Product**|  Check this box if this lookup is delivered as part of the
standard product. If you are defining a custom lookup then leave this box
unchecked. You should NOTchange the flag on a standard lookup.

**Display Field**|  Enter the name of each field (column) to be shown on the
lookup. The system will not limit the number of columns you define, so be
careful not to select more fields than will fit across the screen.

**Sort Field**|  Enter each of the fields you want to use as a criteria for
sorting the data in the lookup. Sorting will be done in the order entered.

**Sort Sequence**|  Enter the letter "A" to sort the associated field in
ascending sequence, or enter "D" for descending sequence. If no entry is made
the default of "A" is used.

**Compare Field**|  Enter each of the fields to be compared to a value based
on the operator chosen. For example, if you specify that a field must be equal
to a value, then only items equal to that value will be included in the
lookup.

**Compare Oper**|  Enter the operator to be used in the comparison. Options
are:
EQ - Equal To
GT - Greater Than
LT - Less Than
GE - Greater Than or Equal To
LE - Less Than or Equal To
SW - Starting With
EW - Ending With
C - Containing
NEQ - Not Equal To
NGT - Not Greater Than
NLT - Not Less Than
NGE - Not Greater Than or Equal To
NLE - Not Less Than or Equal To
NSW - Not Starting With
NEW - Not Ending With
NC - Not

**Compare Value**|  Enter the value that the associated field is to be
compared to. If you enter a question mark (?)
in this field the user will be prompted to enter a value for use in the
comparison. The prompt displayed will use the name of the field associated
with the comparison unless you specify your
own text. Do this by entering what you want displayed as a prompt immediately
following the
question mark, no spaces in between.
Another option available for prompting the user is to place an at sign (@) in
the first character
position followed by the name of a program that is to be called (no spaces
between the @ and
the program name). The program must have one argument which should be returned
with the
value to be used in the comparison. This approach is useful in cases where you
need to
resolve a name the user enters to obtain a customer or vendor number which can
be used in
the comparison. There is another option available using the at sign (@) that
allows you to
execute another predefined lookup. Follow the at sign with "ACE$LOOKUP"
followed by a
comma and the name of the file containing the lookup, then another comma and
the name of
the lookup to be used. The result of the user selection for the lookup will be
returned as the
value to be used in the comparison for the current lookup.
There is another syntax available that allows you to automatically load the
response with the contents of another field on the form. Since this source
field will vary from one file to another you must specify the name of the file
and the associated fields. To do this enter a pipe symbol (|) followed by the
name of the file, followed by a comma (,), followed by the field number from
which the lookup is being performed, followed by an equal sign (=), followed
by the field number from where source data is to be extracted and, if
required, followed by another comma and the value level, followed by another
comma and the sub-value level. Note: In all cases where a field number is
being requested you may specify a temporary field by preceding it with the
letter "T". To specify the ID field use 0 (zero). For example, suppose you
were defining a lookup in the LOT file based on part number and you setup a
question mark against the part number field so the user would be prompted for
the part number. But in cases
where the user is in the WO file, you would like the part number already
present on the work order to be automatically loaded as the response. To do
this your entry would look like this:
?Enter part number.|WO,61=2
In this example the lot number field in the WO file is 61 and the part number
field is 2.
If you decided to add another automatic entry for the INV file, which stores
the lot number in field 10 and the part number is the key to the file your
entry would look like this:
?Enter part number.|WO,61=2|INV,10=


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
