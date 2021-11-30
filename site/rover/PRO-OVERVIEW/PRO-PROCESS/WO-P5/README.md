##  Mass Close Work Order Procedure (WO.P5)

<PageHeader />

**Form Details**  
[ Form Details ](WO-P5-1/README.md)   

**Purpose**  
WO.P5 is used to mass close open work orders based on certain selection
criteria. Open work orders are work orders in a "N" (new), "O" (open), "R"
(released), "P" (pulled) or "S" (started) status. If the status of the work
order is "C" (closed) or "F" (finalized), the work order will not be selected.  
  
Work orders may be selected based on a date range, work order number range or
status. The selection can, also be limited to work orders created specifically
for a sales order or purchase order.  
  
If you want to view the work orders that will be selected before actually closing them, do not select the "update work orders" option. By not selecting this option, you are basically run the process in a test mode. It is recommended that you first run the procedure in a test mode before actually closing the work orders. Any work orders that are accidentally closed, can be re-opened in [ WO.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-E) .   
  
Any shortages, commitments or allocations that exist for the work orders being
closed will be removed as part of this process.

**Frequency of Use**  
As required.

**Prerequisites**  

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />