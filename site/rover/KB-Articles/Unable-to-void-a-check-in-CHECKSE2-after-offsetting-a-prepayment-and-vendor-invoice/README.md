# Unable to Void a Check in CHECKS.E2 After Offsetting a Prepayment and Vendor Invoice

<PageHeader />
## Problem Statement

Users are unable to void a check in CHECKS.E2 after a prepayment and vendor invoice have been offset. This situation arises when a prepayment is issued, a vendor invoice is posted, and the two are offset. If the vendor does not receive their check, users may find they cannot void the check due to the prior offset.

---

## Symptoms

- Attempting to void a check in CHECKS.E2 fails after a prepayment and vendor invoice have been offset
- The system does not allow the void operation due to the existing offset
- The issue is encountered after discovering that the vendor did not receive their check

---

## Cause

The inability to void the check is due to the offset transaction between the prepayment and the vendor invoice. Once the debit has been applied to the invoice on a specific check, the system restricts voiding the check directly because of the linked transactions.

---

## Resolution Steps

**1. Identify the Checks Involved**

- Determine which check applied the debit to the invoice (e.g., check `A901`)
- Identify the check that needs to be voided (e.g., check `140404`)

**2. Void or Delete the Check That Applied the Debit**

- In **CHECKS.E2**, void or delete the check that applied the debit to the invoice (e.g., check `A901`)

**3. Void the Target Check**

- After voiding or deleting the first check, proceed to void the check that could not previously be voided (e.g., check `140404`)

---

## Verification

After completing the resolution steps, confirm the following:

- Both checks have been successfully voided or deleted in **CHECKS.E2**
- The offset between the prepayment and vendor invoice has been properly reversed
- The vendor's account reflects the correct status after the voids

**Note:** Always review the transaction history and consult with your accounting team before voiding or deleting checks to ensure compliance with your organization's financial procedures.

---

## Additional Information

- If you continue to experience issues with voiding checks after offsets, review the transaction links in **CHECKS.E2** and ensure all related transactions are addressed
- For complex cases or uncertainty, contact RoverERP support for further assistance

<PageFooter />
