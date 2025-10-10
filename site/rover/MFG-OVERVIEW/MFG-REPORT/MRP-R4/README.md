# Purchasing Action Report (MRP.R4)

<PageHeader />

**Form Details**  
[Form Details](MRP-R4-1/README.md)

**Purpose**  
The MRP.R4 procedure is used to produce a listing of all the part numbers that the MRP process has determined require additional orders or the expedite of existing orders to cover requirements. The report is sorted vendor number sequence based on the primary vendor for the part number. The primary vendor is assumed to be the first vendor defined in the list of vendors identified in [PARTS.E](../../../ENG-OVERVIEW/ENG-ENTRY/PARTS-E/README.md). The user may also specify a single vendor. A cutoff date is entered to indicate how far into the planning horizon the report should extend.

**Frequency of Use**  
As required.

**Prerequisites**  
The MRP generation process ([MRP.P1](../../MFG-PROCESS/MRP-P1/README.md)) must have been run.

## Data Fields

**Part.No** The part number requiring action.  
**Description** The first line of the description of the part number.  
**Mo.Usage** The average monthly usage of the part number.  
**On.Hand** The quantity of the part number that was on hand at the time the
MRP generation process was run.  
**Required** The quantity of the part number required through the cutoff date
entered.  
**Proj.Bal** The projected on hand balance as of the cutoff date.  
**On.Order** The quantity of the part number already on order.  
**Rel.Date** The date by which the order must be placed in order to meet the
required date. This is based on the lead time of the part.  
**Req.Date** The date on which an order must be received to meet the
requirements.  
**Quantity** The quantity that needs to ordered on the associated required
date.  
**Total** The total of all sugessted orders for the part number.  
**Unit.Cost** The anticipated cost of the part number as defined in the [POPRICE.E](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/SO-E-3/poprice-e/README.md) procedure.
**Extended Cost** The extension of the unit price and the total quantity
required.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />
