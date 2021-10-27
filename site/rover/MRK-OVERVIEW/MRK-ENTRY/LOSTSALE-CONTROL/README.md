##  Lost Sale Control Entry Procedure (LOSTSALE.CONTROL)

<PageHeader />

**Form Details**  
[ Form Details ](LOSTSALE-CONTROL-1/README.md)   

**Purpose**  
The LOSTSALE.CONTROL procedure is used to define the valid codes and descriptions that can be used to track lost sales. These codes are user defined and can be up to six characters. Examples of reasons that sales were lost might be lack of inventory or that you were under-bid on an order. Lost sales can be tracked in the [ LOSTSALE.E ](LOSTSALE-E/README.md) entry procedure.   
  
It is important that these entries be consistent over time. You should not
delete a code or change its meaning unless it is not currently being
referenced in the system.

**Frequency of Use**  
These codes are usually entered when the system is first being setup since
they are required before some other procedures may be used. After the initial
setup it is used as required to add new codes.

**Prerequisites**  
None.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />