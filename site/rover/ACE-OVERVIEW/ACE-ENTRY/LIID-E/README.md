##  Last Item ID Entry (LIID.E)

<PageHeader />

**Form Details**  
[ Form Details ](LIID-E-1/README.md)   

**Purpose**  
The LIID.E procedure is used to set counters for files on the system which
assign record ID's sequentially. The first field in this file contains the
last record ID used. The next time a record ID is assigned, this record is
read, one (1) is added to the number and the record is written back to the
LIID file.  
  
To determine the name of the file and the LIID record name, consider the procedures which update or report on the data. For example, if you wish to create a starting number for sales orders, the file name is "SO". This is known because the data entry procedure for sales orders is " [ SO.E ](../../../MRK-OVERVIEW/MRK-ENTRY/SO-E/README.md) ". If you wish to set a starting number for Accounts Receivable invoices, use the file name "AR", since " [ AR.E ](../../../AR-OVERVIEW/AR-ENTRY/AR-E/README.md) " is the procedure used to update invoices.   
  
Additionally, the second field in this file contains a maximum counter. This
is used for transaction-oriented files to keep the size of the number assigned
to a pre-defined minimum. For example, if this field is set to 9999, when the
record ID counter reaches that number, the next number to be assigned will be
1, effectively starting the sequence over. Be careful not to use this feature
when unique record numbers are important such as invoices. It should be noted
that if the counter reverts to one (1), the system will check to ensure that
no existing record will be overwritten.

**Frequency of Use**  
Generally, this need only be done when the system is initially installed. If a
mistake is made and a change is done after there are records present in the
file, the system will verify that any new record ID's which are assigned will
not conflict with existing records.

**Prerequisites**  
None.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />