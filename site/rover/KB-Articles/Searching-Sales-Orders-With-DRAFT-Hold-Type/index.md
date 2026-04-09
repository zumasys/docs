# How to Search for Sales Orders with the Hold Type "DRAFT" in RoverERP

<PageHeader />

## Problem Statement

Users need to identify and review sales orders that are currently in a **DRAFT** hold status. Orders or line items on hold cannot be shipped, and it is necessary to generate a report listing these orders for further action.

---

## Resolution Steps

### 1. Use the SO.R2 Report to List Orders on Hold

1. SO.R2 will generate a list of orders on hold.
2. There is a prompt for the hold code so you can run the report for a specific code.
3.  If no entry is made in the field, all orders on hold will get selected.

![Searching Sales Order With Draft Hold Type](./Searching-Sales-Order-With-Draft-Hold-Type.jpg)

### 2. Review the Report Output

- The report will display all sales orders (or line items) that are on hold with the specified hold code
- Use this information to identify which orders are in **DRAFT** status and require further action

### 3. Take Appropriate Action

- Review the listed orders to determine if they can be released from hold or require additional processing
- Orders must be removed from hold status before they can be shipped

---

## Verification

- [ ] Confirm that the **SO.R2** report lists all sales orders with the `DRAFT` hold type
- [ ] Ensure that no orders intended for shipment remain in **DRAFT** hold status unless required

---

> **Note:**  
> The **SO.R2** report is the standard method for listing orders on hold in RoverERP. If your organization has custom modifications, the process may differ. Consult your system administrator if you do not see expected results.

---

<PageFooter />
