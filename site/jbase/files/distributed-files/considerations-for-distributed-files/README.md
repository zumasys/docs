# Considerations for Distributed Files

<PageHeader />

**Tags:**
<badge text='distributed files' vertical='middle' />

## Description

Although jBASE does not restrict directly populating part files, records should always be written through the distributed file stub. Be aware that if a record is placed in the wrong part file, and that record is subsequently handled through the [partition algorithm](./../partition-algorithm), it will be placed in the part file according to the partition algorithms own relentless logic. This will result in the same record appearing in two part files.

Once part files are populated, changing the logic of the partition algorithm (or changing the partition method), could have disastrous results. If it is necessary to do this, each record should pass through the new partition algorithm so that it is placed in the proper part file. Each record should then be deleted from its original location.

A distributed file is opened in the usual way. For example, the following statement opens a distributed file called DISTCUST:

```
OPEN "DISTCUST" TO DISTCUST_FILE ELSE ABORT 201,"DISTCUST"
```

By default, when a distributed file is opened, all component part files are opened at the same time. Opening of all part files may be deferred by setting the JEDI\_DISTRIB\_DEFOPEN environment variable.

On versions of jBASE prior to 3.3.9, if a record ID resolved to a partition (part file) that did not exist, the process would be trapped to the jBASE debugger with an "Error 22" error message. This behavior has been changed such that a READ from a non-existent partition will take the ELSE clause and a WRITE will be trapped with an 'Error 22' unless the WRITE is supplied with the ON ERROR clause.

If a part file is deleted, then the DELETE-DISTRIB command must be used to remove the reference from the distributed file stub. Also, any user defined partitioning algorithm must be modified. This is detailed in the distributed file [example](https://https://static.zumasys.com/jbase/r99/knowledgebase/manuals/3.0/30manpages/man/fil22_example.htm).

Distributed files support secondary indexes and triggers at both the distributed file level and the part file level.

Back to [Distributed Files](./../README.md)
