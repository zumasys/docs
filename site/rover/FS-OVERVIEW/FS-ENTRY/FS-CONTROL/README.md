##  Field Service Control (FS.CONTROL)

<PageHeader />

**Form Details**  
[ General ](FS-CONTROL-1/README.md)   
[ Service Units ](FS-CONTROL-2/README.md)   
[ Service Codes ](FS-CONTROL-3/README.md)   
[ Operations ](FS-CONTROL-4/README.md)   
[ Charge Rates ](FS-CONTROL-5/README.md)   
[ Charge Back Rates ](FS-CONTROL-6/README.md)   

**Purpose**  
The FS.CONTROL procedure is used to define various tables of information that
are used in the field service procedures.  
  
The first tab contains default information such as the sales account number and cost of goods sold location, which are loaded during the entry of a field service order ( [ FSO.E ](../FSO-E/README.md) ).   
  
The second tab contains a list of all the service units available for use.
These are typically service vans or trucks.  
  
The third tab contains all of the service codes that may be referenced on a
service order. These codes determine if the work performed is charged as an
internal charge, warranty or chargeable to the customer, and also reference
the appropriate charge rate code.  
  
The fourth tab indicates all of the operations that can be coded on a service
order. These operation codes define the type of work that was performed.  
  
The fifth tab defines all of the rate codes used to determine the hourly rate
at which the corresponding work is charged.  
  
The sixth tab indicates all of the vendor numbers for which warranty
chargebacks are available, and the hourly rate they will reimburse for work
performed on their products.

**Frequency of Use**  
The entries in this procedure must be loaded prior to using any of the other
procedures in the Field Service Module. This is usually done as part of
setting up the system. The entries may be changed after that time as required.

**Prerequisites**  
The sales account number must have been defined in the GL chart of accounts ( [ GLCHART.E ](../../../GL-OVERVIEW/GL-ENTRY/GLCHART-E/README.md) ), and the cost of goods sold location must have been defined using [ INVLOC.E ](../../../INV-OVERVIEW/INV-ENTRY/INVLOC-E/README.md) . 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />