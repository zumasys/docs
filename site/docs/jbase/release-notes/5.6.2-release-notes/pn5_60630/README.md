# PN5_60630

**Created At:** 10/3/2017 7:24:43 AM  
**Updated At:** 11/27/2017 4:46:08 AM  
**Original Doc:** [pn5_60630](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60630)  
**Original ID:** 279155  
**Internal:** No  


### Description

Minor issues with the new **JPP2** pre-compiler



### Current Release Behavior

Prior to this patch:

- Numeric labels with decimal points in basic code were not supported.
- The use of CHAR() confused the pre-compiler and would wrongly convert &lt; and &gt; to LT and GT.
- IF @TRUE THEN DEBUG ELSE NULL       ;\* This would previously convert **DEBUG** to **Debug**

