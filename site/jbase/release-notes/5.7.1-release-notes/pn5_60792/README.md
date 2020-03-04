# PN5_60792

**Created At:** 9/7/2018 9:19:56 AM  
**Updated At:** 10/24/2018 8:48:07 PM  
**Original Doc:** [pn5_60792](https://docs.jbase.com/48420-5-7-1-release-notes/pn5_60792)  
**Original ID:** 338140  
**Internal:** No  


### Description

Prevent a memory error when an INPUT statement has a control character.



### Previous Release Behavior

The customer code was doing this

```
INPUT X,0:
```

The keyboard generated a 0xf2 character and a segmentation violation then followed.



### Current Release Behavior

The character is handled correctly.
