# Purchasing: Procure-to-Payment
<PageHeader />

## Overview
The procure-to-payment flow manages the vendor lifecycle from purchase order creation through receiving, invoice matching, and payment. It ensures materials are received, validated, and paid in alignment with financial controls.

**Flow Summary:** Purchase Order (PO.E) → Receipt Entry (RECEIPTS.E / RCV.E) → Receipt Posting (RECEIPTS.P1) → AP Invoice (AP.E) → Pay Selection (AP.P1) → Check Printing (CHECKS.P1) → Payment Posting (CHECKS.P2)

## Audience
- Buyers and purchasing coordinators
- Receiving teams and inventory control
- Accounts payable clerks and accounting managers

## Modules
- Purchasing
- Inventory & Receiving
- Accounts Payable
- General Ledger

## End-to-End Flow Diagram
```
PO Creation → Receive Goods → Post Receipts → Match Vendor Invoice → Select for Payment → Print & Post Checks
```

## PO.E — Create the Purchase Order
**Purpose:** Define material, service, or blanket orders issued to suppliers.

**How to access:** Desktop client → Purchasing → Purchase Orders → PO.E.

**Key steps:**
1. Leave PO number blank to auto-assign and enter the Part ID (vendor defaults load from item settings).
2. Confirm vendor, need dates, units of measure, and pricing including break tables.
3. Use **Detail → Schedule** to split deliveries or manage blanket releases.
4. Set receive-to targets such as work orders, sales orders, or projects when required.
5. Save, respond to Change Number prompt, and email/print the PO to the vendor.

**Key fields:** Part ID, Vendor, Req/Need Date, Unit Price, Schedule, Receive-To.

## RECEIPTS.E / RCV.E — Record Goods Receipt
**Purpose:** Capture delivered quantities and traceability data.

**How to access:** Desktop or web receiving → Purchasing → Receipts → RECEIPTS.E (aka RCV.E).

**Key steps:**
1. Enter the PO number to load open lines.
2. Record received quantities or use **Receive All** when shipments are complete.
3. Enter lot, bin, or serial data for controlled items and capture packing slip information.
4. Save and print the receipt traveler if material needs physical routing.

**Key fields:** PO Number, Qty Received, Lot/Bin/Serial, Packing Slip, Notes.

## RECEIPTS.P1 — Post Receipts
**Purpose:** Move receipts from new to posted status, updating inventory and the general ledger.

**How to access:** Desktop client → Purchasing → Postings → RECEIPTS.P1.

**Key steps:**
1. Select specific receipt IDs or a date/range.
2. Run the posting process, typically aligned with a scheduled job.
3. Review posting output for exceptions before continuing to invoice matching.

**Key fields:** Receipt ID, Posting Date, Output Report.

## AP.E — Enter the Vendor Invoice
**Purpose:** Perform three-way match between PO, receipt, and invoice.

**How to access:** Desktop client → Accounts Payable → Invoice Entry → AP.E.

**Key steps:**
1. Load the transaction by entering the receipt number in the AP ID field.
2. Enter vendor invoice number, invoice date, register date, and amount.
3. Resolve variances (quantity, price, freight) so header and line totals balance.
4. Save the voucher and route per approval policy.

**Key fields:** AP ID (Receipt), Invoice Number, Register Date, Header Amount, Line Variance.

## AP.P1 — Select Items to Pay
**Purpose:** Stage invoices for payment on a specific pay date.

**How to access:** Desktop client → Accounts Payable → Payment Processing → AP.P1.

**Key steps:**
1. Set the **Date to Pay** and load open items for all or selected vendors.
2. Mark invoices to include in the run and execute the selection.
3. Capture the resulting check run number for downstream steps.

**Key fields:** Date to Pay, Vendor, Invoice Selection, Check Run.

## PRECHECKS Review — Optional Approval
**Purpose:** Review and approve staged payments when dual control is required.

**How to access:** PRECHECKS.R1 for review, PRECHECKS.E for edits, PRECHECKS.E2 for approvals when enabled in AP.Control.

**Key steps:**
1. Run PRECHECKS.R1 to review totals and supporting detail.
2. Edit discounts or amounts in PRECHECKS.E if adjustments are needed.
3. Approve the run in PRECHECKS.E2 when approval requirements are active.

**Key fields:** Check Run, Discount Amounts, Approval Status.

## CHECKS.P1 — Print Checks
**Purpose:** Produce payment documents and capture check numbers.

**How to access:** Desktop client → Accounts Payable → Payment Processing → CHECKS.P1.

**Key steps:**
1. Enter the check run number and starting check number.
2. Print to the secure check printer and verify output.
3. Retain control totals for reconciliation before posting.

**Key fields:** Check Run, Starting Check Number, Bank Account.

## CHECKS.P2 — Post Payments
**Purpose:** Finalize payments to update AP, the check register, and the general ledger.

**How to access:** Desktop client → Accounts Payable → Payment Processing → CHECKS.P2.

**Key steps:**
1. Enter the check run and range of successfully printed checks.
2. Post the run; reprint any exceptions and post separately.
3. File posted reports for audit support.

**Key fields:** Check Run, Check Range, Posting Date.

## POSPAY.C1 — Generate Positive Pay (Optional)
**Purpose:** Produce bank upload files for fraud prevention.

**How to access:** Desktop client → Accounts Payable → Banking → POSPAY.C1.

**Key steps:**
1. Select the relevant check run and bank format.
2. Generate the positive pay file.
3. Upload to the bank prior to the cutoff time.

**Key fields:** Check Run, Bank Code, Transmission File.

## Reports & Controls
- **APR1 – Items Awaiting Invoicing** for received-not-invoiced reconciliation.
- **APR5 – Items Due to be Paid** to drive weekly selections.
- **AP Register and GL interface audits** to confirm posting results.
- **PO Change tracking (Change # / Date)** for revision history with suppliers.
- **Positive pay and approval settings** managed in AP.Control.

## Best Practices
- Split deliveries using PO.E schedules to align receipts with demand.
- Validate receipt locations, lots, and counts before running RECEIPTS.P1.
- Balance AP.E header and line totals prior to saving to avoid suspense postings.
- Require pre-check approvals when policy calls for dual authorization.
- Coordinate with [Sales: Quote-to-Cash](../quote-to-cash/README.md) when drop-ship or linked orders are involved.

## Troubleshooting
| Symptom | Likely Cause | Resolution |
| --- | --- | --- |
| Cannot change receipt location during receiving | Location is controlled on the PO | Reverse the receipt, adjust the PO location, and re-receive the goods. |
| Header and line totals mismatch in AP.E | Freight, tax, or price variance not reconciled | Adjust line amounts or add variance/freight entries until the totals balance. |
| Check numbers out of sequence | Incorrect starting check number entered in CHECKS.P1 | Void the run if necessary, reset the selection, and reprint using the correct starting number. |
| Positive pay rejected by the bank | File not generated for the posted check run | Re-run POSPAY.C1 for the specific run and resend before cutoff. |
| Missing PO in receiving worklist | Planned order not released to PO | Release the planned order in PLAN.E or create the PO manually, then reopen RECEIPTS.E. |

<PageFooter />
