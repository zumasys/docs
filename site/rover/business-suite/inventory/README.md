# Rover Hub – Inventory › Parts

<PageHeader />

> Screen path: `Inventory → Parts`  
> App URL (from address bar): `https://app.zumasyslabs.com/inventory/parts`  
> App version (footer): **v2.14.0**

## Overview

The **Parts** screen lists all inventory items and their current quantities. From here you can search, filter, sort, create new parts, and navigate through the list with pagination controls.

---

## Page Layout

### Header

- **Zumasys / Inventory** product header.

### Section Tabs

- **Parts** (active)
- **Purchase Orders** (adjacent tab)

### Toolbar (right of the search box)

- **Filters**: funnel icon – opens filtering options for the grid (e.g., by quantity or attribute).
- **New Part**: orange **+ New Part** button – creates a new part record.

### Left Navigation

- Vertical icon bar linking to other modules/areas (icons only).

---

## Search & Filters

- **Search for Parts**: free-text field that narrows the grid by part number/description as you type.
- **Filters** (funnel icon): add structured filters (e.g., show only parts with shortages or with available < 0).

---

## Grid / Columns

Each row represents a part. The first cell shows the **description** (or "No description available") and the **Part #** (e.g., `#CAP10`, `#LEDMOUNT`, `#10P0005-TEMP`).

| Column | What it shows / how it's used |
|--------|-------------------------------|
| Part # | Identifier for the part. Click a row to open details (when available). Sortable. |
| Location | Storage location/bin (blank if not set). |
| On Hand | Quantity physically in stock across the selected scope. Sortable. |
| Committed | Quantity promised/allocated to demand (e.g., orders). Sortable. |
| Allocated | Quantity assigned/reserved to specific jobs/tasks. Sortable. |
| Shortages | Quantity short versus demand (often positive values indicating needed qty). Sortable. |
| Available | Net free quantity. Negative values indicate over-commitment (e.g., -31.17 in the screenshot). Sortable. |
| On Order | Quantity expected from open purchase orders. Sortable. |

> **Tip:** Each column header shows a small up/down indicator. Click to toggle ascending/descending sort.

---

## Pagination & List Size

- Pagination controls at the bottom: `« ‹ 1 2 3 4 5 › »`.
- Status text example: **"Showing 1 to 10 of 11851 Items."**
- **Page size** selector (bottom-right) defaults to **10** items per page; choose a larger value to see more rows per page.

---

## Common Tasks

### 1) Find a part quickly

1. Click in **Search for Parts**.
2. Type any part number or keyword (e.g., `LEDMOUNT`).
3. Press **Enter** or wait for the grid to update.

### 2) Show only parts with problems (e.g., negative available)

1. Click the **Filters** (funnel) icon.
2. Add a rule such as **Available < 0** (or choose "Shortages > 0").
3. Apply filters to update the grid.

### 3) Create a new part

1. Click **+ New Part**.
2. Fill in required fields (part number, description, units, etc.).
3. Save to add it to the list.

### 4) Sort by a quantity

1. Click a column header (e.g., **Shortages**).
2. Click again to flip ascending/descending.

### 5) Change how many rows you see

1. At the bottom-right, open the page-size dropdown (defaults to **10**).
2. Choose a larger number (e.g., **25** or **50**).

### 6) Switch to Purchase Orders

- Click the **Purchase Orders** tab near the top of the page.

---

## Interpreting Values

- **Decimals:** Quantities may include decimals (e.g., `31.17`).
- **Negative Available:** Indicates demand exceeding free stock (e.g., `Allocated 31.17` and **Available `-31.17`**).
- **Blank Location:** Part exists but no location is set (or location column not used).

---

## Examples Visible in the Screenshot

- Sample part numbers include: `#CAP10`, `#LEDMOUNT`, `#NEW.ITEM`, `#10P0005-TEMP`, `#10P0065-TEMP`, `#EJ-TESTLOT1`, `#PHY-VIE`.
- The list shows **10** items per page and a total of **11,851** items.

---

## Footer

- Copyright © 2021–2025 Zumasys Inc.
- Version link: **v2.14.0** (useful when reporting issues).

---

### Notes & Best Practices

- Use **filters** to narrow large lists before exporting or mass updates.
- Sort by **Shortages** or **Available** to triage inventory issues first.
- If your counts look off, check **Committed**, **Allocated**, and **On Order** to understand why **Available** may be negative.

---

## Related Documentation

[Related Parts](related-parts/README.md)

[PO Receipts](receiving/README.md)
