# Rover Cheat Sheet

This cheat sheet provides a list of commonly used processes, reports, and entry programs broken down by module.

## Overview
- [Overview](#overview)
- [Engineering](#engineering)
- [Inventory](#inventory)
- [Purchasing/Receiving](#purchasingreceiving)
- [Sales and Marketing - Sales Order Entry](#sales-order-entry-sales-and-marketing)
- [Sales and Marketing - Shipping](#shipping-sales-and-marketing)
- [Production - Work Orders / Shop Floor Controls](#production-work-orders-shop-floor-controls)
- [RMA - Return Material Authorization](#rma-return-material-authorization)
- [Accounts Receivable](#accounts-receivable)
- [Accounts Payables](#accounts-payables)

</PageHeader>

### Engineering
#### Setup Procedures
| Activity                      | Menu/Sub       | Procedure    | Notes |
|---------------                |-------------   |--------------|-------|
|Define valid units of measure  | ENG/ENG.ENTRY  | [UM.CONTROL](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/MSHIP-E/MSHIP-E-2/Parts-E/PARTS-E-1/UM-CONTROL/)   |
|Define categories              | ENG/ENG.ENTRY  | [CAT.CONTROL](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/MSHIP-E/MSHIP-E-2/Parts-E/PARTS-E-2/CAT-CONTROL/)  |
|Define cost defaults           | ENG/ENG.ENTRY  | [COST.CONTROL](../AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/COST-CONTROL/) |

#### Daily Procedures
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Update part master data | ENG/ENG.ENTRY | [PARTS.E](../AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/PARTS-E/README.md) | 
|Update part cost data | ENG/ENG.ENTRY | [COST.E](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL/INV-CONTROL-1/COST-P2/COST-P1/COST-E/README.md) | 
|Define bills of material | ENG/ENG.ENTRY | [BOM.E](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL/INV-CONTROL-1/COST-P2/COST-P1/COST-E/BOM-E/README.md) | 

#### Reports / Inquires
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Multi-level BOM listing | ENG/ENG.REPORT | [BOM.R3](../ENG-OVERVIEW/ENG-REPORT/BOM-R3/README.md)
|Where used inquiry | ENG/ENG.REPORT | [WU.Q](../ENG-OVERVIEW/ENG-REPORT/WU-Q/README.md)

#### Additional Procedures
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Rollup standard costs | ENG/ENG.PROCESS | [COST.P1](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL/INV-CONTROL-1/COST-P2/COST-P1/README.md) | 
|Rollover standard costs | ENG/ENG.PROCESS | [COST.P2](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL/INV-CONTROL-1/COST-P2/README.md) | 


### Inventory
#### Setup Procedures
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Establish control and defaults | INV/INV.ENTRY | [INV.CONTROL](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL/README.md) | Determines costing method(s)
|Define valid inventory locations | INV/INV.ENTRY | [INVLOC.E](../AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/INVLOC-E/README.md) | Assign a G/L account number to each location.
|Define valid bin numbers | INV/INV.ENTRY | [BIN.E](../INV-OVERVIEW/INV-ENTRY/BIN-E/README.md) | Optional – only if you want to limit bin selections.

#### Daily Procedures
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Misc. inventory movements | INV/INV.ENTRY | [IT.E](../AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-E/IT-E/README.md) or [IT.E2](../INV-OVERVIEW/INV-ENTRY/IT-E2/README.md) | Always “from” and “to” an inventory location. Move to scrap location for scrapping material. Use the adjustment INVLOC for adjustments.
|Change components into an assembly | INV/INV.ENTRY | [IT.E4](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL/INV-CONTROL-1/IT-E4/README.md) | This will allow you to relieve components from inventory and create and assembly without a work order (no labor).

#### Reports / Inquires
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Inventory inquiry | INV/INV.REPORT | [INV.Q](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/SO-E-2/INV-Q/README.md) |
|Inventory lookup by spec | INV/INV.REPORT | [INV.Q2](../INV-OVERVIEW/INV-REPORT/INV-Q2/README.md) |
|Min/max report | INV/INV.REPORT | [INV.R5](../MFG-OVERVIEW/MFG-REPORT/INV-R5/README.md) | Parts must be set to min/max planning option.
|Costed inventory listing | INV/INV.REPORT | [INV.R1](../INV-OVERVIEW/INV-REPORT/INV-R1/README.md) | All or selected locations.

### Purchasing/Receiving
#### Setup Procedures
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Update PO controls and defaults | PUR/PUR.ENTRY | [PO.CONTROL](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/PO-E/PO-E-1/po-control/README.md) |
|Update DMR controls | PUR/PUR.ENTRY | [DMR.CONTROL](../AP-OVERVIEW/AP-REPORT/VENDOR-Q/VENDOR-Q-9/DMR-CONTROL) |
|Update vendor information | PUR/PUR.ENTRY | [VENDOR.E](../AP-OVERVIEW/AP-ENTRY/VENDOR-E/README.md) | Create all contact information.
|Define PO prices | PUR/PUR.ENTRY | [POPRICE.E](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/SO-E-3/poprice-e/README.md) | Can define prices for each vendor for a part.
|Define standard notes | PUR/PUR.ENTRY | [PO.NOTES](../PUR-OVERVIEW/PUR-ENTRY/PO-NOTES/README.md) |

#### Daily Procedures
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Enter purchase order | PUR/PUR.ENTRY | [PO.E](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/PO-E/README.md) | Line item location will default to receiving inspection. Print/email/fax PO form ([PO.F3](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/PO-E/PO-E-1/po-f3/README.md)).
|For non-inventory part you leave part number blank and only use description field. There are special rules for outside purchasing PO’s; the receiving location must be WIP and you must specify the WO number so that costs go to that WO. Only if the part number on the PO is the same as on the WO will it be considered OP cost, otherwise it is considered material cost. |||
|Print PO form | PUR/PUR.REPORT | [PO.F3](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/PO-E/PO-E-1/po-f3/README.md) |
|Parts are delivered by vendor | | |
|Receive parts from vendor | PUR/PUR.ENTRY | [RECEIPTS.E](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/PO-E/PO-E-1/po-control/PO-CONTROL-1/receipts-e/README.md) | Enter the actual quantity returned. Inventory in receipt location is updated. A receipt number is assigned (PO – seq#).
|Send packing slip paperwork to accounting | | |
|Reverse a receipt | PUR/PUR.ENTRY | [RECEIPTS.E3](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/PO-E/PO-E-1/CONTAINER-E/CONTAINER-E-2/receipts-e3/README.md) | Use File>Delete to remove receipt record (complete only).
|Create a debit | PUR/PUR.ENTRY | [RECEIPTS.E2](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/MSHIP-E/RECEIPTS-E2/README.md) | Send material back to vendor (can be partial). Creates a debit memo in A/P

#### Nightly Procedures
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Post receipts (to A/P) | PUR/PUR.PROCESS | [RECEIPTS.P1](../AP-OVERVIEW/AP-REPORT/APREG-R1/RECEIPTS-P1/README.md) | Creates an accrual record in AP (AP ID = receipt number). Can be done manually or set to run at night.

### Sales Order Entry - Sales and Marketing
#### Setup Procedures
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Define control settings | MRK/MRK.ENTRY | [MRK.CONTROL](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL/README.md) |
|Define control settings | MRK/MRK.ENTRY | [QUOTE.CONTROL](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL/MRK-CONTROL-1/SOQUOTE-E/SOQUOTE-E-1/QUOTE-CONTROL/README.md) |
|Update customer information | MRK/MRK.ENTRY | [CUST.E](../AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/CUST-E/README.md) | Update part pricing MRK/MRK.ENTRY PRICE.E Establish part pricing (can be by customer or customer code).
|Update contacts | MRK/MRK.ENTRY | [CONTACT.E](../AP-OVERVIEW/AP-ENTRY/VENDOR-E/VENDOR-E-2/CONTACT-E/README.md) | Accessed from CUST.E contact tab.

#### Daily Procedures
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Enter sales quote | MRK/MRK.PROCESS | [SOQUOTE.E](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL/MRK-CONTROL-1/SOQUOTE-E/README.md) | Print/email/fax sales order quote ([SOQUOTE.F2](../MRK-OVERVIEW/MRK-REPORT/SOQUOTE-F2/README.md)).
|Create / update sales order | MRK/MRK.PROCESS | [SO.E](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/README.md) | Existing sales quote can be loaded into SO. Print/email/fax sales order acknowledgment (SO.F3).

#### Additional Procedures
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Customer Inquiry | MRK/MRK.REPORT | [CUST.Q](../AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/CUST-Q/README.md) | Multiple tabs with customer activity.
|Sales order inquiry | MRK/MRK.REPORT | [SO.Q](../MRK-OVERVIEW/MRK-REPORT/SO-Q/README.md) | View sales order status (all or selected).
|Inventory Inquiry | INV/INV.REPORT | [INV.Q](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/SO-E-2/INV-Q/README.md) | Detail about a specific part number.
|Print/email SO form | MRK/MRK.REPORT | [SO.F3](../MRK-OVERVIEW/MRK-REPORT/SO-F3/README.md) | Order confirmation to customer.
|Print/email SO quote form | MRK/MRK.REPORT | [SOQUOTE.F2](../MRK-OVERVIEW/MRK-REPORT/SOQUOTE-F2/README.md) | Sales quote to customer.

### Shipping - Sales and Marketing
#### Setup Procedures
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Shipping methods | MRK/MRK.ENTRY | [SHIP.CONTROL](../AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/CUST-E/CUST-E-8/ship-control/README.md) | Define ship methods and UPS/Fedex interfaces.

#### Daily Procedures
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Create SHIP record (allocate) | MRK/MRK.ENTRY | [SHIP.E](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/SO-E-4/SHIP-E/README.md) | This optional step can generate the SHIP record and will allocate the parts in inventory. Print ship pick list ([SHIP.R1](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/SO-E-4/SHIP-E/SO-P1/SO-P1-1/SHIP-R1/README.md)).
|Get parts from shelves  | | |Material is retrieved by inventory personnel
|Ship confirmation | MRK/MRK.ENTRY | [SHIP.E2](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/SO-E-4/SHIP-E/SO-P1/SHIP-E2/README.md) | To create a new shipment, skip the shipment number field, change status to “S” and enter the SO number. Data will load from UPS/Fedex if applicable. Inventory for end item will be relieved when saved. Print packing slip ([SHIP.F6](../MRK-OVERVIEW/MRK-REPORT/SHIP-F6/README.md)). Print Invoice ([SHIP.F5](../AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/AP-CONTROL-2/FORM-CONTROL/FORM-CONTROL-3/AR-F4/SHIP-F5/README.md)).
|Reverse a posted shipment | MRK/MRK.ENTRY | [SHIP.E3](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/SO-E-4/SHIP-E/SO-P1/SHIP-E2/SHIP-E3/README.md) | Creates a credit memo and reopens the sales order

#### Nightly Procedures
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Post shipments | MRK/MRK.PROCESS | [SHIP.P1](../AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/comm-e/SHIP-P1/README.md) | Update A/R, sales and commission files.
|Create sales analysis files | MRK/MRK.PROCESS | [SALES.P2](../AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/CUST-Q/SALES-P2/README.md) | Creates sales inquiry data for CUST.Q and SALES.Q.

#### Sales and Marketing / Inventory Inquiry
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Customer inquiry | MRK/MRK.REPORT | [CUST.Q](../AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/CUST-Q/README.md) | Multiple tabs with customer activity.
|Sales order inquiry | MRK/MRK.REPORT | [SO.Q](../MRK-OVERVIEW/MRK-REPORT/SO-Q/README.md) | View sales order status (all or selected).
|Inventory Inquiry | INV/INV.REPORT | [INV.Q](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/SO-E-2/INV-Q/README.md) | Detail about a specific part number.

### Production - Work Orders / Shop Floor Controls
#### Setup Procedures
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Define controls and defaults | PRO/PRO.ENTRY | [WO.CONTROL](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/SO-E-2/INV-Q/INV-Q-1/PICKER-E2/PICKER-E2-1/wo-control/README.md) |
|Define work centers | PRO/PRO.ENTRY | [WC.E](../AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/COST-CONTROL/WC-E/README.md) |
|Define routings | PRO/PRO.ENTRY | [ROUTING.E](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL/INV-CONTROL-1/COST-P2/COST-P1/ROUTING-E/README.md) |

#### Daily Procedures
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Create / edit work order | PRO/PRO.ENTRY | [WO.E](../AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-E/README.md) | WO status is set to Control File Status Code. Set the appropriate routing. Set start and end dates or allow scheduling. Print WO traveler ([WO.R1](../PRO-OVERVIEW/PRO-REPORT/WO-R1/README.md)). Print picking list of material required ([PICKER.R1](../PRO-OVERVIEW/PRO-REPORT/PICKER-R1/README.md)). |
|Material is physically pulled. | | |
|Make changes to the pick list | PRO/PRO.ENTRY | [PICKER.E1](../AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-CONTROL-1/PICKER-E1/README.md) | |
|Issue material to the WO | PRO/PRO.ENTRY | [PICKER.E2](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/SO-E-2/INV-Q/INV-Q-1/PICKER-E2/README.md) | Pull quantity defaults to required quantity. Change quantities to generate shortages. WO status changes to “P” (pulled).
|Make assembly | | |
|Report shop movements | PRO/PRO.ENTRY | [ST.E](../AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/COST-CONTROL/WC-E/WC-E-1/EMPTIME-E1/EMPTIME-E2/EMPTIME-E/BAR-CONTROL/BAR-CONTROL-1/ST-E6/ST-E/README.md) or [ST.E2](../PRO-OVERVIEW/PRO-ENTRY/ST-E2/README.md) | Optional
|Manually issue material to WO (adjustments) | INV/INV.ENTRY | [IT.E](../AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-E/IT-E/README.md) or [IT.E2](../INV-OVERVIEW/INV-ENTRY/IT-E2/README.md) | Optional
|Apply labor | PRO/PRO.ENTRY | [LABOR.E](../PRO-OVERVIEW/PRO-ENTRY/LABOR-E/README.md) or EMPTIME procedures | Labor can be applied manually through the LABOR.E procedures or through barcoding and the EMPTIME procedures. Optionally, labor can be applied at standard automatically when the units are completed.
|Complete units | PRO/PRO.ENTRY | [ST.E3](../AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/COST-CONTROL/WC-E/WC-E-1/EMPTIME-E1/EMPTIME-E2/EMPTIME-E/BAR-CONTROL/BAR-CONTROL-1/ST-E7/ST-E3/README.md) or [ST.E4](../PRO-OVERVIEW/PRO-ENTRY/ST-E4/README.md) | Moves completed items into inventory.

#### Reports / Inquires
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Print WO traveler | PRO/PRO.REPORT | [WO.R1](../PRO-OVERVIEW/PRO-REPORT/WO-R1/README.md) |
|Print pick list | PRO/PRO.REPORT | [PICKER.R1](../PRO-OVERVIEW/PRO-REPORT/PICKER-R1/README.md) |
|Work order status listing | PRO/PRO.REPORT | [WO.R2](../PRO-OVERVIEW/PRO-REPORT/WO-R2/README.md) |
|Shop floor inquiry | PRO/PRO.REPORT | [WO.Q](../PRO-OVERVIEW/PRO-REPORT/WO-Q/README.md) |

#### Additional Procedures
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Reverse a completion | PRO/PRO.ENTRY | [ST.E5](../PRO-OVERVIEW/PRO-ENTRY/ST-E5/README.md) | In case of errors.
|Finalize work order | PRO/PRO.ENTRY | [WO.E2](../PRO-OVERVIEW/PRO-ENTRY/WO-E2/README.md) | Posts any variances to G/L.
|Finalize work order | PRO/PRO.PROCESS | [WO.P3](../PRO-OVERVIEW/PRO-ENTRY/WO-E2/WO-P3/README.md) | Posts any variances to G/L.

### RMA - Return Material Authorization
#### Setup Procedures
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Establish RMA type codes | MRK/MRK.ENTRY | [MRK.CONTROL](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL/README.md) | 
|Define failure codes | MRK/MRK.ENTRY | [FAIL.CONTROL](../MRK-OVERVIEW/MRK-ENTRY/FAIL-CONTROL/README.md) |

#### Daily Procedures
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Enter RMA | MRK/MRK.ENTRY | [RMA.E](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL/MRK-CONTROL-2/RMA-E/README.md) | Creates an RMA record for the customer to return. Check box to create A/R record when RMAREC is complete if desired. Print/email/fax RMA form ([RMA.F3](../MRK-OVERVIEW/MRK-REPORT/RMA-F3/README.md)) / send to customer.
|Parts are returned by customer | | |
|Receive parts from customer | MRK/MRK.ENTRY | [RMAREC.E](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL/MRK-CONTROL-2/RMA-E/RMA-E-1/RMAREC-E2/RMAREC-E/README.md) | This is an optional step. Enter the actual quantity returned. Print RMAREC traveler ([RMAREC.F1](../MRK-OVERVIEW/MRK-REPORT/RMAREC-F1/README.md)).
|Print RMAREC traveler | MRK/MRK.REPORT | [RMAREC.F1](../MRK-OVERVIEW/MRK-REPORT/RMAREC-F1/README.md) |
|Confirm RMA receipt | MRK/MRK.ENTRY | [RMAREC.E2](../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL/MRK-CONTROL-2/RMA-E/RMA-E-1/RMAREC-E2/README.md) | Set status to confirmed. Check box to create A/R record (credit memo)

#### Additional Procedures
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Print RMA form | MRK/MRK.REPORT | [RMA.F3](../MRK-OVERVIEW/MRK-REPORT/RMA-F3/README.md) |
|Post RMA to A/R | MRK/MRK.PROCESS | [RMAREC.P1](../AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/rmarec-p1/README.md) | Update A/R, sales and commission files.

### Accounts Receivable
#### Setup Procedures
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Establish control and defaults | AR/AR.ENTRY | [ACCT.CONTROL](../AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/README.md) |
|Establish control and defaults | AR/AR.ENTRY | [AR.CONTROL](..) |
|Define terms codes | AR/AR.ENTRY | [TERMS.E](..) |
|Update customer data | AR/AR.ENTRY | [CUST.E](../AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/CUST-E/README.md) | Update contact information.

#### Daily Procedures
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Post shipments | AR/AR.PROCESS | [SHIP.P1](../AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/comm-e/SHIP-P1/README.md) | This can be run on demand and/or nightly. |
|Enter / update A/R records | AR/AR.ENTRY | [AR.E](../AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/README.md) | Can create credit/debit memos (print when saved).
|Print invoices from A/R | AR/AR.REPORT | [AR.F4](../AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/AP-CONTROL-2/FORM-CONTROL/FORM-CONTROL-3/AR-F4/README.md) | Print/email/fax invoice. |
|Apply cash | AR/AR.ENTRY | [CASH.E](../AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/AR-E-1/CASH-E/README.md) | Check the “Load” field to load all open records for a customer. Uncheck this to enter the invoice numbers manually (for larger customers). Can place cash on account and/or write off.
|Reverse a cash entry | AR/AR.ENTRY | [CASH.E2](../AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/AR-E-1/CASH-E/CASH-E2/README.md) | |
|Enter misc. cash | AR/AR.ENTRY | [CASH.E3](../AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/AR-E-1/CASH-E/recon-e/RECON-E-4/CASH-E3/README.md) | Direct to an account number. |
|Print a deposit slip | AR/AR.REPORT | [CASH.F1](../AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-2/CASH-F1/README.md) | Run for a specific deposit ID. |

#### Reports / Inquires
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Aging report | AR/AR.REPORT | [AR.R3](../AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/AR-R3/README.md) | Run for specific customer or all.
|Statements | AR/AR.REPORT | [AR.F5](../AR-OVERVIEW/AR-REPORT/AR-F5/README.md) |
|Cash receipts listing | AR/AR.REPORT | [CASH.R1](../AR-OVERVIEW/AR-REPORT/CASH-R1/README.md) |
|Customer inquiry | AR/AR.REPORT | [CUST.Q](../AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/CUST-Q/README.md) |
|Customer activity listing | AR/AR.REPORT | [AR.R5](../AR-OVERVIEW/AR-REPORT/AR-R5/README.md) |

### Accounts Payables
#### Setup Procedures
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Update A/P control data | AP/AP.ENTRY | [ACCT.CONTROL](../AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/README.md) |
|Update A/P control data | AP/AP.ENTRY | [AP.CONTROL](../AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/README.md) |
|Update vendor information | AP/AP.ENTRY | [VENDOR.E](../AP-OVERVIEW/AP-ENTRY/VENDOR-E/README.md) | Create all contact information. |
|Define terms codes | AP/AP.ENTRY | [TERMS.E](../AP-OVERVIEW/AP-ENTRY/TERMS-E/README.md) |

#### Daily Procedures
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Post receipts | PUR/PUR.PROCESS | [RECEIPTS.P1](../AP-OVERVIEW/AP-REPORT/APREG-R1/RECEIPTS-P1/README.md) | Receipts must be posted to create AP records. |
|Enter A/P invoices | AP/AP.ENTRY | [AP.E](../AP-OVERVIEW/AP-ENTRY/AP-E/README.md) | For PO receipts, use the receipt number as the AP ID. For non-PO invoices, leave the AP ID field empty. |
|Enter hand checks | AP/AP.ENTRY | [CHECKS.E](../AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/README.md) | Can print checks as saved. |

#### Check Run
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Aging report | AP/AP.REPORT | [AP.R3](../AP-OVERVIEW/AP-REPORT/AP-R3/README.md) or [AP.R5](../AP-OVERVIEW/AP-REPORT/AP-R5/README.md) | Report to show what invoices are due to be paid.
|Select A/P items for payment | AP/AP.PROCESS | [AP.P1](../AP-OVERVIEW/AP-REPORT/CHECKS-F5/AP-P1/README.md) | Right-click in AP ID and select “All Vendors”. Click on all AP records you wish to include. |
|Print audit report | AP/AP.REPORT | [PRECHECKS.R1](../AP-OVERVIEW/AP-REPORT/PRECHECKS-R1/README.md) | List of A/P items selected in AP.P1 (optional). |
|Print checks | AP/AP.REPORT | [CHECKS.F2](../AP-OVERVIEW/AP-REPORT/CHECKS-F2/README.md) | Run number will default. Enter starting check number. |
|Review audit report | AP/AP.REPORT | [PRECHECKS.R1](../AP-OVERVIEW/AP-REPORT/PRECHECKS-R1/README.md) | Same list, but with check number (optional). |
|Post checks | AP/AP.PROCESS | [CHECKS.P1](../AP-OVERVIEW/AP-PROCESS/CHECKS-P1/README.md) | Leave start/end number blank to post all. Enter a range to post selected checks if some checks printed incorrectly. |

#### Additional Procedures
| Activity      | Menu/Sub    | Procedure        | Notes |
|---------------|-------------|------------------|-------|
|Vendor inquiry |  AP/AP.REPORT | [VENDOR.Q](../AP-OVERVIEW/AP-REPORT/VENDOR-Q/README.md)     | View vendor receipts and AP activity. |
|Void checks    |  AP/AP.ENTRY  | [CHECKS.E2](../AP-OVERVIEW/AP-ENTRY/CHECKS-E2/README.md)    | |
|List checks    |  AP/AP.REPORT | [CHECKS.R1](../AP-OVERVIEW/AP-REPORT/CHECKS-R1/README.md)    | |
|AP Accrual listing | AP/AP.REPORT | [AP.R9](../AP-OVERVIEW/AP-REPORT/AP-R1/AP-R9/README.md)     | Shows all RECEIPTS that aren't matched to an AP record. |

</PageFooter>