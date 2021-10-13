## Purchase Price Entry (POPRICE.E)
<PageHeader />

## Prices

![](./POPRICE-E-1.jpg)

| **Part Number**|  The record IDs to the POPRICE file are part numbers. Enter
the part number associated to the pricing structure you want to enter or
change.

-  
**Load**|  The field can be used to load the pricing information from another
part number onto this screen.

**Desc**|  Contains the description of the part number entered. The
description is displayed for information only and may not be changed.

**Std Price Per**|  Enter the price per quantity associated with the standard
unit price. For example, if the standard price is $9.85 per 100 feet of wire
you would enter 9.85 in the unit price field and 100 in the price per field.
When a receipt is made against the item as number of feet received, the system
will divide the unit price by the price per to determine the actual unit cost.
In the case of our example the calculated unit price would be 9.85/100 = .0985
per foot.

**Standard Price**|  Enter the standard unit price. This is the price
defaulted into the purchase order entry screen when the part number is entered
and there are no price altering conditions such as a purchase order date which
triggers the alternate price to be used or vendor specific pricing to be used.

**Qty**|  This field contains the quantity breaks associated with the standard
pricing. The associated price will be used when the quantity ordered is less
than or equal to the quantity entered in this field.

**Alt Standard Price**|  The alternate standard price is used in place of the
standard price when the purchase order date falls between the effective date
and end date. This can be used to denote special pricing (higher or lower) for
a specified period of time, or can be used as a way of changing to a new
standard price. The latter case is accomplished by entering the current price
in this field, and entering the new price in the regular price field. Then you
set the effective date to today's date and the end date to the last date on
which the current price is still valid. The system will then use the alternate
price until the day after the end date, at which time it will begin using the
new price in the standard price field.

**Standard Eff Date**|  Enter the date on which the alternate price will take
affect.

**Standard End Date**|  Enter the last date on which the alternate price will
be effective. Purchase order dates after this date will default to the
standard price.

**Vendor**|  Enter the vendor number for which the associated pricing
information applies.

**Vend Price Per**|  Enter the price per quantity associated with the unit
price entered. For example, if the vendor quoted a price of $9.85 per 100 feet
of wire you would enter 9.85 in the unit price field and 100 in the price per
field. When a receipt is made against the item as number of feet received, the
system will divide the unit price by the price per to determine the actual
unit cost. In the case of our example the calculated unit price would be
9.85/100 = .0985 per foot.

**Vendor Name**|  The vendor name is displayed for information only.

**Vendor Eff Date**|  Enter the date the vendor's price became effective.

**Vendor Price**|  Enter the unit price associated with the vendor. This price
will be used when the purchase order date does not fall within the date range
for the associated alternate price.

**Qty**|  This field contains the quantity breaks associated with the vendor
pricing. Multiple quantities are permitted for each vendor entered. The
associated price will be used when the quantity ordered is less than or equal
to the quantity entered in this field.

**Alt Vendor Price**|  The alternate vendor price is used in place of the
vendor price when the purchase order date falls between the associated
effective and end date.

**Vendor Eff Date**|  Enter the date on which the alternate price will take
affect.

**Vendor End Date**|  Enter the last date on which the alternate price will be
effective. Purchase order dates after this date will default to the vendor
price.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
