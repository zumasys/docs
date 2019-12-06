# PART FILE 

**Created At:** 11/28/2017 2:06:07 PM  
**Updated At:** 10/31/2018 8:10:10 AM  

**Tags:**
<badge text='distributed files' vertical='middle' />

## Description 

The components of a distributed file collection are called part files. Part files can have any name and can be any file type except a distributed file.

Part files can exist anywhere on the network, accessible via the JEDIFILEPATH environment variable, Q-pointers or F-pointers.

Each part file is assigned a part number when it is attached to a distributed file. The part number must be a positive integer in the range of 1 through 254 inclusive. This part number is an integral element as it is used by the [partition algorithm](289127-partition-algorithm) to determine which part file the record belongs.

Part numbers do not have to be sequential nor do they have to be continuous. It is quite valid, for example, to have 4 part files numbered 52, 66, 149 and 242.

A part file can belong to more than one distributed file although this imposes two restrictions:

- The part file must always have the same part number for each distributed file to which it belongs.
- All distributed files to which a part file belongs must use the same partition logic. In other words, when a record is written to the common part file, the partition algorithm for each distributed file must resolve the record's location in the same manner. This is only applicable when the distributed file uses the user-defined partition method.


The number of part files and the partition algorithm can be varied at any time throughout the life of the distributed file. Be aware that if the partition algorithm changes such that records that were normally written to one part file, using the original partition algorithm, might be written to another part file using the new partition algorithm. This could lead to unwanted duplication.

Another problem that can occur is the wrong file is accessed through the distributed file stub (i.e. the file to which the part files are attached to create the distributed file set; see [Creating Distributed Files](creating-distributed-files)). Be aware that part files are resolved in the same manner as any other file in jBASE. For example, suppose two files exist with the same filename where one is resolved via an F-pointer (in $JEDFILENAME\_MD) and the another is resolved via $JEDIFILEPATH, and that the one in $JEDIFILEPATH is our actual part file. What will happen is the actual part file will never be found because the file pointed to by the F-pointer will be found first, as indicated by the [jshow -f](jshow) command. To alleviate this problem, it is best to attach the files using a full explicit filepath (see [here](attaching-and-detaching-part-files) for further details on attaching/detaching part files).
