##  Generate Recurring AR items (ARR.P1)

<PageHeader />

**Form Details**  
[ Form Details ](ARR-P1-1/README.md)   

**Purpose**  
The ARR.P1 procedure is used to create AR records for all eligible recurring accounts receivable items. An ARR record is eligible if an invoice is due to be created for a date prior to the selected cutoff date and the date fall within a valid and/or open fiscal period. If the date does not fall within a valid fiscal period, an error message will appear on the report. In order to generate future AR records against the recurring record, the recurring record must be updated via [ ARR.E ](../../AR-ENTRY/ARR-E/README.md) . If you do not wish to generate future AR records, you can close the recurring record in [ ARR.E ](../../AR-ENTRY/ARR-E/README.md) by changing the status to "C".   
  
When executed, the open balance in the CUST file is updated, as well as ARREG
records which are created for all amounts and account numbers.

**Frequency of Use**  
Generally, this process is run on a monthly basis. However, it may be run more
frequently if required.

**Prerequisites**  
Recurring accounts receivable records must have been created through the [ ARR.E ](../../AR-ENTRY/ARR-E/README.md) procedure. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />