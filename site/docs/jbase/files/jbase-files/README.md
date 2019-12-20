# jBASE FILES

**Created At:** 4/2/2018 4:17:19 PM  
**Updated At:** 4/19/2018 12:43:05 AM  
**Original Doc:** [306052-jbase-files](https://docs.jbase.com/42462-distributed-files/306052-jbase-files)  


## Document Scope

jBASE can handle data in a variety of forms. Support is built in for access to hashed data files (the default) as well as directories and sequential files. Data held in other forms can be accessed through the use of an appropriate driver. Regardless of where the data is stored, the access mechanisms are the same. This document covers the different file types and the commands used to manipulate files within jBASE.



## Description

jBASE can handle data in a variety of forms. Support is built in for access to hashed data files (the default) as well as directories and sequential files. Data held in other forms can be accessed through the use of an appropriate driver. Regardless of where the data is stored, the access mechanisms are the same. This document covers the different file types and the commands used to manipulate files within jBASE.



### File Types

#### 
HASH3 or j3

The HASH3 file type is portable across platforms and is network friendly in that if a network connection is disconnected during the update procedure then file integrity can still be guaranteed. The HASH3 file type does not use the jRLA or jDLS locking even when enabled but uses the default system locking capability, thus allowing record or item locking with networked applications. The default bucket size of a HASH3 file is 1024 bytes.

#### HASH4 or j4

The HASH4 file type uses memory mapping when available, otherwise defaults to reads and writes and is portable across platforms. The HASH4 file type will use jRLA or jDLS locking when enabled but can also be configured to use the default system locking method for networking. The default bucket size of a HASH4 file is 4096 bytes. j4 files use 'INT32' for any offsets, in order to provide compatibility with previous versions of jBASE. As such, j4 files should only be used where the file size will not exceed 2Gb.

#### jPLUS or JP (jBASE 4.1 and 5.2)

jPLUS files provide large file support on 64 bit UNIX and Windows platforms, such that Hash files can extend beyond the normal 2GB operating system limit. In addition, jPLUS files provide configurable levels of data flushing to ensure file integrity in the case of a system failure. Some Operating Systems require large file support to be enabled when the file system is created. Refer to your System Administration Guide for your specific platform.

#### [JR](jr-files) (jBASE 5.2)

JR files are a new file type introduced in jBASE 5.2. They are highly resistant to corruption and also have the ability to auto-resize themselves as the file size increases.  The UD file type specifies NT or UNIX directories and NT or UNIX files are to be used to represent file and records respectively.

#### [Dynamic Files](306073-dynamic-files) (jBASE 5.7)

Dynamic Files allow files to be created without specifying a size (modulo, separation, secondary size).  As the file grows, it will be automatically resized to the optimal size settings.

#### [TJLOG](introduction-to-transactional-journaling)

Creates a stub file in the current directory that points to the current transaction log set. An additional parameter, SET can be used to specify the log set.

#### [Distributed Files](289126-distributed-files)

Creates a stub file in the current directory that references a distributed file.

#### [Remote Files](306074-remote-files)

Remote File pointers is one mechanism by which a client application can access files located on a remote system.  A Q-pointer is created in the MD file and set to point to a SYSTEM file entry as normal for Q pointers.


