# Sales: Quote-to-Cash
<PageHeader />

## Overview
The quote-to-cash flow follows a customer commitment from initial pricing through order fulfillment, invoicing, and payment application. Rover ERP supports the process in both the desktop and web clients, ensuring pricing accuracy, shipment control, and timely cash collection.

**Flow Summary:** Quote (SO.Q) → Sales Order (SO.E) → Shipment (SHIP.E / SHIP.EU) → Post Shipment & AR Invoice (SHIP.P1) → Cash Receipt (CASH.E)

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
Customer Quote → Sales Order → Confirm Shipment → Post Shipment & Invoice → Apply Customer Payment
```

## SO.Q — Create the Sales Quote
**Purpose:** Capture pricing and terms before a customer commits to buy.

**How to access:** Desktop client → Sales → Quotes → SO.Q.

**Key steps:**
1. Enter the Customer ID (lookup supports search).
2. Add line items, scanning or searching for the part.
3. Review tiered pricing with the Price Break Matrix and adjust quantities as needed.
4. Set shipping method, tax, and notes.
5. Save to generate a quote number and optionally email or print the document.

**Key fields:** Customer, Part ID, Qty (drives pricing tier), Ship Via, Tax.

## SO.E — Convert Quote to Sales Order
**Purpose:** Accept the customer quote and create an executable sales order.

**How to access:** Desktop client → Sales → Orders → SO.E.

**Key steps:**
1. Enter the originating Quote number to preload header and line context.
2. Confirm or update ordered quantities so pricing tiers recalculate.
3. Set required ship dates, discounts, or holds as needed.
4. Respond to prompts for credit hold or work order creation when applicable.
5. Save and distribute the order acknowledgement.

**Key fields:** Quote, Qty Ordered, Required/Ship Date, Credit Hold, Work Order Link.

## SHIP.E / SHIP.EU — Prepare and Confirm Shipment
**Purpose:** Create and confirm shippers that define what leaves the warehouse.

**How to access:** Desktop client → Shipping → Shippers → SHIP.E (create) and SHIP.EU (update/confirm).

**Key steps:**
1. In SHIP.E, enter the Sales Order number to create the shipper.
2. Print the pack slip or pick list if needed.
3. In SHIP.EU, review lines, adjust quantities for partial shipments, and set Status to **Shipped**.
4. Confirm ship method, freight, and documentation before saving.

**Key fields:** Sales Order, Shipper ID, Status, Qty to Ship, Ship Via.

## SHIP.P1 — Post Shipment and Create AR Invoice
**Purpose:** Post confirmed shippers to relieve inventory and generate the AR invoice.

**How to access:** Desktop client → Shipping → Postings → SHIP.P1.

**Key steps:**
1. Enter the Shipper ID or range to post.
2. Run the posting to create the AR invoice and capture the invoice number.
3. Review the invoice in AR inquiry for accuracy, email distribution, or collections follow-up.

**Key fields:** Shipper ID, Posting Date, Generated Invoice Number.

## CASH.E — Record Customer Payments
**Purpose:** Apply customer payments against open invoices.

**How to access:** Desktop client → Accounts Receivable → Cash Receipts → CASH.E.

**Key steps:**
1. Select the Customer and load open invoices or specify invoice numbers.
2. Choose the payment type (cash, check, card, ACH) and confirm the cash account.
3. Enter the payment amount and allocation per invoice.
4. Set Status to **Posted** and save to finalize the receipt.

**Key fields:** Customer, Payment Type, Cash Account, Amount, Invoice Selection.

## Web Point of Sale — Quote, Ship, and Pay
**Purpose:** Provide an accelerated quote-to-cash experience within the Rover web client.

**How to access:** Rover Web → Point of Sale.

**Key steps:**
1. Create a Quote by selecting the customer, adding items, and saving the transaction.
2. Convert the quote to a Sales Order from the web order tile.
3. Finalize the order and ship; the web workflow posts the shipment and generates the invoice automatically.
4. Apply payment immediately via **Pay Invoice Now** to complete the cycle.

**Key fields:** Customer, Transaction Type, Qty, Payment Method, Invoice Number.

## Reports & Controls
- **SHIP.R1** for packing slip/pick list reprints.
- **AR Aging and Collections reports** to monitor outstanding balances.
- **Credit limit controls** to place orders on hold when exposure exceeds policy.
- **Invoice output profiles** to manage email or print distribution.

## Best Practices
- Use SO.E to convert approved quotes instead of re-keying new orders.
- Confirm credit status before releasing shipments to minimize financial risk.
- Validate shipment contents prior to posting to reduce credit/rebill cycles.
- Capture payments promptly and verify the cash account to prevent posting errors.
- Cross-reference purchasing commitments in [Purchasing: Procure-to-Payment](../procure-to-payment/README.md) when orders drive drop-ship or linked POs.

## Troubleshooting
| Symptom | Likely Cause | Resolution |
| --- | --- | --- |
| Order saved with unexpected pricing | Quote quantity changed without recalculating | Update the ordered quantity in SO.E and confirm the price break before saving. |
| Order placed on credit hold | Customer exceeds credit limit | Follow credit policy to obtain approval or adjust terms before releasing shipment. |
| No invoice after shipping | Shipper not posted | Run SHIP.P1 for the shipper to generate the AR invoice. |
| Cash receipt will not post | Cash account missing | Select the cash account in CASH.E and re-save the receipt. |
| Web invoice not available | Shipment not finalized in web POS | Use **Finalize & Ship** in the web workflow so posting runs automatically. |

<PageFooter />
