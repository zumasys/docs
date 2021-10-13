## Bill of Material Type Code Reset (BOM.P1)
<PageHeader />

**Form Details**
[Form Details](../BOM-P1-1/README.md)

**Purpose**
The BOM.P1 procedure is used to reset the component type codes in the bill of
material records to the type code currently present in the parts master file.

The type codes are stored for each part within the bill of material record
record to allow the user flexibility in setting up the record. For example, an
item may be defined as an assembly (type A) on the parts master which would
indicate that the item is built separately and then stocked in inventory. The
user may determine that on a given bill of material which specifies the
assembly as one of it's components, that the item should be treated as a
phantom.

This procedure would be used in an environment where the user wants to insure
that the type codes on the bill of material would always be the same as what
is stored in the parts master.

**Frequency of Use**
This procedure should only be run if you want the type codes to match the
parts master type codes in all cases. Under these circumstances it would
normally be run when a change was made to the type code of a part and you want
the change to be reflected every bill of material that references the part
number.

**Prerequisites**
None.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
