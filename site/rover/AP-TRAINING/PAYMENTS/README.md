# Payment Processing

<PageHeader />

This module covers the complete payment processing workflow in Rover ERP, from payment run preparation through check printing and posting. It includes best practices developed through numerous customer implementations.

## Payment Processing Overview

The Rover ERP payment system uses a two-stage process for maximum control and error prevention:

1. **Pre-check Processing:** Items are selected and prepared for payment
2. **Check Printing and Posting:** Actual checks are printed and transactions posted

This staged approach allows for review, correction, and reprinting if needed without affecting the permanent AP records.

## Payment Files Structure

### Key Files in Payment Processing

#### PRECHECKS File
- Staging area for items selected for payment
- Allows review and modification before printing
- Can be regenerated if printing issues occur

#### CHECKS File
- Contains posted payment records
- Created after successful check printing
- Permanent record of all payments made

#### AP File Updates
- Items marked as paid after check posting
- Payment information linked to original AP record
- Available balance updated for future payments

## Pre-Check Processing ([PRECHECKS.E](../../PRECHECKS-E/README.md))

### Payment Selection Criteria

#### By Due Date
Select items based on payment due dates:
```
Selection Criteria:
- Due date <= Payment run date
- Status = Open (not on hold)
- Available balance > 0
```

#### By Vendor
Select all eligible items for specific vendors:
- Useful for vendor-specific payment runs
- Allows for vendor payment prioritization
- Good for cash flow management

#### By Amount Range
Select items within specific amount ranges:
- Process small payments separately
- Handle large payments with additional controls
- Batch similar-sized payments for efficiency

### Step-by-Step Pre-Check Process

#### Step 1: Access Pre-Check Processing
1. Navigate to **AP → Payments → Pre-Check Processing**
2. Enter selection criteria for payment run

#### Step 2: Set Selection Parameters
1. **Through Date:** Latest due date to include
2. **Vendor Range:** Specific vendors or all vendors
3. **Amount Range:** Minimum and maximum amounts
4. **Bank Account:** Which checking account to use

#### Step 3: Review Selection
1. **Item Count:** Number of items selected
2. **Total Amount:** Total payment amount
3. **Vendor Count:** Number of vendors included
4. **Date Range:** Date span of selected items

#### Step 4: Generate Pre-Checks
1. **Execute Selection:** System creates PRECHECKS records
2. **Review Report:** Detailed list of items selected
3. **Make Adjustments:** Add/remove items as needed

### Pre-Check Modifications

#### Adding Items to Payment Run
1. Access individual pre-check records
2. Add specific AP items manually
3. Verify vendor and amount information

#### Removing Items from Payment Run
1. Delete pre-check records for items to exclude
2. Note reason for exclusion
3. Re-schedule for future payment run

#### Modifying Payment Amounts
1. Change payment amount for partial payments
2. Document reason for partial payment
3. Ensure remaining balance is tracked

## Check Printing ([CHECKS.P2](../../CHECKS-P2/README.md))

### Pre-Printing Checklist

#### Physical Preparation
- [ ] Load check stock in printer
- [ ] Verify check alignment and format
- [ ] Test print with sample check
- [ ] Confirm adequate check inventory

#### System Preparation
- [ ] Review pre-check totals and counts
- [ ] Verify bank account information
- [ ] Confirm starting check number
- [ ] Back up system before processing

### Check Printing Process

#### Step 1: Access Check Printing
1. Navigate to **AP → Payments → Check Printing**
2. Select payment run (PRECHECKS batch)

#### Step 2: Set Printing Parameters
1. **Starting Check Number:** First check number to use
2. **Bank Account:** Verify correct account
3. **Check Date:** Date to print on checks
4. **Signature Line:** Authorized signature information

#### Step 3: Print Checks
1. **Execute Print Run:** System prints checks from PRECHECKS
2. **Monitor Progress:** Watch for printer issues
3. **Handle Errors:** Address jams or alignment problems

#### Step 4: Review Printed Checks
1. **Quality Check:** Verify print quality and alignment
2. **Amount Verification:** Spot-check amounts against invoices
3. **Signature Review:** Confirm signature requirements met

### Check Printing Best Practices

#### Printer Setup
- Use dedicated check printer for security
- Maintain consistent check stock and alignment
- Regular maintenance to prevent jams
- Backup printer for continuity

#### Security Measures
- Secure check stock storage
- Limited access to check printing function
- Dual control for large amounts
- Audit trail for all printed checks

#### Error Handling
- **Printer Jams:** Restart from last good check number
- **Alignment Issues:** Reprint affected checks
- **Wrong Information:** Void and reprint checks
- **Insufficient Checks:** Order more stock and resume

## Check Posting ([CHECKS.P1](../../CHECKS-P1/README.md))

### Post-Printing Validation

Before posting checks to the permanent files:

#### Physical Validation
1. **Count Printed Checks:** Verify all checks printed correctly
2. **Review Check Register:** Confirm amounts and vendors
3. **Sign Checks:** Obtain required signatures
4. **Separate Checks:** Organize for distribution

