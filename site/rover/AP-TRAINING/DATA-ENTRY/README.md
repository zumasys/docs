# Data Entry Procedures

<PageHeader />

This module covers the day-to-day AP data entry procedures, workflow configuration, and best practices for accurate and efficient invoice processing. Content is based on real customer implementations and field-tested approaches.

## AP Entry Overview

The primary data entry screen ([AP.E](../../AP-E/README.md)) is where most AP processing begins. Understanding efficient data entry procedures is critical for user productivity and data accuracy.

### Entry Methods

#### 1. Manual Invoice Entry
- Direct entry of vendor invoices
- Line-by-line detail entry
- Manual GL account distribution

#### 2. Purchase Order Matching
- Match invoices to existing PO receipts
- Automatic population of line items
- Three-way matching validation

#### 3. Recurring Item Processing
- Automated creation from APR records
- Monthly utilities, rent, services
- Reduces manual entry workload

## Step-by-Step Invoice Entry

### Basic Invoice Entry Process

#### Step 1: Access AP Entry
1. Navigate to **Accounts Payable → Data Entry → AP Entry**
2. Enter period (`.`) for new invoice or existing AP ID

#### Step 2: Header Information
1. **Vendor ID:** Enter vendor number or use name lookup
2. **Invoice Number:** Enter vendor's invoice number
3. **Invoice Date:** Date from vendor invoice
4. **Terms:** Auto-populated from vendor master, editable
5. **Description:** Brief description of invoice purpose

#### Step 3: Line Item Entry
For each line item:
1. **Account Number:** GL account for expense
2. **Amount:** Line item amount (positive for expenses)
3. **Description:** Detailed line description
4. **Project/Department:** If using departmental accounting

#### Step 4: Validation and Save
1. **Review totals:** Ensure header total matches line items
2. **Check distributions:** Verify GL account assignments
3. **Save record:** System validates and saves

### Advanced Entry Features

#### Multiple Account Distributions
Single invoice line can be distributed across multiple GL accounts:
```
Line 1: Office Supplies - $500
  Account 5100 - $300 (Administration)
  Account 5200 - $200 (Sales Department)
```

#### Project/Job Costing
When integrated with project management:
- Enter project codes for cost tracking
- Automatic budget validation
- Project profitability analysis

#### Tax Handling
- Automatic tax calculations based on vendor setup
- Manual tax override capabilities
- Tax-exempt vendor processing

## Purchase Order Matching

### Three-Way Matching Process

#### Automated Matching
1. **Receipt Creation:** PO receipt creates accrual item
2. **Invoice Matching:** Match vendor invoice to receipt
3. **Automatic Population:** System fills line items from receipt
4. **Variance Resolution:** Handle price/quantity differences

#### Manual Matching Steps
1. **Access AP Entry:** Start new AP item
2. **Enter Vendor:** Select vendor with outstanding receipts
3. **Select Receipt:** Choose from list of unmatched receipts
4. **Review Details:** Verify quantities and pricing
5. **Resolve Variances:** Handle differences per company policy

### Variance Handling

#### Price Variances
**When invoice price differs from PO price:**
- Document reason for variance
- Obtain approval if over tolerance
- Post variance to designated account

#### Quantity Variances
**When invoice quantity differs from receipt:**
- Verify actual quantities received
- Adjust receipt if necessary
- Handle partial receipts appropriately

## Recurring Item Setup

### Creating Recurring AP Items ([APR.E](../../APR-E/README.md))

#### Step 1: Access Recurring Entry
1. Navigate to **AP → Data Entry → Recurring AP Entry**
2. Enter period (`.`) for new recurring item

#### Step 2: Configure Recurrence
1. **Frequency:** Monthly, quarterly, annually
2. **Start Date:** When processing should begin
3. **End Date:** When processing should stop (optional)
4. **Processing Day:** Day of month for automatic creation

#### Step 3: Invoice Template
1. **Vendor Information:** Standard vendor and terms
2. **Line Items:** Template for each occurrence
3. **Amount Handling:** Fixed amounts or variable entry

### Recurring Processing ([APR.P1](../../APR-P1/README.md))

**Automated Processing:**
- Run monthly to create AP items from APR records
- System creates items based on due dates
- Manual review before posting

