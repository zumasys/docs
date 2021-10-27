##  A/P Checks - Void or Stop Payment (CHECKS.E2)

<PageHeader />

**Form Details**  
[ Form Details ](CHECKS-E2-1/README.md)   

**Purpose**  
The CHECKS.E2 procedure is used to place checks into either a 'stop payment'
or 'void' status. Both hand and computer generated checks may be updated by
this process. The only fields which may be changed are the date and reason for
the action being taken. The reason code is user-defined and can take any
meaning required (i.e. no matter what void code is used, the mere presence of
a code indicates a void check).  
  
When a stop payment action is filed, there is not effect on the AP items
originally paid by the check. When a void check is filed, all AP items
originally paid are re-opened for payment and APREG (AP register) records are
created. There is an option to void the accounts payable items from this
procedure rather than re-opening them.

**Frequency of Use**  
As required.

**Prerequisites**  
Initialization of the Accounts Payable control record ( [ AP.CONTROL ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL) ), and entry of the vendor and terms records to be referenced. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />