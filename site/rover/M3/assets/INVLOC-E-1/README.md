## Inventory Location Entry (INVLOC.E)
<PageHeader />

##

![](./INVLOC-E-1.jpg)

| **Location**|  Enter the ID of the inventory location you wish to add or
update.

-  
**Description.**|  Enter a description of this inventory location.

**Cost Group**|  Enter the cost group which will be validated against
[INV.CONTROL](../INV-CONTROL/README.md). The cost group is used to group inventory
locations together with a common costing method as defined on
[INV.CONTROL](../INV-CONTROL/README.md). The cost group should not be changed on
existing records if there are existing quantities on hand in this location.

**Type**|  Enter one of the following location type codes:
SK - Stocking location.
This is the code used to define most of
the normal inventory locations which
maintain an inventory balance. You should
use this code for the stockroom and
receiving inspection.
AD - Adjustment location.
Defines locations which do not maintain
inventory balances. These locations are
used as a means of moving materials into
other locations which have been aquired in
a way which is not normally recorded by
the system. Materials are also moved out
of other locations using these types of
locations. Pysical inventory adjustments
are made using these locations.
WO - Work in process location.
Used to define the various manufacturing
areas or lines. Inventory balances are
maintained by part number in this type of
location. Balances are maintained by Work
Order number.
LS - Line stock location.
Defines a location which is associated to
a WO type location and work order, and is
the location from which materials coded as
line stock on the picklist are pulled.
This type of location does not maintain
on hand balances and is usually used to
maintain the aggregate dollar value of
what is sometimes called free stock. The
free stock materials are often maintained
in the stockroom and moved in bulk to the
production area when its supply is low.
PO - Purchasing location.
This type of location is used in the
receiving process as a purchases clearing
location. Receipt transactions move items
from the location while debit transactions
move items to it. The purchases clearing
account number should be assigned to this
location.
SC - Scrap location.
This location may be defined as either a
physical or non-physical location since in
some case you may store scrap material and
then try to salvage it, while in other
cases you are simply disposing of it.
CG - Cost of goods location
This type of location is used in the
shipping process as the destination
location for inventory transactions, and
as the origination location for return
transactions. The cost of goods sold
account number should be assigned to this
location.

**Physical**|  This box is automatically checked when the type is set to "SK".
It is unchecked in all other cases.

**Negatives Ok**|  Check this box if quantities in this location are allowed
to go negative. If the field is not checked then the system will prevent the
inventory balance in the location from going negative by not processing
inventory transactions which would cause this condition. If this is checked
then individual lot record balances will still be prevented from going
negative unless the Negative Lots OK is also checked.

**Lot Neg Ok**|  Check this box if lot quantities in this location are allowed
to go negative. The Negatives OK must also be checked to activate this option.
If the field is not checked then the system will prevent the inventory balance
in the lot from going negative by not processing inventory transactions which
would cause this condition.

**Bin Control**|  Check here if this inventory location is bin controlled.
Otherwise leave this field unchecked.

**Account Number**|  Enter the general ledger account number to be used in
maintaining the current dollar value of the inventory location.

**Plan Group**|  Enter the planning group to which this inventory belongs.
This field will be used in MRP and MPS.

**Use In Planning**|  If this inventory location is to be used in the planning
module (MRP and MPS), Check this box.

**Inactive**|  Check this box if you wish to inactivate this location. If this
box is checked, you will not be able to make inventory transactions to and
from this location on any new transactions. Therefore, a current inventory
listing should be run against this location to verify if any quantities on
hand are still posted to this location and need to be transferred to another
location first. Inactivating an account will not affect the status of existing
records. Therefore, if you do not want any future transactions to occur
against this location, please make sure that the location is not referenced on
any control or parts records or on any open shipments, sales orders, purchase
orders, etc.

**Use In Web**|  Check this box if this location should be included in the
website module. Do not check this box, if the location should be ignored.

**Exclude from Usage**|  If this box is checked, any inventory transaction
with a TO or FROM location equal to this one will be not be included when
calculating usage.

**Account Desc**|  This field contains the account description and is for
reference only.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
