# PN5_60822

**Created At:** 3/8/2019 2:18:14 PM  
**Updated At:** 3/8/2019 2:19:08 PM  
**Original Doc:** [pn5_60822](https://docs.jbase.com/5-7-2-release-notes/pn5_60822)  
**Original ID:** 370764  
**Internal:** No  

## Description

jQL: MV associations not correctly processing input/output conversions

### Previous Release Behavior

Prior to this patch, in a controlling/dependent relationship, a dependent dictionary using a group extract or a Date conversion in dict&lt;8&gt; did not correctly process any multi-value past the first one.

Back to [5.7.2 Release Notes](./../README.md)
