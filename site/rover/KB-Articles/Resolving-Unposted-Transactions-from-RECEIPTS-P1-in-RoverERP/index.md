# Resolving Unposted Transactions from RECEIPTS.P1 in RoverERP

<PageHeader />

<badge text='Accounting' vertical='middle' />

## Problem Statement

Items are shown as received in RECEIPTS.R1, but there is no associated posting to accounts payable, indicating unposted transactions from RECEIPTS.P1.

---

## Symptoms

- RECEIPTS.R1 confirms items have been received
- No corresponding accounts payable postings exist for these receipts
- Month-end or financial reconciliation is impacted by missing postings

---

## Cause

- The RECEIPTS.P1 process did not complete successfully, leaving transactions unposted
- The nightly SERVICE.CONTROL job may not have run or may have failed
- Additional integration processes (such as GLINT.P1) may also need to be run

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

## Verification

- [ ] Confirm that all received items now have corresponding accounts payable postings
- [ ] Check that RECEIPTS.R1 and accounts payable records are in agreement
- [ ] Ensure that financial reconciliation and reporting are accurate

---

## Note

- Regularly monitor the status of nightly jobs and posting processes to prevent unposted transactions
- Document any manual interventions for audit purposes

---

## Additional Information

- For persistent posting issues or if transactions remain unposted after following these steps, contact RoverERP support for further assistance
- Review system logs for detailed error messages if processes fail

<PageFooter />
