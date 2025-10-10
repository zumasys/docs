##  Update Quick Lists (SO.P6)

<PageHeader />

**Form Details**  
[ Form Details ](SO-P6-1/README.md)   

**Purpose**  
The SO.P6 procedure is used for automatically populating the quicklists that are defined in the customer master ( [ CUST.E ](../../../AR-OVERVIEW/AR-ENTRY/CUST-E/README.md) ). Quicklists are used in the order entry procedure ( [ SO.E ](../../MRK-ENTRY/SO-E/README.md) ) and on the eCommerce web site to display lists of items that a customer commonly purchases.   
  
The procedure populates the lists by accumulating all of the part numbers from
prior sales orders. You may control how far back in the history the procedure
should check by specifying a start date. Only those orders placed on or after
the start date will be included.  
  
More than one quicklist may be maintained for a customer. You specify which quicklist to update by specifying the list name. Only valid names defined in the [ WEB.CONTROL ](../../../ACE-OVERVIEW/ACE-ENTRY/WEB-CONTROL/README.md) procedure may be used. 

**Frequency of Use**  
The frequency with which this procedure is runs depends on how current you
want the quicklist entries to be. A common option is to run this process every
night in the nightly batch process.

**Prerequisites**  
Definition of valid quicklist names in [ WEB.CONTROL ](../../../ACE-OVERVIEW/ACE-ENTRY/WEB-CONTROL/README.md) . 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />