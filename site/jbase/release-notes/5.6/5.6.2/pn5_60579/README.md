# PN5_60579

<PageHeader /> 

## Description

Audit logging creates phantom entries in the error log

### Previous Release Behavior

When audit logging was enabled on a file, each update to that file would create an entry in **$JBCRELEASEDIR/runtime-errors**.

The error reported was a phantom, there was no error.

### Current Release Behavior

The error log is not updated with a phantom entry.

Back to [5.6.2 Release Notes](./../README.md)

  
<PageFooter />
