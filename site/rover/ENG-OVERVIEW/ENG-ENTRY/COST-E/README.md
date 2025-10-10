##  Product Cost Entry (COST.E)

<PageHeader />

**Form Details**  
[ Cost Elements ](COST-E-1/README.md)   
[ Change History ](COST-E-2/README.md)   
[ Attachments ](COST-E-3/README.md)   

**Purpose**  
The COST.E procedure is used to enter standard cost information for parts and
assemblies. The COST file maintains three (3) sets of standard costs; Current,
Book and Previous. Current contains the most recent information available
regarding the standard cost. The Current cost elements are what will be rolled
over into the Book cost elements when the cost rollover is run. Book costs are
what the system is currently using to value inventory and the transactions
associated with inventory processing. These are the costs which are
transmitted to the general ledger. Previous costs contain the data which was
in the Book cost elements prior to the last rollover.  
  
The procedure allows you to enter costs into both the current and book
standard fields. The ability to make entries to book standards is intended as
a means of entering the costs for new products and components prior to the
formal rollup and rollover of the current costs. If you do make a change to an
existing cost and there is activity against that item elsewhere in the system
(i.e. inventory balance, open work order) the system will not automatically
create adjustments for the change in the transaction registers. This must be
done manually within the general ledger.

**Frequency of Use**  
As required.

**Prerequisites**  
Entry of part numbers into the Parts Master ( [ PARTS.E ](../PARTS-E/README.md) ). Bills of material do not need to be entered ( [ BOM.E ](../BOM-E/README.md) ) until a cost rollup is to be performed, however their part numbers must be identified in the Parts Master. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />