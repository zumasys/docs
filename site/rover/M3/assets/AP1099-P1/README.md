## Generate 1099 File (AP1099.P1)
<PageHeader />

**Form Details**
[Form Details](../AP1099-P1-1/README.md)

**Purpose**
The AP1099.P1 procedure is used to create the year-end 1099 file used for
government reporting of amounts paid to non-employees. The procedure must be
run for a specific year. You may choose to select records based upon the
vendor file 1099 flag, or the AP record 1099 flag and checks record 1099 flag
in the case of vendor data. For rep payments you may choose to select records
based upon the rep file 1099 flag, or the checks record 1099 flag. This is
useful when data entry personnel have not been making sure each AP item for a
vendor is being loaded with a 1099 flag. In this case, all AP items for a
vendor with a 1099 flag may be selected. The data for a specific vendor and/or
rep may be regenerated subsequently by entering the vendor or rep id. After
generating the 1099 file, using [AP1099.R1](../AP1099-R1/README.md) to audit the data
and [AP1099.E](../AP1099-E/README.md) to change 1099 data may be useful.

**Frequency of Use**
Generally, this is an annual procedure. However, it may be used as required.

**Prerequisites**
Entry of the selected AP and CHECKS records. Entry of the 1099 information in
[VENDOR.E](../VENDOR-E/README.md). If the amounts are to be reported in a box other
than the non-employee compensation box, the box number should be filled in on
either the A/P or VENDOR records before running this process. Adjustments to
the box number can be made in [AP1099.E](../AP1099-E/README.md).

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
