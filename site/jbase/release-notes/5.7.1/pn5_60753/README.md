# PN5_60753

<PageHeader />

## Description

Support $INSERT and INSERT as compiler directives

### Previous Release Behavior

In releases prior to jBASE 5.7, the compiler accepted $INSERT and INSERT as compiler directives equivalent to INCLUDE. The new pre-processor doesn't.

### Current Release Behavior

$INSERT and INSERT are now supported as synonyms for INCLUDE.

This means the syntax is the same as INCLUDE, i.e. "INSERT ITEMID" or "INSERT FILENAME ITEMID"

Back to [5.7.1 Release Notes](./../README.md)

  
<PageFooter />
