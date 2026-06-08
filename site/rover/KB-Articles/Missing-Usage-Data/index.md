# Missing Usage Data

<PageHeader />

### The process used to generate usage is USAGE.P1.

1. If data is missing, check to see if the process is included in a nightly or monthly service. If it has been, verify that the service is running. If it’s not, restart it.
2. If the process is not included in a service, it needs to be run manually at the end of each month.
3. Run USAGE.P1 for missing months. Please refer to the procedure help in USAGE.P1 for more information about the process.

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

<PageFooter />
