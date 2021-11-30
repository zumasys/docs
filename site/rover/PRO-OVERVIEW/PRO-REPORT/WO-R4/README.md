##  Work Order Dispatch Listing (WO.R4)

<PageHeader />

**Form Details**  
[ Form Details ](WO-R4-1/README.md)   

**Purpose**  
The WO.R4 procedure is used to create work order dispatch lists. The user may
specify that all work centers be printed or only specified work centers. The
user also sets the time period through which the work orders are to be listed.
The report is listed in work order priority, work center and date sequence
with page breaks on work center. The report is used to inform the personnel at
the operation what jobs they will be expected to process and when.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**WO ID** The number of the work order.  
**Part** The part number of the item being built as defined in the parts
master.  
**Model Number** The model number of the assembly being built.  
**Operation Start Date** The date on which processing for the work order is to
begin.  
**Operation Complete Date** The date on which processing for the work order is
to be completed.  
**Order Due Date** The date on which the work order is scheduled to be
completed through all operations.  
**Current Quantity** The number of assemblies currently at the work center.  
**Balance to Complete** The number of assemblies yet to be completed through
the work center including items which have not yet reached the work center.  
**Setup Hours** The number of hours scheduled for setup.  
**Run Hours** The number of hours scheduled for processing the assemblies.  
**Previous Oper No** The number of the operation scheduled on the routing
prior to the current operation.  
**Previous Oper Work Center** The name of the work center associated to the
previous operation.  
**Next Oper No** The operation number of the step in the routing which follows
the current step.  
**Next Oper Work Center** The name of the work center associated to the next
operation.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />