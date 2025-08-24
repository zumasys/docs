# Vendor Management Setup

<PageHeader />

Proper vendor setup is crucial for efficient accounts payable processing. This module covers vendor file creation, terms configuration, and data migration strategies based on real implementation experience.

## Vendor File Structure

The Vendor file ([VENDOR.E](../../VENDOR-E/README.md)) maintains critical information for each supplier:

### Core Vendor Information
- **Vendor ID:** Unique identifier (alpha-numeric, up to 15 characters)
- **Vendor Name:** Full legal name for checks and communications
- **Address Information:** Complete mailing and remit-to addresses
- **Contact Details:** Phone, fax, email, and primary contact person

### Payment Information
- **Payment Terms:** Default terms for this vendor
- **Payment Method:** Check, ACH, wire transfer preferences
- **Tax Information:** Tax ID number and 1099 reporting requirements
- **Banking Details:** ACH routing and account information (if applicable)

### Processing Controls
- **Status Codes:** Active, inactive, hold, etc.
- **GL Accounts:** Default expense account assignments
- **Credit Limits:** Optional credit limit monitoring
- **Notes:** Important vendor-specific information

## Vendor ID Strategy

### Recommended Approaches

#### 1. Alphabetic System
- Use first 6-8 characters of vendor name
- Example: "JOHNSON" for Johnson Supply Company
- **Pros:** Easy to remember, logical organization
- **Cons:** Potential conflicts with similar names

#### 2. Numeric System
- Sequential numbering (100001, 100002, etc.)
- **Pros:** No conflicts, unlimited expansion
- **Cons:** Not intuitive, requires lookup

#### 3. Hybrid System (Recommended)
- Combine alphabetic prefix with numeric suffix
- Example: "JOHN001" for first Johnson company
- **Pros:** Intuitive yet conflict-free
- **Cons:** Slightly more complex setup

## Terms Configuration

### Setting Up Payment Terms

Payment terms ([TERMS.E](../../TERMS-E/README.md)) define payment conditions:

#### Common Terms Examples
```
NET30: Net 30 days from invoice date
210N30: 2% discount if paid within 10 days, net 30 days
1510N30: 1.5% discount if paid within 10 days, net 30 days
COD: Cash on delivery
PREPAID: Payment required before delivery
```

#### Terms Configuration Fields
- **Terms Code:** Short identifier (e.g., "NET30")
- **Description:** Full description of terms
- **Discount Percentage:** Early payment discount rate
- **Discount Days:** Days within which discount applies
- **Net Days:** Total days until payment due
- **Status:** Active/inactive flag

### Step-by-Step Terms Setup

1. **Access Terms Entry:** Navigate to AP → Setup → Terms Entry
2. **Create Terms Code:** Enter unique code (recommend 6 characters max)
3. **Enter Description:** Clear, descriptive text
4. **Set Discount Parameters:** Percentage and days if applicable
5. **Set Net Days:** Total payment period
6. **Save and Test:** Verify calculation accuracy

## Vendor Setup Process

### Pre-Implementation Planning

#### 1. Data Collection
Gather vendor information from existing systems:
- Vendor master file exports
- Check registers for payment history
- Purchase order files for vendor relationships
- Tax reporting files (1099 vendors)

#### 2. Data Cleansing
- Remove duplicate vendors
- Standardize name formats
- Verify address information
- Consolidate multiple entries for same vendor

#### 3. Numbering Assignment
- Design vendor numbering scheme
- Plan for future growth
- Consider integration requirements

### Implementation Steps

#### Step 1: Create Primary Vendors
Start with your most critical vendors:
1. **Top 20 Vendors by Volume:** Ensure these are perfect
2. **Recurring Vendors:** Utilities, services, etc.
3. **1099 Vendors:** Important for tax reporting

#### Step 2: Configure Vendor Records

**For Each Vendor:**
1. **Basic Information**
   - Enter vendor ID and name
   - Complete address information
   - Add contact details

2. **Payment Setup**
   - Assign default terms
   - Set payment method preferences
   - Enter tax information

3. **Processing Options**
   - Set default GL accounts
   - Configure approval requirements
   - Add special instructions

#### Step 3: Test and Validate
1. **Create Test AP Items:** Verify vendor information flows correctly
2. **Generate Test Checks:** Confirm name and address formatting
3. **Validate Terms:** Test discount calculations

## Data Migration Strategies

### Migration from Legacy Systems

#### Option 1: Manual Entry
**Best for:** Small vendor lists (under 100 vendors)
- Direct entry through VENDOR.E screen
- Allows quality control during entry
- Time-intensive but thorough

#### Option 2: Import Processing
**Best for:** Large vendor lists (over 100 vendors)
- Use data import utilities
- Requires data mapping and validation
- Faster but needs thorough testing

#### Option 3: Hybrid Approach (Recommended)
- Import basic vendor data
- Manually verify and enhance critical vendors
- Balances speed with quality

### Migration Checklist

- [ ] Export vendor data from source system
- [ ] Map data fields to Rover format
- [ ] Cleanse and validate data
- [ ] Test import process with sample data
- [ ] Execute full import
- [ ] Validate imported data
- [ ] Update critical vendor information manually

## Common Setup Issues

### Issue: Duplicate Vendor Names
**Symptoms:** Multiple vendor IDs for same company
**Solutions:**
- Implement naming conventions before setup
- Use vendor name cross-reference for validation
- Regular duplicate checking procedures

### Issue: Address Formatting Problems
**Symptoms:** Check printing errors, delivery issues
**Solutions:**
- Standardize address formats during setup
- Validate addresses with postal services
- Use separate remit-to addresses when needed

### Issue: Terms Calculation Errors
**Symptoms:** Incorrect discount calculations
**Solutions:**
- Test all terms combinations before go-live
- Verify discount and net day calculations
- Document special terms requirements

## Best Practices from the Field

### Vendor Numbering
*Based on successful implementations*

**Manufacturing Company Approach:**
- Used 3-letter prefix by vendor type (MFG, SRV, UTL)
- Added 4-digit sequential number
- Example: "MFG0001" for first manufacturing vendor

**Service Company Approach:**
- Alphabetic based on vendor name
- Added state code for geographic tracking
- Example: "JOHNSON-TX" for Johnson Company in Texas

### Terms Management
*Customer feedback and lessons learned*

**Simplified Approach:** Use only 4-5 standard terms
- Reduces complexity for users
- Easier to maintain and audit
- Better vendor relationship management

**Detailed Approach:** Many specific terms
- Accommodates exact vendor requirements
- More complex but potentially cost-saving
- Requires strong process discipline

### Payment Method Setup
*Real-world implementation examples*

**Mixed Environment:**
- 80% vendors paid by check
- 15% paid by ACH for recurring payments
- 5% paid by wire for international vendors

**Configuration Strategy:**
- Default all vendors to check payment
- Flag ACH vendors for special processing
- Separate approval process for wire transfers

## Integration Considerations

### Purchase Order Integration
- Ensure vendor IDs match between PO and AP modules
- Configure automatic vendor creation from PO system
- Plan for vendor approval workflow

### General Ledger Integration
- Map vendor types to default GL accounts
- Configure automatic account distributions
- Plan for expense account validation

### External System Integration
- Consider integration with procurement systems
- Plan for vendor portal connectivity
- Address electronic invoice processing

---

**Next Module:** [Data Entry Procedures](../DATA-ENTRY/README.md)

<PageFooter />