**Manual Processing:**
- Review generated items for accuracy
- Make adjustments for variable amounts
- Approve for final posting

## Workflow Configuration

### Approval Workflows

#### Single-Level Approval
```
Entry → Approval (if over limit) → Payment Queue
```

#### Multi-Level Approval
```
Entry → Department Approval → Accounting Approval → Payment Queue
```

#### Amount-Based Approval
```
< $500: No approval required
$500-$2000: Department manager approval
> $2000: Controller approval
```

### Status Management

#### AP Item Status Codes
- **Open:** Available for payment
- **Hold:** On hold pending resolution
- **Approved:** Ready for payment processing
- **Paid:** Payment has been issued

## Data Entry Best Practices

### Accuracy Guidelines

#### Invoice Verification
1. **Match to Supporting Documents:** PO, receipt, contracts
2. **Verify Mathematical Accuracy:** Check invoice totals
3. **Confirm Vendor Information:** Ensure correct vendor
4. **Validate GL Accounts:** Use appropriate expense accounts

#### Data Entry Standards
1. **Consistent Descriptions:** Use standardized descriptions
2. **Complete Reference Information:** Include all relevant references
3. **Proper Date Entry:** Use invoice date, not entry date
4. **Account Distribution:** Follow chart of accounts guidelines

### Efficiency Tips

#### Keyboard Shortcuts
- Use vendor name lookup instead of memorizing numbers
- Leverage default GL accounts from vendor master
- Utilize copy functions for similar invoices

#### Batch Processing
- Group similar invoices for efficient entry
- Process by vendor to minimize lookup time
- Use recurring items for predictable expenses

## Common Entry Issues and Solutions

### Issue: GL Account Validation Errors
**Symptoms:** Cannot save due to invalid account numbers
**Causes:** 
- Account number doesn't exist in chart of accounts
- Account is marked inactive
- Account is not set up for AP posting

**Solutions:**
- Verify account exists and is active
- Check account setup in GL module
- Use valid account from chart of accounts

### Issue: Vendor Lookup Problems
**Symptoms:** Cannot find vendor in system
**Causes:**
- Vendor not set up in vendor master
- Using incorrect vendor name or ID
- Vendor marked as inactive

**Solutions:**
- Verify vendor exists in vendor master
- Use vendor inquiry to search by name
- Check vendor status and activate if needed

### Issue: Terms Calculation Errors
**Symptoms:** Incorrect due dates or discount amounts
**Causes:**
- Wrong terms assigned to vendor
- Terms setup incorrectly
- Manual override of calculated fields

**Solutions:**
- Verify terms setup in terms master
- Check vendor default terms assignment
- Recalculate based on invoice date

## Implementation Examples

### Manufacturing Company Workflow
*Based on anonymized customer implementation*

**Challenge:** High volume of supplier invoices with complex approval requirements

**Solution Implemented:**
- Three-way matching for inventory purchases
- Automated recurring setup for utilities and services
- Department-based approval workflow
- Daily processing batches for efficiency

**Results:**
- 60% reduction in processing time
- Improved accuracy through automation
- Better spend visibility by department

### Service Company Workflow
*Based on anonymized customer implementation*

**Challenge:** Varied invoice types requiring flexible processing

**Solution Implemented:**
- Simplified approval workflow
- Project-based cost tracking
- Streamlined entry screens
- Mobile-friendly approval process

**Results:**
- Faster vendor payment cycles
- Improved project cost tracking
- Reduced manual approval bottlenecks

## Training Recommendations

### User Training Program

#### Initial Training (4 hours)
1. **System Navigation:** Basic AP module navigation
2. **Invoice Entry:** Standard invoice processing
3. **PO Matching:** Three-way matching procedures
4. **Error Resolution:** Common issues and solutions

#### Advanced Training (2 hours)
1. **Complex Distributions:** Multi-account entries
2. **Recurring Items:** Setup and maintenance
3. **Approval Workflows:** Understanding approval process
4. **Reporting:** Basic AP reports and inquiries

### Ongoing Support

#### Reference Materials
- Quick reference cards for common procedures
- Troubleshooting guide for frequent issues
- Contact information for system support

#### Refresher Training
- Quarterly review sessions
- Updates for system changes
- Best practices sharing

---

**Next Module:** [Payment Processing](../PAYMENTS/README.md)

<PageFooter />