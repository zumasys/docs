# MRP Report Returns Blank in RoverERP

<PageHeader />

---

## Troubleshooting Steps

### 1. Check MRP.Q for Details

- Open **MRP.Q** (the MRP Query screen) and look up the affected part(s)
- MRP.Q provides detailed information about individual parts and will display the **date and time MRP was last run**
- Use this information to determine whether MRP data is current and whether the last run completed successfully

### 2. Rerun MRP.P1 If Needed

If MRP data is missing or out of date, **MRP.P1** can be run to rebuild the MRP files.

**How the process works:**
- When **MRP.P1** starts, it checks the **"Update In Process"** box in **PLAN.CONTROL**
- When the process completes successfully, the box is automatically unchecked
- This flag exists to prevent MRP.P1 from being run simultaneously by multiple users

**If the previous MRP.P1 run failed to complete:**
- The **"Update In Process"** box in **PLAN.CONTROL** will remain checked
- This box must be **manually unchecked** before MRP.P1 can be rerun
- Once cleared, run **MRP.P1** and monitor it to ensure it completes without errors

### 3. Rerun the MRP Report

- After **MRP.P1** completes successfully, have the user rerun **MRP.R4** or **MRP.R5** with their desired selections
- Confirm the report now returns data as expected

---

<PageFooter />
