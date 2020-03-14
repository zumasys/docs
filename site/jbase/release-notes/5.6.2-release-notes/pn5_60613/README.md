# PN5_60613

**Created At:** 10/2/2017 2:03:08 PM  
**Updated At:** 11/23/2017 9:10:14 AM  
**Original Doc:** [pn5_60613](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60613)  
**Original ID:** 279068  
**Internal:** No  

## Description

Case Independence: Code formatter not handling certain variables correctly

### Previous Release Behavior

Variables named **MM** and **ME** where treated as reserved words, subsequently causing programs to produce compilation errors.

### Current Release Behavior

**MM** and **ME** are not treated as reserved words and can be used as normal variables.

Back to [5.6.2 release Notes](./../README.md)
