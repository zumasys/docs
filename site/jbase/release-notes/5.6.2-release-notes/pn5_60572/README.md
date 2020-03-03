# PN5_60572

**Created At:** 6/13/2017 2:16:36 PM  
**Updated At:** 11/23/2017 4:32:06 AM  
**Original Doc:** [pn5_60572](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60572)  
**Original ID:** 258857  
**Internal:** No  


### Description

Add D3 compatible version of user exit U50BB and WHO command



### Previous Release Behavior

User exit U50BB and the WHO command only displayed the port number and account name.



### Current Release Behavior

With JBCEMULATE=D3, the U50BB and WHO command now behave a-la D3 and present 3 values, the first is the port number, the second is the user's login id (same as SYSTEM(50)) and the third is the jBASE account name.

This behavior is activated with a new configuration option, **u50bb\_3\_values**, which is set by default for the D3 emulation.
