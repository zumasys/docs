# PN5_60564

**Created At:** 6/13/2017 1:42:08 PM  
**Updated At:** 11/22/2017 3:44:05 AM  
**Original Doc:** [pn5_60564](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60564)  


### Description

Add support for HOME directory q-to-q pointers



### Previous Release Behavior

MD with lower case q-pointer would fail.



### Current Release Behavior

Add the following records to the MD:

```
Q1: q^^Q2
Q2: q^^F1
F1: F^myfile^myfile]D
```

```
LIST Q1
```

should now be able to resolve the path to myfile.

Note that this patch is only for Q-pointers that do not populate attribute 2, i.e. HOME directory Q-pointers.
