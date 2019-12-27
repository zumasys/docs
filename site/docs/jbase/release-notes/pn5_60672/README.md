# PN5_60672

**Created At:** 12/26/2017 10:57:15 AM  
**Updated At:** 2/16/2018 7:07:28 PM  
**Original Doc:** [pn5_60672](https://docs.jbase.com/release-notes/pn5_60672)  
**Original ID:** 292209  
**Internal:** No  


### Description

Spooler: New command to create a script for regenerating the spooler form queue definitions



### Previous Release Behavior

In a situation where the spooler had to be rebuilt, there was no intrinsic utility to regenerate the form queue definitions.



### Current Release Behavior

This release features a new command, **sp-fqscript**, which creates a script from the current spooler configuration. This script can be used to regenerate the spooler form queue definitions after running SP-NEWTAB and setting the default security options.

The script is written in the current directory and it's name is:

```
create-form-queues      [Unix/Linux]
create-form-queues.bat  [Windows]
```
