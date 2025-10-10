##  Inventory Transfer Between Accounts (IT.E5)

<PageHeader />

**Form Details**  
[ Form Details ](IT-E5-1/README.md)   

**Purpose**  
The IT.E5 procedure is used to enter multiple inventory transactions to record
the movement of materials from one data account to another. The operator
enters the from and to accounts and the from and to locations that will apply
to all parts. Then the part numbers, quantities, lot numbers and bin numbers
(if applicable) are entered.  
  
When the operator's entry is filed the system creates two Inventory Transaction (IT) records for each part recording the pertinent information about the transaction. The first transaction for the part moves it from the sending account and from location to the default transfer location specified in [ INV.CONTROL ](../INV-CONTROL/README.md) . The second transaction for the part moves it into the to location in the receiving account. At the same time it updates the inventory balances in the Inventory file (INV) for the from and to accounts and locations and inventory register records (INVREG). For average cost method, the part's unit cost in the sending acount will be used to update the average cost for the part in the receiving account.   
  
If the "Negatives OK" flag in the associated INVLOC record for a given
transaction is set to "N" then the system will not allow the transaction to be
processed if the transaction will result in a negative at the from location.

**Frequency of Use**  
As required.

**Prerequisites**  
Entry of valid inventory locations ( [ INVLOC.E ](../INVLOC-E/README.md) ) in both from and to accounts, and setup of transfer locations in both accounts on [ INV.CONTROL ](../INV-CONTROL/README.md) . 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />