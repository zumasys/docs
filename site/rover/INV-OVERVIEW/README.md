# Inventory Overview

<PageHeader />

- [Data Entry Procedures](INV-ENTRY/README.md)
- [Reports and Inquiries](INV-REPORT/README.md)
- [Update Processes](INV-PROCESS/README.md)

**Purpose**  
The Inventory module provides the ability to define inventory locations and to
maintain information regarding the balance of materials stored in these
locations It also provides for recording the movement of materials to and from
these locations.

**Prerequisites**  
The Engineering module must be installed so that part numbers can be defined
in the Parts Master. While the General Ledger module need not be completely
operational, the necessary account numbers must be entered in the GLCHART
file.

**Data Files**  
The primary files in the module are the Inventory Location (INVLOC), Inventory
(INV), Lot control (LOT), Inventory Commitments (COMMIT), Inventory
Allocations (ALLOC), and Inventory Transaction (IT).  
  
The Inventory Location file (INVLOC) is used to define the valid inventory
locations which will be used by the system. The file is keyed by inventory
location and includes a description of the location, General Ledger account
number, and what type of location it is.  
  
The Inventory file (INV) is keyed by part number and contains the on hand
balance of the associated part for each location. It also contains the balance
on order for each location.  
  
If lot control has been enabled for any of the parts defined in the Parts
master then the lot file (LOT) is used to track specific lot numbers within
the inventory system.  
  
The Inventory Commitments file (COMMIT) maintains data on the items committed
to an open sales order, and is updated as part of the order entry and shipment
process in the Marketing module.  
  
The Inventory Allocations file (ALLOC) maintains data on which items have been
allocated to work orders and shipments.  
  
The Inventory Transaction file (IT) contains one record for each inventory
transaction entered into the system. The file is keyed by a sequential number
which is automatically assigned by the system and contains information such as
the date on which the transaction occurred, quantity, part number, from and to
location, and the cost of the part at the time of the transaction.  
  
A file containing historical usage (USAGE) is maintained. This file is keyed
by part number and contains the quantity used of each part by month and year.  
  
The physical inventory, for performing a complete count of selected inventory
locations, utilizes the Physical Tag file (PHYS). The cycle inventory, for
performing counts on selected parts, uses the Cycle Tag file (CYCLE). Both of
these files are keyed by a sequential number which is automatically assigned
by the system.

**System Interface**  
The Inventory module uses the data in the Engineering module to validate part
numbers. Other modules including Production, Purchasing/Receiving and
Marketing/Order Entry create inventory transactions which affect inventory
balances. Inventory register records, which control the flow of dollars from
location to location, are posted to the General Ledger module at month end.
Inventory balances are used in the MRP calculations.

**User Interface**  
The user interface to the module consists of data entry procedures to define
inventory locations and enter inventory transactions, reports and inquiries,
and batch update procedures. Access to these procedures is controlled by the
user's security profile. For example, some users may be allowed to enter
inventory transactions while others may only be allowed to look at these
transactions in report form. Access to batch procedures such as the monthly
usage update are usually restricted to use by only the system administrator
since these are usually run overnight.

**Setup Procedures**  
There are two setup procedures which need to be addressed before beginning with the normal flow of activities. The first is defining the valid inventory locations. These must be present before inventory transactions may be entered. The procedure used to define these locations is [INVLOC.E](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/INVLOC-E) . The second is the setup of default and control information in the [INV.CONTROL](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL) procedure.

**Flow of Activities**  
The only ongoing activity associated with the Inventory module is the entry of inventory transactions. There are two procedures available to enter these transactions, they are [IT.E](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-E/IT-E) and [IT.E2](IT-E2/README.md) . The result of using either one of these procedures is the same, the difference is that [IT.E](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-E/IT-E) is used to enter one transaction at a time while [IT.E2](IT-E2/README.md) is used to enter several transactions at once. [IT.E](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-E/IT-E) should be used in situations where you want to enter a single transaction from time-to-time and want it to update the inventory balance immediately. An example of this would be the stock clerk recording the transaction every time they issue a part to someone. [IT.E2](IT-E2/README.md) should be used when several transactions have been accumulated and are entered all at once. A situation where you would choose to use this procedure is when the stockroom records each issue of material on a sign-out sheet which is later forwarded to data entry. The inventory balance is then updated when the data entry clerk enters the transactions from the list.
  
If the cycle count process is to be used, this is a daily process with cycle
count sheets being printed for each day for parts which have been previously
assigned ABC codes and cycle count dates. After printing, the cycle count
sheet should be given to the person who is responsible for counting in the
selected inventory location. They will log the actual counts on the sheets and
either enter the counts themselves, or return the sheets to a control point
for entry and posting.  
  
The physical inventory is intended for use as a 'wall-to-wall' count process,
however it may be limited to selected inventory locations as desired.  
  
The Usage file is updated by the procedure [USAGE.P1](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL/INV-CONTROL-1/USAGE-P1) . This procedure determines the total usage for each part for the month specified by accumulating the appropriate inventory transactions for the period. The procedure should be run at the end of each month.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />
