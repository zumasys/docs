# PN5_60653

**Created At:** 1/12/2018 1:57:14 PM  
**Updated At:** 7/23/2018 8:19:22 AM  
**Original Doc:** [pn5_60653](https://docs.jbase.com/release-notes/pn5_60653)  


### Description

Implement memory-based I/O operations.



### Previous Release Behavior

The migration team (amongst others) complained about the slow speed of sysrestore, and rebuilding indexes. This enhancement should fix many of their concerns as well as adding useful functionality to many other users, including improving the long time needed for rebuild-index.

The problem arises when a large number of updates are performed on a large file, be it a JP file or an Index file. Because the updates are scattered throughout the file, the sync demon will then do thousands of individual disc I/O operations. This usually means at least one disc I/O for every update performed with WRITE, or for every index definition updated.

As an example, consider sysrestore where we restore a backup from a non-jBASE system. We had one customer who had a 2GB file with 10 million records. This mean 2 million items to restore, and because our hashing algorithm differs from D3, it means each WRITE during the restore will be scattered randomly throughout the target file. The upshot is that the time to restore that file , assuming a disc can perform at 200 IOPS, is 10000000/200/3600 hours or almost 14 hours.

Newer SSD devices will have significantly better performance, but it still remains a problem even for SSDs



### Current Release Behavior

You can now set the JBC\_RAMFILE environment variable like this:

```
export JBC_RAMFILE=1
```

or on Windows:

```
set JBC_RAMFILE=1
```

We also support **JBC\_RAMFILE=debug** and **JBC\_RAMFILE=verbose**

When this is set, all batch file operations on JP files and on indexes take place in memory. When the file is closed, that memory is written sequentially to disc. Disc drives, be they spindles or SSDs, like sequential writes.

In the afore-mentioned example of 10 million records and sysrestore, the restore time was reduced from 13+ hours to about 4 minutes.

It isn't just sysrestore that benefits. Other examples are

- account-restore
- jrf
- make-demo-file
- COPY
- create-index
- rebuild-index


In fact, any program that uses indexes, JD (jPlus) or JD (Dynamic) files.

Because the environment variable updates the file in memory, and doesn't take locks, it is only suitable for occasions when the user can guarantee other users will not be accessing a file. This is always the case with sysrestore or account-restore, and should be the case with the above mentioned programs.

Remember to unset the environment variable once you have done your batch update:

```
unset JBC_RAMFILE      [Unix/Linux]
set JBC_RAMFILE=       [Windows]
```
