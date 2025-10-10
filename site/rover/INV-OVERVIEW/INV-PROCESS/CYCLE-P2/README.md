##  Post Cycle Tags to Inventory (CYCLE.P2)

<PageHeader />

**Form Details**  
[ Form Details ](CYCLE-P2-1/README.md)   

**Purpose**  
The CYCLE.P2 procedure is used to post Cycle tag records to inventory. This
procedure will select all cycle records with a status of 'C' for counted or
'V' for voided. Please note, that a count quantity of zero is used on voided
tags. If any records for the selected cycle date have a status of 'N' for new,
an error message will be displayed, and processing will stop without posting
any records.  
  
Innventory transaction (IT) records are created for each part and inventory
combination found in the cycle records selected. At the same time, the unit
cost and starting quantity are loaded into the Cycle record for permanent
storage and reporting.

**Frequency of Use**  
This procedure should be run daily, after the cycle count has occurred.

**Prerequisites**  
The cycle count for the selected date must have been done and the counted entered through [ CYCLE.E ](../../INV-ENTRY/CYCLE-E/README.md) . It is also highly recommended that the Cost Variation report ( [ CYCLE.R3 ](../../INV-REPORT/CYCLE-R3/README.md) ) be run to get a preview of what effect the posting will have. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />