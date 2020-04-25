# Command Options  

<PageHeader />

Command options are letters enclosed in parentheses, which modify the action of the jQL command sentence.  
The options described here are common to most commands. Where the options are command-specific, they are described with the command.  
Do not confuse options for commands with options for modifiers and connectives such as HEADING and BREAK-ON.  
Commas or spaces can separate options; when the options are at the end of the sentence (as is recommended) omit the closing parenthesis.  
jQL ignores any option not used by a particular command.

## Options

| <!----> | <!----> |
| --- | --- |
| B   | Suppress initial LINEFEED prior to output. |  
| C   | Suppresses column headings, page and date, line at the start and summary line at the end of a report: Equivalent to the COL-HDR-SUPP modifier. |  
| D   | Suppress detail output equivalent to the DET-SUPP modifier. |  
| H   | Suppress page and date line at the start and summary line at the end of the report: Equivalent to HDR-SUPP modifier. |  
| I   | Suppress record keys: equivalent to the ID-SUPP modifier. |  
| N   | Suppress automatic paging: equivalent to the NOPAGE modifier. |  
| P   | Output report to the printer: equivalent to the LPTR modifier. |  
| S   | Suppress summary line at the end of the report. |  

### Example  

```
LIST CUSTOMER (HIP
```

List the CUSTOMER file (using the default data definition records) but suppress the output of a header and the record keys.  
Send the output to the assigned printer.  

Back to [jQL Keywords and Connectives](./../README.md)

<PageFooter />
