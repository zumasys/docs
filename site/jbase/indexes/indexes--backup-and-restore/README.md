# Indexes- Backup and Restore

<PageHeader />

**Tags:**
<badge text='restore' vertical='middle' />
<badge text='backup' vertical='middle' />
<badge text='file indexing' vertical='middle' />

## Description

There are three ways of backing up a jBASE database.

### 1. Account-save

This should only be used to transfer data to a non-jBASE system. The indexing information will be lost.

### 2. tar and cpio

These Unix supplied backup utilities will backup ALL jBASE files and not care if they are hashed files, index files, dictionary items and so on. These should be used with caution, and only against databases where there is no update activity. The tar and cpio programs will not respect the locks on a file that jBASE normally uses.

### 3. jbackup and jrestore

These are the jBASE supplied backup and restore programs and are the preferred way of backing up data. They respect all locks and will keep the tapes free from any soft format errors that would otherwise occur if using tar and cpio on an active database.

By default , when jbackup is used to save a database, any indexing information will be saved as just the index definition, not the actual index data. Conversely during a restore using jrestore, the index definition will be restored, but not the index data, whether it exists on tape or not.

So the full scenario, by default

(i) Backup a database:

```
cd $HOME
find . -print | jbackup -v -f/dev/rmt/0
```

(ii) Restore a database:

```
cd $HOME
rm -rf *
jrestore -v -f /dev/rmt/0
```

(iii) Rebuild indexes. The stage (ii) will have restored the database and the index definitions, but not the index data. Now to rebuild the index data for all the restored files :

```
rebuild-index -r $HOME
```

If the files have been restored to sub-directories,  the following Unix command below may be used to rebuild the indexes for all files in all sub-directories.

```
cd $HOME
find . -print | xargs rebuild-index
```

Using the "-c" option with jbackup, will backup the actual index data as well as the data files. The index data will be dumped as a normal Unix binary file , and so during the restore phase will be restored exactly as-is.

When jrestore is used, by default it will restore the index information, but will NOT rebuild the index data. This is quite time-consuming and so by default the jrestore works in the quickest mode. The index will need to be re-built at a later stage using [rebuild-index](./../rebuild-index). In the meantime, any attempts to use [query-index](./../query-index) or [key-select](./../query-index) will fail, and the jQL programs such as COUNT and SELECT will not use the index in order to satisfy the request. During the restore a warning message will be shown against each file that needs re-building. Once the rebuild-index  has completed, the index will become available again to the jQL programs and query-index.

Using the -N option with jrestore will result in the indexes being built as the data is restored. This will slow down the restore time, but means the index is immediately available for use without the need to re-build the indexes with rebuild-index.

Back to [Indexes](./../README.md)
