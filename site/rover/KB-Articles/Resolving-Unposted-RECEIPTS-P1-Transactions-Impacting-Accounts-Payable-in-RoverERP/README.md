# Resolving Unposted RECEIPTS.P1 Transactions Impacting Accounts Payable

<PageHeader />

## Problem Statement

Unposted transactions from **RECEIPTS.P1** between **1/28/26** and **1/31/26** are causing discrepancies. **RECEIPTS.R1** shows items as received, but there are no corresponding postings to accounts payable for **1/28-1/30**. This issue is affecting the month-end closing process.

---

## Symptoms

- **RECEIPTS.R1** confirms items were received during the specified dates
- No accounts payable postings exist for receipts dated **1/28-1/30**
- Month-end closing cannot be completed due to missing postings

---

## Cause

- **RECEIPTS.P1** transactions for the affected dates were not posted to accounts payable
- This may be due to the posting process not being run, errors during posting, or transactions being left in an unposted state

---

## Resolution Steps

### 1. Review Unposted Receipts

- Run **RECEIPTS.R1** for the affected dates (**1/28/26-1/31/26**) to identify all received items
- Note which receipts have not been posted to accounts payable

### 2. Check Posting Status

- Access the **RECEIPTS.P1** module
- Review the status of receipts for the affected dates to confirm they are unposted

### 3. Post Unposted Transactions

- In **RECEIPTS.P1**, select the unposted receipts from **1/28/26-1/31/26**
- Execute the posting process to update accounts payable
- Monitor for any errors or warnings during posting

### 4. Verify Accounts Payable Postings

- After posting, review accounts payable records to ensure all receipts from the affected dates are now reflected
- Confirm that the postings match the items shown as received in **RECEIPTS.R1**

### 5. Reconcile and Complete Month-End Closing

- Ensure all discrepancies are resolved
- Proceed with the month-end closing process once all postings are complete

---

## Verification

- [ ] All receipts from **1/28/26-1/31/26** are posted to accounts payable
- [ ] **RECEIPTS.R1** and accounts payable records are in agreement
- [ ] Month-end closing can proceed without further issues

---

> **Note:**  
> If errors occur during posting, review system logs or error messages for further troubleshooting. Ensure posting processes are run regularly to prevent future discrepancies.

---

## Additional Information

- For persistent posting issues, or if transactions remain unposted after following these steps, contact RoverERP support for assistance
- Document all actions taken for audit and reconciliation purposes

---

<PageFooter />
