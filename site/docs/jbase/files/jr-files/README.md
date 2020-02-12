# jR FILES

**Created At:** 4/2/2018 10:22:36 PM  
**Updated At:** 8/23/2018 1:02:13 PM  
**Original Doc:** [jr-files](https://docs.jbase.com/42462-distributed-files/jr-files)  
**Original ID:** 306075  
**Internal:** No

## Description

In Badly sized hash files, a situation can arise where data is split across a number of different frames which all have to be read from and written to the disk when the data changes.  If a problem occurred during this period, there was a window of opportunity where the update could be interrupted and the structure of the file damaged.  In jBASE release 5, a new JR File Type has been introduced to eliminate this possibility.  JR files have the following characteristics: they are resistant to corruption in adverse conditions and they have the ability to auto-resize themselves as the population of such files increase.

### AutoSizing

With the increase in 24 hour operation there has been a corresponding decrease of available time for system maintenance of hashed files. Standard hashed files become less efficient as the data population exceeds the original creation sizing, resulting in slower retrieval and updates, so an expanding hashed file requires regular resizing.

JR files need no resizing as there is no concept of overflow. When the data within a frame exceeds the available disk space it is split into a pointer frame pointing to child data frames. The individual items within the frame are rehashed according to the split level and reallocated to the appropriate child frame. The hashing algorithm base changes according to the split level to avoid common hashing paths.

Where standard hashed files have a linear expansion of search path (the number of data frames read according to population), JR files have a logarithmic expansion of the order *Modulo*, so where an undersized hashed file may require 5 disk reads a JR file may require 3. A *properly*sized hashed file may require only one disk read, but that is assuming regular system maintenance.

The logarithmic search path may imply an exponential file size expansion, but this doesn’t happen in practice as data frames which are not required, are not allocated.

Autosizing JR files are available as part of a standard jBASE 5 Server license.

### Resilience

For standard jBASE hashed files, the writing of an item may cause one or many physical disk writes, depending on the size of the item being written. If the series of writes is interrupted (by say, a power failure), then the structure of the file may be compromised as the item may be partially written to disk.

The resilience for JR files is provided by running in SECURE mode where any update resolves down to a single disk write, any dependent writes having been flushed to disk beforehand. Fundamentally, the body of the item is written to and then flushed to disk. If a power failure occurs at this time, the “before image” of the item is still in existence on disk with the integrity of the file being maintained. The intended update is abandoned (because of the power failure). Upon power being restored to the system, the database may not be in a consistent state if the failed update was part of a transaction. This does not present a problem as the entire transaction will have been written to the Transaction Journal prior to attempting any database disk writes of the transactional data. The transaction will thus be replayed in its entirety, thus maintaining database consistency. In the normal course of events the final write/ of the item pointer on disk will not be interrupted, the pointer will be switched to the new version of the item thus completing the item write.

#### Command Syntax #1

```
CREATE-FILE TYPE=JR [Modulo] [INTMODS=x[,y[,z]]] [SECURE=YES] [MINSPLIT=m] [HASHMETHOD=h] [SECSIZE=n]
```

#### Syntax Elements #1

| <!----> | <!----> |
| --- | --- |
| Modulo | A comma separated list of the modulo of split frames, default 31. When a data frame overfills it will change to a pointer frame of the order *Modulo[level]*with a maximum of *Modulo[level]*child frames where items are rehashed according to the split level and hashing algorithm. There are a maximum of 32 modulo and each must be prime between 3 and 509. |
| HASHMETHOD | The internal hash method used in internal and external hashing, default 5 (FNV-1a variant, recommended). |
| INTMODS | Up to 3 prime numbers defining the internal hash table modulo, default 3, 7, 19. The cumulative product cannot exceed 485, i.e. x + x \* y + x \* y \* z. |
| MINSPLIT | Minimum split level of the file. The file will be pre-allocated to a minimum level of split frames from the Modulo list. This can have extreme adverse affects on performance and excessive file size, so its use is not recommended. |
| SECSIZE | Secondary record size, default 2048. Items exceeding this size are stored out of group, i.e. the item retains its own data frame(s), referenced by a pointer. |
| SECURE | The file is flushed at critical junctures such that any file update will rely only on a single disk write. This maintains the file structure in the event of system failure.<br>NOTE: If this option is to be used then a valid jBASE Dataguard License will be required.<br> |

### **jrscan**

As the internal structure of Resilient files differs from hashed files so much a new utility, *jrscan*has been written to complement the functionality that jcheck provides to other hashed files, although without the destructive recovery. The syntax, from jrscan –h, is:

#### Command Syntax #2

```
 jrscan {options} filepath
```

#### Syntax Elements #2

| <!----> | <!----> |
| --- | --- |
| -a | Show header values. |
| -b | Bitmap scan - verify frame use. |
| -h | Display help. |
| -i | Display the internal hash table. |
| -k | Display record keys |
| -ln | Set split level to n. |
| -on | Offset n (0xnnnn hex, 0nnnn oct or nnnn dec). |
| -v | Verbose output. |

### Converting from J4 to JR Files

The Autosizing and Resilience algorithms add a performance overhead to the use of JR files which means that use of JR files should be limited to this files which are particularly susceptible to poor sizing or for which the added resilience is essential.

In order to convert from J4 to JR files it is recommended that a new JR file be created and the source data copied from the original file using the jBASE COPY command.

Return to [Files](./../jbase-files)
