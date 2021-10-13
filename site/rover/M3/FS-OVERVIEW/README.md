## Field Service Overview
<PageHeader />

[Data Entry Procedures](./README.md) | [Reports and Inquiries](.T/README.md)
| [Update Processes](./README.md)

**Purpose**
The Field Service module provides the functions required to administer and
execute the activities required for a field serive organization. These include
service order creation, monitoring and posting, preventive maintenance
tracking and scheduling, warranty tracking, inventory management, time and
materials tracking, invoicing, and chargeback processing.

**Prerequisites**
The Engineering and Inventory modules must be installed before using this
module if inventory items are to be referenced on service orders, otherwise it
may be run as a stand alone module.

**Data Files**
There are seven data files which maintain the data directly associated with
the module.

The Field Service Order file (FSO) maintains one record for each service call
in the system. The records are optionally keyed by a user assigned service
order number, or a sequential number will be automatically assigned if
desired. The Field Service Order file contains a general page which maintains
information about the customer and the product being serviced., a work
performed page for defining the tasks performed and their associated charges,
a part used page which identifies the parts used during the service and their
associated charges, and a revenue summary page which summarizes the charges,
costs and profit or loss for the order.

The Serial file (SERIAL) maintains a history and status of each product for
which service has or could be performed. It also maintains warranty
information and preventive maintenance schedules.

The Customer file (CUST) maintains one record for each customer used in the
field service process. The records are optionally keyed by a user defined
number or automatically assigned a sequential number if desired. Along with
the standard customer information such as address, phone, contact, etc., the
customer file maintains data which can be defaulted into the sales order
process such as terms code, discount percents and sales rep data.

The Price file (PRICE) maintains records which allow the user to control
default pricing during the field service order process. The file can be keyed
by part number, which allow up to two (2) prices to be maintained per part,
based upon effectivity dates. Optionally, the user can assign a key made up of
a combination of the part number and a customer code. This allows the
maintenance of customer specific pricing.

The Terms (TERMS) file contains the records which define the terms of payment
which may be included on the sales order. These records are keyed by a user
defined code and contain the parameters which define the terms.

The Sales History file (SALES) is keyed by a sequential number and maintains
long term summarized sales information for reporting purposes. The records are
created by the system when service orders are posted.

The Commission file (COMMISSION) is keyed by a sequential number and maintains
the calculated sales commission amounts based on items sold on the service
order. The records are created by the system when service orders are posted.

**System Interface**
This module contains interfaces to the Engineering, General Ledger, Inventory
and Accounts Receivable modules. It validates part numbers with the Parts
Master file in the Engineering module, and validates account numbers in the
General Ledger chart of accounts. Service order processing creates inventory
transactions and the Invoicing process will create Accounts Receivable
invoices.

**User Interface**
The user interface to the module consists of data entry procedures to enter
field service orders and maintain the serial number master file, reports and
inquiries, and batch update procedures. Access to these procedures is
controlled by the user's security profile. For example, some users may be
allowed to enter new service orders while others may only be allowed to make
changes to existing records. Some users may only be allowed to look at the
data without the ability to change it, and some may not even be able to access
the procedure. Access to batch procedures is usually restricted to use by only
the system administrator since these are usually run overnight.

**Setup Procedures**
The following are required setup procedures which must be performed prior to
the normal flow of activities:

[TERMS.E](./README.md)
Definition of the payment terms for customers.

[CUST.E](./README.md)
Identification of customers.

[FS.CONTROL](./README.md)
Definition of control information used in the module.

[REP.E](./README.md)
Identification of sales representatives.

[PRICE.E](./README.md)
Entry of product prices.

[STAX.E](./README.md)
Sale tax code entry.

**Flow of Activities**
The flow of processing for the field service module begins with the entry of
the service order in the [FSO.E](./README.md) procedure. This may occur before
the the service call is made based on a call from a customer needing service
or a scheduled preventive maintenance. In these cases basic information about
the customer and the item to be serviced are entered and a service order form
may be printed. This step may be skipped if desired. After the service is
performed information regarding the labor expended and the materials consumed
are entered into the order. When all the information has been entered the
order may be placed in a completed status. Inventory is depleted at this time.

Once the service order has been closed, the [FSO.P1](./README.md) procedure
will post the information, updating the sales history file (SALES), the
commission file (COMM) and, when active will update the accounts receivable
module with the amounts due. Accounts payable deits will be created for
chargebacks as well.

The maintenance of the Customer file ([CUST.E](./README.md)) and the Terms file
([TERMS.E](./README.md)) should be done as new items are required or changes
need to be made.

Items should be added and updated as required to the serial master file as
required using [SERIAL.E](./README.md).

At some point in time it may be appropriate purge some of the older service
orders the system. This is done with the purge procedure provided in the batch
processes menu.


(C) Copyright 2015, Rover Data Systems, Inc.
All rights reserved.<br>
<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
