##  Finalized Work Order Listing by Location (WO.R6)

<PageHeader />

**Form Details**  
[ Form Details ](WO-R6-1/README.md)   

**Purpose**  
The WO.R6 procedure is used to print a costed work order listing for finalized
work orders. The user may specify the date range to used, as well as the WIP
location.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**WO ID** The number of the work order.  
**Status** Contains the current status of the work order.  
**Assembly Number** The part number of the item being built as defined in the
parts master.  
**Model Number** The model number of the assembly being built.  
**Description** The first line of the description of the part from the parts
master file.  
**WO.Qty** The total number of items to be built on the work order.  
**Comp.Qty** The total number of items already completed on the work order.  
**Scrap.Qty** The total number of items scrapped on the work order.  
**Material** The total amount of material based on the work order quantity.  
**Material Varian** ce The difference between the extended standard cost of
material and the actual material used.  
**Labor** The total amount of labor posted against the work order.  
**Labor Variance** The difference between the extended labor standard and the
actual labor posted.  
**Out.Proc** The total amount of outside processing charges.  
**Out.Proc Varian** ce The difference between the extended labor outside pro-
cessing standard and the actual outside processing posted.  
**Fixed.Ovhd** The total amount of fixed overhead at standard.  
**Fixed.Ovhd Variance** The difference between the fixed overhead standard and
the actual fixed overhead posted.  
**Var.Ovhd** The total amount of variable overhead at standard.  
**Var.Ovhd Varian** ce The difference between the variable overhead standard
and the actual variable overhead posted.  
**Matl.Ovhd** The total amount of material overhead at standard.  
**Matl.Ovhd Variance** The difference between the material overhead standard
and the actual variable overhead posted.  
**Compl.Amt** The total dollar value of the completed units for this work
order.  
**Scrap.Amt** The total dollar value of the scrapped units for this work
order.  
**Compl.Var** The completion variance between the total dollar value of the
work order and the total dollar value of comp- letions and scrap.  
**Totals** The totals across each row, calculated as Material + Labor +
Outside Processing + Fixed Overhead + Variable Overhead + Material Overhead -
Completed Amount.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />