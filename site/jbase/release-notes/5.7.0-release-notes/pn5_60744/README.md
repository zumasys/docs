# PN5_60744

<PageHeader />

### Description

Create new command to generate delimited values using jQL syntax

### Previous Release Behavior

There was no such utility.

### Current Release Behavior

A new command, **jexport**, generates output of delimited values using jQL syntax. Output can be to a file, stdout or the spooler.

```
Syntax: jexport {options} filename {sort-criteria} {selection-critera} {output-specs} {LPTR}

Options:

    -f filepath
       The full or relative path to where the file is to be generated.
       If this option is omitted then output is sent to stdout.
       Enclose the path in double-quotes if it contains spaces.

    -d delimiter
       The character(s) used to delimit the values, default is @TAB.
       This character can be specified as:

          @TAB = Horizontal Tab  char(9)
          @CSV = Each value is enclosed in quotes and comma separated
          @SVM = Sub-Value-Mark  char(252)
          @VM  = Value-Mark      char(253)
          @AM  = Attribute Mark  char(254)
          e.g. -d @VM

          Any single character in the range CHAR(33) - CHAR(126), e.g. -d:
          The following characters cannot be used in this manner:
             - (dash)
             " (double-quote)
             ' (single-quote)

          \xnn - where 'nn' is a hexadecimal number in the range 0x00 - 0xFF
                 Invalid hex digits defaults to 0x00
                 e.g. -d \xFD

    -o Overwrite existing file when the -f option is used, ignored otherwise

Notes:

   * The 'jexport' command and options are case insensitive.

   * Options can appear anywhere on the command line.

   * Column headers are generated from dictionary definitions unless COL-HDR-SUPP is used.

   * Output will page unless NO.PAGE, NOPAGE, COL-HDR-SUPP or the -f option is used.

   * Use COUNT-SUPP or NI-SUPP to suppress the 'nnn records processed' message
     at the end of the report, ignored if the -f option is used.

   * If no output-specs are specified then the default output for the file is used.

   * Only detail lines are processed so things like BREAK-ONs, TOTALs, HEADINGs are ignored.

   * A preceeding select-list will limit the records to process.

   * The -f option takes precedence over spooler output.

Examples:

JEXPORT PRODUCTS SAMPLE 100
JEXPORT -D@csv -F .\members.txt -o MEMBERS WITH STATE "OH" BY LASTNAME BY FIRSTNAME LASTNAME FIRSTNAME ZIP MEMBER.NO ID-SUPP
jexport -f /tmp/active_customers -d@vm CUSTOMERS WITH ACTIVITY BY-DSND TOTAL_SALES CUSTNAME TOTAL_SALES
```

  
<PageFooter />
