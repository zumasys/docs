# Failure Conditions and Recovery Remedies

<PageHeader />

Failures may occur in operations at the following stages:  

- Normal live running:
  - Database updates to the disk-based transaction log file.
  - jlogadmin running, dumping from this transaction log file to (pseudo-)tape.  

## What is the nature of the failure?  

- System corrupted – rebuild necessary.  
  - This failure could be a disk failure; nothing on disk can be relied upon. In this case a full system restore is required, using the last successful back set.  
  - Following this the transaction log file needs to be rolled forward from the saved transaction log tape.
- Tape device/tape failure.  
  - In the event of a tape device failure – the device has to be repaired/replaced. The tape should be replaced.  
  - For this case and the tape failure, the disk-based transaction log file is still valid. The start time of the last execution of the jlogdup to tape operation was saved automatically by either the start_tj or backup_jbase script.
- The recover_jbase script should be run in either of the cases above.

## During the backup/verify procedure  

- In this instance, the backup can be restarted.  
  - The act of restarting will update the transaction log file with a new start time (i.e. stat-file).
- During the dump of transaction log file information created during the backup/verify
- Problem with the tape: run recover_jbase after replacing the tape.

## System/disk problem

The backup verified, so this is the backup set to be used for recovery by the recover_jbase script.

## NOTE

> The jlogdup process to tape is still valid. Those transactions which have been dumped to tape can still be recovered.

Back to [Transaction Journaling](./../README.md)

<PageFooter />
