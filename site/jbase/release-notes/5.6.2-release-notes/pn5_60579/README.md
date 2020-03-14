# PN5_60579

**Created At:** 6/22/2017 12:07:58 PM  
**Updated At:** 11/23/2017 3:04:56 PM  
**Original Doc:** [pn5_60579](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60579)  
**Original ID:** 260740  
**Internal:** No  

## Description

Audit logging creates phantom entries in the error log

### Previous Release Behavior

When audit logging was enabled on a file, each update to that file would create an entry in **$JBCRELEASEDIR/runtime-errors**.

The error reported was a phantom, there was no error.

### Current Release Behavior

The error log is not updated with a phantom entry.

Back to [5.6.2 release Notes](./../README.md)
