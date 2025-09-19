---
title: Rover BI — Getting Started Guide
sidebar_label: Getting Started
description: A practical roadmap for turning reports into live dashboards for small manufacturers using Rover BI.
---

# Rover BI — Getting Started

Turn your static reports into live, role-based dashboards your team will actually use. This guide shows you how to go from “emailed spreadsheets” to real-time visibility in a few small, high-value steps—without overwhelming your team.

> **Who this is for:** Small manufacturers and distributors using (or evaluating) Rover ERP and Rover BI.

---

## Why Dashboards (Not More Reports)

Most small manufacturers run on printed or emailed reports that arrive late and take time to compile. Dashboards flip that model:
- **Real-time** visibility (today’s shipments, current backlog, cash view).
- **Unified** view across departments (sales ↔ production ↔ inventory ↔ finance).
- **Actionable** at a glance (KPIs and trends that drive decisions).

> **Outcome to aim for:** Replace 1–2 high-traffic reports with a live dashboard everyone can check anytime.

---

## Prerequisites

- **Access**
  - Rover Hub account with access to **Rover BI**.
  - Appropriate data permissions for Sales Orders, Shipments, Inventory, Work Orders, and Financials.

- **Data Connections**
  - Rover BI connected to Rover ERP (via REST/standard Rover connectors).
  - (Optional) Spreadsheets/CSV/other systems you want to blend in.

- **People**
  - A small “dashboard taskforce” (1 person each from Exec, Sales/CS, Production, Finance).

---

## Quick Start (TL;DR)

1. **Pick one report** people constantly ask for (e.g., Yesterday’s Shipments).
2. **Create one widget** in Rover BI that shows the same number/chart live.
3. **Verify** it matches the last manual report.
4. **Share** the dashboard and use it in the next stand-up meeting.
5. **Iterate** based on feedback; add a second widget only after the first sticks.

> **Definition of Done (Phase 1):**
> - One live dashboard replaces a recurring emailed/printed report.
> - The team looks at it **daily** without reminders.

---

## Step 1 — Start with What You Know

**Goal:** Convert a familiar report into a live dashboard widget.

**Pick a starter report**
- Yesterday’s shipments
- Today’s order bookings
- WIP summary
- Top customers YTD

**Map the report to a widget**
- Identify 1–2 **key metrics** (e.g., *Units Shipped Yesterday*, *On-Time Delivery %*).
- **Connect** a dataset (Rover ERP source or CSV import).
- **Visualize** with a KPI tile or a simple bar/line chart.
- **Match & validate** against the last manual report.
- **Share** with the relevant team (viewer access is fine).

**Pro tip:** Put this single widget on a clean dashboard and name it clearly (e.g., `Shipments — Daily Pulse`).

---

## Step 2 — The 5 Starter Dashboards (Build these first)

Focus on 3–5 dashboards tied to real roles. Start simple; expand over time.

### 1) Executive Overview
**Audience:** Owners/GM/CEO  
**Purpose:** “How are we doing today?”  
**Starter widgets:**
- Bookings vs. Shipments (trend)
- Open Sales Order Backlog (value/count)
- Cash summary (MTD in/out)
- Top 5 Customers (YTD sales)

### 2) Sales & Orders
**Audience:** Sales Mgmt, CSR, Exec  
**Purpose:** Pipeline & fulfillment health  
**Starter widgets:**
- Weekly Bookings vs. Shipments
- Open Orders (by age or value)
- On-Time Delivery to Customers (%)
- Top Pending Orders (table)

### 3) Production & Operations
**Audience:** Production/Operations Leads  
**Purpose:** Output, flow, and stability  
**Starter widgets:**
- Daily Production vs. Target
- WIP (jobs due this week / on track)
- First-Pass Yield / Scrap Rate
- On-Time Production (%)

### 4) Inventory & Purchasing
**Audience:** Inventory, Purchasing, Planning  
**Purpose:** Material availability & turns  
**Starter widgets:**
- Top Items by Value (Qty on Hand vs. Reorder Level)
- Shortages due in next N days
- Inventory Turns
- Open POs with Expected Dates

### 5) Financial & Accounting
**Audience:** Controller, Finance, Owner  
**Purpose:** Cash, collections, margin  
**Starter widgets:**
- Cash on Hand + MTD In/Out
- AR Aging / AP Aging
- Revenue & Gross Margin (MTD vs. Budget or LY)
- Margin by Customer (Top 5)

> **Build order suggestion:** Production + Executive first, then Sales, Inventory, and Finance.

---

## Step 3 — Set Up Rover BI (Walkthrough)

1. **Log in**
   - Open Rover Hub → launch **Rover BI**.

2. **Connect data sources**
   - Use the standard Rover ERP connection (Orders, Shipments, Inventory, Work Orders, GL/AR/AP).
   - (Optional) Add spreadsheets/CSVs for supplemental data.

3. **Create your first dashboard**
   - `Add Dashboard` → name it (e.g., `Production — Daily`).
   - `Add Widget` → choose dataset → drag fields to axes → pick a simple chart/KPI.
   - Add filters (e.g., *This Month*, *This Week*).

4. **Save & share**
   - Save naming consistently: `Area — Purpose — Frequency` (e.g., `Sales — Bookings vs Shipments — Weekly`).
   - Share with relevant roles (Viewer/Editor permissions).

5. **Interact & iterate**
   - Click to drill into detail (if enabled).
   - Add a **second** widget only after the first is validated.

**Screenshots to capture (for docs/readme)**
- BI Home → `Add Dashboard`
- Data Source setup screen
- First widget config (fields + chart type)
- Sharing/permissions panel

---

## Step 4 — Drive Adoption (Make it stick)

**Start small**
- 1–2 metrics per dashboard to begin. Avoid clutter.

**Make it part of the meeting**
- Use the live dashboard in daily production stand-ups and weekly sales reviews.
- Stop sending the old report; send a **link/screenshot** of the dashboard instead.

**Build champions**
- 3–4 “power users” across departments; train them lightly to create/modify widgets.

**Teach the metrics**
- Include short **tooltips**/notes for OTD, Turns, Margin, etc.
- Publish a simple **Glossary** (see Appendix).

**Celebrate quick wins**
- Call out saved time, avoided stockouts, or faster collections driven by the dashboard.

**Protect trust**
- Reconcile early. If numbers differ, fix fast and explain definitions (e.g., Booked vs. Shipped).

---

## Step 5 — Expand from “Starter” to “Mature”

**Iterate existing dashboards**
- Add YoY lines, 12-month trends, or drill-downs after 2–4 weeks of usage.

**Introduce advanced metrics**
- OEE (Availability × Performance × Quality)
- Predictive views (simple trend projections for sales or stockouts)

**Integrate more data**
- CRM/e-commerce, vendor OTIF, MES/IoT machine data—only when there’s a clear use-case.

**Department-specific deep dives**
- Quality, Maintenance, Financial Statements, Purchasing.

**UX polish & alerts**
- Consistent colors (e.g., Sales=green, Shipments=blue, Backlog=red).
- Threshold alerts (e.g., low stock, AR over N days).

**Tell stories with data**
- Tie dashboards to goals (e.g., “OTD 98%”, “Turns from 4 → 6”).
- Review progress in monthly ops meetings.

---

## Templates You Can Clone

Use these as starting points inside your repo or BI template library:

- `Executive — Daily Health`
  - Bookings vs. Shipments (line)
  - Backlog (KPI)
  - Cash Summary (KPI)
  - Top 5 Customers (table)

- `Sales — Orders & Fulfillment`
  - Weekly Bookings vs. Shipments (combo)
  - Open Orders by Age (bar)
  - OTD % (gauge)
  - Top Pending Orders (table)

- `Production — Output & Quality`
  - Daily Output vs. Target (bar + target line)
  - WIP Due This Week (KPI/table)
  - First-Pass Yield % (KPI)
  - Scrap Rate (trend)

