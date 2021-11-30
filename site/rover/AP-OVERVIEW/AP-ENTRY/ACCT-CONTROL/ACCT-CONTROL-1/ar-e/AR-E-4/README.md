##  A/R Entry (AR.E)

<PageHeader />

##  Ship Address/Credit Card

![](./AR-E-4.jpg)

**Ship Address** This field contains the ship name and street address for this invoice. If this record was posted from a shipment, then the address was loaded from that shipment record. There is a lookup from this field to display and selecting one of the shipping addresses that have been defined for the customer in [ CUST.E ](../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/CUST-E) . If this field is empty, then customer address will print as the ship address in [ AR.F2 ](AR-F2/README.md) .   
  
**Ship City** This field contains the ship city which will print on the
invoice form.  
  
**Ship State** This field contains the ship state which will print on the
invoice form. It is also used for sales tax reporting.  
  
**Ship Zip** This field contains the ship zip code which will print on the
invoice form.  
  
**Ship Country** This field contains the ship to country which will print on
the invoice form.  
  
**Credit Card Number** If all or part of the payment is being made with a
credit card enter each credit card to be billed. Card numbers that were
entered previously will only show the last four digits of the card number for
security purposes.  
  
**Creditcard Type** Displays the type of the associated credit card.  
  
**Cardholder Name** Enter the name of the person that appears on the credit
card.  
  
**Creditcard Exp** Enter the expiration month and year for the credit card in
the format mmyy. For example, March of 2006 would be entered as 0306.  
  
**Creditcard Code** If available you may enter the 3 or 4 digit card
verification value usually found on the back side of the credit card. This
provides an additional level of security and typically a lower transaction
cost from your credit card service. Codes that were entered previously will
appear as "***" to prevent other users from seeing this information.  
  
**Creditcard Avs** If this box is checked the customer address was verified
against the credit card. This provides an additional level of security and can
reduce the charges for the transaction from the credit card service.  
  
**Credit Card Address** If the associated AVS box is checked the street
address in this field will be used for address verification. If the credit
card was loaded from the customer master record the address will also be
loaded from there. Otherwise, the address is loaded from the ship address.
Note: Only the first line of the street address (i.e. 123 Main Street) should
be entered into this field. Do not include the city, state or country.  
  
**Credit Card City** Enter the billing city for the associated credit card.  
  
**Credit Card State** Enter the billing state for the associated credit card.  
  
**Credit Card Zip** If the associated AVS box is checked the zip code in this
field will be used for address verification. If the credit card was loaded
from the customer master record the zip code will also be loaded from there.
Otherwise, the zip code is loaded from the ship address zip code.  
  
**Credit Card Country** Enter the billing country for the associated credit
card.  
  
**Creditcard Amt** Enter the amount to be charged to each credit card.  
  
**Creditcard Tran** Displays the credit card transaction number issued by the
credit card processing company for the associated credit card.  
  
**Credit Card Error** A check in this box indicates that the associated credit
card transaction was posted with an warning. To see the text from the error
position the cursor on the Credit card number and click the "View Error"
button.  
  
**Total credit card** Displays the total of all the credit card amounts
entered.  
  
**View Card** If you have been authorized to view credit card numbers you may
click this button to view the complete credit card number.  
  
**View Error** If the Error check box is checked for a transaction you may
view the error message by placing the cursor in the credit card number field
of the associated transaction and clicking this button.  
  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />