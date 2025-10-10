# Accounts Receivable Overview

<PageHeader />

- [Data Entry Procedures](AR-ENTRY/README.md)
- [Reports and Inquiries](AR-REPORT/README.md)
- [Update Processes](AR-PROCESS/README.md)

**Purpose**  
The Accounts Receivable module provides the ability to enter and maintain
customer invoices and process payments against those invoices. The module
contains several reports to assist the user in the management of the
receivables process.

**Prerequisites**  
The General Ledger chart of accounts must be installed before using this
module. The Marketing module must be operational if you wish to auto-
matically create AR items from shipments and RMA's. If you charge sales tax to
your customers, and want to track the detail of tax districts for later
reporting, then you must enter all valid sales tax codes and their respective
tax percentages.

**Data Files**  
There are eight primary data files and three cross-reference files which
maintain the data directly associated with the module.  
  
The Accounts Receivable file (AR) maintains one record for each receiv- ables item in the system. Records created by a shipment or return are keyed by either the shipment number, a manually assigned number or a system assigned sequential number, depending upon the settings in the [MRK.CONTROL](../MRK-OVERVIEW/MRK-ENTRY/MRK-CONTROL/README.md) record requirements. Records entered directly through [AR.E](AR-ENTRY/AR-E/README.md) are either assigned numbers automatically numbers by the system or manually by the operator. Each record contains a header section which maintains information about the customer and terms of payment, and a line item section which includes part numbers, cost, quantities, and general ledger sales account numbers.
  
The recurring Accounts Receivable file (ARR) maintains one record for each
recurring receivables item in the system. Records are assigned numbers
automatically by the system. Each record contains a header section which
maintains information about the customer and terms of payment, as well as the
dates on which an AR item is to be created from the ARR record. A line item
section which contains all of the line item data which includes part numbers,
cost, quantities, and general ledger sales account numbers.  
  
The Customer file (CUST) maintains one record for each customer used in the
sales and accounts receivable process. The records are keyed by a user defined
number and contain descriptive information about the customer such as name,
address and telephone number. The records also contain default information
used by the account receivable procedures such as payment terms and contact.  
  
The Cash file (CASH) contains one record for each check / payment applied to
one or more AR items. Ther record is keyed by a sequential number assigned by
the system. If the payment being applied is the result of a check received
from a customer, then the number of that check is entered in the check number
field. It is possible to 'net' one or more AR items for a customer with a
credit memo or on account cash by entering a fictitious check number and a
zero check amount. It is also possible to create an on-account cash record in
the AR file for the balance of the check amount if it has not been fully
applied.  
  
The accounts receivable register (ARREG) file contains one record for each general ledger account number affected by any accounts receivable procedure. This is the interface file to the general ledger module. In the [AR.E](AR-ENTRY/AR-E/README.md) procedure, the register date entered is assigned to these records. In the [CASH.E](AR-ENTRY/CASH-E/README.md) procedure, the check date is assigned. This gives the user a level of control as to which fiscal period an item is to fall. For example, if an AR item is entered for an invoice of $100, two ARREG records will be created. One record for $100 will exist for the accounts receivable account number identified in the AR item. A second record will be placed into the ARREG file for -$100 against the general ledger account number specified in the account distribution.
  
The Terms file (TERMS) contains the records which define the terms of payment
wich may be included on the receivables item. These records are keyed by a
user defined code and contain the parameters which define the terms.  
  
The sales tax code file (STAX) contains the records which detail the tax
districts and their respective percentages. Separate General Ledger account
numbers may be used for each tax district defined.  
  
The sales tax detail file (ARTAX) contains the information about the sales tax
amounts charged by code. This information is available via reports to help
with reporting collected tax to the proper authorities.  
  
The AR to Customer cross-reference file (ARCUST) is keyed by customer number
and contains the numbers of all of the AR items on file for that customer. It
is used by several of the reporting procedures to provide direct access to AR
items by customer number.  
  
The Customer Name cross-reference file (CUSTNAME) maintains an index to all
customer records for each word of the customer name. Anywhere within the
system where the customer number is prompted the user may elect to enter a
word from the customer's name instead to obtain the customer number. Each word
is processed by a soundex algorithm so that even misspelled words can be
cross-referenced accurately.

**System Interface**  
This module contains interfaces to the Engineering, General Ledger, and
Marketing modules. It validates part numbers with the Parts Master file in the
Engineering module, and validates account numbers in the General Ledger chart
of accounts. The shipment posting process creates accounts receivable items
which contain all invoice information about a shipment.

**User Interface**  
The user interface to the module consists of data entry procedures to enter
accounts receivable items and recurring records, reports and inquiries, and
batch update procedures. Access to these procedures is controlled by the
user's security profile. For example, some users may be allowed to enter new
AR items while others may only be allowed to make changes to existing records.
Some users may only be allowed to look at the data without the ability to
change it, and some may not even be able to access the procedure. Access to
batch procedures is usually restricted to use by only the system administrator
since these are usually run overnight.

**Setup Procedures**  
There are three setup processes which must be performed prior to beginning the normal flow of activities. The first is the definition of the terms codes ( [TERMS.E](../../rover/AP-OVERVIEW/AP-ENTRY/TERMS-E/README.md) ). While additional codes may be added at any time, the codes you intend to use immediately must be available. Customer records must also be entered ( [CUST.E](AR-ENTRY/CUST-E/README.md) ) for at least the customers which you intend to use immediately, the rest may be added as required. The accounts receivable control record ( [AR.CONTROL](AR-ENTRY/AR-CONTROL/README.md) ) must also be setup before normal activities may begin.
  
Optionally, you will need to set up the sales tax code file ( [STAX.E](AR-ENTRY/STAX-E/README.md) ) if you wish to track detail sales tax history by district.

**Flow of Activities**  
The flow of processing for the accounts receivable module can begin in any one of three places. First, items which are shipped through the Marketing module create AR records. Second, AR items may be entered directly through [AR.E](AR-ENTRY/AR-E/README.md) for non-shipment items. Third, items may be created automatically by the [ARR.P1](AR-PROCESS/ARR-P1/README.md) batch recurring entry procedure. This will create AR items for all eligible recurring ARR item. Once the item is present in the AR file, it may be paid through the [CASH.E](AR-ENTRY/CASH-E/README.md) procedure. The invoice printing process ( [AR.F1](AR-REPORT/AR-F1/README.md) or [AR.F2](AR-REPORT/AR-F2/README.md) ) may be used to print or re-print any invoices.
  
The maintenance of the Customer file ( [CUST.E](AR-ENTRY/CUST-E/README.md) ) and the Terms file ( [TERMS.E](../../rover/AP-OVERVIEW/AP-ENTRY/TERMS-E/README.md) ) should be done as new items are required or changes need to be made.
  
At some point in time it may be appropriate purge some of the older accounts receivable and cash records from the system. This is done with the [AR.P3](AR-PROCESS/AR-P3/README.md) and [CASH.P1](AR-PROCESS/CASH-P1/README.md) procedures.
  
While all of the cross-reference files in the accounts receivable module are
maintained automatically, it may be necessary to rebuild these files with the
batch procedures provided. This would normally be done after a file purge, but
may also be done on a regular basis by setting up the rebuild procedures in a
batch queue.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />
