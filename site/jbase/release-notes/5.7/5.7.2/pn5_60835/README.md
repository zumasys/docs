# PN5_60835

<PageHeader />

## Description

Support the D3 file syntax of "account,file,"

### Previous Release Behavior

The syntax was not supported

### Current Release Behavior

The syntax is now supported. You must have a trailing comma for the syntax to work.

This syntax is only valid if the following option is included in your emulation file Config\_EMULATE

```
   d3_file_path = true
```

As of jBASE 5.7.3, now allows DICT to be specified, also improved parsing of data section and multi-section name.

For example, this is supported:

ED dict D3TST,CUSTOMERS,            // Edit the DICT section of the CUSTOMERS file in account D3TST

ED D3TST,CUSTOMERS,2001,         // Edit section 2001 of the CUSTOMERS file in account D3TST

By default, on new installations, any user with the emulation set to D3 will automatically get this option. For non-D3 users, or those with a previous version of Config\_EMULATE, you will need to add this manually if required.

Back to [5.7.2 Release Notes](./../jbase-5.7.2.1-release-notes/README.md)

<PageFooter />
