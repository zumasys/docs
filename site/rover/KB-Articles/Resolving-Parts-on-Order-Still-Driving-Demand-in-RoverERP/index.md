# Resolving Parts on Order Still Driving Demand in RoverERP

<PageHeader />

<badge text='Inventory' vertical='middle' />

---

## Resolution Steps

### 1. Check Location Settings in PARTS.E

- Navigate to PARTS.E for the affected part
- Review the Receipt Loc and Stock Loc fields to determine the correct locations

### 2. Review Purchase Order Locations

- Open the relevant purchase order(s) for the part
- Verify that the Receipt Loc and Stock Loc on the PO match the settings in PARTS.E

### 3. Update Purchase Order Locations if Needed

- If the PO locations do not match the PARTS.E settings (for example, set to STK instead of INSP-A or DAP), update the PO with the correct location information

### 4. Save and Reprocess Demand

- Save the changes to the purchase order
- Re-run demand planning or MRP processes to confirm that the part is no longer incorrectly driving demand

---

<PageFooter />
