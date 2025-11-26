##  Execute Data Archival and Purge (ARCHIVE.P1)

<PageHeader />

**Form Details**  
[ Form Details ](ARCHIVE-P1-1/README.md)   

**Purpose**  
The ARCHIVE.P1 procedure is used to execute the archival and purge process for data files based on the retention settings defined in [ ARCHIVE.CONTROL ](../../ACE-ENTRY/ARCHIVE-CONTROL/README.md). This procedure performs two operations: it archives older records from the data account (production working account) to the history account, and it permanently deletes very old records from the history account based on the retention periods specified.

All files marked with the "Include" checkbox in ARCHIVE.CONTROL will be processed according to their defined "Archive after" and "Delete after" periods. The procedure updates the "Last Run Date" and "Processing Message" fields in ARCHIVE.CONTROL to provide a summary of the archival and purge results for each file.

If your system utilizes multiple plan groups, you will need to run a separate process for each plan group.

**Frequency of Use**  
It is recommended to run this procedure on a monthly basis to maintain optimal system performance and manage data retention according to your business requirements. The frequency may be adjusted based on data volume and retention policies.

**Prerequisites**  
The retention settings must be defined in [ ARCHIVE.CONTROL ](../../ACE-ENTRY/ARCHIVE-CONTROL/README.md) prior to running this procedure. Files must be marked with the "Include" checkbox and have appropriate "Archive after" and "Delete after" periods specified.

It is strongly recommended that this process is run after your nightly backup. This ensures that archived or purged records can be restored at a later date if required.

If the "Disable Indexes" option is used to improve performance, this procedure should be run during off-hours or low-activity periods, as it temporarily disables indexing during the process.

<badge text= "Version 2025.11.21" vertical="middle" />

<PageFooter />