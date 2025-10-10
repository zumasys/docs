# Sales and Marketing Overview

<PageHeader />

- [Data Entry Procedures](MRK-ENTRY/README.md)
- [Reports and Inquiries](MRK-REPORT/README.md)
- [Update Processes](MRK-PROCESS/README.md)

**Purpose**  
The Marketing module provides the functions required to administer the
activities required for sales and marketing. These include order entry,
shipping, returns, prospect tracking and failure analysis. The module provides
several report and inquiry procedures to assist the user in the management of
the sales and marketing process.

**Prerequisites**  
The Engineering and Inventory modules must be installed before using this
module if inventory items are to be referenced on sales orders, otherwise it
may be run as a stand alone module.

**Data Files**  
There are seven primary data files, four cross reference files and four
reporting files which maintain the data directly associated with the module.  
  
The Sales Order file (SO) maintains one record for each sales order in the
system. The records are optionally keyed by a user assigned sales order
number, or a sequential number will be automatically assigned if desired. The
Sales Order file contains a header section which maintains information about
the customer terms of payment, and a line item section which contains all of
the line item data including part numbers, pricing, schedule shipment dates
and quantities and shipment information.  
  
The Shipments file (SHIP) maintains one record for each shipment transaction
processed. The records are keyed by the sales order number followed by a dash
(-) and a sequential number maintained in the sales order record. Each record
contains information about all of the items shipped including date, part
number, quantities, costs and inventory locations.  
  
The Return Merchandise file (RMA) maintains one record for each RMA in the
system. The records are optionally keyed by a user assigned RMA number, or a
sequential number will be automatically assigned if desired. The RMA file
contains a header section which maintains information about the customer and
the conditions of the return autorization, and a line item section which
contains information about the items to be returned.  
  
The Customer file (CUST) maintains one record for each customer used in the
sales process. The records are optionally keyed by a user defined number or
automatically assigned a sequential number if desired. Along with the standard
customer information such as address, phone, contact, etc., the customer file
maintains data which can be defaulted into the sales order process such as
terms code, discount percents and sales rep data.  
  
The Prospect file (PROSPECT) maintains one record for each prospect. The The
records are optionally keyed by a user defined number or automatically
assigned a sequential number if desired. The file maintains information about
the prospect such as name, address, phone number and contacts.  
  
The Price file (PRICE) maintains records which allow the user to control
default pricing during the sales order entry process. The file can be keyed by
part number, which allow up to two (2) prices to be maintained per part, based
upon effectivity dates. Optionally, the user can assign a key made up of a
combination of the part number and a customer code. This allows the
maintenance of customer specific pricing.  
  
The Terms (TERMS) file contains the records which define the terms of payment
which may be included on the sales order. These records are keyed by a user
defined code and contain the parameters which define the terms.  
  
The Sales Order to Parts cross-reference file (SOPART) is keyed by part number
and contains the numbers of all of the sales orders which reference the part
number. It is used by several of the reporting procedures to provide direct
access to purchase orders by part number.  
  
The Sales Order to Customer cross-reference file (SOCUST) is keyed by customer
number and contains the numbers of all of the sales orders which reference the
customer. It is used by several of the reporting procedures to provide direct
access to sales orders by customer number.  
  
The Customer Name cross-reference file (CUSTNAME) maintains an index to all
customer records for each word of the customer name. Anywhere within the
system where the customer number is prompted the user may elect to enter a
word from the customer's name instead to obtain the customer number. Each word
is processed by a soundex algorithm so that even misspelled words can be
cross-referenced accurately.  
  
The Sales Order to Purchase Order cross-reference file (SOPO) is keyed by the
customer's purchase order number and contains the the numbers of all of the
sales orders which reference the purchase order. It is used to provide direct
access to a sales order based on the customer purchase order number.  
  
The Sales History file (SALES) is keyed by a sequential number and maintains
long term summarized sales information for reporting purposes. The records are
created by the system when shipments are posted.  
  
The Sales Order Booking file (SOBOOK) is keyed by a sequential number and
maintains detailed booking information. The records are created each time a
change which affects bookings is made in sales order entry.  
  
The Commission file (COMMISSION) is keyed by a sequential number and maintains
the calculated sales commission amounts based on shipments. The records are
created by the system when shipments are posted.  
  
The Failure Statistics file (FAIL) maintains data accumulated from the
shipment and RMA processes to allow failure analysis and MTBF (mean time
between failure) calculations. The file is keyed by a combination of model
number, month and year.

**System Interface**  
This module contains interfaces to the Engineering, General Ledger, Inventory
and Accounts Receivable modules. It validates part numbers with the Parts
Master file in the Engineering module, and validates account numbers in the
General Ledger chart of accounts. The shipment processing creates inventory
transactions and the Invoicing process will create Accounts Receivable
invoices. When the Accounts Receivable module is enabled, the Sales Order
Entry procedure will perform a credit check based upon open order dollars and
the open accounts receivable amount.

**User Interface**  
The user interface to the module consists of data entry procedures to enter
sales orders and shipments, reports and inquiries, and batch update
procedures. Access to these procedures is controlled by the user's security
profile. For example, some users may be allowed to enter new sales orders
while others may only be allowed to make changes to existing records. Some
users may only be allowed to look at the data without the ability to change
it, and some may not even be able to access the procedure. Access to batch
procedures is usually restricted to use by only the system administrator since
these are usually run overnight.

**Setup Procedures**  
The following are required setup procedures which must be performed prior to
the normal flow of activities:  
  
[TERMS.E](../../rover/AP-OVERVIEW/AP-ENTRY/TERMS-E) Definition of the payment terms for customers
[CUST.E](../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/CUST-E) Identification of customers
[MRK.CONTROL](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL) Definition of control information used in the module
  
Optionally, the following setup procedures can be performed to make complete
use of all available marketing functions:  
  
[REP.E](../../rover/AP-OVERVIEW/AP-ENTRY/PRECOMM-E/PRECOMM-E-1/REP-E) Identification of sales representatives
[PRICE.E](../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/CUST-E/CUST-E-1/PRICE-E) Entry of product prices
[FAIL.CONTROL](FAIL-CONTROL/README.md) Definition of valid failure codes for RMA processing
[MTBF.CONTROL](MTBF-CONTROL/README.md) Definition of MTBF calculation parameters
[STAX.E](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/STAX-E) Sales tax

**Flow of Activities**  
The flow of processing for the marketing module begins with the entry of the sales order in the [SO.E](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E) procedure. All items which are sold should be entered in the sales order file, including items which do not have a specific part number assigned, such as non-inventory items. The procedure allows the deletion of the sales order record, provided there have been no shipments made against it.
  
After the sales order is on file, shipments may be made against that order, either using the batch shipment creation procedure ( [SO.P1](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/SO-E-4/SHIP-E/SO-P1) ), or creating a single shipment record in the [SHIP.E](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/SO-E-4/SHIP-E) procedure. Once created, the shipper is considered "requested" and a shipment picklist can be printed. Generally, the picklist is manually filled in with the actual shipment information such as ship quantity, and that information is then entered into the [SHIP.E2](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/SO-E-4/SHIP-E/SO-P1/SHIP-E2) procedure which will move inventory.
  
Once the [SHIP.E2](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/SO-E-4/SHIP-E/SO-P1/SHIP-E2) procedure has been executed against a shipment, the [SHIP.P1](../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/comm-e/SHIP-P1) procedure will post the shipping information, updating the sales history file (SALES), the commission file (COMM) and, when active will update the accounts receivable module with the amounts due. If an error is discovered in the shipment after posting then a shipment reversal may be done with the [SHIP.E3](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/SO-E-4/SHIP-E/SO-P1/SHIP-E2/SHIP-E3) procedure.
  
Prior to posting, changes may be made to the shipper via [SHIP.E2](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/SO-E-4/SHIP-E/SO-P1/SHIP-E2) . Once it has been posted, the shipper can be reversed via [SHIP.E3](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/SO-E-4/SHIP-E/SO-P1/SHIP-E2/SHIP-E3) . When the record is saved the inventory transactions will be reversed and when the record is posted reversing sales, commission and accounts receivable records will be created.
  
Authorizations for returned merchandise may be entered with [RMA.E](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL/MRK-CONTROL-2/RMA-E) . The rma record may be created from a shipment, sales order or field service order. Receipts may be made against an rma for the full or partial amount via [RMAREC.E](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL/MRK-CONTROL-2/RMA-E/RMA-E-1/RMAREC-E2/RMAREC-E) and [RMAREC.E2](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL/MRK-CONTROL-2/RMA-E/RMA-E-1/RMAREC-E2) . The intent of of [RMAREC.E](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL/MRK-CONTROL-2/RMA-E/RMA-E-1/RMAREC-E2/RMAREC-E) is to allow personnel on the receiving dock to identify what has been received. However, inventory will not be moved against this receipt until it has been confirmed via [RMAREC.E2](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL/MRK-CONTROL-2/RMA-E/RMA-E-1/RMAREC-E2) .
  
In addtion to confirming the receipt, [RMAREC.E2](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL/MRK-CONTROL-2/RMA-E/RMA-E-1/RMAREC-E2) allows entry of additional information such as failure codes, miscellaneous charges, etc. Once the receipt has been confirmed, it can be posted via [RMAREC.P1](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL/MRK-CONTROL-2/RMAREC-P1) . The posting process updates the sales history file (SALES), the commissions file (COMM) and the accounts receivable file (AR). An accounts receivable credit memo will only be created if the rma record has been flagged to create one.
  
Prior to posting, changes may be made to the rma receipt via [RMAREC.E2](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL/MRK-CONTROL-2/RMA-E/RMA-E-1/RMAREC-E2) . Once the receipt has been posted, it can be reversed via [RMAREC.E3](RMAREC-E3/README.md) . When the record is saved the inventory transactions will be reversed and when the record is posted reversing sales, commission and accounts receivable (if applicable) records will be created.
  
The maintenance of the Customer file ( [CUST.E](../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/CUST-E) ) and the Terms file ( [TERMS.E](../../rover/AP-OVERVIEW/AP-ENTRY/TERMS-E) ) should be done as new items are required or changes need to be made.
  
At some point in time it may be appropriate purge some of the older sales
order, shipment and supporting file records from the system. This is done with
the purge procedure provided in the batch processes menu.  
  
While all of the cross-reference files in the marketing module are maintained
automatically, it may be necessary to rebuild these files with the batch
procedures provided. This would normally be done after a file purge, but may
also be done on a regular basis by setting up the rebuild procedures in a
batch queue.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />
