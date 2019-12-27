# PN5_60762

**Created At:** 8/27/2018 10:47:33 AM  
**Updated At:** 10/24/2018 8:39:07 PM  
**Original Doc:** [pn5_60762](https://docs.jbase.com/48420-5-7-1-release-notes/pn5_60762)  
**Original ID:** 336202  
**Internal:** No  


### Description

Allow BREAK-KEY-ON and BREAK-KEY-OFF to specify a port number



### Previous Release Behavior

Limited to current port only



### Current Release Behavior

Ability to alter break key on other ports.

New options:

- BREAK-KEY-ON {port\_number} | {-H} | {-?}
- BREAK-KEY-OFF {port\_number} | {-H} | {-?}


Where:

- port\_number, is the port number of the session to disable break on.
- -?, -H, show help.

