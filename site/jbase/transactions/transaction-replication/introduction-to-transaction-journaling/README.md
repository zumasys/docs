# Introduction to Transaction Journaling

<PageHeader />

**Tags:**
<badge text='journaling' vertical='middle' />
<badge text='tj' vertical='middle' />
<badge text='transaction replication' vertical='middle' />
<badge text='transaction journalingt' vertical='middle' />
<badge text='replication' vertical='middle' />

<iframe width="640" height="360" class="fr-draggable" src="https://www.youtube.com/embed/AprrDMIgvUg?wmode=opaque" frameborder="0" allowfullscreen=""></iframe>

## Document Scope

The Introduction to Transaction Journaling document serves as a starting point for Administrators that are new to jBASE and would like to setup Transaction Journaling for the high availability of a stand along system or disaster recovery partner of the production jBASE system.

## Prerequisites

To perform this steps in this walkthrough document, you will need an installed and licensed system running jBASE 5.6 or greater, along with licensing for Transaction Journaling.  If you need to complete this task, please review the jBASE Installation Guide for [Windows](windows-installation) or [Linux](jbase-56-linux-installation-guide).

You should also have reviewed Introduction to jBASE, for knowledge of commands and utilities used in this walk-through.

## Overview

The "Transaction Journaling" product includes both transaction logging and transaction replication.  Transaction logging (sometimes also called transaction journing) is the normal logging of database updates to a transaction log file.  These log files are typically used to restore changes made between backups.

Transaction Replication is a secondary process that takes transaction logs and commits them immediately to a second machine.   For purposes of this documentation transaction logging will be used to discuss transaction logging/journaling while transaction replication will be used to describe  updating a second machine (remote).

![introduction-to-transactional-journaling: 1522426235454-transjourn](./1522426235454-transjourn.jpg)

[Configuring Transaction Logging](./../configuring-transaction-logging)

[Monitoring Transaction Logging](./../monitoring-transaction-logging)

[Restoring from a Transaction Log](./../restoring-from-a-transaction-log)

[Configuring Transaction Replication](./../starting-transaction-replication)

[Monitoring Transaction Replication](./../monitoring-transaction-replication)

<PageFooter />
