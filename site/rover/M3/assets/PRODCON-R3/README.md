## Indented Product Configuration Listing (PRODCON.R3)
<PageHeader />

**Form Details**
[Form Details](../PRODCON-R3-1/README.md)

**Purpose**
The PRODCON.R3 procedure generates an indented listing of all the configurator
options available. The user may specify one or more configurators to list.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Level**|  The level within the configurator structure in which the
associated option resides.
-  
**Group ID**|  The ID of the group to which the option is a member.
**Title**|  The title of the group.
**Select Min**|  The minimum number of selections required if this group
within the configuration is reached.
**Select Max**|  The maximum number of selections that may be made if this
group within the configuration is reached.
**Opt**|  The option number or identifier.
**Act**|  Set to "Y" if the option is active and available for selection, "E"
if it is only available through [PRODCON.E2](../PRODCON-E2/README.md), and "N" or null
if the option is not available.
**Description**|  The description of the option.
**Specification**|  The specification code that is associated with the option.
**Part Number**|  The part number, if any, associated with the option.
**Quantity**|  The quantity or quantity range for the associated option.
**Price**|  The price of the associated option.
**Req**|  Contains the letter "Y" if the option is a required selection when
the group is reached.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
