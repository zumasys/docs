# Reporting and Inquiries

<PageHeader />

This module covers the standard reports and inquiry functions available in the AP module, helping implementation engineers understand and configure reporting capabilities for end users.

## Standard AP Reports

### Aging Reports

#### AP Aging Summary ([AP.R1](../../AP-OVERVIEW/AP-REPORT/README.md))
- Summary aging by vendor
- Configurable aging periods (30, 60, 90+ days)
- Total outstanding amounts by aging category

#### AP Aging Detail ([AP.R2](../../AP-OVERVIEW/AP-REPORT/README.md))
- Detailed line-item aging
- Individual invoice breakdown
- Support for collection activities

### Payment Reports

#### Check Register ([CHECKS.R1](../../CHECKS-R1/README.md))
- Chronological listing of all checks
- Payment date, vendor, and amount details
- Bank reconciliation support

#### Cash Requirements Report ([AP.R5](../../AP-R5/README.md))
- Future cash flow projection
- Based on payment due dates
- Helps with cash flow planning

### Vendor Reports

#### Vendor Listing ([VENDOR.R1](../../VENDOR-R1/README.md))
- Complete vendor directory
- Contact information and terms
- Status and setup validation

#### Vendor Activity Report ([AP.R3](../../AP-R3/README.md))
- Purchase history by vendor
- Year-to-date and historical spending
- Vendor performance analysis

## Inquiry Functions

### AP Inquiry ([AP.Q](../../AP-Q/README.md))
- Real-time access to AP item details
- Payment history and status
- Integration with PO and GL information

### Vendor Inquiry ([VENDOR.Q](../../VENDOR-Q/README.md))
- Complete vendor information display
- Outstanding balance information
- Payment history and trends

### Check Inquiry ([CHECKS.Q](../../CHECKS-Q/README.md))
- Individual check details
- Associated AP items paid
- Check status and bank information

## Custom Reporting

### Report Configuration Options
- Date range selections
- Vendor filtering
- Account filtering
- Status filtering

### Export Capabilities
- Export to Excel for further analysis
- CSV format for data integration
- PDF for formal presentations

## Implementation Support

### User Training on Reports
- Standard report overview and usage
- Custom report configuration
- Export and distribution procedures

### Report Security
- User access controls by report type
- Sensitive information protection
- Audit trail for report access

---

**Next Module:** [Common Issues and Troubleshooting](../TROUBLESHOOTING/README.md)

<PageFooter />