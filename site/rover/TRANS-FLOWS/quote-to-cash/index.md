# Sales: Quote-to-Cash
<PageHeader />

## Overview
The quote-to-cash flow follows a customer commitment from initial pricing through order fulfillment, invoicing, and payment application. Rover ERP supports the process in both the desktop and web clients, ensuring pricing accuracy, shipment control, and timely cash collection.

**Flow Summary:** Quote (SOQUOTE.E) → Sales Order (SO.E) → Shipment (SHIP.E / SHIP.E2) → Post Shipment & AR Invoice (SHIP.P1) → Cash Receipt (CASH.E)

## Audience
- Sales coordinators and order entry specialists
- Shipping and logistics teams
- Accounts receivable clerks and accounting managers

## Modules
- Sales Order Management
- Shipping and Logistics
- Accounts Receivable

## End-to-End Flow Diagram
```
Customer Quote → Sales Order → Pick/Pack/Ship → Confirm Shipment → Post Shipment & Invoice → Apply Customer Payment
```

## SOQUOTE.E — Create the Sales Quote
**Purpose:** Capture pricing and terms for stock or known parts before a customer commits to buy.

**How to access:** Desktop client → Sales → Quotes → SOQUOTE.E.

**Key steps:**
1. Enter or select the Customer (lookup supports search).
2. Add line items with part, quantity, and pricing; quantity breaks are applied from matrix pricing.
3. Set shipping method, tax, validity dates, and notes.
4. Save to generate a quote number; email or print the document.
5. Track quote status (Sent/Accepted/Lost) and capture reason codes when applicable.

**Key fields:** Customer, Part ID, Qty (drives pricing tier), Ship Via, Tax, Status.

## SO.E — Convert Quote to Sales Order
**Purpose:** Accept the customer quote and create an executable sales order.

**How to access:** Desktop client → Sales → Orders → SO.E.

**Key steps:**
1. Load the originating Quote to preload header and line context.
2. Confirm or update ordered quantities so pricing tiers recalculate.
3. Set required and promise ship dates, discounts, or holds as needed.
4. Respond to prompts for credit hold or work order creation when applicable.
5. Save and distribute the order acknowledgement (SO.F3).

**Key fields:** Quote, Qty Ordered, Required/Ship Date, Customer PO, Credit Hold, Work Order Link.

## SHIP.E — Create the Shipment
**Purpose:** Create shippers from sales orders and initiate the pick process.

**How to access:** Desktop client → Shipping → Shippers → SHIP.E.

**Key steps:**
1. Enter the Sales Order number to create the shipper.
2. Print the pick list for warehouse fulfillment (SO.R17).

**Key fields:** Sales Order, Shipper ID.

## SHIP.E2 — Confirm Shipment
**Purpose:** Review, adjust, and confirm shippers before posting.

**How to access:** Desktop client → Shipping → Shippers → SHIP.E2.

**Key steps:**
1. Review lines and adjust quantities for partial shipments.
2. Capture freight charges, packages/weights, and tracking numbers.
3. Enter serial, lot, or bin data for controlled items as needed.
4. Set Status to **S** (Shipped) and save.

**Key fields:** Shipper ID, Status, Qty to Ship, Freight, Ship Via, Tracking.

## SHIP.P1 — Post Shipment and Create AR Invoice
**Purpose:** Post confirmed shippers (Status=S) to relieve inventory and generate the AR invoice.

**How to access:** Desktop client → Shipping → Postings → SHIP.P1.

**Key steps:**
1. Enter the Shipper ID, range, or cutoff date to post.
2. Run the posting to create the AR invoice, commissions, and sales history.
3. Review the invoice in AR inquiry for accuracy, email distribution, or collections follow-up.

**Key fields:** Shipper ID, Posting Date, Cutoff, Generated Invoice Number.

## CASH.E — Record Customer Payments
**Purpose:** Apply customer payments against open invoices.

**How to access:** Desktop client → Accounts Receivable → Cash Receipts → CASH.E.

**Key steps:**
1. Select the Customer and load open invoices or specify invoice numbers.
2. Enter the check number or reference and confirm the cash account.
3. Set the payment type (e.g., ACH) when applicable.
4. Apply the payment amount per invoice; handle partials, discounts, on-account balances, and cross-applied credits.
5. Apply write-offs per policy when small balances remain.
6. Assign a Deposit ID and save to finalize the receipt.

**Key fields:** Customer, Check/Reference, Payment Type, Cash Account, Amount, Deposit ID, Invoice Selection.

> **Reversal:** Use **CASH.E2** to reverse a posted cash session when a correction is needed.

## Web Point of Sale — Quote, Ship, and Pay
**Purpose:** Provide an accelerated quote-to-cash experience within the Rover web client.

**How to access:** Rover Web → Point of Sale.

**Key steps:**
1. Create a Quote by selecting the customer, adding items, and saving the transaction.
2. Convert the quote to a Sales Order from the web order tile.
3. Finalize the order and ship; the web workflow handles posting the shipment and generating the invoice.
4. Apply payment to complete the cycle.

**Key fields:** Customer, Transaction Type, Qty, Payment Method, Invoice Number.

## Reports & Controls
- **SO.F3** order acknowledgement for customer distribution.
- **SO.R17** pick list for warehouse fulfillment.
- **SHIP.F6** packing slip and **SHIP.F5** invoice form for shipping documents.
- **SHIP.R1** for packing slip/pick list reprints.
- **CUST.Q** for customer inquiry: open orders, shipments, AR, and contacts.
- **AR Aging (AR.R3)** and collections reports to monitor outstanding balances.
- **CASH.R1/R2** check register and deposit summary reports.
- **Credit limit controls** to place orders on hold when exposure exceeds policy.
- **SHIP.E3** to reverse a posted shipment when corrections require inventory adjustment.

## Best Practices
- Use SO.E to convert approved quotes (Load Quote) instead of re-keying new orders.
- Confirm credit status before releasing shipments to minimize financial risk.
- Use the two-step fulfillment flow (SHIP.E → SHIP.E2) for warehouse control; capture freight and tracking in SHIP.E2 before posting.
- Validate shipment contents prior to posting to reduce credit/rebill cycles.
- Capture payments promptly and verify the cash account to prevent posting errors.
- Use **SHIP.E3** for same-day shipment corrections and **RMA** for customer returns; do not edit quantities in AR.
- Cross-reference purchasing commitments in [Purchasing: Procure-to-Payment](../procure-to-payment/index.md) when orders drive drop-ship or linked POs.

## Troubleshooting
| Symptom | Likely Cause | Resolution |
| --- | --- | --- |
| Order saved with unexpected pricing | Quote quantity changed without recalculating | Re-pull pricing or lock the quoted price per policy; confirm in SO.E before saving. |
| Order placed on credit hold | Customer exceeds credit limit | Follow credit policy to obtain approval or adjust terms before releasing shipment. |
| No invoice after shipping | Shipper not posted or Status not set to S | Confirm Status=S in SHIP.E2, then run SHIP.P1 for the shipper. |
| Cash receipt will not post | Cash account missing | Select the cash account in CASH.E and re-save the receipt. |
| Cash applied to wrong invoice | Incorrect allocation during entry | Reverse the cash session with CASH.E2 and re-apply correctly. |
| Freight missing on invoice | Not captured before posting | Add freight in SHIP.E2 before posting; otherwise AR can amend price/freight only. |
| Web invoice not available | Shipment not finalized in web POS | Finalize the shipment in the web workflow so posting runs and the invoice is generated. |

<PageFooter />
