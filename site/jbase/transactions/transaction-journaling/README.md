# Transaction Journaling

<PageHeader />

## Preface

Transaction journaling provides the capability to log updates which are made to a jBASE database. The order in which the updates are logged will reflect the actual updates made by a particular user/program facility in a sequential manner. Updates made system-wide will be appended to the log as and when they occur on the database; i.e. the transaction log will reflect all updates in sequential order over time. The intention of the transaction log is that it provides a log of updates available for database recovery in the event the system uncontrollably fails.  

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
[Failure Conditions and Recovery Remedies](./failure-recovery/README.md)  
[Transaction Journaling on a single system](./journaling-single-system/README.md)  
[Transaction Journaling on a single system with two tape decks](./single-system-two-decks/README.md)  
[Introducing a Hot Standby machine into the configuration](./introduce-hot-standby/README.md)  
[Refinement to Hot Standby Configuration](./refined-hot-standby/README.md)  
[Resilient T24/jBASE Configurations](./resilient-configurations/README.md)  
[Cluster System - multiple application servers and a single database server](./cluster-system/README.md)  
[Hot Standby database server](./hot-standby/README.md)  
[Scripts](./scripts/README.md)  
[Utilities - jlogadmin](./utilities-jlogadmin/README.md)  
[Utilities - jlogstatus](./utilities-jlogstatus/README.md)  
[Utilities - jlogsync](./utilities-jlogsync/README.md)  
[Utilities - jlogdup](./utilities-jlogdup/README.md)  
[Utilities - jlogmonitor](./utilities-jlogmonitor/README.md)  

### To be updated to reflect current usage  

Back to [Knowledgebase](./../../README.md)

<PageFooter />
