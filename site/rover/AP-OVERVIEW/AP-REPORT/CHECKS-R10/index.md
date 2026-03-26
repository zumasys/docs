# CHECKS.R10 – Check Remittance Report

<PageHeader />

The `CHECKS.R10` procedure is used to print a remittance report for vendors or payees corresponding to one or more checks. This is primarily used for ACH-type payments. The report output mimics check stub information and may optionally be sent to vendors via automated email with a PDF attachment.


---

## Purpose

The `CHECKS.R10` program generates a detailed report summarizing payment details. The report can be printed or emailed to vendors as supporting documentation for payments.  

If email is enabled, the system uses the address stored on the **Payments** tab of `VENDOR.E`. A PDF version of the report is sent as an attachment.

---

## Frequency of Use

- Run **as required**, typically when issuing ACH payments or whenever check details need to be communicated to a vendor.

---

## Prerequisites

- No special prerequisites.  
- For automated emailing: Ensure the vendor has a valid email address on the **Payments** tab of `VENDOR.E`.

---

## Data Fields

The following fields are included in the `CHECKS.R10` report:

| Field          | Description |
|----------------|-------------|
| **Check#**     | Record ID of the item in the `CHECKS` file. |
| **Vend#**      | Vendor number. |
| **Vendor.Name** | Vendor name as stored in the Vendor file. If entered through `CHECKS.E4` without notes selected, this is the first line of the notes. |
| **Chk.Date**   | Date of the check. |
| **Check.Amount** | Total payment amount of the check. |
| **Invoice Number** | Invoice number associated with the prepayment. |
| **Debit ID**   | Debit ID generated from the prepayment check. |
| **St**         | Current status of the check record. (`P = posted`; other codes are user-defined.) |
| **Notes**      | Optional. Notes entered in `CHECKS.E`, if printing was selected. |

---

## Summary for Quick Reference

- **CHECKS.R10** produces vendor remittance reports, typically for ACH payments.  
- Output includes check details, vendor info, invoice numbers, and optional notes.  
- Reports can be printed or emailed in PDF format (requires vendor email in `VENDOR.E`).  
- No prerequisites, run on demand.  

<PageFooter />
