# Resolving Usage Data Not Updating Due to USAGE.P1 Process Not Running

<PageHeader />

## Problem Statement

Usage data is not being updated as expected. The process responsible for updating usage, **USAGE.P1**, may not be running as part of the scheduled nightly or monthly services, resulting in missing or outdated usage records.

---

## Symptoms

- Usage data is not current or missing for recent periods
- Scheduled updates to usage are not reflected in reports or system screens
- No recent job status messages indicating successful completion of the **USAGE.P1** process

---

## Cause

- The **USAGE.P1** process, which updates usage data, is not running as part of the scheduled nightly or monthly service
- The service responsible for running **USAGE.P1** may have stopped or failed
- Restarting the service does not retroactively update usage for periods missed while the process was not running

---

## Resolution Steps

### 1. Verify USAGE.P1 Scheduling

- Check if **USAGE.P1** is included in the nightly or monthly service schedule
- Review the job scheduler or service configuration to confirm inclusion

### 2. Check Job Status Messages

- Review job status logs or messages to determine if **USAGE.P1** has been running as scheduled
- Look for any errors or failures related to the process

### 3. Restart the Service (If Not Running)

- If the service responsible for running **USAGE.P1** is not active, restart it according to your system's procedures
- Monitor to ensure the service starts successfully

### 4. Manually Run USAGE.P1 for Missed Periods

If usage data was not updated for a prior period (e.g., December), manually execute **USAGE.P1** for the affected period:

1. Access the appropriate menu in RoverERP
2. Navigate to the process execution screen for **USAGE.P1**
3. Specify the period (e.g., December) for which usage needs to be updated
4. Run the process and monitor for completion

### 5. Verify Usage Data

- After running **USAGE.P1**, check that usage data is updated for the specified period
- Review reports or screens that display usage to confirm accuracy

---

## Verification

- [ ] Confirm that **USAGE.P1** is included in the scheduled services and is running as expected
- [ ] Ensure that usage data is current for all periods, including any that required manual updates
- [ ] Check job status messages for successful completion of the process

---

> **Note:**  
> Restarting the service only resumes updates for future periods; it does not update usage for periods missed while the service was not running. Manual execution of **USAGE.P1** is required to update usage for any missed periods.

---

## Additional Information

- For ongoing issues with scheduled processes, review system logs and consult with your IT administrator or RoverERP support
- Document all steps taken and retain screenshots for audit and troubleshooting purposes

---

<PageFooter />
