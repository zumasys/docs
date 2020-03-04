# PN5_60545

**Created At:** 6/9/2017 4:52:32 PM  
**Updated At:** 11/22/2017 3:32:18 AM  
**Original Doc:** [pn5_60545](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60545)  
**Original ID:** 258529  
**Internal:** No  


### Description

Case Insensitivity: Slow string concatenation

### Previous Release Behavior

When **case\_insensitive\_runtime\_strings = true** was in effect, string concatenation was extremely slow.

### Current Release Behavior

String concatenations, in case insensitive mode, have been sped up on the order of up to 5000% faster.

### 

