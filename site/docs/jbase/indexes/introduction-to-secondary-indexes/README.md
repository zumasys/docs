# Introduction to Secondary Indexes

**Created At:** 8/16/2018 10:28:36 AM  
**Updated At:** 9/26/2018 10:45:36 PM  
**Original Doc:** [introduction-to-secondary-indexes](https://docs.jbase.com/48152-indexes/introduction-to-secondary-indexes)  
**Original ID:** 334472  
**Internal:** No  

**Tags:**
<badge text='file indexing' vertical='middle' />

## Overview 

Within jBASE there exists the facility to create secondary indexes against a jBASE file. Secondary indexes are also known variously as B-TREEs , balanced trees, binary trees and so on.

The creation of one or more secondary indexes will have a performance impact when the file is being updated. To offset this, the time taken to select one or more records in a file can be dramatically reduced. For instance if a secondary index is created against all the surnames in a customer file, the records having surnames "Kooper" may be retrieved as:

```
SELECT CUSTOMERS WITH SURNAME EQ "KOOPER"
```



The use of a secondary index can cut the search time dramatically. The exact improvement in performance depends upon many factors, such as original file size, type of query and so on. It is not uncommon for search time to be reduced from minutes down to sub-second times.

Therefore the decision to use indexes to improve performance during database searches must be considered against the degradation in performance that occurs when the database is updated.

In this document there will be many references to the index data being "in sync" with the data file. This in-sync flag (one per index definition) will be set to true once an index has been defined (or re-defined) and the index data completely rebuilt so that it exactly corresponds to the file data. This is called making the index data in sync with the file data. Until this point is achieved commands such as verify-index, key-select, query-index will fail completely if they attempt to reference an out-of-sync index. However the jQL commands such as LIST , SELECT etc. will not fail - they will simply ignore the index and use the file data to perform their operation in the same way as they would if there were no indexes associated with the file.



## Index Commands 

jBASE has a number of command to help you create and maintain these secondary indexes:


| [create-index](./../create-index)<br> | create a new definition or rebuild an existing definition.<br> |
| --- | --- |
| [delete-index](./../delete-index)<br> | delete an index definition.<br> |
| [key-select](./../query-index)<br> | do a search against an index.<br> |
| [list-index](./../list-index)<br> | list details of current index definitions.<br> |
| [query-index](./../query-index)<br> | search an index, a synonym for the key-select program.<br> |
| [rebuild-index](./../rebuild-index)<br> | re-build an index from the data file.<br> |
| [verify-index](./../verify-index)<br> | verify the integrity of an index.<br> |


All the commands share a similar syntax. A help screen can be obtained using the -h option on all the commands. All the commands have both lower and upper case versions, for example both "create-index" and "CREATE-INDEX" are provided for.
