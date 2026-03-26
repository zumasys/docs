# MRP Report Returns Blank Due to Stuck Update-in-Process Flag in RoverERP

<PageHeader />

## Problem Statement

Users are attempting to run an MRP report (**MRP.CR4**) in RoverERP, but the report is returning blank results. This issue persists even when correct selections are made and the process has worked successfully in the past.

---

## Symptoms

- **MRP.CR4** returns no data (blank report), despite valid selections
- The issue can be replicated by logging in as the affected user
- Users confirm that the report has worked previously and provide examples of successful past reports

---

## Cause

- The **MRP.P1** job, which updates MRP data, did not complete successfully during its last run
- The **update in process** flag in **PLAN.CONTROL** was not cleared, preventing subsequent MRP processes and reports from running correctly

---

## Resolution Steps

### 1. Check the Status of the MRP.P1 Job

- Review job logs or status messages to determine if the last **MRP.P1** run completed successfully
- Look for any errors or indications that the process was interrupted

### 2. Clear the Update in Process Flag

- Access **PLAN.CONTROL** in RoverERP
- Locate the **update in process** flag
- If the flag is set, clear it to indicate that no update is currently running

### 3. Rerun the MRP.P1 Job

- Execute **MRP.P1** to update MRP data
- Monitor the process to ensure it completes without errors

### 4. Run the MRP Report Again

- After **MRP.P1** completes, have the user rerun **MRP.CR4** with their desired selections
- Confirm that the report now returns data as expected

---

## Verification

- [ ] **MRP.CR4** displays data based on the user's selections
- [ ] The **update in process** flag in **PLAN.CONTROL** is cleared after **MRP.P1** completes
- [ ] Users can generate MRP reports as they have in the past

---

> **Note:**  
> If the issue recurs, review the scheduling and completion of **MRP.P1** jobs to ensure they are not interrupted. Training may be required if users are unfamiliar with the correct report selections or process steps.

---

## Additional Information

- If you continue to experience issues with MRP reports or job processing, contact RoverERP support for further troubleshooting
- Always verify that all control flags are cleared before rerunning critical MRP processes

---

<PageFooter />
