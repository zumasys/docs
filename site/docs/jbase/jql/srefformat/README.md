# SREFFORMAT

**Created At:** 6/8/2018 2:04:18 PM  
**Updated At:** 7/13/2018 10:18:04 AM  
**Original Doc:** [srefformat](https://docs.jbase.com/46350-jql/srefformat)  

**Tags:**
<badge text='files' vertical='middle' />
<badge text='jql' vertical='middle' />

## Description

SREFORMAT is similar to the [SORT](./../sort) command in that it generates a formatted list of fields, but its output is directed to another file or the magnetic tape rather than to the terminal or printer.

It takes the general form:

```
SREFORMAT file-specifier {record-list} {selection-criteria} {USING file-specifier} {output-specification} {format-specification} {(options}
```

The user is then prompted to supply the destination file as:

```
FILE:
```

Enter a file name, or the word "TAPE" for output to a magnetic tape.



Records that already exist in the destination file will be overwritten.

When one file is reformatted into another, each record selected becomes a record in the new file. The first value specified in the output specification clause is used as the key for the new records. The remaining values in the output specification clause become fields in the new records.

When a file is reformatted to tape, the values specified in the output specification clause are concatenated together to form one tape record for each record that is selected. The record output is either truncated or padded at the end with nulls (X"00") to obtain a record the same length as specified when the tape was assigned by the T-ATT command.

Unless HDR-SUPP or COL-HDR-SUPP, or a C or H option, are specified, a tape label containing the file name, tape record length (in hexadecimal), the time, and date will be written to the tape first. If a HEADING clause is specified, this will form the data for the tape label.

Record keys are displayed as the records are written to tape unless the ID-SUPP modifier or the I option is specified.

Two EOF marks terminate the file on tape.



See the [REFORMAT](./../reformat) command for examples

Back to [JQL](jbase-query-language-jql-)
