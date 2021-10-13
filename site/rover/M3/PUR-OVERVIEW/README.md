## Purchasing/Receiving Overview
<PageHeader />

[Data Entry Procedures](../assets/PUR-ENTRY/README.md) | [Reports and Inquiries](../assets/PUR-REPORT/README.md) | [Update Processes](../assets/PUR-PROCESS/README.md)

**Purpose**
The Purchasing module provides the ability to enter and maintain purchase
order information, and to make receipts and debits against these orders. A
vendor rating system is also incorporated into the purchasing module. The
module contains several reports to assist the user in the management of the
procurement process.

**Prerequisites**
The Engineering and Inventory modules must be installed before using this
module if the purchase orders are to reference part numbers destined for
inventory. Otherwise the module may be operated independently.

**Data Files**
There are five primary data files and three cross-reference files which
maintain the data directly associated with the module.

The Purchase Order file (PO) maintains one record for each purchase order in
the system. The records are keyed by the purchase order number which may by
assigned automatically by the system or manually by the user. Each record
contains a header section which maintains information about the vendor and
terms of payment, and a line item section which contains all of the line item
data which includes part numbers, cost, scheduled dates and quantities, and
receipts information.

The DMR file (Discrepant Material Report) maintains information entered about
purchased parts that are rejected. The records are keyed by a sequential
number, and are used as part of the basis for the vendor rating system.

The Receipts file (RECEIPTS) maintains one record for each receipt / debit
transaction processed. The records are keyed by the purchase order number
followed by a dash (-) and a sequential number maintained in the purchase
order record. The sequential number for debit records is preceded by the
letter "D" and is maintained as a separate sequence of numbers. Each record
contains information about all of the items received including the receipt
date, packing slip number, part number and quantity.

The Vendor file (VENDOR) maintains one record for each vendor used in the
procurement process. The records are keyed by a user defined number and
contain descriptive information about the vendor such as name, address and
telephone number. The records also contain default information used by the
purchase order entry procedure such as payment terms and contact.

The Terms file (TERMS) contains the records which define the terms of payment
wich may be included on the purchase order. These records are keyed by a user
defined code and contain the parameters which define the terms.

The Purchase Order to Parts cross-reference file (POPART) is keyed by part
number and contains the numbers of all of the purchase orders which reference
the part number. It is used by several of the reporting procedures to provide
direct access to purchase orders by part number.

The Purchase Order to Vendor cross-reference file (POVENDOR) is keyed by
vendor number and contains the numbers of all of the purchase orders which
reference the vendor. It is used by several of the reporting procedures to
provide direct access to purchase orders by vendor number.

The Vendor Name cross-reference file (VENDNAME) maintains an index to all
vendor records for each word of the vendor name. Anywhere within the system
where the vendor number is prompted the user may elect to enter a word from
the vendor's name instead to obtain the vendor number. Each word is processed
by a soundex algorithm so that even misspelled words can be cross-referenced
accurately.

**System Interface**
This module contains interfaces to the Engineering, General Ledger, Inventory
and Accounts Payable modules. It validates part numbers with the Parts Master
file in the Engineering module, and validates account numbers in the General
Ledger chart of accounts. The receipts processing creates inventory
transactions, and also creates accrual records for Accounts Payable.

**User Interface**
The user interface to the module consists of data entry procedures to enter
purchase orders and receipts, reports and inquiries, and batch update
procedures. Access to these procedures is controlled by the user's security
profile. For example, some users may be allowed to enter new purchase orders
while others may only be allowed to make changes to existing records. Some
users may only be allowed to look at the data without the ability to change
it, and some may not even be able to access the procedure. Access to batch
procedures is usually restricted to use by only the system administrator since
these are usually run overnight.

**Setup Procedures**
There are three setup processes which must be performed prior to beginning the
normal flow of activities. The first is the definition of the terms codes
([TERMS.E](../assets/TERMS-E/README.md)). While additional codes may be added at any time, the
codes you intend to use immediately must be available. Vendor records must
also be entered ([VENDOR.E](../assets/VENDOR-E/README.md)) for at least the vendors which you
intend to use immediately, the rest may be added as required. The purchase
order control record ([PO.CONTROL](../assets/PO-CONTROL/README.md)) must also be setup before
normal activities may begin.

**Flow of Activities**
The flow of processing for the purchasing module begins with the entry of the
purchase order in the [PO.E](../assets/PO-E/README.md) procedure. All items which are
purchased should be entered in the purchase order file, this includes items
which are not for production use or do not have a part number. The decision to
enter multiple items on one purchase order or to create separate orders for
each item is an internal procedural decision. The procedure allows the user to
delete purchase order records provided that there have been no receipt
transactions posted against the order. The purchase orders may be printed with
the [PO.F1](../assets/PO-F1/README.md) procedure for pre-printed forms or the
[PO.F2](../assets/PO-F2/README.md) procedure for blank paper or letter head forms. There is
also an option in the [PO.CONTROL](../assets/PO-CONTROL/README.md) procedure which allows you
to print a purchase order directly from the [PO.E](../assets/PO-E/README.md) procedure when it
is filed.

After a purchase order is in the system receipts may be posted against it. The
[RECEIPTS.E](../assets/RECEIPTS-E/README.md) procedure provides this capability. Multiple
items on the same purchase order may be posted on the same receipt
transaction. If an error was made when the receipt was entered it may be
reversed with the [RECEIPTS.E3](../assets/RECEIPTS-E3/README.md) procedure provided that no
additional receipts have been entered against the purchase order, and the
associated accounts payable accrual record has not been changed. Debits for
rejected receipts may be entered with the [RECEIPTS.E2](../assets/RECEIPTS-E2/README.md)
procedure. A full or partial debit of the items may be entered. All of the
receipts procedures automatically create inventory transactions for items with
a part number assigned.

If you are using the vendor rating system, you will want to enter any
information about rejected items with the [DMR.E](../assets/DMR-E/README.md) procedure. This
may be at the point of receipt or at a later time.

The maintenance of the Vendor file ([VENDOR.E](../assets/VENDOR-E/README.md)) and the Terms
file ([TERMS.E](../assets/TERMS-E/README.md)) should be done as new items are required or
changes need to be made.

At some point in time it may be appropriate purge some of the older purchase
order and receipt records from the system. This is done with the
[PO.P4](../assets/PO-P4/README.md) and [RECEIPTS.P2](../assets/RECEIPTS-P2/README.md) procedures.

While all of the cross-reference files in the purchasing module are maintained
automatically, it may be necessary to rebuild these files with the batch
procedures provided. This would normally be done after a file purge, but may
also be done on a regular basis by setting up the rebuild procedures in a
batch queue.

(C) Copyright 2015, Rover Data Systems, Inc.
All rights reserved.<br>
<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
