# PN1251

<PageHeader />

## Description

jQL: Scanning a file can cause a segmentation error

## Previous Release Behavior

If you scanned a file where only the item id was needed and not the item body, for example "LIST CUSTOMERS", and if the item was in out-of-group space, there was a slight possibility of a segmentation error.

## Current Release Behavior

No segmentation violation occurs.

Back to [5.8.2 Release Notes](./../README.md)
  
<PageFooter />
