## Product Definition (PRODCON.E)
<PageHeader />

## Configurator Controls

![](./PRODCON-E-1.jpg)

| **Product ID**|  Enter the identification of the product whose configuration
options are to be entered or modified. In many cases this identification will
be the same as the model identifier.

-  
**Load**|  If you want to load the contents of another configurator into this
one, enter the ID to the configurator to be loaded here.

**Create BOM**|  Check this box if you want the system to create a bill of
material based on the options selected.

**Base Price**|  Enter the base price for the model without any options. This
price plus the selected option prices will be added together for the price of
the configured item. If you leave this field blank then the system will use
the price in the price file, if one is present with the product number as the
identification. Set this field to zero if you do not want to show an amount
for this product and you do not want to use the price file data.

**Base Part ID**|  If there is a base part number or assembly upon which the
rest of the product is built, then enter it in this field.

**Part ID Prefix**|  Part numbers created for configured items will be
assigned a sequential number which will be pre- fixed by the entry in this
field. Entry of a prefix is optional.

**Part ID Suffix**|  Part numbers created for configured items will be
assigned a sequential number which will be suffixed by the entry in this
field. Entry of a suffix is optional.

**Conf ID Prefix**|  Enter the prefix to be used on the configuration ID.

**Conf ID Suffix**|  Enter the suffix to be used on the configuration ID.

**Create Routing**|  Check this box if you want the system to create a new
routing based on the options and hours specified. The routing ID created will
be the same as the Part ID.

**Config Code Contains Group**|  Check this box if you want the configuration
code to contain the Group ID.
As the user selects options in the configurator a key is generated for each
one and is made up of the spec code, part number, and quantity associated with
the selected item. These keys are combined together to create a signature that
is used to uniquely identify the part that is being created. This signature is
compared with the signature of previously configured parts to determine if the
part already exists, in which case the configurator returns the existing part
number instead of creating a new part. This approach assumes that the same
combinations of specs, parts, and quantities would always signify a unique
result between one configuration and another. If that's not the case, enabling
this option will include the group id, in which a selected option resides, in
the key that is created. So if the same spec, part, quantity combination is
available in more than one group, they will generate different keys.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
