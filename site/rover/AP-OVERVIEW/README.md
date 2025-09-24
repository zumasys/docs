# Accounts Payable Overview

<PageHeader />

<iframe width="560" height="315" src="https://www.youtube.com/embed/Qt-Puu2vgMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- [Data Entry Procedures](./AP-ENTRY/README.md)
- [Reports and Inquiries](./AP-REPORT/README.md)
- [Training Guide](./training-guide/README.md)
- [Update Processes](./AP-PROCESS/README.md)

**Purpose**  
The Accounts Payable module provides the ability to enter and maintain vendor
invoices and make payments against those invoices. It is also possible to
enter checks against non-vendor related items. The module contains several
reports to assist the user in the management of the payables process.

**Prerequisites**  
The General Ledger chart of accounts must be installed before using this
module. The Purchasing module must be operational if you wish to automatically
create AP items from receipts.

**Data Files**  
There are six primary data files and three cross-reference files which
maintain the data directly associated with the module.  
  
The Accounts Payable file (AP) maintains one record for each payables item in the system. Records created by a purchase order receipt are keyed by the receipt number for easy matching. Records entered directly through [AP.E](AP-E/README.md) are either automatically assigned numbers by the system or manually. Each record contains a header section which maintains information about the vendor and terms of payment, and a line item section which contains all of the line item data which includes part numbers, cost, quantities, and general ledger expense account numbers.  
  
The recurring Accounts Payable file (APR) maintains one record for each
recurring payables item in the system. Records are assigned numbers
automatically by the system. Each record contains a header section which
maintains information about the vendor and terms of payment, as well as the
dates on which an AP item is to be created from the APR record. A line item
section which contains all of the line item data which includes part numbers,
cost, quantities, and expense account numbers.  
  
The Vendor file (VENDOR) maintains one record for each vendor used in the
procurement and accounts payable process. The records are keyed by a user
defined number and contain descriptive information about the vendor such as
name, address and telephone number. The records also contain default
information used by the account payable procedures such as payment terms and
contact.  
  
The Checks file (CHECKS) contains one record for each check applied to one or
more AP items. The record is generally keyed by the number of the check, as it
is received from the vendor. However, it is possible to 'net' one or more AP
items for a vendor which balance to zero and for which it is not necessary to
actually print a check. For these type of instances, the user may assign any
record number which does not already exist in the checks file.  
  
The Prechecks (PRECHECKS) file contains one record for each group of AP items
to be paid for a vendor. The computer checks are actually printed from this
file, then posted to the CHECKS file when the printing is complete and
approved.  
  
The accounts payable register (APREG) file contains one record for each general ledger account number affected by any accounts payable procedure. This is the interface file to the general ledger module. In the [AP.E](AP-E/README.md) procedure, the register date entered is assigned to these records. In the [CHECKS.E](CHECKS-E/README.md) procedure, the check date is assigned. This gives the user a level of control as to which fiscal period an item is to fall. For example, if an AP item is entered for $100 for a phone bill, two APREG records will be created. One record for -$100 will exist for the accounts payable account number identified in the AP item. A second record will be placed into the APREG file for $100 against the general ledger account number specified in the account distribution.  
  
The Terms file (TERMS) contains the records which define the terms of payment
wich may be included on the payables item. These records are keyed by a user
defined code and contain the parameters which define the terms.  
  
The Purchase Order to AP cross-reference file (APPO) is keyed by purchase order number and contains the numbers of all of the accounts payable items which reference the purchase order. It is used by the [AP.E](AP-E/README.md) procedure to locate items which contain the purchase order when only the PO number is known.  
  
The AP to Vendor cross-reference file (APVENDOR) is keyed by vendor number and
contains the numbers of all of the AP items on file for that vendor. It is
used by several of the reporting procedures to provide direct access to AP
items by vendor number.  
  
The Vendor Name cross-reference file (VENDNAME) maintains an index to all
vendor records for each word of the vendor name. Anywhere within the system
where the vendor number is prompted the user may elect to enter a word from
the vendor's name instead to obtain the vendor number. Each word is processed
by a soundex algorithm so that even misspelled words can be cross-referenced
accurately.

**System Interface**  
This module contains interfaces to the Engineering, General Ledger, and
Purchasing modules. It validates part numbers with the Parts Master file in
the Engineering module, and validates account numbers in the General Ledger
chart of accounts. The receipts processing creates accounts payable accrual
items which contain all pertinent information about a receipt. This can then
be referenced and updated when the actual vendor invoice is received at a
later date.

**User Interface**  
The user interface to the module consists of data entry procedures to enter
accounts payable items and recurring records, reports and inquiries, and batch
update procedures. Access to these procedures is controlled by the user's
security profile. For example, some users may be allowed to enter new AP items
while others may only be allowed to make changes to existing records. Some
users may only be allowed to look at the data without the ability to change
it, and some may not even be able to access the procedure. Access to batch
procedures is usually restricted to use by only the system administrator since
these are usually run overnight.

**Setup Procedures**  
There are three setup processes which must be performed prior to beginning the normal flow of activities. The first is the definition of the terms codes ([TERMS.E](TERMS-E/README.md)). While additional codes may be added at any time, the codes you intend to use immediately must be available. Vendor records must also be entered ([VENDOR.E](VENDOR-E/README.md)) for at least the vendors which you intend to use immediately, the rest may be added as required. The accounts payable control record ([AP.CONTROL](AP-CONTROL/README.md)) must also be setup before normal activities may begin.  

**Flow of Activities**  
The flow of processing for the accounts payable module can begin in any one of three places. First, items which are received through the Purchasing module create accrual records which, when update with the invoice information, create AP items which may be processed and paid. Second, AP items may be entered directly through [AP.E](AP-E/README.md) for non-receipt items. Third, items may be created automatically by the [APR.P1](APR-P1/README.md) batch recurring entry procedure. This will create AP items for all eligible recurring APR item. Once the item is completely entered in the AP file, the amount and date to pay are the controlling field for payment by the computer check procedures. Hand checks may always be entered against any AP item. The check pre-processing file (PRECHECKS) is a 'staging' area in which itgems are created from the AP file for all AP records with a date to pay within the date specified. Computer checks are actually printed from this PRECHECKS file. The purpose for this is the hopefully rare event when either the user enters the wrong starting check number, of the printer jams during the printing of checks. If this were to occur, the check printing process may be re-run with the new, correct check number and the AP and CHECKS file are not updated until the checks are actually posted through the [CHECKS.P1](CHECKS-P1/README.md) process. The check posting process not only creates the CHECKS records, but also updates the AP items which were paid and the open AP amount in the vendor file.  
  
The maintenance of the Vendor file ([VENDOR.E](VENDOR-E/README.md)) and the Terms file ([TERMS.E](TERMS-E/README.md)) should be done as new items are required or changes need to be made.  
  
At some point in time it may be appropriate purge some of the older accounts payable and checks records from the system. This is done with the [AP.P5](AP-P5/README.md) and [CHECKS.P2](CHECKS-P2/README.md) procedures.  
  
While all of the cross-reference files in the accounts payable module are
maintained automatically, it may be necessary to rebuild these files with the
batch procedures provided. This would normally be done after a file purge, but
may also be done on a regular basis by setting up the rebuild procedures in a
batch queue.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />
