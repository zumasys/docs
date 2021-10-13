## Procedure Definition Entry (PD.E)
<PageHeader />

## Prompt Definitions

![](./PD-E-4.jpg)

| **Prompt ID**|  Enter the record or temporary field number you are defining.
Update record fields are entered as the field number where they reside in the
update record. Temporary fields are prefixed with a T followed by the number
of the temporary field.

-  
**Prompt name**|  Enter the name of the field being defined. This name is used
as a reference for this procedure and is also used as the default for loading
the prompt name in the screen builder.

**Reference File**|  If you are specifying a temporary field, or the update
file specified for the data entry procedure does not have a dictionary element
defined for this field (i.e. JD or CONTROL), and the data to be entered in the
field is the key to another file then enter the name of that file in this
field. This information is used to enable standard lookups defined in the
FDICT file. You should leave the file name blank for all other fields as they
will be derived automatically from the FDICT of the update file for the
procedure.

**Max entry**|  Enter the maximum number of characters that may be entered at
this prompt.

**Min entry**|  The label on this field is misleading because it actual
defines the following: if a field is a tab stop, read only field, and if an
entry is required. The entries allowed are:

Nil - Tab Stop = True, Read Only = False, Required = False
1 - Tab Stop = True, Read Only = False, Required = True
2 - Tab Stop = True, Read Only = True, Required = True
3 - Tab Stop = False, Read Only = True, Required = True
4 - Tab Stop = False, Read Only = False, Required = True
0 - Tab Stop = True, Read Only = True, Required = False
-1 - Tab Stop = False, Read Only = True, Required = False
-2 - Tab Stop = False, Read Only = False, Required =

**Field Size**|  Enter the size of the data entry area in characters. The size
of the prompt can be either larger or smaller than the maximum number of
characters allowed. If no entry is made the size will be set to the maximum
characters.

**Field Height**|  Enter the hieght of the data entry area in rows. If no
entry is made the height will be set to the one row.

**Justification**|  Enter L to display the data left justified, or enter R to
display the data right justified.

**Trim prompt**|  Enter a Y if the extra spaces are to be trimmed from any
entry made to this field.

**Conversion**|  Enter any valid conversion you wish to apply to the data
entered into this prompt. The conversion will serve as a validation for the
data and also convert it to internal storage format.

**Repeating**|  Enter a Y if this field is to be prompted repetitively. Fields
which are included in a sub dataset may not be defined as repeating.

**Ranges**|  Enter the valid ranges of data which may be entered into this
field. The range is specified by entering the low range followed by a comma,
followed by the high range. For example if you wanted to limit the entry to a
number between 1 and 99 inclusive you would enter 1,99. If you wanted to
insure that the data was always 1 or greater you would enter only 1. The high
end would then be assumed to be infinite. Similarly, if you wanted to make
sure the entry was always a negative number you would enter ,0. You may enter
multiple ranges. The entry will qualify if it meets any of the stated ranges.

**Match patterns**|  If there are a finite set of data entry options for the
field being defined then you may enter each of the valid options in this field
and a description of the option in the associated field.

**Match Pattern Description**|  Enter a description of the associated data
entry option.

**Prompt Help**|  Enter any help text which is to be displayed when the user
presses the short help key sequence at this prompt.

**Added Help Options**|  Enter the text for any additional options that are to
appear in the help box when the user pressing the help key. Each line will
appear as a separate help option. A call to the application program will be
made if the user selects any of the options defined in this field.

**Before input call**|  Enter a Y if the application program should be called
just prior to input of this prompt.

**After input call**|  Enter a Y if the application program should be called
immediately after data is entered in this field.

**Before insert call**|  Enter a Y if the application program should be called
after the user presses the insert key sequence at this prompt, but before the
insert is actually executed.

**After insert call**|  Enter a Y if the application program should be called
immediately after the insert is executed at this prompt.

**Before delete call**|  Enter a Y if the application program should be called
after the delete key sequence is entered at this prompt, but before the delete
is executed.

**After delete call**|  Enter a Y if the application program should be called
immediately after the delete command is executed at this prompt.

**Before move call**|  Enter a Y if the application program should be called
after the move key sequence is entered, but before the move is executed.

**After move call**|  Enter a Y if the application program should be called
immediately after the move command has been executed.

**Before copy call**|  Enter a Y if the application program should be called
after the copy key sequence has been entered, but before the copy command is
executed.

**After copy call**|  Enter a Y if the application program should be called
immediately after the copy command is executed.

**Before drop call**|  Enter a Y if the application program should be called
after the drop key sequence has been entered, but before the drop command is
executed.

**After drop call**|  Enter a Y if the application program should be called
immediately after the drop command has been executed.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
