##  AP Check Entry (CHECKS.E)

<PageHeader />

**Form Details**  
[ Check ](CHECKS-E-1/README.md)   
[ Commission ](CHECKS-E-2/README.md)   
[ Change History ](CHECKS-E-3/README.md)   

**Purpose**  
The CHECKS.E procedure is used to enter hand checks into the system to pay
invoices in the AP file. This procedure may also be used to pay non-AP related
expenses by entering the expense account numbers rather than the AP voucher
numbers. The procedure consists of one screen and is keyed by the check
number. This procedure can also be used to delete checks from the system and
re-open the AP items originally paid.  
  
When the record is saved, you will be given an option to print the check on a laser based check form if the [ AP.CONTROL ](../AP-CONTROL/README.md) record has been set-up to allow this function. However, you can only do so if paying 13 a/p and/or expense items or less.   
  
When entering the amounts, it is important to remember that the check amount
plus discount amount must equal the total of all AP items being paid and/or
expense items being paid. If the check is being entered for AP records created
referencing a foreign exchange rate, and if the check amount is greater than
the AP item(s) due to exchange rate differences, then the difference should be
placed in the Expense Amount with an appropriate account number. If the check
amount is less than the AP item(s) due to exchange rate differences, then the
difference should be placed in the Discount Amount with an appropriate account
number.  
  
When filed, the AP records are updated with the check information and APREG
(AP register) records are created.  
  
CHECKS.E can also be used to create prepayment checks. No AP ID's or expense items may be specified in this case. Upon filing, the AP trade account and check amount will be loaded into the expense section of the check and a debit record will be added in the accounts payable file to indicate that a prepaid amount is available for application against future, or current invoices. This AP record will reference the AP trade account number as both the AP account and the distribution account. This record can be included in a standard check run, or applied directly using a zero amount check in CHECKS.E. In [ AP.CONTROL ](../AP-CONTROL/README.md) , there is a field to define the AP trade account that will be posted to the debit AP record. If no account number is entered in this field in [ AP.CONTROL ](../AP-CONTROL/README.md) , the account number referenced in the AP Acct# field will be used.   
  
To 'net' an invoice against a debit memo, a check amount of zero (0) may be
entered and the AP record numbers entered which create a balance of zero. A
zero amount check can be entered without a check number by entering the letter
"A" in the Check number field. Upon filing, a sequential number will be
assigned to the zero check, prefixed with "A".  
  
You have the ability to delete a check record in checks.e. If you delete
records from a prior fiscal/calendar period and you re-run your check reports
for those periods, the reports will not match the reports you ran earlier for
those periods.

**Frequency of Use**  
As required to process manual checks.

**Prerequisites**  
Initialization of the Accounts Payable control record ( [ AP.CONTROL ](../AP-CONTROL/README.md) ), and entry of the vendor and terms records to be referenced. The invoices to be paid must exist as AP records. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />