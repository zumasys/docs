##  Account Numbers Missing from GLRPT (GLCHART.R3)

<PageHeader />

**Form Details**  
[ Form Details ](GLCHART-R3-1/README.md)   

**Purpose**  
The GLCHART.R3 procedure is used to print a listing of account numbers that
are not used in a specified report (from GLRPT). The screen will prompt for
the report you wish to search and whether you want to use type "B" (balance
sheet) or "I" (income statement) accounts. This is required since it is not
known which type the report is. The user also has the option to include
inactive account numbers.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Account** The chart of account number that was not found in the selected
GLRPT  
**Description** The description of the account, as read from the GLCHART  
**D/C** Displays the debit/credit flag found in the GLCHART  
**B/I** Displays the balance/income flag found in the GLCHART  
**Inactive** Shows if the account number is set to  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />