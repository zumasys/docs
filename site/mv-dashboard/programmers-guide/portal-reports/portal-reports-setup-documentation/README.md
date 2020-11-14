# Portal Setup Documentation

<PageHeader />

## Portal Sales Report Setup

This setup process identifies the fields necessary for deriving sales, gross profit, and margin numbers.  It allows for sales numbers to be broken out by sales person and, if applicable, by branch and/or region.

**Sales File Account** – Multi-value systems normally have multiple accounts where data may reside. The sales reports will be driven by a file of sales.  This field needs the name of the account where that file resides.

**Name of Sales File** – The name of the file containing the sales information.

**Date of Sale Dict Name** – The name of the dictionary item in the sales file that contains the date the sale was complete.

**Month of Sale Dict Name** – The name of the dictionary item in the sales file that displays the numeric value of the month the sale was completed.  If the system doesn’t have this dictionary item, there should be one created using the Date of Sale Dict Name as a guide.

**Year of Sale Dict Name** – The name of the dictionary item in the sales file that displays the 4 digit year the sale was completed.  If the system doesn’t have this dictionary item, there should be one created using the Date of Sale Dict Name as a guide.

**Amount of Sale Dict Name** – The name of the dictionary item in the sales file that contains the total amount of the sales transaction.  This dictionary

**Cost of Sale Dict Name** – The name of the dictionary item in the sales file that contains the cost of the sales transaction.  This is used for determining gross profit and margin.  If this information is not available in the system, the field should be left blank, disabling reports associated with gross profit and margin.

**Salesman Dict Name** – The name of the dictionary item in the sales file that contains the primary salesman on the transaction.  Most systems will have a salesman code in the sales file and another file that contains the actual names of the salesmen.  This dictionary item should be one that displays the actual name. 

**Branch Dict Name** –  The name of the dictionary item in the sales file that contains the branch being credited with the transaction.  Most systems will have a branch code in the sales file and another file that contains the actual names of the branches.  This dictionary item should be one that displays the actual name.  This field only applies if sales can be broken out by a branch. 

**Region Dict Name** –  The name of the dictionary item in the sales file that contains the region being credited with the transaction.  Most systems will have a region code in the sales file and another file that contains the actual names of the regions.  This dictionary item should be one that displays the actual name.  This field only applies if sales can be broken out by a region. 

**Go** – No validation is made on Portal Sales Report Setup fields until this button is clicked.  When validating, checks are made for:

* Valid account
* Valid file name in the account
* Existence of each of the dictionary names entered
* Salesman Dict Name looking to another file for the actual name of the salesman.  An ignorable warning is issued if that is not the case.
* Branch Dict Name looking to another file for the actual name of the branch.  An ignorable warning is issued if that is not the case.
* Region Dict Name looking to another file for the actual name of the region.  An ignorable warning is issued if that is not the case.

## Portal AR Report Setup:

This setup process identifies the fields necessary for evaluating account receivables.  It breaks out statistics by amounts, aging categories, percentages, and periods for comparison purposes.  It also identifies by customer when viewing most amounts owed, most days aged, and accounts with significant changes in payment patterns.

**AR File Account** – The AR reports will be driven by a file of receivables or invoices.  This field needs the name of the account where that file resides.

**Name of AR File** – The name of the file containing the receivables with amounts and payment information.

**Due Date Dict Name** – The name of the dictionary item in the AR file showing the due date of the receivable.

**Date Paid Dict Name** – The name of the dictionary item in the AR file showing the date the receivable was paid.

**Invoice Amount Dict Name** – The name of the dictionary item in the AR file that contains the original amount owed.

**Remaining Balance Dict Name** – The name of the dictionary item in the AR file that contains the remaining balance.

**Customer Dict Name** – The name of the dictionary item in the AR file that contains the customer.  Most systems will have a customer code in the AR file and another file that contains the actual names of the customers.  This dictionary item should be one that displays the actual name. 

**Go** – No validation is made on Portal AR Report Setup fields until this button is clicked.  When validating, checks are made for:

* Valid account
* Valid file name in the account
* Existence of each of the dictionary names entered
* Customer Dict Name looking to another file for the actual name of the salesman.  An ignorable warning is issued if that is not the case.

## Portal AP Report Setup

This setup process identifies the fields necessary for evaluating account payables.  It breaks out statistics by amounts, aging categories, and percentages.

**AP File Account** – The AP reports will be driven by a file of payables.  This field needs the name of the account where that file resides.

**Name of AP File** – The name of the file containing the payables with amounts and payment information.

**Due Date Dict Name** – The name of the dictionary item in the AP file showing the due date of the payable.

**Date Paid Dict Name** – The name of the dictionary item in the AP file showing the date the payable was paid.

**Invoice Amount Dict Name** – The name of the dictionary item in the AP file that contains the original amount owed.

**Remaining Balance Dict Name** – The name of the dictionary item in the AP file that contains the remaining balance.

**Go** – No validation is made on Portal AP Report Setup fields until this button is clicked.  When validating, checks are made for:

* Valid account
* Valid file name in the account
* Existence of each of the dictionary names entered

<PageFooter />
