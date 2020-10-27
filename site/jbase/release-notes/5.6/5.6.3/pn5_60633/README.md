# PN5_60633

<PageHeader />

## Description

A program could go into a CPU loop on Linux/UNIX system if a **/** was present in the file name

### Current Release Behavior

Prior to this patch, on Linux systems the code to look up file names could loop if the following conditions were met:

1. There was a **/** in the file name, e.g **abc/def**
2. If **abc** existed but **def** did not.

Back to [5.6.3 release Notes](./../README.md)

<PageFooter />
