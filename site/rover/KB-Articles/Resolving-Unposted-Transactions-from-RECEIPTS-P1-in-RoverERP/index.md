# Resolving Unposted Transactions from RECEIPTS.P1 in RoverERP

<PageHeader />

<badge text='Accounting' vertical='middle' />

---

## Resolution Steps

### 1. Check Nightly Service Status

- Verify if SERVICE.CONTROL is scheduled to run nightly
- Confirm whether the service ran successfully for the affected period

### 2. Review for Failures or Stuck Processes

- If SERVICE.CONTROL did not run or failed, investigate the cause
- Restart the service if it is stuck or not running

### 3. Manually Run RECEIPTS.P1

- Execute RECEIPTS.P1 manually for the affected receipts to post transactions to accounts payable
- Monitor for errors or warnings during the manual run

### 4. Run GLINT.P1 if Needed

- If accounts payable postings are still missing after running RECEIPTS.P1, run GLINT.P1 to ensure all integrations and postings are completed

---

<PageFooter />