- `Inventory — Risk & Turns`
  - Qty on Hand vs. Reorder Level (bar)
  - Shortages Next 7–14 Days (table)
  - Inventory Turns (trend)
  - Open POs & Due Dates (table)

- `Finance — Cash & Margin`
  - Cash on Hand + MTD In/Out (combo)
  - AR/AP Aging (bars)
  - MTD Revenue vs. Budget (bar)
  - Margin by Customer (table)

---

## KPI Reference (define these once and reuse)

| KPI | What it means | Basic formula / definition | Where to show |
|---|---|---|---|
| On-Time Delivery (OTD) | % of customer orders delivered on/before promise | `On-time Shipments ÷ Total Shipments` | Sales, Executive |
| Inventory Turns | How fast you cycle stock | `COGS ÷ Avg Inventory` (period) | Inventory, Executive |
| Work-in-Progress (WIP) | Jobs/items currently in production | Count/value of open WOs | Production |
| Throughput | Units produced per time | Sum units per day/week | Production |
| First-Pass Yield (FPY) | % good units without rework | `Good Units ÷ Total Units` | Production/Quality |
| Scrap Rate | % defective/scrapped | `Scrap Units ÷ Total Units` | Production/Finance |
| Labor Utilization | % of available hours productive | `Prod Hours ÷ Available Hours` | Production |
| OEE | Overall machine effectiveness | `Availability × Performance × Quality` | Production |
| Avg Order Lead Time | Order to ship | Avg days from order date to ship date | Sales/Exec |
| Gross Margin % | Profit before overhead | `(Revenue − COGS) ÷ Revenue` | Finance |
| AR Aging | Receivables by age bucket | Standard AR aging buckets | Finance |
| Cash on Hand | Liquid cash position | Balance of cash accounts | Finance |

> **Consistency matters:** Decide definitions (e.g., OTD by order count vs. revenue) and stick with them.

---

## Glossary

- **Dashboard** — A single screen with multiple widgets/charts that summarize performance.
- **Widget** — A tile on a dashboard (chart, KPI, table, gauge).
- **KPI** — A metric tied to a business goal; monitored over time.
- **Data Source** — Where the data lives (Rover ERP, CSV, external system).
- **Dataset** — A query/view used by widgets (e.g., “Daily Shipments” with Date, Qty).
- **Drill-Down** — Clicking a summary to see its detailed components.
- **Filter** — A control that narrows the view (date range, product line, customer).
- **Real-Time** — Updates reflect current transactions (subject to source update cadence).
- **MultiValue (PICK)** — The database model used by Rover ERP; accessed via standard Rover connections.
- **API** — The interface Rover BI uses to fetch ERP data programmatically.
- **ETL** — Extract/Transform/Load; data prep (often minimized with Rover’s direct connections).
- **SaaS** — Cloud-delivered software; access Rover BI via browser.

---

## Rollout Checklist

- [ ] Pick 1 high-value report and create 1 live widget.
- [ ] Validate numbers match the latest manual report.
- [ ] Share the dashboard; use it in the next team meeting.
- [ ] Stop distributing the old report; link to the dashboard instead.
- [ ] Capture feedback; add exactly one improvement.
- [ ] Repeat for the second dashboard (different department).
- [ ] Publish KPI definitions & glossary in your wiki.
- [ ] Nominate 3–4 power users and train them.

---

## Troubleshooting

- **“The numbers don’t match.”**  
  Check dataset filters, date boundaries, and definition differences (e.g., booked vs. shipped). Align on a written definition.

- **“It’s too busy.”**  
  Remove or hide non-actionable widgets. Keep 3–6 widgets max per dashboard page.

- **“People still ask for the old report.”**  
  Make the dashboard part of recurring meetings. Stop sending the old report; send a link/screenshot instead.

- **“We need detail.”**  
  Enable drill-downs or link to a detail report page from the KPI.

---

## Contributing (Docs)

- Keep screenshots current with the latest UI.
- Use consistent naming: `Area — Purpose — Frequency`.
- Update **KPI definitions** any time a formula changes.
- Add new **templates** to the Templates section with a short rationale.

