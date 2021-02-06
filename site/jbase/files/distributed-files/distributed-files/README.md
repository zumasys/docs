# Distributed Files

<PageHeader />

## Prerequisites

In order to make good use of this literature, one must have an installed copy of jBASE, and at least a basic understanding of file operations in jBASE BASIC.

## Overview

A Distributed file is a collection of existing files used primarily for the purpose of organizing data into functional groups. Each file within the collection is called a part file.  A distributed file can contain up to 254 part files. The method for determining in which part file a record belongs is called the [partition algorithm](./../partition-algorithm).

As a simple example, suppose your database consists of records which span 42 regions and you elect to distribute your data so that each part file contains all records for a specific region. With distributed files you would be able to process any one of the region part files independently of the others, or you would be able to process all 42 region part files collectively (i.e. as one database containing the records from all 42 regions).

Distributed files can also be used when the size of a file exceeds the size limit for the operating system (typically 2 gigabytes). This effectively permits file sizes to reach 254 times the maximum file size an operating system would otherwise allow.

## Part Files

The components of a distributed file collection are called part files. They can have any name and can be any file type except a distributed file. They can exist anywhere on the network, accessible via the JEDIFILEPATH environment variable, Q-pointers or F-pointers.

Each part file is assigned a part number when it is attached to a distributed file. The part number must be a positive integer in the range of 1 through 254 inclusive. This part number is an integral element as it is used by the [partition algorithm](./../partition-algorithm) to determine which part file the record belongs.

Part numbers do not have to be sequential nor do they have to be continuous. It is quite valid, for example, to have 4 part files numbered 52, 66, 149 and 242.

A part file can belong to more than one distributed file although this imposes two restrictions:

1. The part file must always have the same part number for each distributed file to which it belongs.
2. All distributed files to which a part file belongs must use the same partition logic. In other words, when a record is written to the common part file, the partition algorithm for each distributed file must resolve the record's location in the same manner. This is only applicable when the distributed file uses the user-defined partition method.

The number of part files and the partition algorithm can be varied at any time throughout the life of the distributed file. However, it should be noted that if the partition algorithm changes, the result may be records that were normally written to one part file, using the original partition algorithm, being written to another part file using the new partition algorithm. This could lead to unwanted duplication.

Another problem that can occur is the wrong file is accessed through the distributed file stub (i.e. the file to which the part files are attached to create the distributed file set).

Be aware that part files are resolved in the same manner as any other file in jBASE. For example, suppose two files exist with the same filename where one is resolved via an F-pointer (in $JEDFILENAME\_MD) and the another is resolved via $JEDIFILEPATH, and that the one in $JEDIFILEPATH is our *actual* part file. What will happen is the actual part file will never be found because the file pointed to by the F-pointer will be found first, as indicated by the **jshow -f** command. To alleviate this problem, it is best to attach the files using a full explicit filepath.

## Creating Distributed Files

A distributed file is created using the [CREATE-FILE](./../../../jbase-basic-(jbc)/create) command with the qualifier TYPE=DISTRIB. This will create two files, a dictionary which is a Hash4 (currently fixed at mod3) and the distributed file stub. If desired, the dictionary can be resized using the [jrf](./../../jrf) utility. For example, the following command creates a distributed file called DISTREGION:

```
jsh -->CREATE-FILE DISTREGION TYPE=DISTRIB
[ 417 ] File DISTREGION]D created , type = J4
[ 417 ] File DISTREGION created , type = DISTRIB
```

The file partition table is empty at this point, and the [partition algorithm](./../partition-algorithm) is set to the default system partition method with a delimiter of ‘-‘ (i.e. all record IDs must be of the form "PartNumber-recordID"). These aspects of the distributed file can be changed with the [create-distrib command](./../create-distrib-command).

## Attaching and Detaching Part Files

Files are attached to a distributed file using the [create-distrib command](./../create-distrib-command) with the -a option. A file must already exist before it can be attached to a distributed file.

In the following example an existing file, DISTCUST.SOUTH, is attached to the distributed file DISTCUST as part number 4:

```
jsh-->create-distrib -a DISTCUST 4 DISTCUST.SOUTH
Part file 'DISTCUST.SOUTH', Part number 4 added
```

Note that it is possible to attach a file using a full explicit filepath as in:

```
create-distrib -a c:\home\myaccount\DISTCUST 4 DISTCUST.SOUTH
```

This method of attaching a distributed file is preferred to ensure the proper part file is resolved through the partition algorithm.

A part file can be detached from a distributed file using the create-distrib command with the -d option. The synonym [DELETE-DISTRIB](./../delete-distrib-command) can also be used for this purpose. For example, to detach the DISTCUST.SOUTH part file:

```
jsh --> create-distrib -d DISTCUST 4
Part file 'DISTCUST.SOUTH', Part number 4 deleted
```

## Considerations for Distributed Files

Although jBASE does not restrict from directly populating part files, records should always be written through the distributed file stub. Be aware that if a record is placed in the wrong part file, and that record is subsequently handled through the [partition algorithm](./../partition-algorithm), it will be placed in the part file according to the partition algorithms own relentless logic. This will result in the same record appearing in two part files.

Once part files are populated, changing the logic of the [partition algorithm](./../partition-algorithm) (or changing the partition method), could have disastrous results. If it is necessary to do this, each record must be passed through the new partition algorithm so that it is placed in the proper part file. The record then has to be deleted from its original location.

A distributed file is opened in the usual way. For example, the following statement opens a distributed file called DISTCUST:

```
OPEN "DISTCUST" TO DISTCUST_FILE ELSE ABORT 201,"DISTCUST"
```

By default, when a distributed file is opened, all component part files are opened at the same time. Opening of all part files may be deferred by setting the [JEDI\_DISTRIB\_DEFOPEN](./../../../environment-variables/jedi_distrib_defopen) environment variable.

On versions of jBASE prior to 3.3.9, if a record ID resolved to a partition (part file) that did not exist, the process would be trapped to the jBASE debugger with an "Error 22" error message. This behavior has been changed such that a READ from a non-existent partition will take the ELSE clause and a WRITE will be trapped with an 'Error 22' unless the WRITE is supplied with the ON ERROR clause.

If you delete a part file then you must also [DELETE-DISTRIB](./../delete-distrib-command) to remove the reference from the distributed file stub. You must also modify any user-defined partitioning algorithm.

Distributed files support secondary indexes and triggers at both the distributed file level and the part file level.

See also: [Distributed File Examples](./../distributed-files-examples)

Back to [Distributed Files](./../README.md)

  
<PageFooter />
