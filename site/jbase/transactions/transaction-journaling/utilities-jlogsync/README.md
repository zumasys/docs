# jlogsync  

<PageHeader />

When a jBASE application performs a database update, it writes to the transaction log file (if active). It does this to a memory image and normally it is up to the platform file system to flush the memory image to disk every so often, by default on most platforms this is usually every minute.
You can use options in jlogadmin so that the jBASE processes themselves do this file synchronization more often. The default is every 10 seconds. This means in the event of a system failure, you will lose at the most 10 seconds worth of updates.  

The use of the jlogsync program means the jlogsync process instead of individual jBASE processes performs file synchronization. Therefore alleviates the overhead of the synchronization from the update processes. Thus, the jlogsync process is not mandatory. However, in a large installation it may provide beneficial performance gains.

Back to [Transaction Journaling](./../README.md)

<PageFooter />
