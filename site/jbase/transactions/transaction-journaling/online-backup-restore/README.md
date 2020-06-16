# Online Backup and Restore  

<PageHeader />

The Online Backup facility has been developed to enable system managers to perform necessary regular database backups while still allowing users the ability to perform updates on the database..

The three jBASE components used for this feature are jbackup; Transaction Journaling and the use of transaction boundaries. While jbackup may not necessarily be perceived as the tool of choice for database archiving, it is the only facility which may be used while the database is online. Using this facility enables the automatic restoration of the database including all updates up to the point of failure – without operator intervention or scripting. Following the restoration, the database will be left in a consistent state.  

The functionality of the restore process, jrestore, has been extended to allow for the automatic roll-forward of logsets after a database restore has completed. This extension uses the Transaction Journal configuration (JediLoggerConfig) which was active at the time of the last backup along with the corresponding Transaction Journal Logfiles.

Back to [Transaction Journaling](./../README.md)

<PageFooter />
