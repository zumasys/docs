##  Recurring AR Entry (ARR.E)

<PageHeader />

**Form Details**  
[ Header ](ARR-E-1/README.md)   
[ Line Items ](ARR-E-2/README.md)   
[ Ship Address/Credit Card ](ARR-E-3/README.md)   
[ Change History ](ARR-E-4/README.md)   

**Purpose**  
The ARR.E procedure is used to enter or update recurring entries in the AR module. All information which is needed to create an AR record is entered, along with a series of dates on which the recurring entry will generate that AR item. The selected dates must fall within a valid and/or open fiscal period in order for an AR record or invoice to be generated during the posting process, [ ARR.P1 ](../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/AR-E-4/AR-F2/ARR-P1) .   
  
The header screen relates primarily to control information about the
particular record. For memo or other miscellaeous billings, the amount being
invoiced or credited may be entered in the miscellaneous charges area, and the
second detailed data entry screen need never be accessed. The second screen is
for detail entry of part information. The third screen is for entering a
shipping address for delivery of the item or service. The default shipping
address from the customer record will automatically load or you can select an
alternative from the list of shipping addresses stored with the customer
record.  
  
On the header the billing dates can be scheduled by supplying the parameters
in the Automatic Dates section. If you do not use the automatic option of
scheduling you may specify the dates manually by entering each date on which
you want a billing to be generated. If there are entries in this field they
will take precedence over the automatic option settings. Even after the dates
in this field have been exhausted the automatic settings will not be used.  
  
  

**Frequency of Use**  
As required.

**Prerequisites**  
Entry of valid customers ( [ CUST.E ](../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/CUST-E) ). Entry of valid general ledger account numbers ( [ GLCHART.E ](../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E) ). Entry of part numbers if they are to entered ( [ PARTS.E ](../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/PARTS-E) ). 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />