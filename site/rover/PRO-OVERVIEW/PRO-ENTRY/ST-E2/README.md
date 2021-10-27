##  Shop Transaction Entry (ST.E2)

<PageHeader />

**Form Details**  
[ Form Details ](ST-E2-1/README.md)   

**Purpose**  
The ST.E2 procedure is used to enter multiple shop transactions which record
the movement of assemblies from one routing step to another. The operator
enters the work order numbers and quantities being moved, the operation the
assemblies are moving from, and the operation they are moving to.  
  
When the operator's entry is filed the system creates records in the Shop
Transaction file (ST) which records the pertinent information about each
transaction. At the same time it updates the current balance at the from and
to operations in the work order routing stored in the work order records (WO).  
  
If the balance on hand in the from operation will go negative as a result of
processing the transaction a message will appear to warn the operator of this
situation. The operator may still proceed with the transaction if appropriate.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />