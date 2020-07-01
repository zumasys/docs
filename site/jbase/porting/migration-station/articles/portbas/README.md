# Portbas

<PageHeader />

PortBas is a migration tool used to parse BASIC source code. PortBas scans each supplied BASIC program for the use of [reserved keywords](./../../../jbase/compilation/reserved-keywords) which are not allowed in the jBC program language.

PortBas does not change the variable name but converts the name to mixed case. Thus the variable names LOOP, DATE, DATA become Loop, Date and Data respectively. This enables the program to be read as per the original context. After the scan the BASIC source code is then formatted according to the standard jBC formatting recommendations.

If the source program is a SUBROUTINE then the name supplied as the subroutine argument is forced to be the same as the source code item name. The compiler uses the subroutine name rather than the item name. Due to certain ambiguities in the original language specification, it is sometimes impossible for PortBas to decide whether the use of a keyword is correct or not. In some cases it may wrongly decide that a valid keyword is being used as a variable name and change it. However PortBas tends to get it right most of the time and can save a great deal of work in conversion. The jBC compiler should trap any mistakes made by the PortBas utility. These can then be changed manually.

Note: Care should be taken to ensure that only BASIC source code items exist in the source file before using the PortBas utility, as PortBas cannot readily distinguish between BASIC source code and any other type of data. PortBas will ignore items prefixed by the dollar sign.

A jBASE utility jConvertFile is available which invokes common PortBas options. The syntax of jConvertFile is as follows:

## jConvertFile -Options SourceFileName

| Option | Explanation |
| --- | --- |
| -p | direct output and report to printer |
| -v | direct output and report to screen |

The conversion report and output is stored in the PortSave directory as key\_out\_FileName and key\_rep\_FileName respectively.

### Portbas Styntax and Options

```
PortBas FileName {ItemName} {(Options)}
```

Where Options can be:

| Option | Explanation |
| --- | --- |
| A | force conversion of all files |
| C | convert [reserved keywords](./../../../jbase/compilation/reserved-keywords) to upper case |
| E | Expand compressed items |
| F | prompt for output file name (UNIX mode only) |
| H | skip added header to item |
| K | prefix illegal variables with "V." rather than capitalize |
| N | suppress .b suffix ( UNIX mode only) |
| O | overwrite original item in source file |
| R | do not rename subroutines to item name |
| S | create a statistics record |
| U | UNIX mode; copy item to directory with .b suffix |
| V | verbose mode |
| X | skip the parse and execute routines (see Notes) |
| Z | suppress copy of file |

If **ItemName** is not supplied then all items in the source file or outstanding select list are scanned.

### Notes

Due to the vagaries of runtime behavior in certain emulations it is strongly advised to always run PortBas under the 'jbase' emulation, e.g. JBCEMULATE=jbase.

The use of the X option will cause PortBas to perform the following actions:

1) There will be no indentations or formatting of existing source code.

2) EXECUTE statements will not be converted from the 'Prime/uniData' form (e.g. EXECUTE command //OUT. &gt; outvar) to the more generic 'Pick' syntax (e.g. EXECUTE command CAPTURING outvar).

3) Spaces will not be inserted between keywords and the label/numeric value. For example, GOTO42 will not be converted to GOTO 42 and SLEEP300 will not be converted to SLEEP 300.

4) Line continuation character(s) (e.g. ','  and '...') will not be replaced with the expected slash '/'.

[Back to Articles](./../../README.md)

<PageFooter />
