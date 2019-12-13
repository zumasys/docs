# PN5_60548

**Created At:** 6/13/2017 9:18:42 AM  
**Updated At:** 11/21/2017 1:12:44 AM  


### Description

User-defined PROMPT value lost after doing BASIC ENTER or CHAIN



### Previous Release Behavior

Following a CHAIN or ENTER, the PROMPT string would be reset to "?".



### Current Release Behavior

When the new emulation option **retain\_prompt\_on\_enter** is set then the PROMPT string will be retained after doing a CHAIN or ENTER statement.

This emulation option has been added to the D3 emulation.
