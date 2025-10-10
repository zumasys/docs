##  Part Master Mass Change (PARTCHANGE.E)

<PageHeader />

**Form Details**  
[ Selection Control ](PARTCHANGE-E-1/README.md)   
[ General Changes ](PARTCHANGE-E-2/README.md)   
[ Material Control Changes ](PARTCHANGE-E-3/README.md)   
[ Customer/Supplier ](PARTCHANGE-E-4/README.md)   
[ Images ](PARTCHANGE-E-5/README.md)   
[ Parts Selected ](PARTCHANGE-E-6/README.md)   
[ Select Text ](PARTCHANGE-E-7/README.md)   

**Purpose**  
The purpose of PARTCHANGE.E is to mass change/update data on selected parts.
The first tab of this procedure is labeled SELECTION CONTROL and is used to
select the parts based on part number range, category range,
prodcon/configuration id or text file. Once the parts have been selected, they
will be displayed on PARTS SELECTED tab. You may add or delete items from the
list. You may also manually enter the part numbers into the list without
having used the above selection options.  
  
The GENERAL CHANGES, MATERIAL CONTROL CHANGES, CUSTOMER/SUPPLIER and IMAGES tabs mimic the tabs in the [ PARTS.E ](../PARTS-E/README.md) (master parts entry) procedure. If you wish to change the existing data, enter the new value in the appropriate field. For example, to change the status of the parts to "I" (i.e. inactive), type in "I" in the status field on the GENERAL CHANGES tab.   
  
On the MATERIAL CONTROL CHANGES tab, you may update the planning group data.
If you use multiple planning groups, you will need to update the data for each
planning group separately.  
  
If you wish to clear the data from a field enter the tilde (~) character in
the field. Please note that there are certain fields (e.g. status and type)
that you may not clear.  
  
Certain fields allow multiple entries/values to be entered. An example would
be the specs or vendor number fields. If you type in a new vendor, all
existing vendors will be deleted and replaced with the new vendor(s) entered
in this procedure. If you use the tilde character to clear the data, all
existing data will be cleared not just the first vendor or first spec entered.

**Frequency of Use**  
As required.

**Prerequisites**  
Part numbers must exist in the database. This procedure cannot be used to
create new parts.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />