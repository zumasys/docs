# PN5_60567

**Created At:** 6/13/2017 1:49:09 PM  
**Updated At:** 7/6/2017 6:44:53 PM  
**Original Doc:** [pn5_60567](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60567)  


### Description

Recursive A-correlative Repeat function causes jQL to hang

Prior to this patch:

- **A;8R(G1-2)** got stuck in a loop.
- **A;8R(G1-2):11** did not return the MV repeater, only displayed attribute 11.

