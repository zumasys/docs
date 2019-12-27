# PN5_60568

**Created At:** 6/13/2017 1:51:29 PM  
**Updated At:** 11/24/2017 5:52:58 PM  
**Original Doc:** [pn5_60568](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60568)  
**Original ID:** 258847  
**Internal:** No  


### Description

REST: Spurious characters in API\* resource records cause REST to fail



### Previous Release Behavior

If attribute 1 of the resource record was "P " (a space after the P) then REST would fail.



### Current Release Behavior

The fields of the resource records are now normalized as follows:

- Fields 1,3 and 4 are TRIM'd
- Fields 5 and 6 are "MCN" converted

