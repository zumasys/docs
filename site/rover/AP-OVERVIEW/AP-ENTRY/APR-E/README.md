##  Recurring AP Entry (APR.E)

<PageHeader />

**Form Details**  
[ Header ](APR-E-1/README.md)   
[ Line Items ](APR-E-2/README.md)   

**Purpose**  
The APR.E procedure is used to enter master recurring accounts payable records
into the system. These records are for recurring charges which are occur on a
regular basis for a constant amount, such as lease payments. The procedure
consists of two screens. One contains the header information such as vendor,
terms, freight and miscellaneous charges. The other contains detail
information about the products or services for which you are going to be
billed, such as part number, standard and actual cost and the distribution of
the amounts over the general ledger account numbers being charged.  
  
Sufficient information is entered to enable the automatic creation of accounts payable invoices through the [ APR.P1 ](../../../../../rover/AP-OVERVIEW/AP-PROCESS/APR-P1) process. In addition to the standard, accounts payable information, you may select the start date and number of invoices which will be created. These dates will be loaded into the header portion of this screen and is available to be modified as needed. 

**Frequency of Use**  
As required.

**Prerequisites**  
Initialization of the Accounts Payable control record ( [ AP.CONTROL ](../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL) ), and entry of the vendor and terms records to be referenced. If the items are for inventoried parts, the part number must exist on the Parts file and the inventory locations must exist on the Invloc file. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />