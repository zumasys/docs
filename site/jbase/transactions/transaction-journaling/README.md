# Transaction Journaling  - The Manual

<PageHeader />

## jBASE resiliance features

This document is intended as a guide for system/database administrators in their configuration and maintenance of resilient systems utilising the jBASE database. Knowledge of the administration of and the maintenance of standard systems based on jBASE is assumed.

## Introduction  

### Components  

Traditional jBASE systems essentially comprise three parts: User- and System- related files – “the database”; an application suite of programs to manipulate the data in the database - “the application” and a DBMS system comprising jBASE and user-developed programs to service database requests made by the application. The database is the only component which requires special attention with regard to resilience; the others can merely be reloaded from an archive image. The database is the only fluid component – it changes from day-to-day and probably from second-to-second. This document will describe the features of jBASE which exist in order to protect the database from potential problems which could occur, as well as the methods to use when confronted by each of such circumstances.  

### Databases

The database is the collection of data which supports any business. This valuable commodity must be protected as much as possible and be restored to a known, stable, state when the computer facilities fail to perform normally. The database comprises not only application data, but also configuration data pertaining to: the users of the computer along with their access and restrictions; and peripherals connected to the computer. The configuration data is not part of the data resilience referred to in this document. Any changes to such data should be archived (normally during the O/S archiving procedures).

### Transaction Journaling  

Transaction Journaling provides the capability to prevent permanent data loss following a media or system failure. The Transaction Journal is a copy of database updates in a chronological order. In the event of such a failure, the Transaction Journal may be replayed, thus restoring the database to a usable state. Transaction Journaling preserves the integrity of the jBASE database by ensuring that logically related updates are applied to the database in their entirety or not at all.

These are the main transaction journaling administration utilities provided within jBASE:  

- [jlogadmin](./utilities-jlogadmin/README.md)      This command is provided to configure and start/stop/suspend transaction journaling.  
- [jlogstatus](./utilities-jlogstatus/README.md)    This command allows the administrator to monitor the activity of transaction journaling.  
- [jlogdup](./utilities-jlogdup/README.md)          This command enables the recovery or replication of data.  

## Additional Administration Utilities  

- [jlogsync](./utilities-jlogsync/README.md)        - synchronizes and flushes log files
- [jlogmonitor](./utilities-jlogmonitor/README.md)  - monitors the current state of transaction journaling  

## Contents  

[Transaction Journaling Strategy](./journaling-strategy/README.md)  
[Logging Strategy](./logging-strategy/README.md)  
[Transaction Log](./transaction-log/README.md)  
[Selective Journaling](./selective-journaling/README.md)  
[Selective Restores](./selective-restores/README.md)  

[Online Backup and Restore](./online-backup-restore/README.md)  
[Warmstart](./warmstart/README.md)  
[Transactions](./transactions/README.md)  
[Databases](./databases/README.md)  
[DB-START](./db-start/README.md)  
[DB-PAUSE](./db-pause/README.md)  
[DB-RESUME](./db-resume/README.md)  
[DB-STATUS](./db-status/REAME.md)  
[DB-SHUTDOWN](./db-shutdown/README.md)  

[Failure Conditions and Recovery Remedies](./failure-recovery/README.md)  
[Transaction Journaling on a single system](./journaling-single-system/README.md)  
[Transaction Journaling on a single system with two tape decks](./single-system-two-decks/README.md)  
[Introducing a Hot Standby machine into the configuration](./introduce-hot-standby/README.md)  
[Refinement to Hot Standby Configuration](./refined-hot-standby/README.md)  
[Resilient T24/jBASE Configurations](./resilient-configurations/README.md)  
[Cluster System - multiple application servers and a single database server](./cluster-system/README.md)  
[Hot Standby database server](./hot-standby/README.md)  
[Scripts](./scripts/README.md)  

## Utilities  

[jlogadmin](./utilities-jlogadmin/README.md)  
[jlogstatus](./utilities-jlogstatus/README.md)  
[jlogsync](./utilities-jlogsync/README.md)  
[jlogdup](./utilities-jlogdup/README.md)  
[jlogmonitor](./utilities-jlogmonitor/README.md)  

### To be updated to reflect current usage  

Back to [Knowledgebase](./../../README.md)

<PageFooter />
