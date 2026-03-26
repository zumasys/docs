# PO Not Showing Up or Delayed in "On Order" Tab in INV.Q

<PageHeader />

<badge text='Inventory' vertical='middle' />

## Problem Statement

Purchase orders (POs) are not appearing or are delayed in the "On Order" tab within the INV.Q screen in RoverERP.

---

## Symptoms

- Newly entered POs do not show up immediately in the "On Order" tab of INV.Q
- There is a noticeable delay before the PO appears
- Users may have had the part open in INV.Q while the PO was being entered in PO.E

---

## Cause

- If the part was open in INV.Q at the same time the PO was being entered in PO.E, the data may not refresh automatically
- This can result in the "On Order" tab not displaying the most current information

---

## Resolution Steps

### 1. Use the Refresh Button

- In INV.Q, navigate to the Summary Balances tab
- Click the "Refresh" button to force the system to update and populate the latest data

### 2. Reopen INV.Q

- Alternatively, close and reopen the INV.Q screen to trigger a data refresh

---

## Verification

- [ ] After refreshing, confirm that the PO now appears in the "On Order" tab
- [ ] Ensure that all recent POs are displayed as expected

---

## Note

- The refresh step is a workaround and should not typically be necessary, but it resolves the issue if data does not update automatically
- For persistent issues, report the problem to RoverERP support for further investigation

---

## Additional Information

- Avoid keeping the part open in INV.Q while entering new POs in PO.E to minimize the chance of delayed updates
- Monitor for future updates that may address this refresh behavior

<PageFooter />
