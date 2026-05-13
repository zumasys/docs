# Purchasing: Procure-to-Payment
<PageHeader />

## Overview
The procure-to-payment flow manages the vendor lifecycle from purchase order creation through receiving, invoice matching, and payment. It ensures materials are received, validated, and paid in alignment with financial controls.

**Flow Summary:** Purchase Order (PO.E) → Receipt Entry (RECEIPTS.E) → Receipt Posting (RECEIPTS.P1) → AP Invoice (AP.E) → Pay Selection (AP.P1) → Check Printing (CHECKS.P1) → Payment Posting (CHECKS.P2) → GL Interface (GLINT.P1)

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
PO Creation → Receive Goods → Post Receipts → Match Vendor Invoice → Select for Payment → Print & Post Checks → GL Interface
```

## PO.E — Create the Purchase Order
**Purpose:** Define material, service, or blanket orders issued to suppliers.

**How to access:** Desktop client → Purchasing → Purchase Orders → PO.E.

**Key steps:**
1. Leave PO number blank to auto-assign and enter the Part ID (vendor defaults and **POPRICE.E** pricing load automatically).
2. Confirm vendor, need dates, units of measure, and pricing including quantity breaks.
3. Verify Buying U/M and the conversion to inventory U/M to prevent receipt confusion.
4. Use **Detail → Schedule** to split deliveries or manage blanket releases; use **Summary** tab for rapid multi-schedule entry.
5. Set receive-to targets such as work orders, sales orders, or projects when required. For outside processing, assign the WO part # with WIP locations and WO#/Operation.
6. Save, respond to Change Number prompt, and email/print the PO to the vendor.

**Key fields:** Part ID, Vendor, Req/Need Date, Unit Price, Schedule, Receive-To, Vendor Part #.

## RECEIPTS.E — Record Goods Receipt
**Purpose:** Capture delivered quantities and traceability data.

**How to access:** Desktop or web receiving → Purchasing → Receipts → RECEIPTS.E.

**Key steps:**
1. Enter the PO number to load open lines.
2. Record received quantities or use **Receive All** when shipments are complete. If the PO contains phantom items, the Components tab fills automatically—enter lot/bin for controlled components.
3. Enter lot, bin, or serial data for controlled items and capture packing slip information.
4. Change status to **R** to commit inventory. While status is **N**, edits and deletions are allowed; once inventory is updated, use RECEIPTS.E3 to reverse.
5. Select dock-to-stock or inspection location per quality policy.
6. Save and print the receipt traveler if material needs physical routing.

**Key fields:** PO Number, Status (N/R), Qty Received, Lot/Bin/Serial, Receive Location, Packing Slip.

## RECEIPTS.P1 — Post Receipts
**Purpose:** Move receipts from new to posted status, updating inventory and the general ledger.

**How to access:** Desktop client → Purchasing → Postings → RECEIPTS.P1.

**Key steps:**
1. Select specific receipt IDs or a date/range.
2. Run the posting process, typically aligned with a scheduled job.
3. Review posting output for exceptions before continuing to invoice matching.

**Key fields:** Receipt ID, Posting Date, Output Report.

## RECEIPTS.E2 — Debit / Return to Vendor
**Purpose:** Create a debit against a prior receipt for damaged, short, or rejected material.

**How to access:** Desktop client → Purchasing → Receipts → RECEIPTS.E2.

**Key steps:**
1. Enter the original receipt and select entire or partial lines for debit.
2. Choose **Create MSHIP** when return paperwork is needed; inventory reduces when the MSHIP status reaches **S** (Shipped).
3. Save; the debit receipt auto-updates to **S** when the linked MSHIP ships.

**Key fields:** Original Receipt, Qty Debited, Create MSHIP, MSHIP Status.

## RECEIPTS.E3 — Reverse / Delete Receipt
**Purpose:** Fully reverse a receipt when an error cannot be corrected by debit.

**How to access:** Desktop client → Purchasing → Receipts → RECEIPTS.E3.

**Key steps:**
1. Enter the receipt to reverse and confirm the action.
2. Reversal is blocked if later receipts, posted debits, or AP accrual changes exist against the record.
3. Associated AP accrual records are deleted when appropriate.

**Key fields:** Receipt ID, Original Status (N/R/P).

## AP.E — Enter the Vendor Invoice
**Purpose:** Perform three-way match between PO, receipt, and invoice.

**How to access:** Desktop client → Accounts Payable → Invoice Entry → AP.E.

**Key steps:**
1. Load the transaction by entering the receipt number in the AP ID field.
2. Enter vendor invoice number (duplicate-check fires automatically), **Invoice Date**, **Register Date**, and amount. Register Date drives GL posting and aging; Invoice Date is the vendor's document date.
3. Resolve variances: book price differences to PPV per policy; quantity issues go back to Receiving. Partial invoices leave residual accruals until cleared.
4. Use the **Related AP Items** tab to consolidate multiple accruals into one invoice when needed.
5. Save the voucher and route per approval policy.

**Key fields:** AP ID (Receipt), Invoice Number, Invoice Date, Register Date, Header Amount, Line Variance, PPV.

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
2. Print to the secure check printer (CHECKS.F2 for laser, CHECKS.F1 for tractor) and verify output.
3. Retain control totals for reconciliation before posting.

**Key fields:** Check Run, Starting Check Number, Bank Account.

> **Ad-hoc payments:** Use **CHECKS.E** for prepayments or hand checks outside the batch cycle. Use **CHECKS.E2** to stop-pay or void a posted check (void re-opens the AP items unless the void-AP option is selected).

## CHECKS.P2 — Post Payments
**Purpose:** Finalize payments to update AP, the check register, and the general ledger.

**How to access:** Desktop client → Accounts Payable → Payment Processing → CHECKS.P2.

**Key steps:**
1. Enter the check run and range of successfully printed checks.
2. Post the run; reprint any exceptions and post separately.
3. File posted reports for audit support.

**Key fields:** Check Run, Check Range, Posting Date.

## ACH Payments (Optional)
**Purpose:** Process electronic payments for vendors with ACH banking on file.

**How to access:** AP.CONTROL → Payments tab (bank/paths); VENDOR.E → Payment tab (routing/account/ACH notice email).

**Key steps:**
1. Build the pay run with **AP.P1** using the **ACH Only** option.
2. Post the electronic checks with **CHECKS.P1**.
3. Generate the ACH file with **CHECKS.P7** and transmit with **CHECKS.P8** (manual upload or automated).

**Key fields:** ACH Routing, ACH Account, ACH File, Transmission Status.

## GLINT.P1 — GL Interface
**Purpose:** Transfer posted AP register entries to the General Ledger.

**How to access:** Desktop client → General Ledger → Interfaces → GLINT.P1.

**Key steps:**
1. Run GLINT.P1 after completing the payment posting cycle (safe to re-run).
2. Verify GL balances tie to AP aging (AP.R3 using Register Date basis).
3. Handle closed-period items per controller policy.

**Key fields:** Period, Interface Status.

## Reports & Controls
- **VENDOR.Q** vendor inquiry: open items, payment history, receipts, and accruals in one view.
- **AP.R1** items awaiting invoicing for received-not-invoiced reconciliation.
- **AP.R5** items due to be paid to drive weekly pay selections.
- **AP.R3** aging report (Invoice Date, Due Date, or Register Date basis) for period-end tie-outs.
- **AP.R9** as-of accruals report for month-end reconciliation.
- **AP.R10** GL distribution detail for audit and variance analysis.
- **APREG.R1/R2** register listings (detail/summary) for transaction research.
- **PO Change tracking (Change # / Date)** for revision history with suppliers.
- **Positive pay and approval settings** managed in AP.CONTROL.

## Best Practices
- Split deliveries using PO.E schedules to align receipts with demand.
- Verify Buying U/M and conversion factor before saving a PO line to prevent receipt confusion.
- Use the N→R status flow in RECEIPTS.E to catch errors before inventory commits; correct while **N** when possible, RECEIPTS.E3 after **R**.
- Run RECEIPTS.P1 daily; ensure zero **R** status receipts at month-end.
- Use RECEIPTS.E2 for vendor debits/returns with MSHIP paperwork; reserve RECEIPTS.E3 for full reversals.
- Balance AP.E header and line totals prior to saving to avoid suspense postings; book price variances to PPV, send quantity issues back to Receiving.
- Require pre-check approvals (PRECHECKS.E2) when policy calls for dual authorization.
- Use VENDOR.Q to review open items and payment history before selecting pay runs.
- Coordinate with [Sales: Quote-to-Cash](../quote-to-cash/index.md) when drop-ship or linked orders are involved.
- Run GLINT.P1 after each payment posting cycle to keep GL current.

## Troubleshooting
| Symptom | Likely Cause | Resolution |
| --- | --- | --- |
| Cannot change receipt location during receiving | Location is controlled on the PO | Reverse the receipt, adjust the PO location, and re-receive the goods. |
| Header and line totals mismatch in AP.E | Freight, tax, or price variance not reconciled | Adjust line amounts or add variance/freight entries until the totals balance; book PPV per policy. |
| Check numbers out of sequence | Incorrect starting check number entered in CHECKS.P1 | Void the run if necessary, reset the selection, and reprint using the correct starting number. |
| Missing PO in receiving worklist | Planned order not released to PO | Release the planned order in PLAN.E or create the PO manually, then reopen RECEIPTS.E. |
| PO did not pull vendor price | POPRICE.E row missing or expired | Add/update the POPRICE.E row with correct effectivity and qty break; refresh the PO line. |
| Invoice missing from pay run | Cutoff date or vendor hold excluded it | Re-run AP.P1 with corrected cutoff and check vendor hold; use PRECHECKS.E to add if needed. |
| Discount missed on payment | Terms or Date to Pay mismatch | Verify terms in VENDOR.E and Date to Pay in AP.P1; use **Force Discount** per policy. |
| Accrual will not clear | Partial invoice or mismatched receipt | Investigate remaining qty; coordinate with Receiving for corrections. Do not edit AP to force a match. |
| Cannot delete receipt | Blocked by later receipts, debits, or AP accrual edits | Use RECEIPTS.E2 for a debit with paperwork or work the proper adjustment path to preserve the audit trail. |
| Debit did not remove stock | MSHIP checked but not shipped | Inventory reduces when the MSHIP ships (Status=S); confirm MSHIP.E status. |

<PageFooter />
