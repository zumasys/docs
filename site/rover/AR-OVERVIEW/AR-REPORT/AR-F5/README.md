##  A/R E-Form Statements (AR.F5)

<PageHeader />

**Form Details**  
[ Form Details ](AR-F5-1/README.md)   

**Purpose**  
The AR.F5 procedure is used to print customer statements on blank paper with a
PDF form background. The statement of account is intended to give the customer
a complete presentation of their current account balance as of a selected cut-
off date. Invoices and credits applied after this date will not appear on the
statement.

**Frequency of Use**  
As required.

**Prerequisites**  
The aging periods and column headings must be established in the [ AR.CONTROL ](../../../../rover/AP-OVERVIEW/AP-ENTRY/CHECKS-E4/AR-CONTROL) record.   

**Data Fields**

**Statement Date** The cut-off date selected for the statement run.  
**Account Number** The customer number for which the statement is being
printed.  
**Reference** The AR item number.  
**Type** The type of AR item. (Cr Memo, Invoice, On Acct)  
**Ref Date** The date of the AR item.  
**Due Date** The date on which the AR item was due for payment.  
**Open Amount** The amount currently open on the AR Item.  
**Balance to Date** The cummulative open balance of the AR items on the report
up to and including the item on the same line.  
**Aging** The total amount due, aged over the periods as defined in the [ AR.CONTROL ](../../../../rover/AP-OVERVIEW/AP-ENTRY/CHECKS-E4/AR-CONTROL) record.   
**Total Due** The total due of all items appearing on the statement.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />