# Data Definition Records - Dictionary Structure

<PageHeader />

**Tags:**
<badge text='structure' vertical='middle' />
<badge text='definitions' vertical='middle' />
<badge text='dictionary' vertical='middle' />
<badge text='dict' vertical='middle' />
<badge text='jql' vertical='middle' />

## Description

Dictionary definition records (sometimes known as data or field definition records) define the characteristics of each field in a data file. They specify the output format and the type of processing required to generate each column of a jQL report.

Data definition records can be used to:

- Specify default output.
- Associate field names with field numbers (column headings).
- Perform output formatting.
- Calculate new values based on the source data
- Perform processing via conversion codes.

Although they are normally used to define a single physical field in a file, the data definition records can also be used for more complex operations. For example:

- to "join" or derive data from other fields or files.
- to verify the presence (or absence) of records in other files.
- to format their output in the most easily understood manner (to convert numeric 0 and 1 flags to "Yes" or "No", for example, or to output text like "Overdue" if one date field is older than another).
- to generate statistical data like record sizes or counters.

The data definition records are usually located in the dictionary of the data file (but not always - see the USING Clause and the Default Output Specification topics). You can set up any number of data definition records. Often, there are several definitions for each field, each one used by a different set of reports which have different output requirements.

You associate the data definition record with a particular field in the data file by specifying the target field"s FMC (field-mark count) in field 2 of the data definition record. The FMC refers to (points to) the field number (also known as the line number) of the data within the records of the data file.

## Record Layout

All data definition records are defined in the same way:

| Field | Description |
| --- | --- |
| 001 D/CODE | Defines the record as a data definition record. Must be one of the following codes:<br><ul><li>A - marks a normal data definition record.</li><li>S (Reality) - obsolete but still supported. Was like the A type, but suppressed default column headings when field 3 was blank. Replaced by the A type with a backslash in field 3 to defeat heading.</li><li>S (others) - used to indicate synonym defining records for the same attribute</li><li>X - forces the record to be ignored if selected as part of a default set of data definitions. Can only be used when explicitly named. See Default Output Specification later.</li></ul><br><br> |
| 002  FMC<br>(field-mark count)<br> | A field number or special FMC (see Special Field-mark Counts later, for more details). A field number refers to the corresponding field (or line) in a record. The special FMC codes are:<br><ul><li>0 - Refers to the record key -field&nbsp;</li><li>9998 - Ordinal number of the record at output (used for numbering or counting)</li><li>9999 - Size of the record in bytes (excluding the key)&nbsp;</li></ul><br> |
| 003 Column heading| Can be heading text, null, or a backslash. If more characters are entered here than the width in field 10 allows for, the width will be increased to accommodate the heading text (this field wins). Column headings are not displayed if the statement uses the COL-HDR-SUPP output modifier or the "C" option. Heading text is used as the column heading. If the text is less than the column width, it will be padded with dots. Use spaces to produce a blank heading. Value marks, (ctrl ]), can be used as NEWLINE characters to multiple heading lines. If this field is left null, the key of the data definition record will be used as the column heading. If this field is a backslash "\" character, the column heading will be null (see Field 10).<br><br> |
| 004 Controlling/Dependent Attributes<br><br> |  Used to define associated fields within an item.  <br>Each multi-value in a controlling attribute controls/defines the corresponding values in the dependent/associated attribute.<br><br>The format is as follows:<br>C; attribute #; attribute #;attribute #; ...<br>D; attribute #<br><br>As an example, if the controlling attribute is 1 and there are associated fields in attributes 2,3 and 4, then field 4 in the attribute 1 defining item would contain "C;2;3;4" and field 4 in the attribute 2,3 and 4 defining items would contain "D;1"<br> |
| 005 - 006 |  Not used |
| 007 Input/Output Conversion Codes<br><br> | Used for processing the data after sort and selection but before output\*\*\*.<br>See also Pre-process Conversion Codes. Multiple conversion codes, separated by a value marks, will be processed from left to right.<br><br>\*\*\* Conversion codes for data stored as internal dates (D), internal times (MT) and numeric data (MD and MR), are pre-processed.<br> |
| 008 Pre-process Conversion Codes<br> | Used for processing the data before sort and selection and before field 7 codes. See Conversion Codes.<br><br> Multiple conversion codes, separated by a value marks, will be processed from left to right.<br><br> |
| 009 Format | Specifies the layout of the data within the column. Can be any of the following:<ul><li>L - Left justified. If the data exceeds the column width specified in field 10, the data is broken at column width without respect to blank spaces.</li><li>R - Right justify. If the data exceeds the column width specified in field 10, the data will be truncated.</li><li>T - Text. Word wrap - like L (left justified) but, where possible, lines will be broken at the blank space between words.</li><li>U - Unlimited. Data is output on one line ignoring column boundaries.</li></ul><br> |
| 010 Width | Numeric value specifying the column width. If the number of characters in Field 3 (the heading) is greater than the number entered here, the number of characters in field 3 will be used. If this field is 0 (zero) and Field 3 (the heading) is a backslash "\\" then the column will be "hidden".<br> |

## Special Field-mark Counts

Three special FMCs (field-mark counts) are recognised: 0, 9998 and 9999.

### FMC 0 - Record Key

Setting field 2 of the data definition record to 0 (zero), causes the system to work with the record key. In this way, you could set up a data definition record which would allow a the record keys to be output in a column other than the first, and to use any column heading.

Typically, you would also use the ID-SUPP modifier or the I command option to suppress output of the record key in the first column.

### FMC 9998 - Record Count / NI Operand

Setting field 2 of the data definition record to 9998, causes the system to return a record (or line) count equal to the number of records output so far in the report.

You could also use function operators within an A or F conversion code in field 7 or 8 of the data definition record to achieve the same result. Function code operand NI yields the same value as an FMC of 9998.

### FMC 9999 - Record Size / NL Operand

Setting field 2 of the data definition record to 9999, causes the system to return the record size in bytes. The size does not include the key but does include all field marks within the record.

You could also use function operators within an A or F conversion code in field 7 or 8 of the data definition record to achieve the same result. Function code operand NL yields the same value as an FMC of 9999.

## Default Output Specification

Default output specifications work in two ways, depending on whether the default definitions are explicit or implicit.

### Explicit Defaults

If you specify a data definition record to be used for output, the system will search for it first in the implied dictionary (or the dictionary specified in a USING clause).  If the data definition is not found in the implied dictionary the system look in the files specified in the JBCDEFDICTS environment variable but only if it as been assigned.  If JBCDEFDICTS has not been assigned, the system will look for the data definition in the file defined by the JEDIFILENAME\_MD environment variable.

### Implicit Defaults

If no data definition records are explicitly specified to be used for output, the system will search for a predefined series of records based on the search criteria. It is thus possible to set up a series of data definition records that the system will use if a jQL command sentence does not include any explicit output fields.

These "default" records must be named in a numeric sequence starting at 1 (1, 2, 3, and so on). The fields that these records define will be output in the same sequence as the keys but they do not need to follow the same sequence as the fields in the file.

When a jQL command sentence with no explicit output fields is issued, the system first looks in the dictionary for a data definition record named 1, then for a record named 2, then 3, and so on until it fails to find a record with the next number. If the record has a D/CODE of A, it will be used. If the record has a D/CODE of X, it will be ignored, but it will not break the sequence.

A record with a D/CODE of X will only be skipped if it was found as the result of a search for defaults. Under normal circumstances it can be used in the same way as any other data definition record.

This means that when you first set up a series of "default" data definition records, you should put an A in the D/CODE field of each. If you subsequently need to remove one from the sequence, you can simply change the D/CODE field to an X. This way you do not break the sequence or have to copy the remaining "default" records to new names in order to fill the gap.

A data definition record with a number for a key can still be used in the same way as any other data definition record.

## Predefined Data Definition Records

Some predefined data definition records are automatically available so that, if appropriate data definition records are not included in a file"s dictionary, a report can still be generated. These records do not physically exist on the system but are recognised when used in a jQL command sentence.

The predefined data definition records are named \*A0 to \*Annn. The numeric portion of the key corresponds to the position of the field they report on and the column heading will be the same as the DDR name.

Back to [jQL](./../README.md)

<PageFooter />
