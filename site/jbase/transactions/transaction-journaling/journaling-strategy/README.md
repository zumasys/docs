# Transaction Journaling Strategy  

<PageHeader />

This is the minimum setup for Transaction Journaling.  

The strategy to be employed will be as follows:

There will be 2 sets of transaction log files on each machine, logset1 and logset2.  
Logset1 will contain all the updates applied on Monday or Wednesday or Friday and logset2 will contain all the updates applied on Tuesday, Thursday or Saturday/Sunday.  
The definitions of these files are maintained by the ‘jlogadmin’ command. The transaction log files should be switched by use of cron at midnight (or 1 minute past midnight) using the command ‘jlogadmin –l N’ command where N is 1 for Monday , Wednesday or Friday and N is 2 for Tuesday , Thursday and Saturday.  

The administrator must ensure that all users are logged off the system prior to a system backup.  

Transaction journaling is stopped by stop_tj command.  

The backup script ‘backup_jbase’ should be run to backup the system. This scenario allows for the backup failing and being restarted. Note the creation of a statistics file. This is used effectively to timestamp the transaction log with the start time of the backup. Thus if the save was restarted then the creation time of the statistics file will reflect the start of the last good backup.  

The operation is thus:  

Stop the transaction log file to (pseudo-)tape jlogdup process: database updates for the duration of the backup will be prevented by the administrator.  
Remove and label the (pseudo-)tape – this contains all database updates since just prior to the last backup.  
Mount a new (pseudo-)tape to hold the backup.  
Once this has been done, the operator responds to the prompt and the backup commences.  
Upon completion of the backup and verify, the (pseudo-)tape is removed and labeled appropriately.  
A new (pseudo-)tape to hold the transaction log file is then mounted in the tape deck.  
The operator now responds to the prompt and the jlogdup process, dumping updates from the disk-based transaction log file to (pseudo-)tape re-commences.  
There is no need to switch the transaction log files after the completion of the backup, as this is performed automatically.  

See start_tj and backup_jbase scripts.

Back to [Transaction Journaling](./../README.md)

<PageFooter />
