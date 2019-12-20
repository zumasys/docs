# PN5_60753

**Created At:** 8/27/2018 10:10:40 AM  
**Updated At:** 10/24/2018 8:38:05 PM  
**Original Doc:** [pn5_60753](https://docs.jbase.com/48420-5-7-1-release-notes/pn5_60753)  


### Description

Support $INSERT and INSERT as compiler directives



### Previous Release Behavior

In releases prior to jBASE 5.7, the compiler accepted $INSERT and INSERT as compiler directives equivalent to INCLUDE. The new pre-processor doesn't.



### Current Release Behavior

$INSERT and INSERT are now supported as synonyms for INCLUDE.

This means the syntax is the same as INCLUDE, ie "INSERT ITEMID" or "INSERT FILENAME ITEMID"
