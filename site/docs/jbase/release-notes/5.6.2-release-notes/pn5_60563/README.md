# PN5_60563

**Created At:** 6/13/2017 1:41:01 PM  
**Updated At:** 11/28/2017 2:40:00 AM  
**Original Doc:** [pn5_60563](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60563)  
**Original ID:** 258842  
**Internal:** No  


### Description

Add option (S to MSG command to suppress the time and date from the message



### Previous Release Behavior

```
jsh home ~ -->MSG !1 Time is nature's way of keeping everything from happening all at once.
jsh home ~ -->From Einstein / Port 1 at 08:55:07 09 MAY 2017: Time is nature's way of keeping everything from happening all at once.
```



### Current Release Behavior

```
jsh home ~ -->MSG !1 Time is nature's way of keeping everything from happening all at once. (S
jsh home ~ -->From Einstein / Port 1: Time is nature's way of keeping everything from happening all at once.
```
