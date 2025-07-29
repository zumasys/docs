# RMA Processing

<PageHeader />

Below is a brief summary of the steps involved in processing RMA records.

## MRK.CONTROL
Defines valid RMA types, along with return/receipt locations, cost of goods locations, and sales accounts for each type. If a type code is entered in **RMA.E** (header tab), these values are loaded into the record.

## FAIL.CONTROL
Defines the failure codes that can be entered in RMA records to track the reasons material is returned.

## RMA.E
Logs the material being returned from the customer.

## RMAREC.E or RMAREC.E2
Used to receive the items listed on an RMA.

### RMAREC.E2
* Confirms the RMA receipt. When creating a receipt, leave the receipt ID empty and enter the RMA number. The system assigns a receipt ID in the format `RMA number–sequence`. Multiple receipts can be created per RMA (e.g., `50-1`, `50-2`).
* Status starts as **R** (received). Change it to **C** (confirmed) when ready to move parts into inventory.
* The **POST TO A/R** checkbox is inherited from **RMA.E** but can be changed here. Check this to generate a credit memo for the receipt.
* A complete date is required before the receipt can be posted.

#### Line Items Tab
* Enter the quantity returned.
* If tracking reasons for return, enter failure codes and notes. Failure information from **RMA.E** is loaded automatically but can be modified.
* Failure quantity does not have to equal the total quantity returned.
  Example: 2 units returned due to failure code **C**; 1 of those units also due to failure code **D**.

## RMAREC.P1
Posts confirmed receipts, generates the credit memo, and updates the sales analysis file. This can be scheduled as a nightly batch/service.

## RMAREC.E4
Updates failure information on posted receipts.

## RMAREC.E3
Reverses posted receipts by creating offsetting receipt records and reversing inventory transactions. If a credit memo was created, an offsetting invoice is generated. Use only for posted receipts; unposted receipts can be deleted or changed in **RMAREC.E2**.

## MSHIP.E
Used to return product to the customer after repair or rework when not returning against a sales order.

Set the reference type to **RMAREC** and the reference document to the RMA receipt ID (e.g., `50-2`).

See the procedure help for further details.

The **RMA**, **RMA receipt**, and **MSHIP** procedures are located in the Sales and Marketing module.

<PageFooter />
