##  General Ledger Transaction Purge Process (GLTRANS.P2)

<PageHeader />

**Form Details**  
[ Form Details ](GLTRANS-P2-1/README.md)   

**Purpose**  
The GLTRANS.P2 procedure is used to purge inactive GLTRANS records from the
data base. The criteria used to deterime which records are purged is based on
a user defined cut-off date. All posted GLTRANS records which are on file and
fall within the cut-off date will be deleted. It is recommended that this
process only be run when it is certain that there is not further need to
reference the journal entries.

**Frequency of Use**  
The frequency with which a purge is performed will vary depending on such
factors as available disk space and the amount of on-line history desired.
This process should not be run until after the selected fiscal year is finally
closed.

**Prerequisites**  
It is strongly recommended that a full account backup be performed prior to
executing any purge process. It is also recommended that this be a permanent
backup so that any records which were purged can be restored at a later date
if required.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />