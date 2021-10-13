## Coupon Entry (COUPON.E)
<PageHeader />

**Form Details**
[Definition](../COUPON-E-1/README.md)
[Usage History](../COUPON-E-2/README.md)

**Purpose**
The purpose of COUPON.E is to enter or modify coupon data that is to be used
in [SO.E](../SO-E/README.md) and the eCommerce site. Each coupon can be defined with
parameters such as certain parts, customers, categories or web categories that
limit which orders or line items within orders that the coupon will apply to.
The coupon must be defined with a discount percent or a discount amount, but
not both. Also, minimum order amounts or maximum discount amounts can be
specified. Additionally, maximum number of uses overall or by customer can be
defined for the coupon.
Every time a coupon is used on an order, the coupon is updated for number of
times used. Once a coupon has been used at least once, the discount amount/%
and other criteria cannot be changed.
The coupon discount amount is realized when a shipment occurs. When the
shipment is posted, the coupon amount appears as a negative miscellaneous
amount on the shipment and invoice using the G/L account specified in
COUPON.E.
If a rep(s) is entered as part of the coupon, that rep will only be used for
web orders on the line items that the coupon gets applied to.

**Frequency of Use**
As required.

**Prerequisites**
Customer, part, and GLCHART records must exist before they can be referenced
in COUPON.E.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
