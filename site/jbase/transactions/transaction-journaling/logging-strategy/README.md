# Logging Strategy  

<PageHeader />

When journaling is running the basic order of operations for updates is as follows:  

- The database item is updated in memory.  
- The transaction log is updated in memory.  
- The transaction log is flushed every 10 seconds by default. However this time period can be configured via an option on the administration command, jlogadmin. It is also possible to configure an independent process to execute the jlogsync command, to ensure the transaction log is continuously flushed from memory at the specified interval, thus alleviating the flush procedure from all of the update processes.  
- The database updates are flushed to disk by the operating system.  
- The database update to disk and the log update to disk can be forced to be an atomic operation.  
- Corruption of the transaction log can occur during a system failure while flushing the transaction log; this is impossible to circumvent. However, corruption occurs only at the end of the transaction log file, therefore it is possible to recover right up to the point of the system failure.  
- There is still the possibility that when the system crashes, the disks containing the data AND the disks with the transaction log data will be lost. By running, a continuous jlogdup to a secondary machine or tape device you can protect against this highly improbable scenario.  
- To use jBASE Transaction Journaling, you must install an additional license key.

Back to [Transaction Journaling](./../README.md)

<PageFooter />
