# PN5_60562

**Created At:** 6/13/2017 12:04:44 PM  
**Updated At:** 11/22/2017 5:59:20 AM  
**Original Doc:** [pn5_60562](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60562)  
**Original ID:** 258829  
**Internal:** No  


### Description

Slow index performance when using T-correlatives



### Previous Release Behavior

The performance of indexes being built with T-correlatives was very slow. This performance drag was also noticeable with jQL queries that didn't use indexes but used T-correlatives.

The problem was found that

- Windows is just plain slow on some system calls, such as stat(), open() and fstat().
- The T-correlative always opened 2 or 3 more files than necessary. This was in anticipation of some of the @xyz variables that needed the current file.




### Current Release Behavior

There is now a cache of the 10 most recently files OPEN'd, which can give up to a 24x performance improvement.
