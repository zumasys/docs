##  Shop Transaction Listing for a Work Order (ST.R2)

<PageHeader />

**Form Details**  
[ Form Details ](ST-R2-1/README.md)   

**Purpose**  
The ST.R2 procedure is used to create a shop transaction listing for a
specific work order. The records included in the report are sorted by date and
transaction number.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Trans#** The number of the shop transaction.  
**Trans Date** The date on which the transaction occurred.  
**Quantity** The quantity moved by the transaction.  
**From Oper** The number of the operation in the routing that the assemblies
were moved from.  
**From Work Center** The name of the work center the assemblies were moved
from.  
**To Oper** The number of the operation in the routing that the assemblies
were moved to.  
**To Work Center** The name of the work center the assemblies were moved to.  
**To Invloc** The inventory location the assemblies were moved to if the
transaction was for a work order completion.  
**To Work Order** The number of the work order into which the assemblies were
completed if the inventory location is a work in process location.  
**Inv Trans#** The number of the inventory transaction record (if any) create
as a result of the shop transaction.  
**Reversal of Tran** s If the shop transaction was created as a reversal to an
existing shop transaction then the number of the shop transaction reversed is
printed.  
**Reversed by Tran** s If the shop transaction was reversed then the number of
transaction that did the reversal is printed.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />