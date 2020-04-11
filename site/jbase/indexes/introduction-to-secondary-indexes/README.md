# Introduction to Secondary Indexes

<PageHeader />

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

| Command | Description|
| --- | --- |
| [create-index](./../create-index)| create a new definition or rebuild an existing definition. |
| [delete-index](./../delete-index)| delete an index definition.<|
| [key-select](./../query-index)| do a search against an index. |
| [list-index](./../list-index)| list details of current index definitions. |
| [query-index](./../query-index)| search an index, a synonym for the key-select program.|
| [rebuild-index](./../rebuild-index) | re-build an index from the data file.|
| [verify-index](./../verify-index)| verify the integrity of an index. |

All the commands share a similar syntax. A help screen can be obtained using the -h option on all the commands. All the commands have both lower and upper case versions, for example both "create-index" and "CREATE-INDEX" are provided for.

Back to [Indexes](./../README.md)

  
<PageFooter />
