# jBASE 5.7.1 Release Notes

**Created At:** 8/27/2018 9:37:24 AM  
**Updated At:** 11/13/2018 11:21:46 AM  
**Original Doc:** [jbase-571-release-notes](https://docs.jbase.com/48420-5-7-1-release-notes/jbase-571-release-notes)  
**Original ID:** 336193  
**Internal:** No  

## Patches

- [PN5\_60750](./../pn5_60750) - jBASE hangs when run from java
- [PN5\_60751](./../pn5_60751) - Improve the case insensitivity option for the compiler
- [PN5\_60752](./../pn5_60752) - Prevent the compiler giving 'Unassigned Variable' warnings for the parameters passed with DEFFUN()
- [PN5\_60753](./../pn5_60753) - Support $INSERT and INSERT as compiler directives
- [PN5\_60754](./../pn5_60754) - jQL: Issues with F-correlative only returning the first multi-value in ROS emulation
- [PN5\_60757](./../pn5_60757) - **PRINTER CLOSE** prevents the **FOOTING** text from being printed on the last page of a print job
- [PN5\_60758](./../pn5_60758) - Debugger: Provide more accurate line numbers in the CASE statement
- [PN5\_60762](./../pn5_60762) - Allow BREAK-KEY-ON and BREAK-KEY-OFF to specify a port number
- [PN5\_60763](./../pn5_60763) - jQL: Segmentation Violation scenario with a dictionary subroutine call
- [PN5\_60764](./../pn5_60764) - Support DEFFUN with no parameters and no parenthesis
- [PN5\_60765](./../pn5_60765) - Correct a problem that when a CALL fails, the name displayed could become corrupted
- [PN5\_60766](./../pn5_60766) - Support **self** as a synonym for **this**
- [PN5\_60767](./../pn5_60767) - Running **jrf** on an encrypted file decrypts the file
- [PN5\_60769](./../pn5_60769) - jBC: Add support for the **STOPM** and **STOPE** commands
- [PN5\_60770](./../pn5_60770) - Rationalise the way we set compiler options
- [PN5\_60771](./../pn5_60771) - jBC: Add @PIB
- [PN5\_60772](./../pn5_60772) - Add the syntax =&gt; and =&lt; to the compiler
- [PN5\_60773](./../pn5_60773) - The **jshow** command does not resolve filenames entered as filename,datasection
- [PN5\_60774](./../pn5_60774) - CATALOG corrupts shared objects when user does not have permissions on lib/obj
- [PN5\_60775](./../pn5_60775) - Provide case insensitivity for **IF** statement comparisons
- [PN5\_60777](./../pn5_60777) - New security paradigm for jBASE files and utilities
- [PN5\_60778](./../pn5_60778) - Error using **IH!** in a PQ proc
- [PN5\_60779](./../pn5_60779) - PortBas issue with **CASING OFF**
- [PN5\_60780](./../pn5_60780) - **MINIMUM()** function returns incorrect results when there are null elements in the dynamic array
- [PN5\_60781](./../pn5_60781) - The **jRF** command, with no arguments, should not process all files in the current directory
- [PN5\_60782](./../pn5_60782) - Fix issue with associations and default dictionary tree
- [PN5\_60783](./../pn5_60783) - JQL: Selection criteria on date conversion fails on multi-value field
- [PN5\_60784](./../pn5_60784) - jQL: Commas in conversion changes sort to left justified in **BY** / **BY-DSND**
- [PN5\_60785](./../pn5_60785) - jQL: EACH/EVERY modifier caused some queries to not return any results
- [PN5\_60786](./../pn5_60786) - SQL: Issue with I-descriptors and ODBC
- [PN5\_60787](./../pn5_60787) - Paragraphs with "N" in attribute 1 do not get called with **LOGTO**
- [PN5\_60788](./../pn5_60788) - jQL: Grand totals longer than the defined column width were being truncated
- [PN5\_60789](./../pn5_60789) - The jBC code translator does not handle literal @VMs in the code
- [PN5\_60791](./../pn5_60791) - Prevent jlogdup from running out of resources
- [PN5\_60792](./../pn5_60792) - Prevent a memory error when an INPUT statement has a control character
- [PN5\_60793](./../pn5_60793) - jQL crashes when supplied a list of more than 255 values when querying via an index
- [PN5\_60794](./../pn5_60794) - jed/ED crashes with 'generic\_universe' or 'generic\_unidata' using exploded select-list
- [PN5\_60796](./../pn5_60796) - jQL: Dictionary conversions are being pre-processed
- [PN5\_60797](./../pn5_60797) - jQL: Issue with indexes and using wildcards with record keys
- [PN5\_60799](./../pn5_60799) - jQL fails to select record keys using NE operator on a case insensitive file
- [PN5\_60800](./../pn5_60800) - jQL: Using the keyword LIKE on a case insensitive file does not return correct result
- [PN5\_60802](./../pn5_60802) - jQL: No output using controlling/dependent associations with a limiting expression
- [PN5\_60803](./../pn5_60803) - Q-pointer casing issue
- [PN5\_60804](./../pn5_60804) - Enhance the PortBas command to tag all changes
- [PN5\_60805](./../pn5_60805) - jQL: Sorting by default "inbuilt" ID column ignores justification
- [PN5\_60806](./../pn5_60806) - jAgent / jRemote to handle functions in a different class than subroutines
- [PN5\_60810](./../pn5_60810) - jQL: NU conversion, which returns the last update date of a record, not working
- [PN5\_60811](./../pn5_60811) - Enhance the COMO command to allow the user to specify the directory for the COMO log entries

Back to [Release Notes](./../README.md)