# PN5_60580

**Created At:** 6/22/2017 12:28:17 PM  
**Updated At:** 11/23/2017 1:46:38 AM  


### Description

Indexes could become out of sync if the application didn't protect parallel updates with READU



### Previous Release Behavior

Indexing had a problem when 2 processes were updating the same item at the same time.

Let  us assume there are 2 processes both doing this at the same time with  the same record key. Also assume an index on attribute 1.

```
READ rec FROM FILEVAR,"greg" ELSE DEBUG
rec<1> = RND(1000)
WRITE rec ON FILEVAR,"greg"
```

Inside  jEDI, we will update the index and then update the file itself. These  operations are not atomic. This mean the following could happen:

- Process A updates the index with its value in attribute 1
- Process B updates the index with its value in attribute 1
- Process B updates the file with its value
- Process A updates the file with its value


The index now reflects the item in Process B, whereas the file reflects the item in process A. The index is now corrupt.

Usually,  this isn't a problem as a customer will have locked the item with a  READU. This means the above scenario couldn't happen because of the  application locks. However, if application locks are not used then the  index can get out of sync.



### Current Release Behavior

An internal lock is applied to make the index update and file update atomic.
