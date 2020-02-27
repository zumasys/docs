# Transaction Processing

**Created At:** 9/20/2018 9:25:50 AM  
**Updated At:** 10/31/2018 8:14:39 AM  
**Original Doc:** [transaction-processing](https://docs.jbase.com/49273-transactions/transaction-processing)  
**Original ID:** 339941  
**Internal:** No  


## Description 

Transaction processing provides the capability to group one or more updates together to constitute a single transaction. The updates contained within the transaction are effectively treated as a single update, in that either all of the updates are applied to the database set or none of the updates are applied. Transactions should be able to be treated in a coherent and consistent manner, independently of other transactions. Although somewhat of a misnomer, the word "atomic" is often used in computing to describe a transaction characteristic, i.e. that it cannot be broken up.

The normal flow of the processing of a transaction is as follows:

- The start of a transaction is indicated.
- One or more updates are processed.
- The end of transaction is indicated.


The start and end transaction indicators represent the transaction boundaries, in that only updates processed between the start and end indicators are considered to be part of the transaction. Updates processed before the start transaction indicator or after the end transaction indicator are not considered part of the transaction.

When using database drivers other than the default internal database drivers, each database driver will be notified of the start transaction indication just before an update to a file type supported by the external database driver is executed. The database driver will also receive all required updates and a transaction end indication.

The transaction can be ended in one of two ways, either a transaction commit indication or a transaction abort indication. The transaction commit indication means that all updates have been considered successful and that it is now safe to commit the update to the database. A transaction abort indication means that one or more of the database updates has failed in some way or the update has deliberately aborted and the updates should be rolled back to the previous state. A transaction abort indication can also occur when a program is abnormally terminated.



### TRANSACTION BOUNDARIES

The transaction boundaries or the start and end of a transaction can be programmatically indicated by using the following statements


| <!----> | <!----> |
| --- | --- |
| [TRANSTART](https://https://static.zumasys.com/jbase/r99/knowledgebase/manuals/3.0/30manpages/man/adv22_TRANSTART.htm)<br> | Marks the beginning of a transaction<br> |
| [TRANSEND](./../../../jbase-basic-%28jbc%29/transend)<br> | Marks the end of a successfully completed transaction<br> |
| [TRANSABORT](./../../../jbase-basic-%28jbc%29/transabort)<br> | Aborts the current transaction and reverses any updates to the database<br> |
| [TRANSQUERY](./../../../jbase-basic-%28jbc%29/transquery)<br> | Detects whether or not a transaction is active on the current process<br> |

