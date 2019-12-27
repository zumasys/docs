# REBUILD-INDEX

**Created At:** 8/18/2018 7:46:28 PM  
**Updated At:** 4/24/2019 4:16:52 PM  
**Original Doc:** [rebuild-index](https://docs.jbase.com/48152-indexes/rebuild-index)  
**Original ID:** 335215  
**Internal:** No  

**Tags:**
<badge text='build-index' vertical='middle' />

## Description 

The REBIULD-INDEX command will rebuild indexes on a jBase file.

```
rebuild-index -Options filename { {indexname {indexname ...}} | *}
```

Where Options can be:




| Option<br> | Description<br> |
| --- | --- |
| -a<br> | Rebuilds ALL indexes in the file |
| -r | Rebuild ALL files in the directory specified |
| -v | Verbose mode, one period display for every 1000 records rebuilt |




This command will rebuild the index definitions. It can be used in the following circumstances:

- Following the corruption of the index file
- Following a file restore using jrestore . This is detailed later.
- Following the creation of an index using create-index.


By default create-index will build the index and will not require a rebuild-index command to be performed.

Option **-a** means you want to rebuild all the indexes defined for the file. This can also be achieved by specifying **\*** as the index name. Otherwise you must specify on the command line one or more index names to rebuild.

Option **-r** will rebuild all files in the directory name specified. This is a useful operation after using, for example, [jrestore](https://https://static.zumasys.com/jbase/r99/knowledgebase/manuals/3.0/30manpages/man/adv22_JRESTORE.htm) to restore your database and then you can use the option -r to rebuild all files in a certain directory.


