# PN5_60925

**Created At:** 10/28/2019 12:39:40 PM  
**Updated At:** 12/4/2019 9:31:38 AM  
**Original Doc:** [pn5_60925](https://docs.jbase.com/79141-5-7-5-release-notes/pn5_60925)  
**Original ID:** 486168  
**Internal:** No  


### Description

**jprof** command no longer creates a report when JDIAG is set with  **JDIAG=profile=long:filename=xxx**



### Previous Release Behavior

The tools for profiling jBASE code are set by the **JDIAG**environment variable. When used with the **jprof**command, a report was not created.



### Current Release Behavior

Using  **JDIAG=profile=long:filename=xxx** now allows the **jprof** command to create a report.


