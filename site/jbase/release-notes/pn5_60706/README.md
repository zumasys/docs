# PN5_60706

**Created At:** 2/20/2018 1:54:31 PM  
**Updated At:** 2/20/2018 1:55:49 PM  
**Original Doc:** [pn5_60706](https://docs.jbase.com/release-notes/pn5_60706)  
**Original ID:** 299979  
**Internal:** No  


### Description

jQL: Issue with using duplicate association member in queries



### Previous Release Behavior

Having duplicate association columns in queries caused issues.

Doing something like:

```
LIST my_file assoc_controller assoc_dep1 assoc_dep2 *A2 assoc_controller assoc_dep1 assoc_dep2
```

Would fail to produce the correct results, internally jQL will use the controller to track how many values to replicate and what's been processed.



### Current Release Behavior

This patch addresses the following issues:

- Only uses the first instance of the controller
- Doesn't reprocess any duplicate columns

