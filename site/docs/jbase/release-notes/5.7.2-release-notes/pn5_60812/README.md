# PN5_60812

**Created At:** 3/8/2019 8:41:56 AM  
**Updated At:** 3/8/2019 8:43:42 AM  
**Original Doc:** [pn5_60812](https://docs.jbase.com/5-7-2-release-notes/pn5_60812)  
**Original ID:** 370707  
**Internal:** No  


### Description

Runtime: Allow **MR** conversion formatting to match jBASE 3.x behavior



### Previous Release Behavior

The **md\_int\_only** setting did not apply to MR conversions.



### Current Release Behavior

Setting the new **md\_int\_only\_emulate\_jbase3\_clone** configuration option in ROS emulation allows the MR conversion to match the jBASE 3 behavior.
