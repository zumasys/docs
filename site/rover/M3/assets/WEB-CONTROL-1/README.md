## WEB Site Control Parameters (WEB.CONTROL)
<PageHeader />

## General

![](./WEB-CONTROL-1.jpg)

| **ID**|  The record ID of WEB is automatically loaded into this field.

-  
**Credit Card Terms Code**|  When a web order is placed using a credit card
the payment terms must be setup with a terms code flagged as credit card
terms. Specify the terms code to be used for this situation in this field.

**Terms Description**|  Displays the description of the associated terms code.

**Verify Credit Limit / Hold**|  Check to warn web users when credit limit and
credit hold settings will cause web orders to be placed on hold.

**Customer Price Only**|  Check this box if only the customer specific price
is to be displayed when available. Do not show the list price with a strike
through.

**Price Text**|  If the Customer Price Only option is checked and you enter
text into this field, it will be displayed in place of the price until the
user logs into the web site with a valid user id and password.

**Company Code**|  Enter the company code that is to be assigned to orders
placed through the web site. The code must be defined in the CO.CONTROL
procedure.

**Plan Group**|  Enter the planning group that is to be assigned to order
received through the web site.

**Order Type**|  Enter the type code to be assigned to web orders.

**Image Source Path**|  Images that appear on the web site are stored on the
web server itself for speed and efficiency. The image that is associated with
a specific part number is specified in [PARTS.E](../PARTS-E/README.md) on the page
named Web. This is done by specifying the name of the image to be used and can
be selected using a browse capability. You may limit the images available to
the user by specifying a path in this field.

**Quick List Names**|  The web store allows customers to create quick lists to
maintain lists of items (parts) they buy on a regular basis. In addition to
these you may present the user with additional lists that are defined in the
customer entry procedure ([CUST.E](../CUST-E/README.md)). These lists may also be
automatically loaded based on prior order history with the [SO.P6](../SO-P6/README.md)
procedure. The list names available in both [CUST.E](../CUST-E/README.md) and
[SO.P6](../SO-P6/README.md) are defined in this field.

**Default Rep**|  Enter the reps to be defaulted for customers created through
the eCommerce site.

**Default Order Percent**|  Enter the order percent associated with rep.

**State**|  Enter each two digit state code in which you are charging sales
tax.

**Tax Code**|  Enter each tax code that applies to the associated state code.
These codes will be applied to all new customers created through the web site
that have the associated stat code.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
