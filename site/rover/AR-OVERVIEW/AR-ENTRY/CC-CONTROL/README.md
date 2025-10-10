##  Credit Card Control (CC.CONTROL)

<PageHeader />

**Form Details**  
[ Form Details ](CC-CONTROL-1/README.md)   

**Purpose**  
This control procedure is used to define the settings used for automated
credit card processing. You select one of the credit card processing gateway
providers in the "Service Provider" field and enter the "Merchant Id" that
they have assigned to you. Depending on the provider selected, you will also
need to enter some combination of "Password", "URL", "Digital Key Path", and
"API Version". (See the individual field helps to determine which fields
apply).  
  
You also specify which types of credit card you will accept, users who are
allowed to see the numbers of stored cards, and if card keys, provided by the
gateway, are to be stored instead of the actual credit card numbers.  
  
Note: You will also need to associate credit card types with the general ledger account numbers in the [ MRK.CONTROL ](../../../MRK-OVERVIEW/MRK-ENTRY/MRK-CONTROL/README.md) procedure. 

**Frequency of Use**  
At system setup or when the gateway provider is changed.

**Prerequisites**  
Setup an account with the gateway provider and obtain the required
credentials.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />