##  Parts Deletion Process (PARTS.P2)

<PageHeader />

**Form Details**  
[ Form Details ](PARTS-P2-1/README.md)   

**Purpose**  
The PARTS.P2 procedure deletes Parts Master records which have been flagged for deletion in the status field. The status field may be set by the [ PARTS.E ](../../ENG-ENTRY/PARTS-E/README.md) procedure.   
  
The procedure first selects all of the part records with the status field set
to "D". Then it checks every record in the data base which uses part numbers
to determine if the part is still in use. If the are no records using the part
number it is deleted, otherwise it is left on the Parts file unchanged. Since
the part record is not changed, the record will automatically be rechecked
when this procedure is run again. Eventually it will be deleted when the
records in the data base which reference it are purged.

**Frequency of Use**  
The frequency at which you run this procedure depends upon how often you flag
parts for deletion, and how quickly you want them removed from the data base.
The best approach is to set the process to run in a batch procedure which is
run at an appropriate interval.

**Prerequisites**  
None.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />