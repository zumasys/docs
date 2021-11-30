##  Production Overview

<PageHeader />

[ Data Entry Procedures ](PRO-ENTRY/README.md) | [ Reports and Inquiries ](PRO-REPORT/README.md) | [ Update Processes ](PRO-PROCESS/README.md)

**Purpose**  
The Production module provides the facilities required to effectively manage
the manufacturing process. The capabilities of the module include work order
and picking list creation, shortage tracking, work order specific bills of
material, routings, shop floor control, labor entry and variance reporting.

**Prerequisites**  
The Engineering and Inventory modules must be installed before using this
module.

**Data Files**  
There are thirteen primary data files and one cross-reference file which
maintain the data directly associated with the module.  
  
The Employee file (EMP) maintains information about each employee who will be
posting labor against work orders. The file is keyed by the employee number
which may by assigned automatically by the system or manually by the user, and
is large enough to accomodate the use of a social security number. The record
contains the employee name, rate and normal work center location.  
  
The Labor file (LABOR) maintains one record for each labor entry. The records
are keyed by a sequential number assigned by the system. The file maintains
the dates on which the labor was applied, the work order and work center it
was assigned to, the hours posted and the rate at which the hours were
charged.  
  
The Picker file (PICKER) maintains the picking list information associated
with a work order. Each record is keyed by the work order number that it is
associated to and contains all of the part numbers and quantities to be pulled
for processing.  
  
The Routing master file (ROUTING) contains all of the routings defined for use
by the system. The key to a routing record is defined by the user. Depending
on the situation the user may choose to make the routing ID the same as the
part number of the assembly it is associated with, or he may choose to define
generic routings, using some other naming convention, if the same routing is
used on several assemblies. The routing defines the operation steps and their
sequence and the work centers involved. It also specifies the crew size for
each operation and the hours for setup, pre and post operation and run time.  
  
The Work Order Shortage file (SHORTS) maintains one record for each part
number which has a shortage against one or more work orders. The records are
keyed by the part number which is short and contain all of the work order
numbers and associated short quantities.  
  
The Shop Transaction file (ST) maintains one record for each shop floor
transaction entered. The records are keyed by a sequential number and contain
the date on which the transaction was posted, work order number, the quantity
moved and the operation and work center the quantity was moved from and to.  
  
The Work Center file (WC) maintains the information for each work center
defined for use in the routings. Each record is keyed by a user defined name
and contains a description of the work center, the department it is associated
with, the normal daily hours of operation, the default setup, pre and post
operation hours and crew size. Fixed and variable overhead percentages are
also maintained.  
  
The Work Order file (WO) maintains the information about each work order. This
includes the part number of the assembly to be built, quantity, routing, start
and completion dates, and current status. The work order record also contains
the routing for the work order which may be loaded from a pre-defined routing
and then modified for the work order. Work order records keys may be assigned
manually or sequentially by the system.  
  
The Work Order Bill of Material file (WOBOM) maintains the work order specific
bill of material for an assembly. The records are keyed by the work order
number they are associated with and contain the same type of information, in
the same format as the bill of material records (BOM). Creation of these
records is optional.  
  
The Work Order Inventory file (WOINV) maintains the part number and associated
quantity of each component part used on the associated work order. The
quantity of any shortage is also maintained. The records are keyed by work
order number.  
  
The Work Order Material Adjustment file (WOMATL) maintains one record for each
manual adjustment made to the material value of a work order. The file is
keyed by a sequential number and contains the work order number, date and
amount of the adjustment.  
  
The Work Order Outside Processing Adjustment file (WOOP) maintains one record
for each manual adjustment made to the outside processing value of a work
order. The file is keyed by a sequential number and contains the work order
number, date and amount of the adjustment.  
  
The Work Order Register file (WOREG) maintains the records which define the
dollar value to be posted to the general ledger resulting from various
activities associated with work order processing. Each record is a one sided
entry to a general ledger account number and contains the date on which the
posting took place and the amount to be posted.  
  
The Work Order to Parts cross-reference file (WOPART) is keyed by part number
and contains the numbers of all of the work orders which reference the part
number as the final assembly. It is used by several of the reporting
procedures to provide direct access to work orders by part number.

**System Interface**  
This module contains interfaces to the Engineering, General Ledger and
Inventory modules. The engineering module is used to validate part numbers and
create picking lists from bills of material. Account numbers are validated
against the general ledger chart of accounts and work order register records
are created which are posted to the general ledger. Component parts are pulled
from inventory for work orders and completions of work order assemblies are
posted to inventory.

**User Interface**  
The user interface to the module consists of data entry procedures to enter
work orders, pull picklists, enter labor and shop transactions etc., and
reports and inquiries, and batch update procedures. Access to these procedures
is controlled by the user's security profile. For example, some users may be
allowed to enter new work orders while others may only be allowed to make
changes to existing records. Some users may only be allowed to look at the
data without the ability to change it, and some may not even be able to access
the procedure. Access to batch procedures is usually restricted to use by only
the system administrator since these are usually run overnight.

**Setup Procedures**  
There are five setup processes which must be performed prior to beginning the normal flow of activities. The work order control record ( [ WO.CONTROL ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL) ) must be setup so that the appropriate default and general ledger account number information is available to other procedures. The manufacturing calendar ( [ MC.CONTROL ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL/INV-CONTROL-1/CYCLE-P1/CYCLE-P1-1/INV-P1/MC-CONTROL) ) must be defined through an appropriate period to support work order scheduling. Work center records ( [ WC.E ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/COST-CONTROL/WC-E) ) must be defined so that routings may be entered. At least one routing ( [ ROUTING.E ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL/INV-CONTROL-1/COST-P2/COST-P1/ROUTING-E) ) must be defined for use in work order entry. Employee records ( [ EMP.E ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/COST-CONTROL/WC-E/WC-E-1/EMPTIME-E1/EMPTIME-E2/EMP-E) ) must be entered if you intend to post labor against work orders. 

**Flow of Activities**  
The flow of processing for the production module begins with the entry of the work order in the [ WO.E ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-E) procedure. The work order status may be set to "New", "Opened" or "Released" and will determine what your next step in the process may be. Setting the status to "New" basically sets up a work order for future processing and drives component demand based on the current bill of material for the assembly. The "Opened" status causes a work order bill of material (WOBOM) to be created from the current bill of material record for the assembly. In this status the bill of material may be modified if desired with the [ WOBOM.E ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-E/WOBOM-E) procedure, and component demand is driven based on the work order bill of material instead of the current engineering bill of material. The "Released" status causes a picking list (PICKER) to be created based upon either the engineering bill of material, if the prior status was "New", or the work order bill of material if the prior status was "Opened". After this step the component demand is driven by the picking list. If you wish you may also modify the contents of the picking list with the [ PICKER.E1 ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-CONTROL-1/PICKER-E1) procedure. Work orders may be deleted at any time prior to performing the material pull.   
  
Once the work order has been released you can print the work order traveler with [ WO.R1 ](WO-R1/README.md) and the picking list with [ PICKER.R1 ](PICKER-R1/README.md) . If desired you may also print individual labels for each assembly with [ WO.L1 ](WO-L1/README.md) and for each component part to be pulled with [ PICKER.L1 ](PICKER-L1/README.md) . The printed work order and picking list are then sent to the stockroom to be kitted. After the stockroom has kitted the materials you may relieve the inventory balances for each component with the [ PICKER.E2 ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/SO-E-2/INV-Q/INV-Q-1/PICKER-E2) procedure which will set the status of the work order to "Pulled" and load the total work order quantity into the first operation of the routing.   
  
The next step occurs when procesing on the work order is to begin. You should first enter a shop transaction with [ ST.E ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/COST-CONTROL/WC-E/WC-E-1/EMPTIME-E1/EMPTIME-E2/EMPTIME-E/BAR-CONTROL/BAR-CONTROL-1/ST-E6/ST-E) or [ ST.E2 ](ST-E2/README.md) to move the work order quantity to the next step on the routing which will set the work order status to "Started". This approach assumes that the first step on the routing was kitting. From this step forward until completion of the work order, the work order is said to be in process. Movements from one operation to another should be made with the [ ST.E ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/COST-CONTROL/WC-E/WC-E-1/EMPTIME-E1/EMPTIME-E2/EMPTIME-E/BAR-CONTROL/BAR-CONTROL-1/ST-E6/ST-E) or [ ST.E2 ](ST-E2/README.md) procedure as required, and labor should also be posted on a regular basis with [ LABOR.E ](LABOR-E/README.md) , [ LABOR.E2 ](LABOR-E2/README.md) or by using the job start and end procedures [ EMP.E6 ](EMP-E6.htm) and [ EMP.E7 ](EMP-E7.htm) . You may enter shop movements and labor transactions within the same procedure with [ SL.E ](SL-E.htm) if your mode of operation is such that these occur at the same time. You may also need to make inventory transactions with [ IT.E ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-E/IT-E) to fill shortages. Moving a quantity of a component part which is shown as short into the work order will automatically reduce the shortage by the quantity moved.   
  
Once the work order is completed, or partially completed you must enter work order completion transactions to move the finished products out of the work order and into the appropriate inventory location. This is done with the [ ST.E3 ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/COST-CONTROL/WC-E/WC-E-1/EMPTIME-E1/EMPTIME-E2/EMPTIME-E/BAR-CONTROL/BAR-CONTROL-1/ST-E7/ST-E3) , [ ST.E4 ](ST-E4/README.md) or [ SL.E2 ](SL-E2.htm) procedures. If a completion was entered in error it may be reversed with the [ ST.E5 ](ST-E5/README.md) procedure. After all of the items have been completed the work order status will be set to "Closed". If the full quantity of the work order will not be completed you may close the work order manually with the [ WO.E ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-E) procedure.   
  
After a work order is closed you may continue to post labor transactions with [ LABOR.E ](LABOR-E/README.md) , material adjustments with [ WOMATL.E ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-CONTROL-2/WOMATL-E) , and outside processing adjustments with [ WOOP.E ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-CONTROL-2/WOOP-E) . It is only after you set the status of the work order to "FINAL" that you may no longer post adjustments. The work order may be finalized manually with [ WO.E2 ](WO-E2/README.md) or automatically with the [ WO.P3 ](WO-P3/README.md) batch process. When a work order is finalized the system calculates and posts cost variances. If you are maintaining inventory at average cost a single work order variance is calculated for the value not consumed by the completion of the assemblies. For standard cost the variances calculated include material, labor, outside processing, fixed and variable overhead, and material overhead. You also have the option of posting variance to date figures for work orders with the [ WO.P4 ](WO-P4/README.md) batch process. This allows you to take the accumulated variances out of work in process on a regular basis, usually monthly, rather than letting the amounts remain until the order is finalized.   
  
At some point in time it may be appropriate purge some of the older work order
and transaction records from the system. This is done with the appropriate
purge procedures.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />