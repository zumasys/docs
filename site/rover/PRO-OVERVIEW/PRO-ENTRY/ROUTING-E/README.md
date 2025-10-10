##  Routing Entry (ROUTING.E)

<PageHeader />

**Form Details**  
[ Current ](ROUTING-E-1/README.md)   
[ History ](ROUTING-E-2/README.md)   
[ Change History ](ROUTING-E-3/README.md)   

**Purpose**  
The ROUTING.E procedure is used to enter new routings into the routing file
(ROUTING), change existing records and delete records from the file. The
record ID of the routing is defined by the user but in many cases is assigned
as the part number defining the assembly the routing is used on if the routing
is used exclusively for that assembly.  
  
The information contained in each record consists of operation numbers, work
centers, descriptions, crew size, and the hours pertinent to each operation
including pre-operation, post operation, setup and run hours.  
  
If desired the user may create a new routing by loading the data from an
existing record and making the appropriate changes. This is done by entering
the ID of an existing routing at the "Load Routing" prompt when creating a new
record.

**Frequency of Use**  
As required.

**Prerequisites**  
Entry of work center records to be referenced in the routing ( [ WC.E ](../WC-E/README.md) ). 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />