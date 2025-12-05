# Planning: Material Planning → PO → Receipt
<PageHeader />

## Overview
The material planning flow connects demand signals to purchasing execution and receiving feedback. It guides planners from parameter setup through MRP review, purchase order release, and goods receipt so inventory stays aligned with production and customer demand.

**Flow Summary:** Planning Parameters (PART.E) → MRP / Min-Max Review (MRP.P1, MINMAX.R*) → Release Planned Orders (PLAN.E) → Purchase Order (PO.E) → Receipt Entry (RCV.E) → Inventory Update & MRP Recalculation

## Audience
- Material planners and buyers
- Inventory analysts and replenishment specialists
- Operations managers overseeing supply continuity

## Modules
- Material Requirements Planning (MRP)
- Purchasing
- Inventory & Receiving

## End-to-End Flow Diagram
```
Demand Inputs → Plan (MRP / Min-Max / TPOP) → Release to PO → Receive Goods → Update Inventory → Refresh Planning
```

## PART.E — Configure Items for Planning
**Purpose:** Establish planning methods, policies, and lead times for each item.

**How to access:** Desktop client → Manufacturing → Part Maintenance → PART.E.

**Key steps:**
1. Navigate to **Material Control** and select a planning method (Min/Max, MRP, or Both).
2. Assign buyer, planner, planning group, and order policy (Discrete or Fixed with multiples).
3. Define safety stock, maximum stock, order minimums, and lead time.
4. Set optional scrap factors or pegging preferences and save.

**Key fields:** Planning Method, Buyer/Planner, Safety Stock, Max Stock, Order Policy, Lead Time.

## MINMAX Reports — Monitor Static Reorder Items
**Purpose:** Identify replenishment needs for items managed via Min/Max control.

**How to access:** Reports → Inventory → Min/Max (e.g., MINMAX.R5).

**Key steps:**
1. Filter by buyer, vendor, or exception type.
2. Review on-hand, open orders, and usage to prioritize shortages or excess.
3. Trigger purchase orders or adjustments based on violations.

**Key fields:** Safety (Min), Max, Usage, On-Hand, Open Orders.

## MRP.P1 & MRP.Q — Run and Review Net Planning
**Purpose:** Net supply and demand to generate planned orders and action messages.

**How to access:** Manufacturing → Planning → MRP.P1 (run) and MRP.Q (inquiry).

**Key steps:**
1. Execute MRP.P1 (or scheduled MRP.RUN) including safety stock.
2. In MRP.Q, review requirements, receipts, projected balances, and action messages for each item.
3. Prioritize expedite messages, then new order recommendations, and finally push-outs.

**Key fields:** Requirements, Receipts, Projected Balance, Action Messages.

## PLAN.CONTROL — Define Planning Buckets
**Purpose:** Configure time fences and visibility in MRP inquiries.

**How to access:** Manufacturing → Planning → PLAN.CONTROL.

**Key steps:**
1. Set bucket horizons (e.g., daily/weekly/monthly) and included order types.
2. Save and verify bucket display inside MRP.Q to confirm alignment with planning cadence.

**Key fields:** Bucket Horizons, Included Demand Types, Start Date.

## Time-Phased Order Point (TPOP) — Extend Forecast Demand
**Purpose:** Layer forecast consumption beyond firm order horizons.

**How to access:** PART.E → Material Control → TPOP fields.

**Key steps:**
1. Enter monthly TPOP quantity for items requiring long-range coverage.
2. Set the start offset so TPOP demand begins after firm supply already exists.
3. Save and confirm future buckets in MRP.Q include the forecast quantities.

**Key fields:** TPOP Quantity, Start Offset, Planning Method.

## MRP.R4 / MRP.R5 — Build the Buyer Workbench
**Purpose:** Summarize planning actions by vendor or part for execution.

**How to access:** Manufacturing → Planning Reports → MRP.R4 (by Vendor) / MRP.R5 (by Part).

**Key steps:**
1. Filter by planner, buyer, vendor, or commodity.
2. Export or print the report for supplier communication.
3. Focus on expedite and new order lines before addressing push-outs.

**Key fields:** Vendor, Part, Required Date, Suggested Quantity, Action Type.

## PLAN.E — Release Planned Orders
**Purpose:** Convert approved planned orders into purchase orders.

**How to access:** Manufacturing → Planning → PLAN.E.

**Key steps:**
1. Filter by buyer, planner, or vendor to load relevant suggestions.
2. Review quantities and dates; adjust when supply or demand has shifted.
3. Select **Release** for approved lines and save to create POs automatically.

**Key fields:** Planned Order, Vendor, Release Flag, Quantity, Required Date.

## PO.E — Issue Purchase Orders
**Purpose:** Finalize purchase orders created from planning recommendations.

**How to access:** Purchasing → Purchase Orders → PO.E (see detailed guidance in [Purchasing: Procure-to-Payment](../procure-to-payment/README.md)).

**Key steps:**
1. Review automatically generated POs, updating pricing or schedules as needed.
2. Communicate changes to suppliers and capture acknowledgements via notes.
3. Print or email the PO to begin the supply execution phase.

**Key fields:** Part, Vendor, Schedule Dates, Unit Price, Receive-To.

## RCV.E — Receive Goods and Close the Loop
**Purpose:** Record deliveries so inventory and planning data reflect current supply.

**How to access:** Purchasing → Receipts → RCV.E (also referenced in the procure-to-payment flow).

**Key steps:**
1. Locate the released PO and enter received quantities, lots, or bins.
2. Post the receipt (RECEIPTS.P1) to update inventory and the general ledger.
3. Verify updates in part inquiry; MRP will consume the receipt during the next run.

**Key fields:** PO Number, Qty Received, Lot/Bin, Posting Status.

## Reports & Controls
- **MRP.R6** and pegging reports for root-cause analysis of demand drivers.
- **MINMAX** exception reports to monitor static reorder items.
- **Planning calendars** maintained in PLAN.CONTROL for synchronized review cycles.
- **Supplier action logs** documenting expedite or push-out agreements.

## Best Practices
- Run MRP daily so buyers act on the latest demand picture.
- Use usage-based safety stock values to prevent chronic shortages or excess.
- Consolidate releases by vendor to streamline communication and freight.
- Coordinate with [Purchasing: Procure-to-Payment](../procure-to-payment/README.md) to ensure POs created from planning follow standard receiving and payment steps.
- Review receipts' impact on planned supply before mass releasing new orders.

## Troubleshooting
| Symptom | Likely Cause | Resolution |
| --- | --- | --- |
| Repeated stockouts on critical items | Safety stock or lead time set too low | Update safety stock and lead time in PART.E, rerun MRP, and monitor results. |
| Excess inventory accumulating | De-expedite messages not actioned | Review MRP.R4/MRP.R5 push-outs and adjust PO schedules or cancel supply. |
| Planned orders not creating POs | Release flag not selected in PLAN.E | Mark the planned order for release and save; verify PO creation in PO.E. |
| PO missing when attempting to receive | Planned order remained unreleased | Release the suggestion in PLAN.E or create a manual PO before receiving. |
| Duplicate demand in future buckets | TPOP overlapping with firm orders | Extend the TPOP start offset or adjust forecast quantities to remove overlap. |

<PageFooter />
