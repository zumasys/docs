# REFORMAT

<PageHeader />

**Tags:**
<badge text='jql' vertical='middle' />

## Description

REFORMAT is similar to the LIST command in that it generates a formatted list of fields, but its output is directed to another file or the magnetic tape rather than to the terminal or printer.

It takes the general form:

```
REFORMAT file-specifier {record-list} {selection-criteria} {USING file-specifier} {output-specification} {format-specification} {(options}
```

The user will be prompted to supply the destination file as:

```
FILE:
```

Enter a file name, or the word **TAPE** for output to a device assigned with the T-ATT command.

Records that already exist in the destination file will be overwritten.

When one file is reformatted into another, each record selected becomes a record in the new file. The first value specified in the output specification clause is used as the key for the new records. The remaining values in the output specification clause become fields in the new records.

When a file is reformatted to tape, the values specified in the output specification clause are concatenated together to form one tape record for each record that is selected. The record output is either truncated or padded at the end with nulls (X"00") to obtain a record the same length as specified when the tape was assigned by the [T-ATT](./../../tape/t-att/README.md) command.

Unless **HDR-SUPP** or **COL-HDR-SUPP**, or a **C** or **H** option are specified, a tape label containing the file name, tape record length (in hexadecimal), the time, and date will be written to the tape first. If a **HEADING** clause is specified, this will form the data for the tape label.

Record keys are displayed as the records are written to tape unless the ID-SUPP modifier or the "(I" option is specified.

Two EOF marks terminate the file on tape.

### Example

```
:REFORMAT SALES C.CODE NAME ADDRESS
```

prompt:

```
FILE: ADDRESS
```

Creates new records in the ADDRESS file, keyed on C.CODE from the SALES file. Each record contains two fields, one with the values from the NAME field and one with the values from the ADDRESS field.

See also the [SREFORMAT](./../sreformat/README.md) command.

Back to [jQL](./../jbase-query-language/README.md)

Back to [jQL Cross Reference](./../jql-keyword-cross-reference/README.md)

<PageFooter />
