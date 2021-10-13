## A/R Entry (AR.E)
<PageHeader />

## Header

![](./AR-E-1.jpg)

| **AR.Id**|  This is the AR record ID. If you wish to create a new record,
you may either assign your own number, or leave this field null and the system
will assign a new number when the record is filed.

-  
**Load**|  If you wish to create a new invoice from an existing invoice, enter
the existing AR id here. This function can only be used with new records.

**Co Code**|  Enter the company code the invoice should be applied to. The
company code must be predefined in the CO.CONTROL procedure. If you only one
company code exists it will automatically be inserted into this procedure.

**Cust**|  Enter the number of the customer for whom you are entering this AR
record. If you do not
know the customer number, there is an option in the help menu for this prompt
which allows
you to select the customer by name. The Customer name will display after entry
of the number for verification.

**Cust Name**|  The name of the customer as read from the Cust file. This
field is for display only.

**Source Doc**|  This is the source document from which this AR item was
generated. For items created from shipments, this will be the shipment record
ID. For items created from RMA receipts this will be the RMAREC record ID.

**Status**|  This field represents the status of this AR item. O = open P =
paid in full. If you wish to close an open invoice, you can change the status
to "P" provided no payments have been applied to this invoice. When the record
is saved, all amounts (invoice, misc. freight, distribution, etc.) will be
changed to zero and register records (i.e. ARREG records) will be created. The
date that will be posted to these ARREG records and ultimately the g/l will be
the date in the REGISTER DATE field on the header tab. SALES and COMM records
will also be generated to reflect this change if line items are present on the
invoice and you have set-up the [ACCT.CONTROL](../ACCT-CONTROL/README.md) procedure to
create SALES and/or COMM records from AR.E.

You cannot change the status to "O" on a paid invoice. To re-open the invoice,
you must adjust the invoice amount plus the related amounts like freight, tax,
etc. When the record is saved the status will be changed for you.

**Balance**|  This is the total balance of this AR item.

**Print Date**|  Contains the last date on which the invoice was printed. It
is set by the procedures that print the invoices. It may be modified if
required.

**Invoice Date**|  Enter the invoice date for this item. This date will be
used for the aging report.

**Register Date**|  Enter the date that the AR Register should be updated for
this transaction. This will determine when interface to the G/L will occur. In
[AR.CONTROL](../AR-CONTROL/README.md), there is an option to load in the invoice date
as the register date. If this option is not selected, the current date will be
loaded into this field for you.

If this date is changed on an existing record, the date on the existing ARREG
records will not be changed. Use [AR.E2](../AR-E2/README.md) to change the existing
register dates for this invoice. This date will be used on any new ARREG
records that are created to reflect an amount or account number change.

**Invoice Amt**|  The total invoice amount due from the customer. This is
before discounts, and inclusive of items such as freight, miscellaneous
charges and tax.

**PO Number**|  Enter the customer's purchase order number.

**AR Acct#**|  The Accounts Receivable account number. This is defaulted from
the [AR.CONTROL](../AR-CONTROL/README.md) record and may be changed if desired.

**Freight Amt**|  If freight is being added to the invoice, enter the amount.

**Freight Taxable**|  Check this box if the freight is taxable.

**Freight Acct**|  Enter the general ledger account number used for freight
out. This number will default from the [AR.CONTROL](../AR-CONTROL/README.md) record and
can be changed if required.

**Ship Via**|  The ship via for this customer.

**Hold Flag**|  If this item is to be held pending some action, enter any code
you wish in this field. (e.g. 'C' for credit hold).

**Hold Date**|  The date which the hold flag was entered. This is for
information.

**Currency Code**|  If a foreign currency controls this invoice, enter the
currency code here. That will load the exchange rate defined in
[CURRENCY.CONTROL](../CURRENCY-CONTROL/README.md). If this invoice is from a shipment,
the currency code will be loaded in from the sales order.

**Exchange Rate**|  This is the exchange rate associated with the currency
code as defined in [CURRENCY.CONTROL](../CURRENCY-CONTROL/README.md). It can be changed
as needed.

**Terms Code**|  Enter the terms code used for this customer. This code
defaults from the customer file and can be changed as required.

**Due Date**|  This is the due date when payment is to be expected. Originally
it is calculated based upon the terms discount days or net days if no discount
is specified. It can be changed it required.

**Discount Pct**|  Enter the terms discount percent used for the terms code
specified. This percent automatically loads from the Terms file.

**Discount Amount**|  This is the discount amount which would be allowed if
the invoice is paid by the due date. This is calculated based upon the invoice
amount and discount percent.

**Discount Acct#**|  This is the general ledger account number used for
discounts allowed.

**Resale#**|  The resale number for this customer if any or all of the order
is non-taxable.

**Tax.Code**|  The sales tax code for the associated sales tax percent. This
field is originally defaulted from the customer file and may be changed as
required. The code must exist in the STAX file.

**Tax.Pct**|  The sales tax percent for the associated sales tax code.

**Tax.Amt**|  The sales tax amount for the associated sales tax code.

**Rep#**|  The number of the sales rep(s) receiving credit for this order.

**Rep Ord%**|  The percent of the order credited to each sales rep specified.
If only one rep is listed and they are to receive credit for the entire order,
enter 100. If you wish to split the order among two or more reps, enter the
percent of the order each receives.

**Misc Amount**|  Enter any miscellaneous amounts which are being added to
this invoice. This amount can be items such as sales tax, special handling
fees, etc. Additionally, for non-part related charges, you may enter the
entire invoice amount here and avoid using the second (line item) screen.

**Misc.Taxable**|  If this miscellaneouse charge is taxable, enter a 'Y',
otherwise enter an 'N'.

**Misc Acct#**|  Enter the general ledger account number which will be
credited for the miscellaneous amount.

**Misc Desc**|  This field will default to the description of the associated
account number, as found in the
GLCHART file. It may be overridden, if desired, to a more specific
description.

**Notes**|  Any notes you wish to enter which pertain to this AR item.

**Cash#**|  The ID of the cash transaction which posted the application
amount.

**Checks**|  The list of checks, or other miscellaneous applications made
through the [CASH.E](../CASH-E/README.md) procedure. These items are for display only
and cannot be changed.

**Dates**|  The post dates of the checks.

**Amounts**|  The application (check) amounts.

**Total.Sales.Tax**|  The total sales tax, as calculated by utilizing the
sales tax codes. This field may not be updated directly.

**Tax Rate**|  The tax rate used for this customer. This is calculated as the
total of the sales tax code percentages.

**Get Tax Rate**|  Click this button to load the current tax rates for the
shipping address specified. This operation is performed only if a service
provider has been specified in [STAX.CONTROL](../STAX-CONTROL/README.md).


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
