##  Update Inventory with Physical Counts (PHYS.P4)

<PageHeader />

**Form Details**  
[ Form Details ](PHYS-P4-1/)   

**Purpose**  
The PHYS.P4 procedure is used to post physical tag records to inventory. This
procedure will select all records with a status of 'C' for counted or 'V' for
voided. If any records have a status of 'N' for new, an error message will be
displayed, and processing will stop without posting any records.  
  
Innventory transaction (IT) records are created for each part and inventory
combination found in the records selected. At the same time, the unit cost and
starting quantity are loaded into the physical record for permanent storage
and reporting.

**Frequency of Use**  
This procedure is run and the end of a physical inventory as a final process.

**Prerequisites**  
This procedure should be run only when all physical tags have been accounted
for and the variances on the cost variation report are correct.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />