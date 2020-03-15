# PN_60766

**Created At:** 8/27/2018 12:31:51 PM  
**Updated At:** 10/24/2018 8:39:26 PM  
**Original Doc:** [pn_60766](https://docs.jbase.com/48420-5-7-1-release-notes/pn_60766)  
**Original ID:** 336211  
**Internal:** No  

## Description

Support **self** as a synonym for **this**.

### Previous Release Behavior

Methods could only reference their Class's properties and methods using the **this** keyword.

Other languages such as Smalltalk and Python use **self**

### Current Release Behavior

You can use **self** instead of **this**.

This is an option. By default we always use **this** but setting an option in the usual way will change from using **this** to **self**.

For example

```
export JBC_JPP2=self   [Unix]
set JBC_JPP2=self      [Windows]
```

Or add this on line 1 of your source:

```
$option self
```
