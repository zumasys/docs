##  Customer Entry (CUST.E)

<PageHeader />

##  General

![](./CUST-E-1.jpg)

**Customer Number** Enter a valid customer number, or leave this field null to
assign a new number. If you want to  
access an existing customer but you do not know the number, there is an option
in the help  
menu for this prompt which allows you to select the customer by name or a
wildcard search.  
  
**Prospect ID** If you wish to load data from a prospect record into this
customer record, you may enter the prospect number, part of the name, or part
of the telephone number in this field.  
  
**Customer Name** Enter the name of the customer.  
  
**Telephone** Enter the customer's telephone number. The recommended format is
XXX/XXX-XXXX.  
  
**Fax Number** Enter the telephone number to use for sending facsimiles to the
customer. The recommended format is XXX/XXX-XXXX.  
  
**Date** Enter the start date for this customer. This will default to the
current system date.  
  
**Inactive Date** Enter the date the customer's account become inactive on. If a date has been entered, you will be given a warning in certain procedures such as [ so.e ](so-e/README.md) or [ ar.e ](../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e) that the customer has been flagged as inactive.   
  
**Customer Address** Enter the street address for this customer. Do not
include the city, state, or zip. Enter those in the adjacent, separate fields.
The street, city, state, zip, and country will be combined for printing
purposes.  
  
**Sort City** Enter the city portion of the address information.  
  
**Sort State** Enter the state portion of the address information.  
  
**Sort Zip** Enter the zip code portion of the address information.  
  
**Sort Country** Enter the country portion of the address information. Please note that you may be required to enter the country name as it has been entered in the [ SHIP.CONTROL ](../CUST-E-8/ship-control) procedure. For example, instead of entering U.S.A. you may need to enter United States. If this requirement has been applied to your account, an error message will be displayed if the entry made into this field does not match the entry found in [ ship.control ](ship-control/README.md) .   
  
**Resale#** Enter the customer's resale number.  
  
**Tax Codes** Enter the sales tax code for this customer. The code selected
must exist in the STAX file.  
  
**Tax Pct** The sales tax percent for the corresponding tax code entered. This
is read from the STAX file and may not be changed in this procedure.  
  
**Tax Rate** The total tax rate as calculated by adding the individual sales
tax rates.  
  
**Rep** Enter the rep number(s) assigned to this customer. If you do not know
the rep number, there is an option in the help menu for this prompt which
allows you to select the rep by name.  
  
**Order%** Enter the order percent for each rep.  
  
**Price Code** Select the price code for this customer. This code is used for product pricing structures defined in [ PRICE.E ](PRICE-E/README.md) . The price codes are defined in [ PRICE.CONTROL ](PRICE-CONTROL/README.md) .   
  
**Discount Pct** Enter a default discount percent.  
  
**Contract Id** Enter any price contracts that apply to this customer. The contract pricing and commission will override any standard pricing and commission defaults. Price contract information is maintained using [ CPRICE.E ](CPRICE-E/README.md) .   
  
**Partials Ok** Check this box if the customer normally allows partial
shipments.  
  
**Route Id** The delivery route for this customer as defined on [ ROUTE.E ](ROUTE-E/README.md) . It is displayed here for information only.   
  
**Ship via** Select the method of shipping normally used by the customer.  
  
**Freight Code** Enter the normal method of payment for freight charges:
Prepaid, Collect. Freight Free, or Third Party. This information will default
into the sales order record for you but can be changed as required.  
  
Prepaid - Freight charges on shipments against the sales order are to be
prepaid  
Collect - Frieght charges are to collected from the customer by the freight
carrier  
Freight Free - No freight will be charged to the customer.  
Third Party - Freight charges are to be paid by a third  
  
**Bill To Customer** Enter the number of the customer who will be billed for
orders placed by this customer. If you leaved this field null, the sold to and
the bill to are assumed to be the same.  
  
**Bill To Customer Address** If a bill to customer number was entered, the
name is displayed here for verification purposes.  
  
**Terms** Select the default payment terms assigned to the customer. This
information will be loaded into sales orders and invoices but may be changed
as required.  
  
**Credit Limit** Enter the maximum credit limit (no decimals). This number is
used by the system for credit checking performed during order entry. The
operator will be warned in sales order entry when the customer has exceeded
their credit limit, and will be asked if the sales order they have entered
should be placed on hold.  
  
**Due Days** If you wish to have the [ SO.E ](../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E) procedure check if the customer is past due on any orders, place the number of days to use as a check in this field. If there is an entry in the Past Due Days field in [ AR.CONTROL ](../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/CHECKS-E4/AR-CONTROL) , this field will override that entry. If you wish to place orders on hold when the customer is 1 day past due on any of their invoices, enter 1. Enter 2 for 2 days past due, etc. If you wish to have this customer not be checked for being past due, enter 999 or leave blank if [ AR.CONTROL ](../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/CHECKS-E4/AR-CONTROL) entry is blank. The operator will be warned in sales order entry when the customer is past due, and will be asked if the sales order they have entered should be placed on hold.   
  
**Credit Hold** Check this box if you want to place the customer on credit
hold. If the credit hold is set then the operator will be warned in sales
order entry that the customer is on credit hold, and will be asked if the
sales order they have entered should be placed on hold. Shipments for this
customer cannot be processed when this box is checked. Note:This customer must
be the bill to customer for the credit hold to take effect.  
  
**Bank No** Enter the bank's internal id number for the primary checking account this customer will issue checks from. This number will default into [ cash.e ](../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-2/CASH-F1/cash-e) for you but can be changed as required. The bank number is printed on the cash deposit slip form which can be submitted to your bank along with the customer checks.   
  
**Group Code** Select each of the groupings that apply to the customer.
Groupings are used to classify customers by various attributes and are used to
select customers for marketing compaigns.  
  
**Marketing Opt Out** Check this box if the customer is to be excluded from marketing campaigns. This is checked when customers and prospects are selected for exporting in the [ CAMPAIGN.E ](CAMPAIGN-E/README.md) procedure.   
  
**Website** Enter the URL for the customer's website.  
  
**Exporter** Check this box if this customer is an exporter. If the customer
is an exporter, the end user countries will need to be entered.  
  
**End User Countries** Enter the end user countries if this customer is an
exporter. This will be used in sales order entry.  
  
**Ecommerce Level** This field controls which categories of products, as defined in [ WEB.CONTROL ](WEB-CONTROL/README.md) , are available to the customer when they visit the ecommerce web site. Valid entries are 0 thru 9 with 9 being the highest level. If a web category has zero or null specified then anybody visiting the web site will be able to see the products in the category. If the level for a category is greater than zero than only customers with a number greater than or equal to that number will be able to see the products in that category.   
  
**Notes** Enter any applicable notes here. If the field, "Load Customer Notes", in the [ MRK.CONTROL ](../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL) procedure is set to "Y", these notes will be loaded into [ SO.E ](../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E) after entry of the customer number on new orders. Any notes that are considered confidential should be added to the notes tab of this procedure.   
  
**Open** Click here to open this website.  
  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />