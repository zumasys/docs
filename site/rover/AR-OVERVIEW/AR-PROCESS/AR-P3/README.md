##  Accounts Receivable Purge Process (AR.P3)

<PageHeader />

**Form Details**  
[ Form Details ](AR-P3-1/README.md)   

**Purpose**  
The AR.P3 procedure is used to purge inactive AR records from the data base.
The criteria used to determine which records are purged is based on a user
defined cut-off date.  
  
All accounts receivable records which have a paid date that is less than or
equal to the cut-off date, and whose cash records are already deleted or have
a check date after the cut-off date will be deleted. Any associated cash
records which are still on file will also be deleted.  
  
Accounts receivable records that have a zero dollar invoice amount will be
purged if the invoice date is less than or equal to the cutoff date.

**Frequency of Use**  
The frequency with which a purge is performed will vary depending on such
factors as available disk space and the amount of on-line history desired. At
a minimum purges should be performed on a yearly basis. Purging on a quarterly
or even a monthly basis may be desirable if the volume of transactions is
fairly high.

**Prerequisites**  
It is strongly recommended that a full account backup be performed prior to
executing any purge process. It is also recommended that this be a permanent
backup so that any records which were purged can be restored at a later date
if required.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />