# PN5_60584

**Created At:** 6/20/2017 4:02:39 PM  
**Updated At:** 11/27/2017 2:12:37 PM  
**Original Doc:** [pn5_60584](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60584)  


### Description

jQL: Allow [Ann] style default dictionaries for d3 emulation



### Previous Release Behavior

You needed to prepend [\*] to use a default dictionary



### Current Release Behavior

In d3 emulation, Ann is a valid default dictionary and is synonymous with \*Ann.

If there are already Ann dictionaries in the file, they will override the default dictionary of the same name.

Note that the column headers will show as \*An [not An] as this differentiates defaults from user dictionaries.
