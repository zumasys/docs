# Web Modules and Configuration

<PageHeader />

Using the Rover ERP Web Client requires properly setup `SECURITY` records via `SECURITY.E`. In most cases, these permissions match what should be already present for the desktop application. However, there are cases where the web client module does not have a direct companion in the desktop version and those require completely new entries to the SECURITY records.

## Module / Routine Access

| Command     | Description                            |
| ----------- | -------------------------------------- |
| SECURITY.E2 | Login Access                           |
| DASHBOARD   | Dashboards                             |
| ACCOUNTING  | Accounting Module                      |
| AR.E        | POS Invoices / Accounting AR Tab       |
| AP.E        | Accounting AP Tab                      |
| GLCHART.E   | Accounting GL Tab                      |
| SO.E2       | Accounting Credit Hold Release Access  |
| CASH.E      | POS Receipt History and POF tabs       |
| CUST.Q      | Customer Module                        |
| FSO.E       | Field Services Module                  |
| INVENTORY   | Inventory Module Menu Item             |
| INV.Q       | Inventory Module                       |
| RECEIPTS.E  | Receipts within inventory module       |
| PARTS.E     | Parts Module                           |
| PSO.E       | Point of Sale Module                   |
| AR.E        | POS Invoices / Accounting AR Tab       |
| SHIP.E      | Allow creation of SHIP records in POS  |
| PRODUCTION  | Production Module Menu Item            |
| WO.E        | Production Scheduling                  |
| SO.E        | Sales Module (Sales Order tab)         |
| SOQUOTE.E   | Sales Module (Sales Quotes tab)        |
| SALEOPP.E   | Sales Module (Sales Opportunities tab) |
| PICKER.E    | Rover Scan Module                      |
| PHYS.BE     | Rover Scan Physical Count              |
| PHYS.BE2    | Rover Scan Physical Recount            |
| IT.BE       | Rover Scan Transfer                    |
| EMPTIME.BE3 | Rover Scan Start Job                   |
| EMPTIME.BE4 | Rover Scan End Job                     |
| SHIP.BE     | Rover Scan Scan Shipments              |
| ST.BE       | Rover Scan Shop Transaction            |
| ST.E3       | Rover Scan Wo Completion               |
| TICKET.E    | Ticketing Module                       |


<PageFooter />
