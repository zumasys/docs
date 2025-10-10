##  Create Cycle Count Records (CYCLE.P1)

<PageHeader />

**Form Details**  
[ Form Details ](CYCLE-P1-1/README.md)   

**Purpose**  
The CYCLE.P1 procedure is used to create Cycle tag records for all parts due
to be cycle counted on a given cycle date. This procedure will select all
inventory records with a cycle date less than or equal to the selected date
for which no cycle count is already in process. Records are written to the
Cycle file, with an assigned, sequential tag number generated from the LIID
file.  
  
The cycle date is initially assigned to the inventory file when [ INV.P1 ](INV-P1/README.md) is processed or when a new part is created in [ PARTS.E ](../../../ENG-OVERVIEW/ENG-ENTRY/PARTS-E/README.md) . The cycle date is updated in the inventory file each time the part is included in a cycle count. Please note that the cycle count must be posted via [ CYCLE.P2 ](CYCLE-P2/README.md) for the count and cycle date to be updated.   
  
There are options in this procedure to limit the number of cycle records that
are generated based on inventory location, bin number and on hand count. When
using these options, you are potentially selecting a sub-set of the number of
parts that were due to be counted on a certain day. The cycle date for the
excluded parts is not re-calculated. If, for example, 40 parts were assigned a
cycle date of 12-31-09 and 20 of those parts have a bin of A100 and 20 have a
bin of B200 and you run CYCLE.P1 for 12/31/09 for bin A100, 20 records will be
created. The next time you run CYCLE.P1 in January for all bins or for bin
B200, the 20 parts that were due to be counted on 12/31/09 will be included.

**Frequency of Use**  
This procedure should be run daily. If a day is skipped, the next time the
process is run it will select the skipped day and generate tags for both days.
Each date's records can be processed separately from that point.

**Prerequisites**  
Stratification of the ABC codes into the Parts file ( [ PARTS.P1 ](PARTS-P1/README.md) ) and assignment of the cycle dates into the Inv file ( [ INV.P1 ](INV-P1/README.md) ). 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />