# REBUILD-INDEX

<PageHeader />

**Tags:**
<badge text='build-index' vertical='middle' />

## Description

The REBIULD-INDEX command will rebuild indexes on a jBase file.

```
rebuild-index -Options filename { {indexname {indexname ...}} | *}
```

Where Options can be:

| Option | Description |
| --- | --- |
| -a | Rebuilds ALL indexes in the file |
| -r | Rebuild ALL files in the directory specified |
| -v | Verbose mode, one period display for every 1000 records rebuilt |

This command will rebuild the index definitions. It can be used in the following circumstances:

- Following the corruption of the index file
- Following a file restore using jrestore . This is detailed later.
- Following the creation of an index using create-index.

By default create-index will build the index and will not require a rebuild-index command to be performed.

Option **-a** means you want to rebuild all the indexes defined for the file. This can also be achieved by specifying **\*** as the index name. Otherwise you must specify on the command line one or more index names to rebuild.

Option **-r** will rebuild all files in the directory name specified. This is a useful operation after using, for example, [jrestore](./../../utilities/jrestore/README.md) to restore your database and then you can use the option -r to rebuild all files in a certain directory.

Back to [Indexes](./../README.md)

<PageFooter />
