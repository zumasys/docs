# In-Sync Definition

<PageHeader /> 

**Tags:**
<badge text='sync' vertical='middle' />
<badge text='file indexing' vertical='middle' />

The indexing of a file in jBASE comprises three parts

1. The actual file data
2. The index definition
3. The index data

When an index is created using the [create-index](./../create-index) command,  a file name is specified,  (1 above )  and the [create-index](./../create-index) command will create both the index definition (2 above ) and the index data (3 above ). When this is done the index data is said to be "in sync" with the file data. In other words, the index data matches the actual file data.

There may be occasions when this is not true and the index is not "in sync". This could occur following a restore from an archive using jrestore or maybe the -a option to [create-index](./../create-index) was used.

When a index is "in sync" it means commands such as key-select can be used against the index. It also means that jQL commands such as SELECT and COUNT may be able to use the index to speed up the command.

If the index is not "in sync" then the commands key-select and query-index will fail with an error message. The jQL commands such as SELECT and COUNT will simply avoid using the index and will use the regular mechanism of searching the file data. The jBC statements such as SELECTINDEX will simply fail to give any keys and the OPENINDEX statement will take the ELSE clause.

If a file is not "in sync" then you can use the [rebuild-index](./../rebuild-index) command to rebuild the index data from the file data and once [rebuild-index](./../rebuild-index) is run the status will change to "in sync"

Back to [Indexes](./../README.md)
