# Resolving Parts on Order Still Driving Demand in RoverERP

<PageHeader />

<badge text='Inventory' vertical='middle' />

## Problem Statement

Parts that are already on order are still appearing as driving demand in RoverERP, leading to inaccurate demand calculations.

---

## Symptoms

- Parts with existing purchase orders continue to show as driving demand
- Demand planning or MRP reports indicate demand for parts that are already on order

---

## Cause

- The Receipt Location (Receipt Loc) and Stock Location (Stock Loc) on the purchase order may not match the locations set in PARTS.E
- If the locations are set incorrectly (for example, set to STK instead of INSP-A or DAP), the system may not recognize the on-order parts as fulfilling demand

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

## Verification

- [ ] Confirm that parts on order are no longer showing as driving demand in reports or planning screens
- [ ] Ensure that demand calculations now accurately reflect on-order quantities

---

## Note

- Consistent location settings between PARTS.E and purchase orders are essential for accurate demand planning
- Review and update location settings regularly to prevent similar issues

---

## Additional Information

- For persistent issues or complex scenarios, contact RoverERP support for further assistance
- Document any changes made for audit and tracking purposes

<PageFooter />
