# PN5_60877

<PageHeader />

## Description

Prevent process abort when restoring over an existing file with indexes

### Previous Release Behavior

If a **jbackup** is performed without the -c option on a file with indexes or other control information in the header and a **jrestore** is performed with the -O option overwriting the same file the restore would crash.

### Current Release Behavior

Restore completes successfully.

Back to [5.7.3 Release Notes](./../README.md)

  
<PageFooter />
