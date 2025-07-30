# AP Setup and Configuration

<PageHeader />

This module covers the initial setup and configuration of the Rover ERP Accounts Payable module. Proper configuration is critical for successful implementation and ongoing operations.

## Prerequisites

Before beginning AP setup, ensure the following modules are properly configured:

- **General Ledger (GL):** Chart of accounts must be complete and operational
- **Company Information:** Basic company setup including fiscal periods
- **User Security:** User profiles and access permissions defined
- **System Parameters:** Basic system configuration completed

## Configuration Checklist

### 1. AP Control Record Setup

The AP Control Record ([AP.CONTROL](../../AP-CONTROL/README.md)) is the foundation of the AP module configuration.

**Key Configuration Areas:**

#### Account Number Assignments
```
AP Accrual Account: 2000 (or customer's AP liability account)
AP Expense Account: 5000 (default expense account for miscellaneous items)
Cash Account: 1000 (primary cash account for payments)
Discount Account: 4050 (account for early payment discounts)
```

#### Numbering Sequences
- **AP Item Numbering:** Auto-assign or manual entry
- **Check Numbering:** Starting check number and increment
- **Precheck Numbering:** System-generated sequence

#### Processing Options
- **Date Validation:** Controls for AP item dates
- **Approval Requirements:** Single or multi-level approval workflows
- **Recurring Processing:** Automatic or manual recurring item creation

### 2. Document Settings

#### AP Item Configuration
- **Required Fields:** Specify mandatory data entry fields
- **Default Values:** Set up defaults for common entries
- **Line Item Limits:** Maximum number of line items per AP record

#### Check Processing
- **Check Format:** Standard business check or custom format
- **Signature Requirements:** Single or dual signature thresholds
- **MICR Settings:** Bank routing and account information

### 3. Integration Setup

#### General Ledger Interface
```
GL Interface Method: Real-time or batch
Account Validation: Strict or warning-only
Period Controls: Current period only or allow future periods
```

#### Purchase Order Integration
- **PO Matching:** Three-way matching requirements
- **Receipt Processing:** Automatic AP creation from receipts
- **Variance Handling:** Procedures for price and quantity variances

## Step-by-Step Setup Process

### Step 1: Access AP Control Record
1. Navigate to **Accounts Payable → Setup → AP Control**
2. Enter period `.` to create new control record or existing record ID

### Step 2: Configure Account Assignments
1. **AP Account:** Enter your chart of accounts liability account number
2. **Cash Account:** Enter primary checking account number
3. **Expense Account:** Enter default expense account for miscellaneous items
4. **Discount Account:** Enter account for recording early payment discounts

### Step 3: Set Numbering Parameters
1. **Auto-assign AP Numbers:** Recommend "Y" for most implementations
2. **Next AP Number:** Starting number for AP items (suggest 100001)
3. **Check Number Range:** Starting check number from bank

### Step 4: Configure Processing Options
1. **Date Controls:** Set appropriate date validation rules
2. **Approval Limits:** Configure approval workflow thresholds
3. **Terms Processing:** Enable automatic calculation of due dates

### Step 5: Save and Test Configuration
1. Save the control record
2. Test with sample AP item entry
3. Verify GL integration is working properly

## Common Configuration Issues

### Issue: GL Account Validation Errors
**Symptom:** Cannot save AP items due to invalid account numbers
**Solution:** 
- Verify chart of accounts is properly loaded
- Check account number format matches GL setup
- Ensure accounts are marked as active

### Issue: Check Numbering Problems
**Symptom:** Duplicate check numbers or numbering gaps
**Solution:**
- Verify check number sequence in control record
- Check for existing check records in CHECKS file
- Reset sequence if necessary after verifying no conflicts

### Issue: Date Validation Failures
**Symptom:** Cannot enter AP items with certain dates
**Solution:**
- Review date control settings in AP.CONTROL
- Verify fiscal period setup in GL module
- Adjust date validation rules as needed

## Best Practices

### Account Structure
- Use consistent account numbering scheme
- Create separate AP accounts for different types of payables
- Consider departmental expense account structure

### Security Setup
- Limit AP.CONTROL access to system administrators
- Implement appropriate approval hierarchies
- Regular review of user access permissions

### Documentation
- Document all configuration decisions
- Maintain change log for control record modifications
- Create backup of configuration before major changes

## Validation Testing

After completing setup, perform these validation tests:

1. **Basic AP Entry:** Create sample AP item and verify GL posting
2. **Check Processing:** Generate test check and validate formatting
3. **Reporting:** Run basic AP reports to verify data access
4. **Integration:** Test PO-to-AP integration if applicable

## Implementation Examples

### Manufacturing Company Setup
*Based on anonymized customer implementation*

A mid-size manufacturing company required complex approval workflows:
- **Single approval** for items under $1,000
- **Department manager approval** for items $1,000-$5,000  
- **Controller approval** for items over $5,000
- **Automatic** recurring utility payments

**Configuration Approach:**
- Set up three-tier approval hierarchy in control record
- Created recurring AP items for monthly utilities
- Configured automatic PO matching for inventory purchases

### Service Company Setup
*Based on anonymized customer implementation*

A professional services firm needed simple, fast processing:
- **Minimal approvals** for operational efficiency
- **Quick payment** processing for vendor relationships
- **Detailed expense** tracking by project

**Configuration Approach:**
- Single approval level for amounts over $500
- Daily check runs with same-day payment option
- Project-based expense account structure

---

**Next Module:** [Vendor Management Setup](../VENDOR-SETUP/README.md)

<PageFooter />