#### System Validation
1. **Check Count:** Verify system count matches physical count
2. **Total Amount:** Confirm total matches bank account impact
3. **Date Verification:** Ensure check dates are correct
4. **Bank Reconciliation:** Prepare for bank rec impact

### Check Posting Process

#### Step 1: Access Check Posting
1. Navigate to **AP → Payments → Check Posting**
2. Select completed print run for posting

#### Step 2: Final Review
1. **Print Check Register:** Final review document
2. **Verify Totals:** Confirm amounts and counts
3. **Authorization:** Obtain required approvals

#### Step 3: Execute Posting
1. **Post Checks:** System creates CHECKS records
2. **Update AP Items:** Mark items as paid
3. **Update Vendor Balances:** Reduce open balances
4. **Create GL Entries:** Post to general ledger

#### Step 4: Confirm Posting
1. **Review Posted Checks:** Verify all checks posted
2. **Check AP Updates:** Confirm items marked paid
3. **GL Verification:** Verify general ledger entries

## Manual Check Processing

### Hand-Written Checks

For urgent or special payments that bypass the normal check run:

#### Step 1: Create Manual Check Record
1. Access **AP → Payments → Manual Check Entry**
2. Enter check number and amount
3. Select AP items to pay

#### Step 2: Record Payment Details
1. **Check Date:** Date check was written
2. **Bank Account:** Account check was drawn on
3. **Payee Information:** Verify vendor details
4. **Payment Amount:** Total check amount

#### Step 3: Apply to AP Items
1. **Select Items:** Choose AP items to pay with this check
2. **Apply Amounts:** Distribute check amount across items
3. **Handle Discounts:** Apply early payment discounts if applicable

### ACH and Wire Transfers

For electronic payments:

#### ACH Processing
1. **Set Up Vendor ACH Information:** Bank routing and account
2. **Generate ACH File:** Electronic payment file creation
3. **Bank Transmission:** Send file to bank for processing
4. **Record Payments:** Manual entry of ACH payments

#### Wire Transfers
1. **Authorization Process:** Additional approvals required
2. **Bank Communication:** Telephone or secure transmission
3. **Documentation:** Complete wire transfer documentation
4. **Record Keeping:** Maintain wire transfer records

## Payment Approval Workflows

### Standard Approval Process

#### Single Approval Level
```
Payment Run Creation → Manager Review → Check Printing → Posting
```

#### Dual Approval Process
```
Payment Run Creation → Department Approval → Controller Approval → Check Printing → Posting
```

#### Amount-Based Approval
```
< $1,000: Automatic approval
$1,000-$5,000: Department manager approval
> $5,000: Controller approval
> $10,000: Additional CFO approval
```

### Approval Controls

#### Electronic Approvals
- Email notifications for pending approvals
- Electronic signature capture
- Audit trail of approval actions
- Automatic escalation for overdue approvals

#### Manual Approvals
- Printed approval forms
- Physical signature requirements
- Filing of approval documentation
- Manual tracking of approval status

## Common Payment Issues

### Issue: Check Printing Alignment Problems
**Symptoms:** Amounts print in wrong location on checks
**Causes:** 
- Incorrect printer setup
- Wrong check format selected
- Printer mechanical issues

**Solutions:**
- Verify check format settings
- Test print alignment before production run
- Adjust printer settings as needed
- Maintenance on printer mechanisms

### Issue: Duplicate Payments
**Symptoms:** Same invoice paid multiple times
**Causes:**
- Manual checks not recorded properly
- System errors in payment processing
- User error in payment selection

**Solutions:**
- Implement proper manual check procedures
- Regular review of paid items
- Audit controls for duplicate detection
- Void and reissue procedures

### Issue: Bank Reconciliation Discrepancies
**Symptoms:** Check register doesn't match bank statement
**Causes:**
- Timing differences in check clearing
- Outstanding checks not accounted for
- Bank errors or fees not recorded

**Solutions:**
- Regular bank reconciliation procedures
- Outstanding check tracking
- Proper recording of bank fees and charges
- Investigation of discrepancies

## Implementation Examples

### High-Volume Manufacturing Environment
*Based on anonymized customer implementation*

**Challenge:** Process 500+ payments weekly with tight cash flow controls

**Solution Implemented:**
- Daily payment runs for cash management
- Three-tier approval process based on amounts
- Automated bank file generation for ACH payments
- Real-time cash position reporting

**Results:**
- Improved vendor relationships through timely payments
- Better cash flow control and forecasting
- Reduced manual processing errors
- Enhanced audit trails

### Multi-Location Service Company
*Based on anonymized customer implementation*

**Challenge:** Centralized payment processing for 12 locations

**Solution Implemented:**
- Centralized payment approval workflow
- Location-specific expense account validation
- Electronic approval process for remote managers
- Consolidated check runs with location tracking

**Results:**
- Streamlined payment processing across locations
- Improved expense visibility by location
- Reduced banking costs through consolidation
- Enhanced management reporting capabilities

---

**Next Module:** [Integration Points](../INTEGRATION/README.md)

<PageFooter />