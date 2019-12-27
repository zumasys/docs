# PN5_60686

**Created At:** 12/29/2017 10:25:21 AM  
**Updated At:** 2/16/2018 7:09:25 PM  
**Original Doc:** [pn5_60686](https://docs.jbase.com/release-notes/pn5_60686)  
**Original ID:** 292615  
**Internal:** No  


### Description

Runtime: TERM settings don't persist

This behavior can be enabled by setting, [term\_settings\_persist] in Config\_EMULATE and currently only affects anything ran from within a jsh.



### Previous Release Behavior

Issuing the TERM command in PROCs and jBC programs did not persist when the PROC/program terminated until another TERM command was issued at the jShell.

For example, the TERM settings would not be changed to 115,30 when the following PROC terminated...

```
001 PQ
002 HTERM 115,30
003 P
004 HTERM
005 P
```



### Current Release Behavior

Added new configuration option, **term\_settings\_persist**. If this option is enabled, changes to the TERM layout will persist.

This behavior is only affective in the jShell.

This option is now included in the D3 emulation.
